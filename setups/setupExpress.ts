import { execSync } from "child_process";
import fs from "fs";

const setupExpress = async ({ projectPath }: { projectPath: string }) => {
  execSync(`cd ${projectPath} && yarn add express @types/express `, {
    stdio: "inherit",
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

  fs.writeFileSync(`${projectPath}/server.ts`, serverContent);
};

export default setupExpress;
