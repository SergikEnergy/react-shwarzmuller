import { useEffect, useState, useCallback } from 'react';

import useHTTP from './hooks/useHTTP';
import Tasks from './components/Tasks/Tasks';
import NewTask from './components/NewTask/NewTask';

function App() {
  const [tasks, setTasks] = useState([]);

  const transformTasks = useCallback((todosObj) => {
    const loadedTasks = [];

    for (const todo of todosObj.todos) {
      loadedTasks.push({ id: todo.id, text: todo.todo });
    }

    setTasks(loadedTasks);
  }, []);

  const { isLoading, error, sendRequest: fetchTasks } = useHTTP(transformTasks);

  useEffect(() => {
    fetchTasks({ url: 'https://dummyjson.com/todos?limit=3' });
  }, []);

  const taskAddHandler = (task) => {
    setTasks((prevTasks) => prevTasks.concat(task));
  };

  return (
    <>
      <NewTask onAddTask={taskAddHandler} />
      <Tasks items={tasks} loading={isLoading} error={error} onFetch={fetchTasks} />
    </>
  );
}

export default App;
