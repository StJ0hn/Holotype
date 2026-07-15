# Holotype

> A scientific dinosaur catalog API for browsing, filtering, and managing species data across the Mesozoic Era.

---

## Technologies

![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![NestJS](https://img.shields.io/badge/NestJS-E0234E?style=for-the-badge&logo=nestjs&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-2D3748?style=for-the-badge&logo=prisma&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=jsonwebtokens&logoColor=white)
![Swagger](https://img.shields.io/badge/Swagger-85EA2D?style=for-the-badge&logo=swagger&logoColor=black)
![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)

| Layer | Technology |
|---|---|
| Language | TypeScript |
| Runtime | Node.js |
| Backend Framework | Nest.js |
| ORM | Prisma |
| Database | PostgreSQL |
| Containerization | Docker |
| Authentication | JWT |
| API Documentation | Swagger |
| Frontend | React |
| Frontend Tooling | Vite |

---

## Overview

Holotype is a fullstack application for cataloging dinosaur species with scientific accuracy. Users can browse and filter species by period, clade, diet, and estimated size. Curators can manage the catalog through authenticated endpoints. A news feed surfaces recent paleontological discoveries from external sources.

The project was built as a deliberate learning environment for a modern TypeScript fullstack stack — but designed from the ground up as a real product.

---

## Topics

- REST API
- Dinosaur Paleontology
- Scientific Catalog
- Fullstack TypeScript
- Authentication & Authorization

---

## Requirements

- Node.js 20+
- Docker + Docker Compose
- npm

---

## Installation

```bash
# Clone the repository
git clone https://github.com/StJ0hn/holotype.git
cd holotype

# Install dependencies
npm install

# Start the database
docker-compose up -d

# Run migrations
npx prisma migrate dev

# Start development servers
npm run dev
```

---

## Usage

After installation, the application is available at:

- **API:** `http://localhost:3000`
- **Swagger UI:** `http://localhost:3000/api`
- **Frontend:** `http://localhost:5173`

---

## Repository Structure

```
holotype/
  backend/            # Nest.js API
  frontend/           # React + Vite
  shared/             # Shared TypeScript types
  docker-compose.yml
  package.json
  README.md
```

---

## References

- [Nest.js Documentation](https://docs.nestjs.com)
- [Prisma Documentation](https://prisma.io/docs)
- [React Documentation](https://react.dev)
- [javascript.info](https://javascript.info)
- [typescriptlang.org](https://typescriptlang.org)
- [Paleobiology Database](https://paleobiodb.org)
- [ScienceDaily — Dinosaurs](https://www.sciencedaily.com/news/fossils_ruins/dinosaurs/)

---

## License

MIT
