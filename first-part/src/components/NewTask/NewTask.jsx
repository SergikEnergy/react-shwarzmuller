import useHTTP from '../../hooks/useHTTP';

import Section from '../UI/Section';
import TaskForm from './TaskForm';

const NewTask = (props) => {
  const createTask = (todoText, dataTodo) => {
    const createdTask = { id: dataTodo.id, text: todoText };
    props.onAddTask(createdTask);
  };

  const { isLoading, error, sendRequest: sendTaskRequest } = useHTTP();

  const enterTaskHandler = async (taskText) => {
    sendTaskRequest(
      {
        url: 'https://dummyjson.com/todos/add',
        method: 'POST',
        body: {
          todo: taskText,
          completed: false,
          userId: 5,
        },
        headers: { 'Content-Type': 'application/json' },
      },
      createTask.bind(null, taskText)
    );
  };

  return (
    <Section>
      <TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
      {error && <p>{error}</p>}
    </Section>
  );
};

export default NewTask;
