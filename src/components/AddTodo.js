import { Component } from "../common/Component.js";
import { todoContext } from "../contexts/TodoContext.js";

export class AddTodo extends Component {
  render() {
    // Crear contenedor principal
    const container = document.createElement('section');
    container.classList.add("todo-adder");

    // Crear el campo de entrada y el botón
    const inputField = document.createElement('input');
    inputField.type = 'text';
    inputField.id = 'new-task-input';
    inputField.placeholder = 'Add a new task...';

    const addButton = document.createElement('button');
    addButton.id = 'add-task-btn';
    addButton.textContent = 'Add Task';

    // Añadir los elementos al contenedor
    container.appendChild(inputField);
    container.appendChild(addButton);

    // Manejar el evento de clic del botón
    addButton.addEventListener('click', () => {
      const task = inputField.value.trim();
      if (task) {
        todoContext.addTodo(task); // Agregar tarea
        inputField.value = ''; // Limpiar campo de entrada
      }
    });

    return container;
  }
}
