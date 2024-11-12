import dotenv from "dotenv";
import path from "path";

const __dirname = import.meta.dirname;
const environmentVariablesFilePath = path.join(__dirname, ".env");
dotenv.config({ path: environmentVariablesFilePath });

const requiredVariables = ["PORT", "FLAG", "PASSWORD"];
const missingVariables = requiredVariables.filter((v) => !process.env[v]);

if (missingVariables.length > 0) {
  throw new Error(
    `Missing required environment variables: ${missingVariables.join(", ")}`
  );
}

const PORT = process.env.PORT;
const FLAG = process.env.FLAG;
const PASSWORD = process.env.PASSWORD;

export { PORT, FLAG, PASSWORD };
