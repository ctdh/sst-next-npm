import { StackContext, NextjsSite, StaticSite } from "sst/constructs";


export function FrontendStack({ stack, app }: StackContext) {
  const site = new NextjsSite(stack, "Site", {
  path: "frontend",

  customDomain: 
    app.stage === "prod" ? 
      {
        domainName: `${app.stage}-next.pathwayanalytics.com`,
        hostedZone: "pathwayanalytics.com",
      } : undefined,
  });
  stack.addOutputs({
    siteURL: site.url,
  });
}