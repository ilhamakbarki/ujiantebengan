import "reflect-metadata";
import {createConnection} from "typeorm";
import * as express from "express";
import {Request, Response} from "express";
import {Routes, Routes2} from "./routes";
import {User} from "./entity/User";

createConnection().then(async connection => {

    const app_3000 = express();
    const app_3001 = express();

    Routes.forEach(route => {
        (app_3000 as any)[route.method](route.route, (req: Request, res: Response, next: Function) => {
            const result = (new (route.controller as any)) [route.action](req, res, next);
            if (result instanceof Promise) {
                result.then(result => result !== null && result !== undefined ? res.send(result) : undefined);

            } else if (result !== null && result !== undefined) {
                res.json(result);
            }
        });
    });

    Routes2.forEach(route => {
        (app_3001 as any)[route.method](route.route, (req: Request, res: Response, next: Function) => {
            const result = (new (route.controller as any)) [route.action](req, res, next);
            if (result instanceof Promise) {
                result.then(result => result !== null && result !== undefined ? res.send(result) : undefined);

            } else if (result !== null && result !== undefined) {
                res.json(result);
            }
        });
    });

    app_3000.listen(3000);
    app_3001.listen(3001);

    console.log("Express server has started on port 3000. Open http://localhost:3000/users to see results");
    console.log("Express server has started on port 3001. Open http://localhost:3001/users?relation=rides to see results");

}).catch(error => console.log(error));
