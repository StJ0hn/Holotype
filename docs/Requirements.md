# System Requirements - Holotype

## 0. Roles

| Role | How it is obtained | What it can do |
|---|---|---|
| Visitor | no account | read the catalog, species details and the news feed |
| USER | public registration (`/auth/register`) | everything a visitor can + favorite species |
| CURATOR | promoted by another curator; the first one is created by a seed script | everything a USER can + CRUD on species + promote users |

## 1. Functional Requirements (FR)
*What the system does.*

**Catalog**
- **FR01:** The system must allow anyone to view a catalog of dinosaur species.
- **FR02:** The system must allow anyone to filter species by period, clade, diet, and estimated size, and to search by name.
- **FR03:** The system must show a detail page for each species.

**Accounts and sessions**
- **FR04:** The system must allow visitors to create an account (email, username, password). New accounts receive the USER role.
- **FR05:** The system must allow users to log in and log out. A "stay signed in" option extends the session duration.
- **FR06:** The system must renew the session automatically while it is valid, without asking for the password again.

**Favorites**
- **FR07:** The system must allow authenticated users (USER or CURATOR) to favorite and unfavorite species.
- **FR08:** The system must allow authenticated users to view their list of favorite species.

**Curator area**
- **FR09:** The system must provide a restricted area for curators.
- **FR10:** The system must allow curators to add, update, and delete species in the catalog (CRUD).
- **FR11:** The system must allow curators to promote a USER to CURATOR.

**News**
- **FR12:** The system must display a news feed featuring recent paleontological discoveries integrated from external sources.

## 2. Non-Functional Requirements (NFR)
*How the system is built (technologies and constraints).*

**Stack**
- **NFR01:** The backend must be built as a RESTful API using Node.js and NestJS with TypeScript.
- **NFR02:** The frontend must be a Single Page Application (SPA) developed with React and Vite (TypeScript).
- **NFR03:** The relational database used must be PostgreSQL, managed via the Prisma ORM.
- **NFR04:** The development infrastructure must be containerized using Docker and Docker Compose.
- **NFR05:** The API must be documented using Swagger (accessible at the `/api` route).

**Security**
- **NFR06:** Authentication must use JWT: a short-lived access token (about 15 minutes) and a longer-lived refresh token.
- **NFR07:** The refresh token must be stored in an `HttpOnly` cookie (`SameSite`, `Secure` in production). The access token must be kept in memory on the frontend, never in `localStorage`.
- **NFR08:** Passwords must be stored only as hashes (argon2 or bcrypt), never in plain text.
- **NFR09:** The login and register endpoints must be rate limited.
- **NFR10:** All API inputs must be validated (DTOs with `class-validator`), including the allowed periods.
- **NFR11:** CORS must allow only the frontend origin.
- **NFR12:** Secrets (`.env`) must never be committed to the repository.
- **NFR13:** Authentication error messages must not reveal whether the email or the password was wrong.

## 3. Business Rules (BR)
*The rules and logical limitations of the project.*

- **BR01:** Only authenticated users with the "Curator" role are permitted to create, update, and delete species.
- **BR02:** Visitors (unauthenticated) have read-only access to the catalog, species details, and the news feed.
- **BR03:** Registered data must adhere to the scientific accuracy of the Mesozoic Era: the only valid periods are Triassic, Jurassic, and Cretaceous.
- **BR04:** Only authenticated users can favorite species. A user can favorite a given species only once.
- **BR05:** The first curator is created by a seed script. After that, only curators can promote other users.
- **BR06:** Email and username must be unique.
- **BR07:** The last remaining curator cannot be demoted or deleted.
- **BR08:** News items are read-only, always link to the original source, and are never edited by the system.

## 4. Out of scope for the MVP (future)

- Password recovery by email ("forgot password") and email verification.
- Login with third-party providers (Google, GitHub).
- Comments, ratings, or any user-generated content on species.
- Image upload by curators (the MVP uses an image URL).
