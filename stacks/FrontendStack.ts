import { StackContext, NextjsSite, StaticSite } from "sst/constructs";


export function FrontendStack({ stack }: StackContext) {
  const site = new StaticSite(stack, "Site", {
  path: "frontend",
  customDomain: undefined,
  });
  stack.addOutputs({
    siteURL: site.url,
  });
}