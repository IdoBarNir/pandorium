# Pandorium Project Setup

## Introduction
Pandorium is a comprehensive tool designed to bootstrap a full-stack application rapidly. It seamlessly integrates several key technologies to create a ready-to-deploy application. The technologies currently used include:
- Next.js for the frontend framework.
- Material-UI for UI components.
- Express as the backend server.
- Supabase for authentication and database services.
- Vercel for easy deployment.

## Prerequisites
Before using Pandorium, ensure you have the following:
1. A [Supabase](https://supabase.io/) account.
2. A Vercel account for deployment (sign up at [Vercel](https://vercel.com/)).
3. Node.js (v14 or higher) installed on your machine.
4. Yarn package manager (Pandorium will attempt to install this if not present).

For Supabase:
1. Create a new project in Supabase.
2. Note down your Supabase URL and Anon Key from the project settings.

## Running Pandorium
1. Clone or download the Pandorium repository.
2. Navigate to the Pandorium directory.
3. Run `node pandorium.ts` in your terminal.
4. Follow the prompts to enter your project details, Supabase credentials, and Vercel account information.

## Deployment with Vercel
After setting up your project with Pandorium, it will be configured for deployment on Vercel:
1. The script will prompt you to log in to your Vercel account if not already logged in.
2. Follow the on-screen instructions to link your project to Vercel.
3. After the setup, your project will be ready for deployment with Vercel.
