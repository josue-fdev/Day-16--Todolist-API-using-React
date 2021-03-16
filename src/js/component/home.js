import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { ToDo } from "./toDoList";
//create your first component
export function Home() {
	return (
		<div>
			<h1 className="text-center">LIST OF TASKS</h1>
			<ToDo></ToDo>
		</div>
	);
}
