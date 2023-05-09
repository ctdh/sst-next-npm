## sst Nextjs with npm

```bash
node -v
v18.14.2
npx create-sst@latest sst-next-npm
cd sst-next-npm
npm install
npx create-next-app@latest frontend
```

Made the following changes to the generated files:

```bash

//stacks/frontendstack.ts
import { StackContext, NextjsSite } from "sst/constructs";

export function FrontendStack({ stack }: StackContext) {
  const site = new NextjsSite(stack, "Site", {
    path: "frontend",
  });
  stack.addOutputs({
    siteURL: site.url,
  });
}

//sst.config.ts
import { SSTConfig } from "sst";
import { API } from "./stacks/MyStack";
import { FrontendStack } from "./stacks/FrontendStack";

export default {
  config(_input) {
    return {
      name: "sst-next-npm",
      region: "us-east-1",
    };
  },
  stacks(app) {
    app
    .stack(API)
    .stack(FrontendStack);
  }
} satisfies SSTConfig;

//frontend/package.json
{
  "name": "frontend",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "sst bind next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "@types/node": "20.1.1",
    "@types/react": "18.2.6",
    "@types/react-dom": "18.2.4",
    "autoprefixer": "10.4.14",
    "eslint": "8.40.0",
    "eslint-config-next": "13.4.1",
    "next": "13.4.1",
    "postcss": "8.4.23",
    "react": "18.2.0",
    "react-dom": "18.2.0",
    "tailwindcss": "3.3.2",
    "typescript": "5.0.4"
  }
}

```

```bash
npm run dev
> dev
> sst dev
> SST v2.8.12  ready!
...
> Deploying stacks...
...
>✔  Deployed:
>   FrontendStack
>   API
>   ApiEndpoint: ....
>➜  Start Next.js: cd frontend && npm run dev


cd frontend
npm run dev

> frontend@0.1.0 dev
> sst bind next dev

- ready started server on 0.0.0.0:3000, url: http://localhost:3000
- warn Detected next.config.js, no exported configuration found. https://nextjs.org/docs/messages/empty-configuration
- wait compiling...
- event compiled client and server successfully in 1108 ms (311 modules)

```

push to github

```bash
cd ..
git init
git add .
git commit -m "Initial commit
git branch -M main
git remote add origin <URL>
git push -u origin main
```

Create new porject in Seed.io
Link to github
Connect to ctdh/sst-next-npm repo
Add default service
Add aws credentials
Deselect auto deploy for Dev
Select auto deploy on branch Main for Prod

```bash
git commit -m "Initial deploy"
git push
```