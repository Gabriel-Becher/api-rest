import dotenv from "dotenv";
dotenv.config();

import { resolve } from "path";

import express from "express";

import homeRoutes from "./routes/homeRoutes";

import userRoutes from "./routes/userRoutes";

import tokenRoutes from "./routes/tokenRoutes";

import alunoRoutes from "./routes/alunoRoutes";

import picRoutes from "./routes/PicRoutes";

import cors from "cors";

import helmet from "helmet";

import "./database";

const whitelist = ["http://34.95.249.49", "http://localhost:3000"];

const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Não permitido pelo CORS"));
    }
  },
};

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(cors());
    this.app.use(helmet());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
    this.app.use(express.static(resolve(__dirname, "..", "uploads")));
  }

  routes() {
    this.app.use("/", homeRoutes);
    this.app.use("/users/", userRoutes);
    this.app.use("/tokens/", tokenRoutes);
    this.app.use("/alunos/", alunoRoutes);
    this.app.use("/fotos/", picRoutes);
  }
}

export default new App().app;
