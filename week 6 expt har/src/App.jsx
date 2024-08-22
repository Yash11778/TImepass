import React, {Fragment} from "react"
import {useState} from "react"


function App() {
  const[title, setTitle] = useState("Something Random")
  
function updateTitle() {
  setTitle("My Random No. is : " + Math.random())
}

  return (
      <Fragment>
        <button onClick={updateTitle}>Update Title Here</button>
        <Header title={title}/>
       <Header title= "Yash"/>
      </Fragment>
  )
}

function Header({title}) {
  return <div>
    {title}
  </div>
  
}

export default App