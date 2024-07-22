// import e from "express";
import React from "react";
import { useState } from "react";

const AddTask = () => {

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
    };

    return (
        <>
            <h3 className="ui heading center">Add New Task</h3>

            <div className="ui form">
            <form onSubmit={onFormSubmit}>
                <div className="field">
                    <label>Title</label>
                    <input type="text" placeholder="Task Title" name="title" onChange={handleInputChange}></input>
                </div>
                <div className="field">
                    <label>Description</label>
                    <textarea rows="2" placeholder="Task Description" name="description" onChange={handleInputChange}></textarea>
                </div>
                <button type="submit" class="ui primary button">
                    Submit
                </button>
            </form>
            </div>
        </>
    );
};

export default AddTask;
