# Multi-Step Signup Process

## Overview

The multi-step signup process provides a user-friendly, progressive way for new users to create their account and set up their healthcare organization (tenant). The process is divided into 4 clear steps with visual progress indication.

## Features

✅ **Progressive Disclosure** - Information is collected in logical, digestible steps  
✅ **Visual Progress Indicator** - Users always know where they are in the process  
✅ **Validation on Each Step** - Prevents moving forward with incomplete/invalid data  
✅ **Review Before Submit** - Users can review all information before finalizing  
✅ **Responsive Design** - Works seamlessly on desktop, tablet, and mobile  
✅ **Error Handling** - Clear error messages guide users to fix issues  

## Signup Steps

### Step 1: Account Creation
**Purpose**: Create login credentials

**Fields**:
- **"What's your email address?"** (required)
  - Must be valid email format
  - Will be used for login
  - Must be unique (checked on backend)
  - Helper text: "We'll use this for your login"
  
- **"Create a password"** (required)
  - Minimum 8 characters
  - Placeholder: "At least 8 characters"
  - Helper text: "Make it secure! At least 8 characters"
  
- **"Confirm your password"** (required)
  - Must match password field
  - Placeholder: "Type it again to be sure"

**Validation**:
- Email format validation
- Password length check (min 8 characters)
- Password confirmation match

---

### Step 2: Profile Information
**Purpose**: Collect personal details

**Fields**:
- **"What should we call you?"** (required)
  - How the user appears to others
  - Placeholder: "Your full name"
  - Helper text: "This is how you'll appear to your team and patients"
  
- **"Phone number (optional)"** (optional)
  - Contact number for notifications
  - Placeholder: "+1 (555) 000-0000"
  - Helper text: "We'll use this for important notifications"
  - Format validation if provided

**Validation**:
- Display name is required
- Phone format validation (if provided)

---

### Step 3: Organization Setup
**Purpose**: Configure the tenant/organization

**Fields**:
- **"What's your organization called?"** (required)
  - Name of the healthcare facility or practice
  - Placeholder: "e.g., City General Hospital"
  - Helper text: "This could be your clinic, hospital, or practice name"
  
- **"What best describes you?"** (required)
  - Radio button selection:
    - 🏥 Hospital
    - 🏪 Clinic
    - 🔬 Laboratory
    - 👨‍⚕️ Individual Practitioner
  - Helper text: "You can always update this later"
  
- **Plan**: Free (Default)
  - All users start on the free plan
  - Can upgrade anytime from dashboard
  - No selection needed during signup

**Validation**:
- Organization name is required
- Type and plan have default selections

---

### Step 4: Review & Confirm
**Purpose**: Review all information before submission

**Display**:
- Intro text: "Looking good! Here's what we've got:"

- **Your Account**
  - Email address
  
- **Your Profile**
  - Name
  - Phone (if provided)
  
- **Your Organization**
  - Organization name
  - Organization type
  - Plan: Free (You can upgrade anytime!)
  
- Terms & Privacy acknowledgment text

**Actions**:
- Edit any section (go back to previous steps)
- Confirm and create account

---

## Progress Indicator

The progress bar shows:
- **Completed Steps**: Green circle with checkmark
- **Current Step**: Blue outlined circle with step number
- **Future Steps**: Gray circle with step number
- **Connecting Lines**: Green for completed, gray for incomplete

### Visual States

```
Step 1: [✓] ━━ [2] ━━ [3] ━━ [4]    (Currently on Step 1, completed)
Step 2: [✓] ━━ [✓] ━━ [3] ━━ [4]    (Currently on Step 2, completed)
Step 3: [✓] ━━ [✓] ━━ [✓] ━━ [4]    (Currently on Step 3, completed)
Step 4: [✓] ━━ [✓] ━━ [✓] ━━ [✓]    (Currently on Step 4, all complete)
```

---

## Navigation

### Back Button
- Disabled on Step 1
- Takes user to previous step
- Clears error messages
- Preserves form data

### Next Button
- Validates current step before proceeding
- Shows error if validation fails
- Advances to next step on success
- Changes to "Create Account" on final step

