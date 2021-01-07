import {UserController} from "./controller/UserController";

export const Routes = [{
	method: "get",
	route: "/api/user",
	controller: UserController,
	action: "all"
}, 
];

export const Routes2 = [{
	method: "get",
	route: "/api/user",
	controller: UserController,
	action: "get_relation"
}, 
];