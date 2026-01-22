# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
# Development
npm run start:dev     # Start with hot reload
npm run start:debug   # Start with debugger

# Build & Production
npm run build         # Build the project
npm run start:prod    # Run production build

# Testing
npm test              # Run unit tests
npm run test:watch    # Run tests in watch mode
npm run test:cov      # Run tests with coverage
npm run test:e2e      # Run e2e tests

# Code Quality
npm run lint          # Lint and fix
npm run format        # Format with Prettier
```

## Architecture

This is a NestJS proof-of-concept for dynamic JSON schema validation using Zod v4.

**Core Flow:**
- `POST /validate-schema` accepts a `schema` object and `data` object
- `CheckOutSchemaService.createDynamicSchema()` converts the schema definition into a Zod schema at runtime
- The schema definition uses a simple format: `{ fieldName: { type: "string" | "number" | "boolean" | "SchemaTypeEnum" } }`

**Key Files:**
- `src/check-out-schema/check-out-schema.service.ts` - Dynamic Zod schema builder with `typeToZodSchema` mapping
- `src/util/constants.ts` - Contains `SchemaTypeEnum` enum (user, admin, developer, guest)
- `src/dto/validate-schema.dto.ts` - DTO for validation endpoint

**Adding New Types:**
To support additional types, add entries to the `typeToZodSchema` record in `CheckOutSchemaService`.