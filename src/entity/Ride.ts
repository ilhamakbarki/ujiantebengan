import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn} from "typeorm";
import {User} from "./User";


@Entity()
export class Ride {
	@PrimaryGeneratedColumn('increment')
	id:number;

	@Column({
		length:100,
    	nullable:false,
	})
	from_city_name:string;

	@Column({
		length:100,
    	nullable:false,
	})
	to_city_name:string;

	@Column()
	user_id:number;

	@ManyToOne(()=> User, user => user.rides)
	@JoinColumn({name : "user_id"})
	user: User;

}
