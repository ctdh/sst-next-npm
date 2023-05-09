import { StackContext, NextjsSite, StaticSite } from "sst/constructs";


export function FrontendStack({ stack, app }: StackContext) {
  const site = new StaticSite(stack, "Site", {
  path: "frontend",
  customDomain: {
    domainName: `${app.stage}-next.pathwayanalytics.com`,
    hostedZone: "pathwayanalytics.com",
  },
  });
  stack.addOutputs({
    siteURL: site.url,
  });
}