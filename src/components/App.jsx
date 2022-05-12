// import { Component } from 'react';

import { Section } from './Section';
import { Container } from './Container';
import { Component } from 'react';
import {
  getMaterials,
  createMaterial,
  deleteMaterial,
  updateMaterial,
} from '../services/todoApi';
import { TodoList } from './TodoList';
import { TodoForm } from './TodoForm';

// * all
class App extends Component {
  state = {
    isLoading: false,
    error: null,
    todoItems: [],
  };

  async componentDidMount() {
    try {
      this.setState({ isLoading: true });
      const todoItems = await getMaterials();
      this.setState({ todoItems });
    } catch (error) {
      console.log(error.message);
      this.setState({ error: error.message });
    } finally {
      this.setState({ isLoading: false });
    }
  }

  // componentDidUpdate(_, prevState) {
  //   const { todoItems } = this.state;

  //   console.log(prevState.todoItems !== todoItems, 'chek');
  //   if (prevState.todoItems !== todoItems) {
  //     this.setState({ todoItems });
  //   }
  // }

  addTodo = async values => {
    const newTodo = await createMaterial(values);

    // this.setState(state => ({ todoItems: [...state.todoItems, newTodo] }));
    this.setState(({ todoItems }) => ({ todoItems: [...todoItems, newTodo] }));
  };

  deleteTodo = async id => {
    const { todoItems } = this.state;
    const filteredItems = todoItems.filter(item => item.id !== id);
    this.setState({ todoItems: filteredItems });
    // console.dir(id);
    const data = await deleteMaterial(id);
    console.log(data);
    // this.setState({ todoItems: data });
  };

  editTodo = async fields => {
    // const isCompleted = true;
    // const field = { title: '22222' };
    // const newData = { ...fields, isCompleted };
    console.log(fields);

    // * закидываем измененную тудушку целиком
    const updatedTodo = await updateMaterial(fields);
    // this.setState(state => ({
    //   todoItems: state.todoItems.map(item =>
    //     item.id === fields.id ? updatedTodo : item,
    //   ),
    // }));
  };

  // editTodo = async (fields, isCompleted) => {
  //   // const isCompleted = true;
  //   // const field = { title: '22222' };
  //   const newData = { ...fields, isCompleted };

  //   // * закидываем измененную тудушку целиком
  //   const updatedTodo = await updateMaterial(newData);
  //   this.setState(state => ({
  //     todoItems: state.todoItems.map(item =>
  //       item.id === fields.id ? updatedTodo : item,
  //     ),
  //   }));
  // };

  render() {
    const { isLoading, todoItems, error } = this.state;
    const { addTodo, deleteTodo, editTodo } = this;

    return (
      <Section>
        <TodoForm onSubmit={addTodo} isLoading={isLoading}></TodoForm>
        {isLoading && <h1>Loading...</h1>}
        {error && <p>😒</p>}
        <h1>Hello</h1>
        {todoItems.length > 0 && (
          <TodoList list={todoItems} onDelete={deleteTodo} onEdit={editTodo} />
        )}
      </Section>
    );
  }
}

export default App;
