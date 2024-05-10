const Filter = ({filterPersons, setFilterPersons, persons}) => {
    const findCoincidentNames =  (event) => {
      const filterName = event.target.value
      const filterPerson = filterName 
      ? persons.filter(person => person.name.toUpperCase().includes(filterName.toUpperCase()))
      : []
  
      setFilterPersons(filterPerson)
    }
      return (
        <>
          <h2>Phonebook</h2>
        <form id="filterPerson">
          filter name: <input id="NameFilter" type="text" onChange={findCoincidentNames}/>
        </form>
        {filterPersons.map((person,id) => <div key={id}>{person.name} {person.number}</div>)}
        </>
      )
    
  }

  export default Filter