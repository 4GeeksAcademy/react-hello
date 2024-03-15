import React from "react";
const ToDo = ({toDo,handleRemove,handleDone})=>{
    return(
        <>
            {
                toDo.map((item,index) =>(
                    <li key={item}><span onClick={()=> handleDone(index)} className={item.done?"completed": ""}>
                        {item.label}
                        </span><i onClick={() =>
                        handleRemove(index)} className="fas fa-trash"></i></li>
                ))
            }        
        </>
    );
};

export default ToDo;