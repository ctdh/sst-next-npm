import { StackContext, NextjsSite, StaticSite } from "sst/constructs";


export function FrontendStack({ stack, app }: StackContext) {
  const site = new NextjsSite(stack, "Site", {
  // This command builds without an error:
  // const site = new StaticSite(stack, "Site", {
  path: "frontend",

  // customDomain: 
  //   app.stage === "prod" ? 
  //     {
  //       domainName: `${app.stage}-next.mydomain.com`,
  //       hostedZone: "mydomain.com",
  //     } : undefined,
  });
  stack.addOutputs({
    siteURL: site.url,
  });
}