### Create Account Button (Step 4)
- Only visible on final review step
- Submits all form data
- Shows loading state during submission
- Handles success/error responses

---

## Data Structure

### Frontend Form State

```typescript
interface FormData {
  // User fields (matches User schema)
  email: string;
  phone: string;
  displayName: string;
  password: string;
  confirmPassword: string;
  avatar?: string;

  // Tenant fields (matches Tenant schema)
  tenantName: string;
  tenantType: "hospital" | "clinic" | "lab" | "individual";
  // Note: plan is always "free" by default, not collected during signup
}
```

### Backend Schemas

**User Schema** (`userSchema`):
```javascript
{
  email: String (required, unique, indexed)
  phone: String
  displayName: String
  status: 'active' | 'inactive' | 'banned' (default: 'active')
  emailVerifiedAt: Date
  avatar: String
  preferences: Object
  timestamps: true
}
```

**Tenant Schema** (`tenantSchema`):
```javascript
{
  displayName: String (required)
  type: 'hospital' | 'clinic' | 'lab' | 'individual' (default: 'individual')
  plan: 'free' | 'pro' | 'enterprise' (default: 'free')
  timestamps: true
}
```

**UserTenant Junction** (`userTenantSchema`):
```javascript
{
  userId: ObjectId (ref: 'User', required)
  tenantId: ObjectId (ref: 'Tenant', required)
  role: 'owner' | 'staff' | 'viewer' (default: 'viewer')
  status: 'active' | 'pending' | 'removed' (default: 'active')
  joined_at: Date (default: Date.now)
  timestamps: true
}
```

---

## Validation Rules

### Step 1 Validation
```typescript
- Email: "We'll need your email address to continue"
- Email format: "Hmm, that doesn't look like a valid email address"
- Password: "Please create a password to secure your account"
- Password length: "Your password should be at least 8 characters for security"
- Password match: "Oops! Those passwords don't match"
```

### Step 2 Validation
```typescript
- Display name: "Please let us know what to call you"
- Phone format (if provided): "That phone number doesn't look quite right"
  - Regex: /^\+?[\d\s-()]+$/
```

### Step 3 Validation
```typescript
- Organization name: "Please tell us your organization's name"
- Type has default (individual) - no validation needed
- Plan is always "free" - no validation needed
```

---

## Error Handling

### Validation Errors
Displayed inline below the form with:
- Red alert box
- Alert icon
- Clear error message
- Prevents progression to next step

### Common Error Messages (Friendly Tone)
- "We'll need your email address to continue"
- "Hmm, that doesn't look like a valid email address"
- "Please create a password to secure your account"
- "Your password should be at least 8 characters for security"
- "Oops! Those passwords don't match"
- "Please let us know what to call you"
- "That phone number doesn't look quite right"
- "Please tell us your organization's name"

### API Errors
- Network errors
- Duplicate email
- Server validation errors
- Backend failures

---

## API Integration

### Signup Endpoint (TODO)

**Endpoint**: `POST /api/auth/signup`

**Request Body**:
```json
{
  "user": {
    "email": "user@example.com",
    "password": "securepassword123",
    "displayName": "John Doe",
    "phone": "+1 (555) 123-4567"
  },
  "tenant": {
    "displayName": "City General Hospital",
    "type": "hospital",
    "plan": "free"
  }
}
```

**Expected Response** (Success):
```json
{
  "success": true,
  "data": {
    "user": {
      "id": "user_id",
      "email": "user@example.com",
      "displayName": "John Doe"
    },
    "tenant": {
      "id": "tenant_id",
      "displayName": "City General Hospital",
      "type": "hospital"
    },
    "userTenant": {
      "role": "owner",
      "status": "active"
    },
    "accessToken": "jwt_access_token",
    "refreshToken": "jwt_refresh_token"
  }
}
```

**Expected Response** (Error):
```json
{
  "success": false,
  "error": {
    "code": "EMAIL_EXISTS",
    "message": "An account with this email already exists"
  }
}
```

---

## Post-Signup Flow

After successful signup:

1. **Store Tokens**
   - Save `accessToken` to localStorage
   - Save `refreshToken` to localStorage

