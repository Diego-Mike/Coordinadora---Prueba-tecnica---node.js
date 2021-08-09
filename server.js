import express from "express";
import cors from "cors";
import swaggerUi from "swagger-ui-express";
import swaggerJsDoc from "swagger-jsdoc";

import routes from "./routes/exercises.js";

const app = express();

app.use(express.json());
app.use(cors()); // Only if we use a fronted to send data

app.use("/challenge", routes);

// Setting up swagger

const swaggerOptions = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "Coordinadora mercantil - Challenge",
      version: "1.0.0"
    }
  },
  apis: ["./routes/*.js"]
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

app.use("/challenge/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.listen(5000, () => {
  console.log("Server running succesfully");
});
