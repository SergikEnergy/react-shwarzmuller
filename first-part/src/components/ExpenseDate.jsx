function ExpenseDate({ date }) {
  return (
    <div className=''>
      <div className=''>{date.toLocaleString('en-US', { month: 'long' })}</div>
      <div className=''>{date.toLocaleString('en-US', { day: '2-digit' })}</div>
      <div className=''>{date.getFullYear()}</div>
    </div>
  );
}

export default ExpenseDate;
