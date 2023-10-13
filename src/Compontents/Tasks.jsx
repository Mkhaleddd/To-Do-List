import React from 'react'

export default function Tasks({tasks,toggle}) {
  
    
  return (
    <label>
    <div className="checkbox-wrapper-11">
    <input id={tasks.id} type="checkbox" name="r" value="2" checked={tasks.complete} onChange={()=>toggle(tasks.id)}/>
      
       {tasks.name}

    <label htmlFor={tasks.id}>To-do</label>
    </div>
    </label>
  )
}
