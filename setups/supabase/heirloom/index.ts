import { readFile } from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const configContentPath = path.join(__dirname, "configContent.ts");

export const configContent = await readFile(configContentPath, "utf8");

export { envContent } from "./envContent";
