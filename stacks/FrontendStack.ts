import { StackContext, NextjsSite } from "sst/constructs";

export function FrontendStack({ stack }: StackContext) {
  const site = new NextjsSite(stack, "Site", {
    path: "frontend/",
  });
  stack.addOutputs({
    siteURL: site.url,
  });
}