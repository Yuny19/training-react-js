import axios from 'axios';

export const getTodos = async (id, title, name, status) => {
    try {
        const response = await axios
            .get("https://jsonplaceholder.typicode.com/todos?_limit=10");
        return response;
    } catch (err) {
        console.log(err);
    }
  }