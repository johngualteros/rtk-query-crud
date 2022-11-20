import { useState } from 'react'
import './App.css'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'

function App() {

  return (
    <div className="App">
      <TaskForm />
      <TaskList />
    </div>
  )
}

export default App
