import React, { useState } from "react";

export const AddTodo = ({addTodo}) => {
    const [title, setTitle]= useState("");
    const [desc, setDesc ]= useState("");

    const submit = (e)=>{
        e.preventDefault();
        if( !title || !desc){
            alert("Title or desc cannot be blank");
        }  
        else{
        addTodo(title, desc);
        setTitle("");
        setDesc("");
        }}
  return (
    <div className="container my-3">
        <h3>Add a Task</h3>
      <form onSubmit={submit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Task Title
          </label>
          <input
            type="Text"
            value ={title}
            onChange={(e)=>setTitle(e.target.value)}
            className="form-control"
            id="title"
            aria-describedby="emailHelp"/>

        </div>
        <div className="mb-3">
          <label htmlFor="desc" className="form-label">
            Task Description
          </label>
          <input
            type="text"
            value ={desc}FOR
            onChange={(e)=>setDesc(e.target.value)}
            className="form-control"
            id="desc"
          />
        </div>
        <button type="submit" className="btn btn-sm btn-success">
          Add Task
        </button>
      </form>
    </div>
  );
};


