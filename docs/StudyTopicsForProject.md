# Holotype — Tópicos Exatos por Fonte

---

## 1. JavaScript
**Fonte:** javascript.info

### Fazer

**JavaScript Fundamentals**
- Variables
- Data types
- Type Conversions
- Basic operators, maths
- Comparisons
- Conditional branching: if, '?'
- Logical operators
- Nullish coalescing operator '??'
- Loops: while and for
- Functions
- Function expressions
- Arrow functions, the basics

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

### Pular inteiramente
- Code quality (exceto Coding Style — vale 10 min)
- Object properties configuration
- Prototypes, inheritance
- Classes
- Generators, advanced iteration
- Miscellaneous
- Part 2 — Browser inteiro (DOM, Events, UI)
- Frames and windows, Binary data, Storing data, Animation, Web components, Regular expressions

---

## 2. Node.js
**Fonte:** nodejs.org/learn

### Fazer

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

### Pular
- V8 JavaScript Engine (detalhe interno, não necessário agora)
- Debugging, Profiling, WebAssembly, Security Best Practices
- HTTP (Anatomy of an HTTP Transaction) — Nest abstrai isso
- Manipulating Files — não necessário pro MVP
- Event Emitter, process.nextTick, setImmediate — avançado
- Concurrency models, Test Runner, Node-API — fora do escopo

---

## 3. TypeScript
**Fonte:** typescriptlang.org → Handbook

### Fazer

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

### Pular
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
**Fonte:** prisma.io/docs

### Fazer

**Getting Started**
- Quickstart (com PostgreSQL local — não Prisma Postgres cloud)

**ORM → Prisma Schema**
- Overview (o que é o schema.prisma)
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

### Pular
- Prisma Postgres (serviço cloud — você vai usar Docker local)
- Prisma Compute (deploy cloud)
- Prisma Studio (visual editor — útil depois, não agora)
- Prisma Accelerate, Pulse (recursos avançados/pagos)
- Multi-schema, introspection, MongoDB
- Prisma Next (Early Access, instável)

---

## 5. Docker
**Fonte:** docs.docker.com/get-started

### Fazer

**Get Started**
- Part 1: Getting started (o que é Docker, imagem vs container)
- Part 2: Containerize an application (Dockerfile básico — só pra entender o conceito)
- Part 5: Persist the DB (volumes) ⚠️ essencial pro Postgres

**Compose**
- Docker Compose overview
- How Compose works
- Compose file reference (só as chaves que você vai usar: `image`, `ports`, `environment`, `volumes`)

### Na prática — o que você vai escrever:
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

### Pular
- Part 3: Share the application (Docker Hub)
- Part 4: Multi-container apps com networking avançado
- Part 6: Multi-stage builds
- Part 7: Deploy to cloud
- Docker Swarm, Kubernetes
- Dockerfile da aplicação Nest (deixa pra deploy futuro)

---

## 6. Nest.js
**Fonte:** docs.nestjs.com

### Fazer (na ordem da doc)

**Introduction**
- Introduction (o que é Nest, comparação com Express)

**Overview**
- First Steps ⚠️ (estrutura de projeto, CLI, `nest new`)
- Controllers ⚠️
- Providers ⚠️
- Modules ⚠️
- Middleware
- Exception Filters ⚠️
- Pipes (validação com `class-validator`) ⚠️
- Guards ⚠️

**Techniques**
- Database (seção Prisma) ⚠️ essencial
- Validation (`class-validator`, `class-transformer`)
- Configuration (`@nestjs/config`, variáveis de ambiente)

**Security**
- Authentication (JWT + Passport) ⚠️
- Authorization (roles, guards)

**OpenAPI**
- Introduction (Swagger setup) ⚠️
- Types and Parameters
- Operations

### Pular
- Interceptors, Custom Decorators (avançado — aprende depois)
- Microservices (fora do escopo)
- GraphQL (fora do escopo)
- WebSockets (fora do escopo)
- CLI (além do `nest new` e `nest generate`)
- CQRS, Event Sourcing (padrões avançados)
- Serve Static, HTTP Module (não necessário pro MVP)
- Testing (deixa pra depois)

---

## 7. JWT
**Fonte:** docs.nestjs.com → Security → Authentication

### Fazer (dentro da doc do Nest)
- Authentication (página completa — é um único guia longo)
  - Implementing Passport local strategy
  - JWT functionality
  - Implementing Passport JWT strategy
  - Enable authentication globally
  - @UseGuards decorator

*Opcional: jwt.io/introduction — 10 min pra entender a estrutura header.payload.signature antes de implementar*

### Pular
- OAuth2 (complexidade desnecessária pro MVP)
- Session-based auth (você vai usar JWT, não sessions)

---

## 8. Swagger
**Fonte:** docs.nestjs.com → OpenAPI

### Fazer
- Introduction (setup do SwaggerModule)
- Types and Parameters (`@ApiProperty` nos DTOs)
- Operations (`@ApiOperation`, `@ApiResponse`)
- Tags (`@ApiTags` nos controllers)
- Security (documentar os endpoints protegidos por JWT)

### Pular
- CLI Plugin (automação avançada)
- Mapped Types (avançado)
- Decorators (referência completa — consulta pontual quando precisar)
- Other features (migration guide, etc.)

---

## 9. React + Vite
**Fonte:** react.dev

### Fazer

**Learn React**
- Quick Start ⚠️
- Thinking in React ⚠️ (lê antes de qualquer outra coisa — muda o mindset)

**Describing the UI**
- Your First Component
- Importing and Exporting Components
- Writing Markup with JSX
- JavaScript in JSX with Curly Braces
- Passing Props to a Component
- Conditional Rendering
- Rendering Lists ⚠️ (listas e `key`)
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
- Synchronizing with Effects ⚠️ (`useEffect` e data fetching)
- You Might Not Need an Effect (lê esse — evita erro clássico)
- Fetching Data ⚠️

**Vite**
- Não tem página dedicada para estudar — só rodar `npm create vite@latest` e seguir o template React + TypeScript. A doc do Vite (vitejs.dev) é referência de consulta, não de estudo.

### Pular
- `useReducer`, `useContext` (state management avançado — entra quando o projeto crescer)
- `useMemo`, `useCallback` (otimização prematura)
- Custom Hooks (depois que os hooks básicos estiverem confortáveis)
- APIs de servidor (SSR, Server Components — Next.js territory)
- Legacy APIs (class components, etc.)

---

## Ordem de estudo

| Etapa | Tecnologia | Observação |
|---|---|---|
| 1 | JavaScript | Base da linguagem |
| 2 | Node.js | Runtime |
| 3 | TypeScript | Tipagem sobre JS |
| 4 | Prisma + Docker | Em paralelo — Docker sobe o banco que o Prisma precisa |
| 5 | Nest.js | Consome Prisma, usa TS |
| 6 | JWT | Depois do CRUD básico funcionar |
| 7 | Swagger | Rotas estáveis antes de documentar |
| 8 | React + Vite | Entra quando o 1º endpoint da API estiver de pé |
