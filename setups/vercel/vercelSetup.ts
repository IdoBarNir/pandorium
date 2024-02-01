import { vercelLogin, vercelDeploy, vercelInstall } from "./utils";

export const vercelSetup = async () => {
  await vercelInstall();

  await vercelLogin();

  await vercelDeploy();
};
