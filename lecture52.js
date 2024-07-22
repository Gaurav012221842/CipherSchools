// import e from "express";
import React from "react";
import { useState } from "react";
// import TaskContext from "../context/TaskContext";
// import { useNavigate } from "react-router-dom";

const AddTask = ({ onSubmit, validator }) => {

    // const {addNewTask} = useContext(TaskContext);
    // const navigate = useNavigate();

    const [task, setTask] = useState({
        title: "",
        description: "",
    });

    const [showError, setShowError] = useState(false);

    const handleInputChange = (e) => {
        // console.log(e.target.value);
        // console.log(e.target.name);

        setTask({
            ...task,
            [e.target.name]: e.target.value,
        });
    };

    let onFormSubmit = (e) => {
        e.preventDefault();
        console.log(task);
        if (validator(task)) {
            onSubmit(task);
            setShowError(false);
        } else {
            setShowError(true);
        }
    };

    return (
        <section className="screen">
            <h3 className="ui heading center">Add New Task</h3>

            <div className="ui form">
                <form onSubmit={onFormSubmit}>
                    <div className="field">
                        <label>Title</label>
                        <input type="text" placeholder="Task Title" name="title" onChange={handleInputChange} value={task.title}></input>
                    </div>
                    <div className="field">
                        <label>Description</label>
                        <textarea rows="2" placeholder="Task Description" name="description" onChange={handleInputChange} value={task.description}></textarea>
                    </div>
                    <button type="submit" className="ui primary button">
                        Submit
                    </button>
                </form>
            </div>
            { showError && (<div className="ui error message">
                <div className="header">Error in form</div>
                <p>Please enter valid fields.</p>
            </div>)}
        </section>
    );
};

export default AddTask;

// import { Component } from "react";
import { useState, useEffect } from "react";
import Task from "../components/Task";
// import AddTask from "../components/AddTask";
// import TaskContext from "../context/TaskContext";
// import { useNavigate } from "react-router-dom";
import AddTask from "../components/AddTask";
import { getTasksForCurrentUser } from "../apis/tas-api";

// class ToDoScreen extends Component {
//     state = {
//         taskCount: 0,
//     };
//     render() {
//         return (
//             <div className="screen">
//                 <h1 className="ui heading center">To Do List</h1>
//                 <div>
//                     <button onClick={(e) => {
//                         this.setState({
//                             ...this.state, taskCount: this.state.taskCount + 1,
//                         });
//                         console.log(this.state.taskCount);
//                     }}
//                     className="ui secondary button">Add Task</button>
//                     <p>The number of tasks are: {this.state.taskCount}</p>
//                 </div>
//             </div>
//         )
//     }
// }

// const ToDoScreen = () => {

// 	const [taskCount, setTaskCount] = useState(0);

// 	return (
// 		<div className="screen">
// 			<h1 className="ui heading center">To Do List</h1>
// 											<div>
// 											<button onClick={(e) => {
// 												setTaskCount(taskCount + 1);
// 											}}
// 										className="ui secondary button">Add Task</button>
// 										<p>The number of tasks are: {taskCount}</p>
// 								</div>
// 						</div>
// 	)
// }

// export default ToDoScreen;

const ToDoScreen = () => {

	// const { taskList } = useContext(TaskContext);
	// const navigate = useNavigate();

	const [taskList, setTaskList] = useState([]);

	const fetchTasks = async () => {
		const tasks = await getTasksForCurrentUser();
		setTaskList([...tasks]);
	};

	useEffect(() => {
		fetchTasks();
	}, []);

	let addNewTask = async (task) => {
		try {
			await addTask({ ...task });
			setTaskList([
				...taskList, 
				{
					...task,
					isComplete: false,
					createdAt: new Date(),
				},
			]);
		} catch (err) {
			console.error(err);
		}
	};

	return (
		<>
			<div className="screen">
				<h1 className="ui heading center">To Do List</h1>
				<div>
					<section>
						<div className="ui cards">
							{taskList.map((task, index) => (
								<Task task={task} key={index} />
							))}
						</div>
					</section>
				</div>

				<AddTask onSubmit={addNewTask} validator={({ title, description }) => {
					if (title?.length && !title.includes("\n") && description?.length) {
						console.log(`is valid`);
						return true;
					}
					console.log(`Invalid`);
					return false;
				}} />

			</div>

		</>
	);
};

export default ToDoScreen;
