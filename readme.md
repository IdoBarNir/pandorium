# Pandorium Project Setup

## Introduction

Pandorium is a comprehensive tool designed to rapidly bootstrap full-stack applications. It integrates several key technologies to create a ready-to-deploy application framework. The technologies currently used include:

- **Next.js**: A powerful React framework for the frontend.
- **Material-UI**: A robust library for React UI components.
- **Express**: A minimal and flexible Node.js web application framework for the backend.
- **Supabase**: An open-source Firebase alternative for authentication and database services.
- **Vercel**: A platform for effortless deployment.

## Prerequisites

Ensure you have the following before starting with Pandorium:

1. A [Supabase](https://supabase.io/) account.
2. A [Vercel](https://vercel.com/) account for deployment.
3. Node.js (v14 or higher) installed on your machine.

## Configuration

Before running Pandorium, you must fill in the required configuration in the `pandoriumConfig.json` file located in the root of the project. This file should include:

```json
{
  "projectName": "YourProjectName",
  "supabaseUrl": "YourSupabaseURL",
  "supabaseAnonKey": "YourSupabaseAnonKey"
}
```
