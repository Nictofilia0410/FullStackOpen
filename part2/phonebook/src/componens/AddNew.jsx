import personServices from "../services/persons"


const AddNew = ({
  newName,
  newNumber,
  setNewName,
  setNewNumber,
  persons,
  setPersons,
  setMessage
}) => {
  const [message, setMessage] = useState(null);

  const handleChangeName = (event) => {
    setNewName(event.target.value);
  };
  const handleChangeNumber = (event) => {
    setNewNumber(event.target.value);
  };
  const addPerson = (event) => {
    const personExist = persons.findIndex(
      (person) => person.name.toUpperCase() === newName.toUpperCase()
    );
    event.preventDefault();
    const newObject = {
      name: newName,
      number: `${newNumber}`,
      id: `${persons.length + 1}`,
    };

    if (personExist == -1) {
      personServices
        .addNewPerson(newObject)
        .then((returnedNote) => setPersons(persons.concat(returnedNote)));
        setMessage(`Added ${newName}`)
        
    } else {
      const changedObject = { ...persons[personExist], number: newNumber };
      if (
        window.confirm(
          `${newName} is already added to phonebook, replace the old number with a new one?`
        )
      ) {
        personServices
          .update(changedObject.id, changedObject)
          .then((response) =>
            setPersons(
              persons.map((person) =>
                person.id !== changedObject.id ? person : response
              )
            )
          );
      } else {
      }
    }

    setNewName("");
    setNewNumber("");
  };
  return (
    <>
      <Notification message={message}/>
      <h2>Add a New</h2>
      <form id="AddNewPerson" onSubmit={addPerson}>
        <div>
          <div>
            name:{" "}
            <input id="Name" onChange={handleChangeName} value={newName} />
          </div>
          <div>
            number:{" "}
            <input
              id="Number"
              type="text"
              onChange={handleChangeNumber}
              value={newNumber}
            />
          </div>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </>
  );
};

  export default AddNew