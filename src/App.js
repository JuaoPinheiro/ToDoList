import React, { useState } from 'react'
import { v4 as uuid } from 'uuid'
import { Container, ToDoList, InputPrincipal, ListItem, Star, Trash, H3 } from './styles'


function App() {
  const [list, setList] = useState([])
  const [task, setTask] = useState('')

  function changeInput(event) {
    setTask(event.target.value)

  }

  function clickAdd() {
    if(task){
      setList([...list, { id: uuid(), task, finished: false }])
    }
  }

  function finishedTask(id) {
    const newList = list.map(item => (
      item.id === id ? { ...item, finished: !item.finished } : item
    ))

    setList(newList)
  }

  function deleteTask(id) {
    const removeTask = list.filter(item => (
      item.id !== id
    ))

    setList(removeTask)
  }

  return (
    <Container>
      <ToDoList>
        <InputPrincipal onChange={changeInput} placeholder='O que tenho para fazer ...' />
        <button onClick={clickAdd}>Adicionar</button>

        <ul>
          {
            list.length > 0 ? (

              list.map(item => (
                <ListItem key={item.id} isFinished={item.finished}>
                  <Star onClick={() => finishedTask(item.id)} />
                  <li>{item.task}</li>
                  <Trash onClick={() => deleteTask(item.id)} />
                </ListItem>
              ))
            ) : (
              <H3>Não há tarefas</H3>
            )
          }

        </ul>
      </ToDoList>
    </Container>
  )
}
export default App;
