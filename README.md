# Lambda APIGW Template

My personal template for Lambda APIGW applications, this project was made in Node.js with TypeScript using **Express** as the HTTP framework, adapted to run in **AWS Lambda** with integration to **API Gateway**. Locally, it uses the **Serverless Framework** with **serverless-offline** to simulate the AWS environment.

---

## 🚀 Technologies

- Node.js 20+
- TypeScript
- Express
- AWS Lambda (via `@codegenie/serverless-express`)
- Serverless Framework
- serverless-offline (to run locally)

---

## 📦 Prerequisites

Before getting started, you need to have the following installed:

- [Node.js](https://nodejs.org/) v20 or later
- [Yarn](https://yarnpkg.com/)
- [Serverless Framework](https://www.serverless.com/framework/docs/getting-started) (`npm install -g serverless`)

---

## 🔧 Installation

Clone the repository and install the dependencies:

```bash
git clone https://github.com/felipedmsantos95/lambda-apigw-template.git
cd lambda-apigw-template
yarn
```

---

## ▶️ Running Locally

The project uses **Serverless Offline** to simulate the behavior of the API Gateway and Lambda locally.

Compile the project and start the server:

```bash
yarn offline
```

> This command compiles the TypeScript code and runs Serverless Offline **without the stage suffix** (`/dev`, `/local`), allowing direct access via `/`.

---

## 🌐 Testing the API

Once the project is running, access:

```
GET http://localhost:3000/
```

Expected response:

```text
Hello from Express + AWS Lambda using @codegenie!
```

---

## 📁 Folder Structure

```
src/
├── index.ts       # Local entry point
├── lambda.ts      # AWS Lambda handler
├── server.ts      # Separate Express app (reusable)
tsconfig.json      # TypeScript configuration
serverless.yml     # Serverless Framework configuration
```

---

## 💡 Notes

- To simulate other endpoints, add new routes in `src/server.ts`.
- The `src/lambda.ts` file transforms Express into an AWS Lambda handler.
- The `serverless.yml` file is configured to work with the `serverless-offline` plugin.

---

## 🤝 Contributing

Feel free to open PRs, issues, or adapt the template to your needs!

---
