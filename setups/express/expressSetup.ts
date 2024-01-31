import { writeFile } from "fs/promises";

import { PROJECT_PATH } from "@config";
import { execAsync } from "@utils";

export const expressSetup = async () => {
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
};
