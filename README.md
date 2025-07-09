## Tech Stack
This project is built with:

⚡ Vite — Next-generation frontend build tool

🧩 TypeScript — Strongly-typed JavaScript

⚛️ React — Library for building UIs

🎨 shadcn-ui — Accessible UI components

🌀 Tailwind CSS — Utility-first CSS framework

✅ This repository also implements a Jenkins CI/CD pipeline, which automatically builds, tests, and deploys the application on every push.

## 🧪 Webhook Test
This README update also serves as a test for GitHub → Jenkins webhook trigger.
Make sure your Jenkins server is configured to receive GitHub webhook events.

## 🧑‍💻 Getting Started
To clone and run the project locally:

#📥 Clone the repository

git clone <REPO_URL>
Replace <REPO_URL> with the URL of this repository.

📂 Change into the project directory

cd <PROJECT_FOLDER_NAME>
📦 Install dependencies
Make sure you have Node.js (>=18) and npm installed.


npm install
🚀 Start the development server

npm run dev
Open http://localhost:5173 in your browser to see the app running.

## 🔄 CI/CD with Jenkins
This project is integrated with a Jenkins pipeline, triggered by GitHub webhooks.
The pipeline runs on every push to the main branch (or pull request) and includes:

✅ Build

✅ Tests

✅ Deployment (if configured)

You can modify the Jenkinsfile to customize the stages.

