import { jsonType } from "@types";

export const validateJson = async ({
  jsonContent,
}: {
  jsonContent: jsonType;
}) => {
  const requiredFields = Object.keys(jsonContent);
  const missingFields = requiredFields.filter(
    (field) => !(field in jsonContent)
  );

  if (missingFields.length > 0) {
    throw new Error(
      `Missing required config fields: ${missingFields.join(", ")}`
    );
  }
};
