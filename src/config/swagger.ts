import swaggerJSDoc from "swagger-jsdoc";

const swaggerDefinition = {
  openapi: "3.0.0",
  info: {
    title: "ECommerce API",
    version: "1.0.0",
    description: "API documentation for my Express app",
  },
  servers: [
    {
      url: "http://localhost:5000",
      description: "Local server",
    },
  ],
};

export const swaggerOptions = {
  swaggerDefinition,
  // 👇 IMPORTANT for TS
  apis: ["./src/routes/*.ts", "./src/docs/*.ts"],
};

export const swaggerSpec = swaggerJSDoc(swaggerOptions);
