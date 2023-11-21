import useCounter from '../hooks/useCounter';
import Card from './Card/Card';

function BackwardCounter() {
  const counter = useCounter('down');

  return <Card>{counter}</Card>;
}

export default BackwardCounter;
