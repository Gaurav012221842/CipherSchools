const AddTask = () => {
    return (
        <>
            <h3 className="ui heading center">Add New Task</h3>

            <div className="ui form">
            <form>
                <div className="field">
                    <label>Title</label>
                    <input type="text" placeholder="Task Title" name="title"></input>
                </div>
                <div className="field">
                    <label>Description</label>
                    <textarea rows="2" placeholder="Task Description" name="description"></textarea>
                </div>
                <button class="ui primary button">
                    Submit
                </button>
            </form>
            </div>
        </>
    );
};

export default AddTask;
import { formatDate } from "../utils/DateUtil";

const Task = ({task: {title, description, createdDate}}) => {
    
    return (
        <div className="card">
    <div className="content">
      <div className="header">
        {title}
      </div>

      <div class="meta">
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

const ToDoScreen = () => {
    const [taskList, setTaskList] = useState([]);

    return (
        <>
            <div className="screen">
                <h1 className="ui heading center">To Do List</h1>
                <div>
                    <button
                        onClick={(e) => {
                            setTaskList([
                                ...taskList,
                                {
                                    title: "Go to gym",
                                    description:
                                        "Going to gym is good for muscle growth.",
                                    createdDate: new Date(),
                                },
                            ]);
                        }}
                        className="ui secondary button"
                    >
                        Add Task
                    </button>

                    <section>
                        <div class="ui cards">
                            {taskList.map((task, index) => (
                                <Task task={task} key={index} />
                            ))}
                        </div>
                    </section>
                </div>

                <AddTask />
            </div>
        </>
    );
};

export default ToDoScreen;
