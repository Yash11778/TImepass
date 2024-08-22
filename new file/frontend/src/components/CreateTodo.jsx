import { useState } from "react"

export function CreateTodo(props){
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")  

    return <div>
        <input id="title" style={{
            padding: 10,
            margin:10
        }} type="text" placeholder="title" onChange={function(e) {
            const value = e.target.value
            setTitle(e.target.value)
        }}></input> <br/>
        <input id="description" style={{
            padding: 10,
            margin:10 
        }} type="text" placeholder="description" onChange={function(e) {
            const value = e.target.value;
            document.getElementById("title").value
            setDescription(e.target.value)
        }}></input> <br/>

        <button style={{
            padding: 10,
            margin:10 
        }} onClick={() => {
            
            axios.post("http://localhost:3000/signin", {
                username:   title,
                description: description
            })

            fetch("http://localhost:3000/signin", {
                method: "POST",
                body: JSON.stringify({
                    title: title,
                    description: description
                }),
                headers: {
                    "Content-Type": "application/json",
                    "Authorization" : "Bearer" + localStorage.getItem("token")
                }
            })
                .then(async function(res) {
                    const json = await res.json()
                    localStorage.setItem("tolken", json.token)
                    alert("Todo Created")
                })   
                props.setSetTodos([...todos])                                                  
        }}  >Add a Todo</button>
    </div>
}