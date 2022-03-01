import React , {useEffect} from 'react'
import {v4 as uuidv4} from 'uuid'

const Form = ({input , setinput , todos , settodos , edittodo , setedittodo}) => {


    const updateTodo = (title , id , completed) => {
        const newTodo = todos.map((todo)=>
            todo.id = id ? {title , id , completed} : todo
        );
        settodos(newTodo)
        setedittodo("")
    }

    useEffect(()=>{
        if(edittodo){
            setinput(edittodo.title);
        } else {
            setinput("")
        }
    } , [setinput , edittodo]);

    const onInputChange = (event) => {
        setinput(event.target.value)
    }
    const onFormSubmit = (event) => {
        event.preventDefault();
        if(!edittodo){
            settodos([...todos , { id : uuidv4(), title: input, completed : false}])
            setinput('');
        } else {
            updateTodo(input , edittodo.id , edittodo.completed)
        }
    }

  return (
    <form onSubmit={onFormSubmit}>
        <input 
        type="text" 
        placeholder='Enter a Todo...' 
        className='task-input' 
        value={input}
        required
        onChange={onInputChange}></input>
        <button className='button-add' type='submit'>
            {edittodo? "OK" : "Add"}
            </button>
    </form>
  )
}

export default Form