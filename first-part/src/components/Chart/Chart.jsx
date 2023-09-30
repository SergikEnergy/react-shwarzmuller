import ChartBar from './ChartBar';
import './Chart.css';

function Chart({ dataPoints }) {
  console.log('chartData->>', dataPoints);
  const dataValues = dataPoints.map((elem) => elem.value);
  const totalMaximum = Math.max(...dataValues);
  return (
    <div className='chart'>
      {dataPoints.map((dataPoint) => {
        return (
          <ChartBar key={dataPoint.label} value={dataPoint.value} maxValue={totalMaximum} label={dataPoint.label} />
        );
      })}
    </div>
  );
}

export default Chart;
