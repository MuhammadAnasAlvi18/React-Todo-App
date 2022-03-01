import React , {useState , useEffect} from 'react';
import './App.css';
import Header from './components/Header';
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {

  // const initialState = JSON.parse(localStorage.getItem("todos")) || [];
  const [input , setinput] = useState("");
  const [todos , settodos] = useState([]);
  const [edittodo , setedittodo] = useState(null)

  // useEffect(()=>{
  //   localStorage.setItem("todos" , JSON.stringify(todos));
  // }, [todos]);

  return (
    <div className="container">
      <div className='app-wrapper'>
        <div>
          <Header></Header>
        </div>
        <div>
          <Form
          input={input}
          setinput={setinput}
          todos={todos}
          settodos={settodos}
          edittodo={edittodo}
          setedittodo={setedittodo}
          ></Form>
        </div>
        <div>
          <TodoList
          todos={todos}
          settodos={settodos}
          setedittodo={setedittodo}
          ></TodoList>
        </div>
      </div>
    </div>
  );
}

export default App;
