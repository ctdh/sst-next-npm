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
