import React from "react";
const AddToDo = ({input,newTask,sendData}) => {
    return(
        <form onSubmit={sendData}>
            <input type="text"
                placeholder="What do you need to do?"
                value={input}
                onChange={newTask}
            />
            <button type="submit" className="btn">
                Add to do
            </button>
        </form>
    );
};
export default AddToDo;