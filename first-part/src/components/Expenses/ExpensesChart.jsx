import Chart from '../Chart/Chart';

function ExpensesChart(props) {
  const chartDataPoints = [
    { label: 'Jan', value: 0 },
    { label: 'Feb', value: 0 },
    { label: 'Mar', value: 0 },
    { label: 'Apr', value: 0 },
    { label: 'May', value: 0 },
    { label: 'Jun', value: 0 },
    { label: 'Jul', value: 0 },
    { label: 'Aug', value: 0 },
    { label: 'Sep', value: 0 },
    { label: 'Oct', value: 0 },
    { label: 'Nov', value: 0 },
    { label: 'Dec', value: 0 },
  ];

  for (const expense of props.expenses) {
    if (expense && expense.date) {
      const expenseMonth = expense.date.getMonth();
      //return 0=january, 1=febr - equal index of our charDataPoints array
      chartDataPoints[expenseMonth].value += expense.amount;
    }
  }

  return <Chart dataPoints={chartDataPoints} />;
}

export default ExpensesChart;
