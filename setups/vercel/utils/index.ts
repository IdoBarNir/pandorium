import { loggerDogger } from "@utils";

import { vercelDeploy as vercelDeployRaw } from "./vercelDeploy";
import { vercelLogin as vercelLoginRaw } from "./vercelLogin";

export const vercelDeploy = async () =>
  await loggerDogger({
    child: vercelDeployRaw,
    childLabel: "Vercel Deployment",
  });

export const vercelLogin = async () =>
  await loggerDogger({
    child: vercelLoginRaw,
    childLabel: "Vercel Login",
  });
