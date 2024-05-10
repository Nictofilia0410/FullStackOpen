import personServices from "../services/persons"


const Numbers = ({persons, setPersons, setMessage}) => {

    const deletePersons = (id, name )=> {
        if (window.confirm(`Estas seguro de que deseas eliminar a ${name}`)){
            personServices.kickPerson(id)
            .then(response => console.log('Se elimino la peresona'))
            .catch(error => {
                setMessage(`information of ${name} has already been removed from server`)
                setTimeout(() => {setMessage('')},5000)
            })
            const newPersons = persons.filter(person => person.id !== id)
            setPersons(newPersons)
        } else {
            console.log('el usuario dio click en cancelar' + id)
        }
    }
    return (
      <>
        <h2>Numbers</h2>
        <div id="numbers">
            {persons.map((person,id) => {
                return (<div key={id}>
                    {person.name} {person.number}
                    <button onClick={()=>deletePersons(person.id, person.name)}>Delete</button>
                    </div>
                )})
            }
          
        </div>
      </>
    )
  }

  export default Numbers