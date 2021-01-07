import {Entity, PrimaryGeneratedColumn, Column, OneToMany, JoinColumn} from "typeorm";
import {Ride} from "./Ride";

@Entity()
export class User {

    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({
    	length:50,
    	nullable:false,
    })
    first_name: string;

    @Column({
    	length:50
    })
    last_name: string;

    @OneToMany(()=> Ride, ride => ride.user)
    @JoinColumn({name:"id"})
    rides: Ride[];

}