2. **Update Auth State**
   - Set user as authenticated
   - Store user profile data

3. **Email Verification** (Optional)
   - Send verification email
   - Show banner prompting verification
   - Set `emailVerifiedAt` when verified

4. **Redirect**
   - Navigate to dashboard (`/dashboard`)
   - Show welcome message/tour

5. **Initial Setup** (Optional)
   - Onboarding wizard
   - Facility setup
   - Invite team members

---

## Styling & UX

### Card Layout
- Clean, centered card design
- Friendly, conversational tone
- Welcoming header: "Welcome! Let's Get Started 👋"
- Emoji icons for organization types
- Consistent spacing
- Clear typography hierarchy

### Responsive Behavior
- Mobile: Full width, vertical layout
- Tablet: Centered card, 90% width
- Desktop: Centered card, max-width 2xl (672px)

### Accessibility
- Semantic HTML labels
- ARIA attributes
- Keyboard navigation
- Focus indicators
- Screen reader friendly

### Visual Feedback
- Loading states during submission
- Disabled states for buttons
- Hover effects on interactive elements
- Smooth transitions between steps

---

## Testing Checklist

### Functional Testing
- [ ] Each step validates correctly
- [ ] Navigation (Next/Back) works
- [ ] Form data persists across steps
- [ ] Final submission works
- [ ] Error handling displays correctly
- [ ] Success flow redirects properly

### Validation Testing
- [ ] Email validation (format, required)
- [ ] Password validation (length, match)
- [ ] Phone validation (format, optional)
- [ ] Display name required
- [ ] Organization name required

### UI/UX Testing
- [ ] Progress indicator updates correctly
- [ ] Steps are clearly labeled
- [ ] Error messages are clear
- [ ] Loading states work
- [ ] Responsive on all devices
- [ ] Keyboard navigation works
- [ ] Focus management correct

### Edge Cases
- [ ] Empty form submission attempts
- [ ] Special characters in inputs
- [ ] Very long input values
- [ ] Network errors during submission
- [ ] Duplicate email handling
- [ ] Browser back button behavior

---

## File Locations

**Component**: `src/components/user/multi-step-signup-form.tsx`  
**Page**: `src/pages/auth/Signup.tsx`  
**Documentation**: `MULTI_STEP_SIGNUP.md`

## Dependencies

- `@/components/ui/card`
- `@/components/ui/input`
- `@/components/ui/label`
- `@/components/ui/button`
- `@/components/ui/select`
- `@/components/ui/radio-group`
- `@/components/ui/alert`
- `lucide-react` (icons)

---

## Future Enhancements

### Potential Improvements
1. **Save Progress**
   - Allow users to save and resume later
   - Store draft in localStorage/session

2. **Social Signup**
   - Google OAuth integration
   - Microsoft/Apple sign-in options

3. **Email Verification During Signup**
   - Verify email before completing signup
   - Send OTP code

4. **Password Strength Meter**
   - Visual indicator of password strength
   - Suggestions for stronger passwords

5. **Organization Logo Upload**
   - Add avatar/logo upload in Step 3
   - Image preview and cropping

6. **Plan Comparison**
   - Modal showing detailed plan features
   - Upgrade/downgrade options

7. **Multi-language Support**
   - Internationalization (i18n)
   - Language selector

8. **Analytics**
   - Track step completion rates
   - Identify drop-off points
   - A/B testing different flows

---

## Support & Troubleshooting

### Common Issues

**Issue**: Form data lost on refresh  
**Solution**: Currently expected behavior. Future: implement localStorage persistence

**Issue**: Password validation too strict  
**Solution**: Adjust minimum length in validation rules (currently 8 chars)

**Issue**: Can't go back after error  
**Solution**: Back button should always work - check for bugs

**Issue**: Review step doesn't show all data  
**Solution**: Ensure all fields are properly bound to formData state

---

## Related Documentation

- [Theme Provider](./theme-provider.tsx)
- [Authentication Flow](./AUTH_FLOW.md) (if exists)
- [API Documentation](./API_DOCS.md) (if exists)
- [Healthcare Navigation](./HEALTHCARE_NAVIGATION.md)