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
    path: "frontend/",
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
git add .
git commit -m "Initial deploy"
git push
```

Seed build error:
> frontend@0.1.0 build
> next build
sh: 1: next: not found
2023-05-09T08:52:41.396Z  +4592ms [debug] {}
Error: There was a problem building the "Site" StaticSite.
Trace: Error: There was a problem building the "Site" StaticSite.
    at NextjsSite.runBuild (file:///tmp/seed/source/node_modules/sst/constructs/SsrSite.js:277:19)
    at NextjsSite.buildApp (file:///tmp/seed/source/node_modules/sst/constructs/SsrSite.js:239:18)
    at new SsrSite (file:///tmp/seed/source/node_modules/sst/constructs/SsrSite.js:83:14)
    at new NextjsSite (file:///tmp/seed/source/node_modules/sst/constructs/NextjsSite.js:28:9)
    at EmptyStack.FrontendStack (/tmp/seed/source/stacks/FrontendStack.ts:4:16)
    at stack (file:///tmp/seed/source/node_modules/sst/constructs/FunctionalStack.js:20:35)
    at App.stack (file:///tmp/seed/source/node_modules/sst/constructs/App.js:465:16)
    at Object.stacks (/tmp/seed/source/sst.config.ts:15:6)
    at Module.synth (file:///tmp/seed/source/node_modules/sst/stacks/synth.js:54:20)
    at async Object.handler (file:///tmp/seed/source/node_modules/sst/cli/commands/build.js:9:20)
    at process.<anonymous> (file:///tmp/seed/source/node_modules/sst/cli/sst.js:58:17)
    at process.emit (node:events:539:35)
    at process.emit (node:domain:475:12)
    at process._fatalException (node:internal/process/execution:167:25)
    at processPromiseRejections (node:internal/process/promises:279:13)
    at processTicksAndRejections (node:internal/process/task_queues:97:32)
Need help with this error? Join the SST community on Discord https://sst.dev/discord
ERROR: Trace: Error: There was a problem building the "Site" StaticSite.
