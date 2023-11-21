import useCounter from '../hooks/useCounter';
import Card from './Card/Card';

function ForwardCounter() {
  const counter = useCounter();

  return (
    <>
      <Card>{counter}</Card>
    </>
  );
}

export default ForwardCounter;
