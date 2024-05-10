import { useState, useEffect} from 'react'
import Filter from './componens/Filter'
import AddNew from './componens/AddNew'
import Numbers from './componens/Numbers'
import Notification from './componens/Notification'
import personServices from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterPersons, setFilterPersons] = useState([{name:'', number:''}])
  const [message, setMessage] = useState('')

  useEffect(() => {
    personServices
      .getAll()
      .then(initialPersons => setPersons(initialPersons))
    },[])

  return (
    <div>
      <Filter 
        filterPersons = {filterPersons} 
        setFilterPersons={setFilterPersons}
        persons={persons}/>
      <Notification 
        message = {message}
      />
      <AddNew 
        newName = {newName}
        newNumber = {newNumber}
        setNewName = {setNewName}
        setNewNumber = {setNewNumber}
        persons = {persons}
        setPersons={setPersons}
        setMessage = {setMessage}
      />

      <Numbers 
        persons = {persons}
        setPersons = {setPersons}  
        setMessage = {setMessage}
      />
      
      
    </div>

  )
}

export default App