# Holotype

---

## 1. JavaScript
**Source:** javascript.info

### To-do

**JavaScript Fundamentals**
- Variables - Completed
- Data types - Completed
- Type Conversions - Completed
- Basic operators, maths - Completed
- Comparisons - Completed
- Conditional branching: if, '?' - Completed
- Logical operators - Completed
- Nullish coalescing operator '??' - Completed
- Loops: while and for - Completed
- Functions - Completed
- Function expressions - Completed
- Arrow functions, the basics - Completed

**Objects: the basics**
- Objects
- Object references and copying
- Object methods, "this"
- Optional chaining '?.'

**Data types**
- Arrays
- Array methods
- Map and Set
- Object.keys, values, entries
- Destructuring assignment
- JSON methods, toJSON

**Advanced working with functions**
- Rest parameters and spread syntax
- Variable scope, closure
- The old "var"
- Scheduling: setTimeout and setInterval
- Arrow functions revisited

**Error handling**
- Error handling, "try...catch"

**Promises, async/await** ⚠️ foco principal
- Introduction: callbacks
- Promise
- Promises chaining
- Error handling with promises
- Promise API
- Async/await

**Modules**
- Modules, introduction
- Export and Import

**Network requests**
- Fetch

### Out-of-scope Concepts
- Code quality
- Object properties configuration
- Prototypes, inheritance
- Classes
- Generators, advanced iteration
- Miscellaneous
- Part 2 — Browser (DOM, Events, UI)
- Frames and windows, Binary data, Storing data, Animation, Web components, Regular expressions

---

## 2. Node.js
**Source:** nodejs.org/learn

### To-Do

**Getting Started**
- Introduction to Node.js
- How much JavaScript do you need to know to use Node.js?
- Differences between Node.js and the Browser
- An introduction to the npm package manager
- ECMAScript 2015 (ES6) and beyond
- Fetching data with Node.js

**Command Line**
- Run Node.js scripts from the command line
- How to read environment variables from Node.js

**Asynchronous Work**
- JavaScript Asynchronous Programming and Callbacks
- Overview of Blocking vs Non-Blocking
- The Node.js Event Loop
- Discover Promises in Node.js

**TypeScript**
- Introduction to TypeScript
- Running TypeScript code using transpilation

### Out-of-scope Concepts
- V8 JavaScript Engine (detalhe interno, não necessário agora)
- Debugging, Profiling, WebAssembly, Security Best Practices
- HTTP (Anatomy of an HTTP Transaction) — Nest abstrai isso
- Manipulating Files — não necessário pro MVP
- Event Emitter, process.nextTick, setImmediate — avançado
- Concurrency models, Test Runner, Node-API — fora do escopo

---

## 3. TypeScript
**Source:** typescriptlang.org → Handbook

### To-Do

**Get Started**
- TypeScript for Java/C# Programmers ⚠️ esse especificamente — feito pra quem vem de OOP

**Handbook**
- The Basics
- Everyday Types
- Narrowing
- More on Functions
- Object Types
- Generics ⚠️ essencial
- Classes (leitura rápida — você já sabe o conceito de Java)
- Modules

**Reference**
- Enums
- Decorators
- Type Inference

### Out-of-scope Concepts
- Keyof Type Operator
- Typeof Type Operator
- Indexed Access Types
- Conditional Types
- Mapped Types
- Template Literal Types
- Declaration Files
- Modules Reference (teoria avançada de módulos)
- Tutorials (ASP.NET, Gulp, etc.)
- What's New (release notes)

---

## 4. Prisma
**Source:** prisma.io/docs

### To-Do

**Getting Started**
- Quickstart 

**ORM → Prisma Schema**
- Overview (whats is schema.prisma)
- Data Sources
- Generators
- Data Model → Models
- Data Model → Relations (1:1, 1:N, N:N) ⚠️ essencial
- Data Model → Defining IDs, defaults, unique fields

**ORM → Prisma Migrate**
- Getting started with Prisma Migrate
- Understanding Migrations

**ORM → Prisma Client**
- Queries (CRUD): findMany, findUnique, create, update, delete
- Select fields e include (relations)
- Filtering e sorting
- Pagination

### Out-of-scope Concepts
- Prisma Postgres 
- Prisma Compute (deploy cloud)
- Prisma Studio 
- Prisma Accelerate, Pulse 
- Multi-schema, introspection, MongoDB
- Prisma Next 

---

## 5. Docker
**Source:** docs.docker.com/get-started

### To-Do

**Get Started**
- Part 1: Getting started (image vs container)
- Part 2: Containerize an application (Basic Dockerfile)
- Part 5: Persist the DB 

