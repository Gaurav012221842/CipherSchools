
// import e from "express";
import React from "react";
import { useState } from "react";

const AddTask = ( {onSubmit} ) => {

    const [task, setTask] = useState({
        title: "",
        description: "",
    });

    const handleInputChange = (e) => {
        // console.log(e.target.value);
        // console.log(e.target.name);

        setTask ({
            ...task,
            [e.target.name]: e.target.value,
        });
    };

    const onFormSubmit = (e) => {
        e.preventDefault();
        console.log(task);
        onSubmit(task);
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
        </section>
    );
};

export default AddTask;
import { useState } from "react";
import AddTask from "./components/AddTask";
import ToDoScreen from "./screens/ToDoScreen";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ToDoScreen />,
  },
  {
    path:"/add-task",
    element: <AddTask />,
  }
])

const App = () => {
  const [task, setTask] = useState([]);
  return <RouterProvider router={router} />
};

export default App;
import { formatDate } from "../utils/DateUtil";

const Task = ({task: {title, description, createdDate}}) => {
    
    return (
        <div className="card">
    <div className="content">
      <div className="header">
        {title}
      </div>

      <div className="meta">
        {
            formatDate(createdDate)
        }
      </div>

      <div className="description">
      {description}     
      </div>
    </div>
    <div className="extra content">
      <div className="ui two buttons">
        <div className="ui basic green button">Edit</div>
        <div className="ui basic red button">Delete</div>
      </div>
    </div>
  </div>
    )
};
export default Task;
// import { Component } from "react";
import { useState } from "react";
import Task from "../components/Task";
import AddTask from "../components/AddTask";

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

	const [taskList, setTaskList] = useState([]);

	let addNewTask = (task) => {
		setTaskList([...taskList, { ...task, createdDate: new Date( )}]);
	};

	return (
		<>
			<div className="screen">
				<h1 className="ui heading center">To Do List</h1>
			<div>

			<button onClick={(e) => {
				setTaskList([...taskList, {
						title: "Go to gym",
						description: "Going to gym is good for muscle growth.",
						createdDate: new Date(),
					},
				]);
			}} className="ui secondary button">
				Add Task
			</button>

			<section>
				<div className="ui cards">
					{taskList.map((task, index) => (
					<Task task={task} key={index}/>
					))}
				</div>
			</section>
		</div>

		{/* <AddTask onSubmit={addNewTask}/> */}

		</div>
		
	</>
	);
};

export default ToDoScreen;
