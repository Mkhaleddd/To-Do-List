import React, { useState,useRef,useEffect} from 'react'
import ToDoList from './Compontents/ToDoList'
import {nanoid} from 'nanoid'
import click from './assets/click.mp3'
import lightWave from './assets/layered-waves-haikei-light.png';
import darkWave from './assets/layered-waves-haikei-dark.png';
import './App.css'

function App() {
  const [tasks, setTasks] = useState([])
  const  NameRef=useRef()
  const [darkMode,setDarkMode]=useState(false)
  function toggleDarkMode() {setDarkMode(prev=>!prev)}
  const  Sound=()=>{
      const audio = new Audio(click).play();
      audio.loop=true};
  useEffect(()=>{
  if (JSON.parse(localStorage.getItem('key')) ) {
      setTasks(JSON.parse(localStorage.getItem('key')))}
  },[])
 useEffect(()=>{
    localStorage.setItem('key',JSON.stringify(tasks))
 },[tasks]) 
function toggle(id) {
  const newTasks=[...tasks]
  const toggled=newTasks.find(x=>x.id===id)
  toggled.complete=!toggled.complete
  setTasks(newTasks) }
  function handleAdd() {
    const name=NameRef.current.value 
    if (name==='') return
    setTasks(prev=>{
      return [...prev,{id:nanoid(),name:name,complete:false}]})
    NameRef.current.value=null }   //clear input after typing
   function handleClear() {
     const newTasks=[...tasks]
     const filtered=newTasks.filter(task=>!task.complete)
    setTasks(filtered);
    Sound()}

  return (
     <main className={darkMode?'dark':'' }>  
      <div className="toggler">
                <p className="toggler--light">Light</p>
                <div
                    className="toggler--slider"
                    onClick={toggleDarkMode}
                >
                    <div className="toggler--slider--circle"></div>
                </div>
                <p className="toggler--dark">Dark</p>
      </div>
      <div className="container">
     <ToDoList  tasks={tasks} toggle={toggle} darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
    <input type="text" ref={NameRef}  />
    <button onClick={handleAdd} className='btn1'>add</button>
    <button onClick={handleClear} className='btn2'>clear</button>
    {tasks.length==1?(`${tasks.filter(t=>!t.complete).length} task to complete`):
    (`${tasks.filter(t=>!t.complete).length} tasks to complete`)}
    </div>
   {!darkMode? <img src={lightWave} alt="waves" /> : <img src={darkWave} alt="waves" />}
  </main>
  ) 
}

export default App
