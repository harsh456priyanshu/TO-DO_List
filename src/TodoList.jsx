import { useState, useEffect } from 'react';
import { toast } from "react-toastify";
// bg-gradient-to-r from-pink-500 via-red-500 to-yellow-400 shadow-lg

const TodoList = () => {
  const [task, setTask] = useState(() => {
    const stored = localStorage.getItem('tasks');
    return stored ? JSON.parse(stored) : [];
  });


  const [tasks, setTasks] = useState(() => {
    const stored = localStorage.getItem('tasks');
    try {
      return stored && stored !== "undefined" ? JSON.parse(stored) : [];
    } catch (error) {
      console.error("Failed to parse tasks from localStorage:", error);
      return [];
    }
  });

  const [newTask, setNewTask] = useState('');
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);


  const addtask = () => {
    if (newTask.trim() === '') return toast.warn("Task cannot be Empty!");
    const task = {
      id: Date.now(),
      text: newTask,
      completed: false
    };
    setTasks([...tasks, task])
    toast.success("Todo created!");
    setNewTask('');
  }

  const toggleComplete = (id) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
    toast.success("Hurray! Task Done");
  };


  const sortedTasks = [...tasks].sort((a, b) => a.completed - b.completed);
  const filteredTasks = sortedTasks.filter(t =>
    filter === 'all' ? true : filter === 'active' ? !t.completed : t.completed
  );


  const deleteTask = (id) => {
    setTasks(tasks.filter(t => t.id !== id));
    toast.error("Todo deleted!");
  }

  return (
    <div className='bg-gray-700 shadow-lg h-auto max-h-full overflow-y-auto'>
   
      <nav className='top-0 left-0 w-fullrounded-lg bg-gray-700  text-white px-6 py-4'>
        <h1 className=' flex justify-center text-4xl font-thin text-red'><span className='text-black'>Hey! </span> Do Your Task </h1>
      </nav>


      <div className='m-10' >
        <input
          value={newTask}
          className='flex text-white text-xl font-thin w-1/2 border-b  outline-0'
          type="text"
          placeholder='Add Today Task ...'
          onChange={(e) => setNewTask(e.target.value)}
        />


        <button className='text-xl mt-5 px-15 py-2 border rounded' onClick={addtask}>Add</button>
      </div>



      <ul className='px-10 h-100 rounded-2xl bg-gray-700'>

        <div className=' flex justify-center w-full mt-1 '>
          <button className='border px-5 py-2 bg-gray-400 rounded-2xl m-2 font-semibold' onClick={() => setFilter('all')}  >All</button>
          <button className='border px-5 py-2 bg-gray-400 rounded-2xl m-2  font-semibold' onClick={() => setFilter('active')}>Active</button>
          <button className='border px-5 py-2 bg-gray-400 rounded-2xl  m-2 font-semibold' onClick={() => setFilter('completed')} >Completed</button>
        </div>
        <div className='w-100 h-100 text-white mt-5 '>
          {filteredTasks.map((task) =>
          (
            <li key={task.id} style={{ marginBottom: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px', borderRadius: '5px', border: '1px solid gray' }} className={task.completed ? "completed" : ""}>
              <span className="text-2xl font-thin m-1 px-3 break-words w-full">{task.text}</span>
             
                <button className="font text-3xl text-red-400 mx-1 " onClick={() => deleteTask(task.id)}><i class="fa fa-trash-o" aria-hidden="true"></i></button>
                <button className="font text-3xl  text-green-400 mx-1" onClick={() => toggleComplete(task.id)}><i class="fa fa-check" aria-hidden="true"></i></button>
                
              
            </li>
          ))}
        </div>

      </ul>
    </div>
  )
}

export default TodoList


