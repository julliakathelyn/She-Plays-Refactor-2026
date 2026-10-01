# She Plays

Reconstrução do projeto She Plays como uma aplicação full stack, desenvolvida para aprendizado e portfólio.

## Tecnologias

- Frontend: React, TypeScript, Vite, Panda CSS e React Router
- Backend: Java 21, Spring Boot e Maven
- Banco planejado: PostgreSQL

## Estrutura

```text
apps/
  web/  # Frontend React
  api/  # Backend Spring Boot
packages/
  types/   # Tipos TypeScript compartilhados, quando necessários
  config/  # Configurações compartilhadas do ecossistema JS, quando necessárias
```

## Pré-requisitos

- Node.js 24+
- pnpm 11.22.0
- JDK 21

## Comandos

### Frontend

```powershell
pnpm.cmd --filter @she-plays/web dev
```

### Backend

```powershell
cd apps/api
.\mvnw.cmd spring-boot:run
```