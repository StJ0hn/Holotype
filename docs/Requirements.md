# System Requirements - Holotype

## 1. Functional Requirements (FR)
*What the system does.*

- **FR01:** The system must allow users to view a catalog of dinosaur species.
- **FR02:** The system must allow users to filter species by period, clade, diet, and estimated size.
- **FR03:** The system must provide a restricted/authenticated area for curators.
- **FR04:** The system must allow curators to add, update, and delete species in the catalog (CRUD).
- **FR05:** The system must display a news feed featuring recent paleontological discoveries integrated from external sources.

## 2. Non-Functional Requirements (NFR)
*How the system is built (technologies and constraints).*

- **NFR01:** The backend must be built as a RESTful API using Node.js and NestJS with TypeScript.
- **NFR02:** The frontend must be a Single Page Application (SPA) developed with React and Vite.
- **NFR03:** The relational database used must be PostgreSQL, managed via the Prisma ORM.
- **NFR04:** The development infrastructure must be containerized using Docker and Docker Compose.
- **NFR05:** System authentication must be handled via JWT (JSON Web Tokens).
- **NFR06:** The API must be documented using Swagger (accessible at the `/api` route).

## 3. Business Rules (BR)
*The rules and logical limitations of the project.*

- **BR01:** Only authenticated users with the "Curator" role are permitted to write, update, and delete data in the species catalog.
- **BR02:** Regular users (unauthenticated) only have read-only access to the catalog and the news feed.
- **BR03:** Registered data must adhere to the scientific accuracy of the Mesozoic Era (Triassic, Jurassic, Cretaceous).
