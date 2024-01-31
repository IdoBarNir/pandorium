import { jsonType } from "@types";
import { promises } from "fs";

export const readJsonFile = async ({
  jsonFilePath,
}: {
  jsonFilePath: string;
}) => {
  const jsonFile = await promises.readFile(jsonFilePath, "utf8");
  const jsonContent: jsonType = JSON.parse(jsonFile);

  return jsonContent;
};
