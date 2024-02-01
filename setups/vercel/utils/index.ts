import { loggerDogger } from "@utils";

import { vercelDeploy as vercelDeployRaw } from "./vercelDeploy";
import { vercelInstall as vercelInstallRaw } from "./vercelInstall";
import { vercelLogin as vercelLoginRaw } from "./vercelLogin";

export const vercelDeploy = async () =>
  await loggerDogger({
    child: vercelDeployRaw,
    childLabel: "Vercel Deployment",
  });

export const vercelInstall = async () =>
  await loggerDogger({
    child: vercelInstallRaw,
    childLabel: "Vercel Installation",
    onlyTryCatch: true,
  });

export const vercelLogin = async () =>
  await loggerDogger({
    child: vercelLoginRaw,
    childLabel: "Vercel Login",
  });
