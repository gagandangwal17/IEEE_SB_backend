import cors from "cors";
import express from "express";
import { connect } from "./db-connector";
import router from "./routes/main";

const app = express();

(async () => {
  await connect();
  app.use(express.json());
  app.use(cors());
  app.use("/api", router);
  app.listen(2000);
  console.log("Server started on port 3000");
})();