**Compose**
- Docker Compose overview
- How Compose works
- Compose file reference (`image`, `ports`, `environment`, `volumes`)

### In-Practice:
```yaml
services:
  postgres:
    image: postgres:16
    environment:
      POSTGRES_USER: holotype
      POSTGRES_PASSWORD: holotype
      POSTGRES_DB: holotype
    ports:
      - "5432:5432"
    volumes:
      - postgres_data:/var/lib/postgresql/data

volumes:
  postgres_data:
```

### Out-of-scope Concepts
- Part 3: Share the application (Docker Hub)
- Part 4: Multi-container apps com networking avançado
- Part 6: Multi-stage builds
- Part 7: Deploy to cloud
- Docker Swarm, Kubernetes
- Dockerfile da aplicação Nest 

---

## 6. Nest.js
**Source:** docs.nestjs.com

### To-Do

**Introduction**
- Introduction 

**Overview**
- First Steps ⚠️ (project structure, CLI, `nest new`)
- Controllers ⚠️
- Providers ⚠️
- Modules ⚠️
- Middleware
- Exception Filters ⚠️
- Pipes (validation with `class-validator`) ⚠️
- Guards ⚠️

**Techniques**
- Database (Prisma section) ⚠️ 
- Validation (`class-validator`, `class-transformer`)
- Configuration (`@nestjs/config`, enviroment variables)

**Security**
- Authentication (JWT + Passport) ⚠️
- Authorization (roles, guards)

**OpenAPI**
- Introduction (Swagger setup) ⚠️
- Types and Parameters
- Operations

### Out-of-scope Concepts
- Interceptors, Custom Decorators 
- Microservices
- GraphQL
- WebSockets
- CLI 
- CQRS, Event Sourcing 
- Serve Static, HTTP Module 
- Testing 

---

## 7. JWT
**Source:** docs.nestjs.com → Security → Authentication

### To-Do
- Authentication (complete guide)
  - Implementing Passport local strategy
  - JWT functionality
  - Implementing Passport JWT strategy
  - Enable authentication globally
  - @UseGuards decorator

*Optional: jwt.io/introduction*

### Out-of-scope Concepts
- OAuth2 
- Session-based auth

---

## 8. Swagger
**Source:** docs.nestjs.com → OpenAPI

### To-Do
- Introduction (setup do SwaggerModule)
- Types and Parameters (`@ApiProperty` nos DTOs)
- Operations (`@ApiOperation`, `@ApiResponse`)
- Tags (`@ApiTags` nos controllers)
- Security (document protected endpoints by JWT)

### Out-of-scope Concepts
- CLI Plugin (automação avançada)
- Mapped Types (avançado)
- Decorators 
- Other features (migration guide, etc.)

---

## 9. React + Vite
**Fonte:** react.dev

### To-Do

**Learn React**
- Quick Start ⚠️
- Thinking in React ⚠️ 

**Describing the UI**
- Your First Component
- Importing and Exporting Components
- Writing Markup with JSX
- JavaScript in JSX with Curly Braces
- Passing Props to a Component
- Conditional Rendering
- Rendering Lists ⚠️ (lists and `key`)
- Keeping Components Pure

**Adding Interactivity**
- Responding to Events
- State: A Component's Memory ⚠️ (`useState`)
- Render and Commit
- State as a Snapshot
- Updating Objects in State
- Updating Arrays in State

**Managing State**
- Choosing the State Structure
- Sharing State Between Components

**Escape Hatches**
- Referencing Values with Refs
- Synchronizing with Effects ⚠️ (`useEffect` and data fetching)
- You Might Not Need an Effect 
- Fetching Data ⚠️

**Vite**
- There isn't a dedicated page for studying it—just run `npm create vite@latest` and follow the React + TypeScript template. The Vite documentation (vitejs.dev) is a reference for looking things up, not for studying.

### Out-of-Scope Concepts
- `useReducer`, `useContext` (advanced state management)
- `useMemo`, `useCallback` 
- Custom Hooks (once you are comfortable with the basic hooks)
- Servers APIs (SSR, Server Components — Next.js territory)
- Legacy APIs (class components, etc.)

---

## Study Order

| Stage | Technology | Note |
|---|---|---|
| 1 | JavaScript | Language foundation |
| 2 | Node.js | Runtime |
| 3 | TypeScript | Typing layer over JS |
| 4 | Prisma + Docker | Parallel — Docker spins up the database Prisma needs |
| 5 | Nest.js | Consumes Prisma, uses TS |
| 6 | JWT | After basic CRUD is working |
| 7 | Swagger | Stable routes before documenting |
| 8 | React + Vite | Introduced once the first API endpoint is up |
