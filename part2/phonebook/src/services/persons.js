import axios from "axios";
const baseURL = 'http://localhost:3001/persons'

const getAll = () => {
    const request = axios.get(baseURL)
    return request.then(response => response.data)
}

const addNewPerson = newObject => {
    const request = axios.post(baseURL, newObject)
    return request.then(response => response.data)
}

const update = (id, changedObject) => {
    const request = axios.put(`${baseURL}/${id}`, changedObject)
    return request.then(response => response.data)
}

const kickPerson = id => {
    const request = axios.delete(`${baseURL}/${id}`)
    return request.then(response => response)
}

export default {
    getAll,
    addNewPerson,
    update,
    kickPerson
}

