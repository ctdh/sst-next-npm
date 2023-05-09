import { StackContext, NextjsSite } from "sst/constructs";

export function FrontendStack({ stack }: StackContext) {
  const site = new NextjsSite(stack, "Site", {
  buildCommand: "npm run build",
    path: "frontend/",
  });
  stack.addOutputs({
    siteURL: site.url,
  });
}