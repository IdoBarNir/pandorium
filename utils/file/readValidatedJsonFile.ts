import { readJsonFile, validateJson } from "..";

export const readValidatedJsonFile = async ({
  jsonFilePath,
}: {
  jsonFilePath: string;
}) => {
  const jsonContent = await readJsonFile({ jsonFilePath });

  await validateJson({ jsonContent });

  return jsonContent;
};
