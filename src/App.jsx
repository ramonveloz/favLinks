import './App.css'
import Form from './Components/Form.jsx'
import Table from './Components/Table.jsx'
import { useState } from "react"

function App(){ //capitalize component name
  const [favLinks, setFavLinks] = useState([])
  let handleNewSubmission = (data) => {
    setFavLinks([...favLinks, data])
  }
  
  return(
    <div>
        <h1>Submit your fav links</h1>

      <Form onNewSubmit={handleNewSubmission}/>
      <Table links={favLinks}/>
    </div>
    
)
}

export default App