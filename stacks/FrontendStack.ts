import { StackContext, NextjsSite, StaticSite } from "sst/constructs";


export function FrontendStack({ stack }: StackContext) {
  const site = new StaticSite(stack, "Site", {
  path: "frontend",
  customDomain: {
    domainName: "next.pathwayanalytics.com",
    hostedZone: "pathwayanalytics.com",
  },
  });
  stack.addOutputs({
    siteURL: site.url,
  });
}