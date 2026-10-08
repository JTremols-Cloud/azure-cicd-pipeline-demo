# Azure CI/CD Pipeline Demo

A small Node.js web app deployed to Azure App Service through a GitHub Actions CI/CD pipeline, with the infrastructure defined as an ARM template.

> Status: work in progress

## What this demonstrates

- Pull requests automatically run tests
- Merging to `main` provisions Azure infrastructure from an ARM template, deploys the app, and verifies it with a smoke test
- Least-privilege deployment credentials, with secrets kept in secured pipeline variables

## Architecture

```
Developer -> pull request -> GitHub Actions (tests)
                         |
                   merge to main
                         v
   build + package -> ARM template -> deploy zip -> smoke test
                         |
                         v
              Azure App Service (Linux, Node 24)
```

## Repository layout

- `server.js`: the web app (Express)
- `server.test.js`: automated tests
- `scripts/write-version.js`: writes the build number and commit into the page
- `infra/main.json`: ARM template for the App Service plan and web app
- `bitbucket-pipelines.yml`: the CI/CD pipeline

## Run locally

```
npm install
npm test
npm start
```

## Security decisions

_To be completed._

## What broke and how I fixed it

_I'll add real problems here as I hit them._

## What I learned and what I'd do next

_To be completed._
