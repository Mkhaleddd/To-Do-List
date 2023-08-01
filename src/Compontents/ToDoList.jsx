import React from 'react'
import Tasks from './Tasks'

export default function ToDoList({tasks,toggle}) {
  
  return (
      tasks.map(x=> <Tasks key={x.id} tasks={x} toggle={toggle}/>)
      
       
  )
}
