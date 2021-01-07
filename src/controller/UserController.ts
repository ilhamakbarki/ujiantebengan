import {getRepository} from "typeorm";
import {NextFunction, Request, Response} from "express";
import {User} from "../entity/User";

export class UserController {

    private userRepository = getRepository(User);

    async all(request: Request, response: Response, next: NextFunction) {
        return this.userRepository.find();
    }

    async get_relation(request:Request, response: Response, next:NextFunction){
        var relation = request.param("relation");
        if(relation=="rides"){
            return this.userRepository.createQueryBuilder("user").leftJoinAndSelect("user.rides", "ride").orderBy("user.id", "ASC").getMany();
        }else{
            return {"error":"Salah Parameter"};
        }
    }
}