# Prisma Documentation
![Image Alt Text](https://cdn.worldvectorlogo.com/logos/prisma-2.svg)

## Overview

Welcome to the Prisma documentation! Prisma is a modern database toolkit that simplifies database access and management. This README serves as a guide to understanding Prisma concepts and syntax.

## Table of Contents

1. [Getting Started](#getting-started)
2. [Prisma Concepts](#prisma-concepts)
4. [Prisma Syntax](#prisma-syntax)
5. [Additional Points](#additional-points)
6. [Resources](#resources)

## Introduction to Prisma

Prisma is an ORM (Object-Relational Mapping) tool that provides a type-safe and database-agnostic way to interact with databases. It offers a powerful query builder and schema definition language.

## Getting Started with TypeScript

To get started with Prisma, follow these steps:

1. `npm init -y`.
2. `npm install prisma typescript ts-node @types/node --save-dev`.
3. `schema.prisma`.
4. `npx tsc --init`.
5. `change 'rootDir' to "./src`
6. `change 'outDir' to "./dist`
7. `npx prisma init`
8. set Database Url in .env file `postgres//..url`.
9. after added schema Run command `npx prisma migrate dev --name ankit`.
10. Check Migration Folder.
11. if you Ipdate your Schema of Prisma then re Run `npx prisma migrate dev --name newSchema_Added`.
12. It will Create a new Folder in Migration.
13. TO Start To Write Code in TypeScript   #Use Command  `npx prisma generate`.



## if you Want to Connect Cloudflare

1. `npm create cloudflare@latest`
2. Install Prisma as a dev depenndency  `npm install prisma --save-dev`
3. Enable Accelerate in Prisma Data platform From `https://www.prisma.io/data-platform/accelerate`
4. Generate API Key Paste in DataBase  this is my Connection Polling  Paste in `wrangler.tomler file`
5. and Direct_URL in `.env`

## Prisma Concepts

### 1. Data Model

The data model in Prisma is defined using the Prisma Schema Language. It describes the structure of your database tables, their relationships, and constraints.

Example:

```prisma
model User {
  id        Int      @id @default(autoincrement())
  name      String
  email     String   @unique
  posts     Post[]
}

model Post {
  id        Int      @id @default(autoincrement())
  title     String
  content   String?
  author    User     @relation(fields: [authorId], references: [id])
  authorId  Int
}
