import { readJsonFile, validateJson } from "..";

export const readValidatedJsonFile = async ({
  jsonFilePath,
}: {
  jsonFilePath: string;
}) => {
  try {
    const jsonContent = await readJsonFile({ jsonFilePath });

    await validateJson({ jsonContent });

    return jsonContent;
  } catch (error) {
    throw new Error(
      `failed to read validated json file at ${jsonFilePath}: ${error.message}`
    );
  }
};
