import { StackContext, NextjsSite, StaticSite } from "sst/constructs";


export function FrontendStack({ stack }: StackContext) {
  const site = new StaticSite(stack, "Site", {
  path: "frontend/",
  });
  stack.addOutputs({
    siteURL: site.url,
  });
}