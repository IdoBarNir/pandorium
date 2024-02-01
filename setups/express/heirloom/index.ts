import { readFile } from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const serverContentPath = path.join(__dirname, "serverContent.ts");

export const serverContent = await readFile(serverContentPath, "utf8");
