import React, { useMemo } from 'react';
//useMemo allows to store any kind of data - use for weight logic inside a component to save the result of this logic

import classes from './DemoList.module.css';

const DemoList = ({ items, title }) => {
  //sort is the most heavy logic - use useMemo
  const sortedList = useMemo(() => {
    console.log('items sorted');
    return items.sort((a, b) => a - b);
  }, [items]);
  /*useMemo store the result and takes 2 parameters
	1 - func that return some value
	2- array of dependencies
	*/

  console.log('DemoList RUNNING');

  return (
    <div className={classes.list}>
      <h2>{title}</h2>
      <ul>
        {sortedList.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default React.memo(DemoList);
