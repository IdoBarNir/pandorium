import { writeFile } from "fs/promises";

import { PROJECT_PATH } from "@config";
import { execAsync } from "@utils";

export const expressSetup = async () => {
  console.log("\nsetting up Express.js...\n");

  try {
    await execAsync({
      command: `cd ${PROJECT_PATH} && yarn add express @types/express `,
      options: {
        stdio: "inherit",
      },
    });

    const serverContent = `import express from 'express';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(\`Server running on http://localhost:\${port}\`);
});
`;

    await writeFile(`${PROJECT_PATH}/server.ts`, serverContent);

    console.log("\nExpress.js was setup successfully!\n");
  } catch (error) {
    throw new Error(`\nExpress setup failes: ${error.message}\n`);
  }
};
