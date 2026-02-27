
## 📌 Task Overview

This feature was implemented as part of the ABS.AI Frontend Internship Practical Task.

The goal was to build a scalable, enterprise-ready User Management Overview inside:

```
modules/operations/sub-modules/client-support/features/overview
```

The implementation strictly follows clean architecture principles and proper separation of concerns.


-------------------------

# 🚀 Tech Stack Used

- React
- TypeScript
- React Query
- React Hook Form
- Zod (validation)
- Axios
- TailwindCSS
- HeroUI
- React Router DOM
- React Icons


-------------------------


# 🧠 Architectural Decisions

The feature follows strict separation:

```
overview/
│
├── components/        → UI Components only
│   ├── AddUserForm.tsx
│   └── UsersTable.tsx
│
├── page/
│   └── Overview.tsx   → Page composition only
│
├── services/          → API layer (axios only here)
│   ├── users.service.ts
│   └── roles.service.ts
│
└── types/             → Strong TypeScript definitions
    ├── user.types.ts
    └── role.types.ts
```

### Important Notes

- No API calls inside UI components
- No type definitions inside components
- No usage of `any`
- No hardcoded data
- Overview.tsx handles only composition logic

-------------------------

# 🔄 API Response Adjustment (Important)

While implementing the feature, the backend API response structure did not fully match the structure described in the provided PDF.

Specifically:
- The API returned data in a slightly different format than expected.
- Some field names differed from the required type definitions.

To resolve this:
- The service layer safely maps backend responses into the required TypeScript interfaces.
- No architectural rules were violated.
- The types remain strictly aligned with the task specification.

This ensures:
- Strong typing
- No breaking changes
- Clean separation between backend inconsistencies and UI layer

-------------------------

# 📡 Data Handling

## Users Fetching

- Implemented using `useQuery`
- Proper query keys used
- Loading, error, and empty states handled

## Roles Fetching

- Implemented using `useQuery`
- Cached correctly using React Query
- Used to populate the role selector

## Add User

- Implemented using `useMutation`
- React Hook Form for form state
- Zod for validation (required fields + email format)
- Submit disabled during request
- Form resets on success
- Users list refetched automatically after creation

-------------------------

# 🔍 Learning & Research

React Query was researched and learned specifically for this task to ensure correct usage of:

- useQuery
- useMutation
- Cache invalidation
- Query keys strategy

ChatGPT was used as a research and productivity assistant to:
- Clarify architectural decisions
- Review best practices
- Improve implementation quality

All core logic and structure decisions were implemented and understood.

-------------------------

# 🛠 How to Run the Project

## 1️⃣ Clone the repository

```
git clone <your-repo-link>
```

## 2️⃣ Install dependencies

```
npm install
```

## 3️⃣ Start development server

```
npm run dev
```

## 4️⃣ Build project

```
npm run build
```

-------------------------

# ⚙️ Assumptions Made

- Backend is running and accessible.
- Role IDs correspond correctly to backend values.
- API base URL remains consistent.

-------------------------

# ✅ What Was Prioritized

- Clean architecture over UI complexity
- Strong typing everywhere
- Scalable structure
- Production-level separation of concerns

-------------------------

# 📌 Final Note

This implementation reflects real-world enterprise frontend structure:

- Modular architecture
- Service-based API layer
- Strict typing
- No logic leakage between layers
- Scalable and maintainable structure