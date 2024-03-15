import React, {useEffect, useState} from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import AddToDo from "./addToDo";
import ToDo from "./toDo";

//create your first component
const Home = () => {
	const [ input, setInput] = useState("");
	const [todos,setTodos] = useState([]);
	const [account, setAccount] = useState(false);
	useEffect(() => {
        fetch("https://playground.4geeks.com/apis/fake/todos/user/leonelCR", {
            method: "POST",
            body: JSON.stringify([]),
            headers: {
                "Content-Type": "application/json",
            },
        });
    }, [account]);
	const newTask = (e) =>{
		setInput(e.target.value);
	};
	const sendData = (e) => {
		e.preventDefault();
		const newTodo = {label: input, done: false};
		const updateList = [...todos,newTodo];
		setTodos(updateList);
		updateToDoApi(updateList);
		setInput("");
	};
	const handleDone = (index) => {
		const updatedToDo = [...todos];
		updatedToDo[index].done = !updatedToDo[index].done;
		setTodos(updatedToDo);
		updatedToDo(updatedToDo);
	};
	const handleRemove =(index) =>{
		const updatedToDo = todos.filter((_,i) => i !== index);
		setTodos(updatedToDo);
		updateToDoApi(updatedToDo);
	};
	const fetchToDo = async (endpoint) => {
		try {
			const response = await fetch(endpoint);
			if (response.status === 400) {
				setAccount(true);
				throw new Error("Error al obtener los datos");
			}
			if (!response.ok) {
				throw new Error("Error al obtener los datos")
			}
			const toDoData = await response.json();
			setTodos(toDoData);
			console.log(toDoData);
		} catch (error){
			console.error("Error al obtener los datos: ",error);
		}
	};
	const updateToDoApi = async (data) =>{
		try{
			const response = await fetch("https://playground.4geeks.com/apis/fake/todos/user/leonelCR",
			{
				method: "PUT",
				headers: {
					"Content-Type": "application/json"
				},
				body: JSON.stringify(data),
			});
			if (!response.ok) {
				throw new Error("Error al enviar solicitud PUT")
			}
			console.log("Datos actualizados con éxito");
		} catch(error){
			console.error("Error al enviar solicitud PUT: ",error);
		}
	};
	useEffect(()=>{
		fetchToDo("https://playground.4geeks.com/apis/fake/todos/user/leonelCR")
	},[])
	const handleDeleteAccount = async () => {
		try{
			const response = await fetch(
				"https://playground.4geeks.com/apis/fake/todos/user/leonelCR",
				{
					method: "DELETE",
				}
			);
			if (!response.ok) {
				throw new Error(`HTTP error! status: ${response.status}`);
			}
			setTodos([]);
			alert("Account deleted susccessfully");
		} catch(error){
			console.error("Error deleting account:",error);
		}
	};
	
	return (
		<div className="container">
			<h1>My to dos</h1>
			<AddToDo input={input} newTask={newTask} sendData={sendData} />
			<hr />
			<ul>
				<ToDo toDo={todos} handleRemove={handleRemove} handleDone={handleDone}/>
			</ul>
			<div>{todos.length} tasks </div>
			<button className="btn-primary" onClick={handleDeleteAccount}>
				Delete Account
			</button>
		</div>
	);
};

export default Home;
