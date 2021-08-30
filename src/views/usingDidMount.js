import React, { Component } from "react";
import { render } from "react-dom";
import axios from "axios";

class Usingdidmount extends Component {
  constructor() {
    super();
    this.state = {
      name: "React",
    };
    this.getTodos = this.getTodos.bind(this);
  }

  componentDidMount() {
    this.getTodos();
}

  async getTodos() {
    let data = await axios
      .get("https://jsonplaceholder.typicode.com/todos?_limit=10")
      .then(function (response) {
        return response;
      })
      .catch(function (err) {
        console.log(err);
      });
    this.setState({ todos: data.data });
  }
  render() {
    const { todos } = this.state;
    return (
      <div>
        <h3>Using componentdidmount for initial data render</h3>
        <hr />
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Name</th>
              <th>Status</th>
            </tr>
          </thead>
          {todos &&
            todos.map((todo) => {
              return (
                <tbody>
                  <tr>
                    <td>{todo.id}</td>
                    <td>
                      <p key={todo.id}>{todo.title}</p>
                    </td>
                    <td>
                      <p>{todo.userId}</p>
                    </td>
                    <td>
                      <p>{todo.completed ? "✔" : "❌"}</p>
                    </td>
                  </tr>
                </tbody>
              );
            })}
        </table>
      </div>
    );
  }
}
export default Usingdidmount;
