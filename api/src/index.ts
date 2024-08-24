import express, { Application } from "express";
import cors, { CorsOptions } from "cors";
import Database from "./db";

export default class Server {
    constructor(app: Application) {
        this.config(app);
        this.syncDatabase();
    }

    private config(app: Application) {
        const corsOptions: CorsOptions = {
            origin: "http://localhost:8081"
        }

        app.use(cors(corsOptions));
        app.use(express.json());
        app.use(express.urlencoded({extended: true}));
    }

    private syncDatabase(): void {
        const db = new Database();
        db.sequelize?.sync();
    }
}