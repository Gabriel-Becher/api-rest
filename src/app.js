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

import "./database";

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(cors());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
    this.app.use(express.static(resolve(__dirname, "..", "uploads")));
  }

  routes() {
    this.app.use("/", homeRoutes);
    this.app.use("/users/", userRoutes);
    this.app.use("/tokens/", tokenRoutes);
    this.app.use("/students/", alunoRoutes);
    this.app.use("/pictures/", picRoutes);
  }
}

export default new App().app;
