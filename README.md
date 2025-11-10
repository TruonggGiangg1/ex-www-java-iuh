# English Course Platform

This monorepo hosts a React front-end and a Spring Boot back-end for an English course marketplace that supports live lessons, assignments, and assessments.

## Prerequisites

- Node.js 18+
- npm 9+
- Java 17+
- Maven 3.9+

## Backend (Spring Boot)

```bash
cd english-course-api
mvn spring-boot:run
```

The API is backed by an in-memory H2 database that is seeded with demo courses and lessons on startup. The service listens on `http://localhost:8080` and exposes REST endpoints under `/api`.

## Front-end (React + Vite)

```bash
cd english-course-app
npm install
npm run dev
```

The front-end expects the API at `http://localhost:8080/api`. To point to a different host, set the `VITE_API_BASE_URL` environment variable before running Vite, for example:

```bash
VITE_API_BASE_URL="https://your-domain.example/api" npm run dev
```

## Available API Routes

- `GET /api/courses` – list all courses with syllabus and lesson metadata
- `GET /api/courses/{slug}` – fetch a single course by slug
- `GET /api/categories` – list distinct course categories
- `GET /api/lessons` – list all lessons
- `GET /api/lessons/{slug}` – fetch a single lesson by slug

Use the [H2 console](http://localhost:8080/h2-console) with JDBC URL `jdbc:h2:mem:englishcoursedb` for inspecting the in-memory data while the application is running.
