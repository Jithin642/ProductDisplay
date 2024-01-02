import React from 'react';
import './BarGraph.css';

const BarGraph = () => {
  const data = [30, 50, 80, 120, 90, 60]; // Sample data for each month

  const getMaxValue = () => {
    return Math.max(...data);
  };

  const renderBars = () => {
    const maxValue = getMaxValue();

    return data.map((value, index) => {
      const height = (value / maxValue) * 100 + '%';
      const backgroundColor = `hsl(${(index * 360) / data.length}, 70%, 50%)`; // Varying colors for each bar

      return (
        <div key={index} className="bar" style={{ height, backgroundColor, position: 'relative'}}>
          <span className="bar-label">{value}</span>
        </div>
      );
    });
  };

  const renderYAxis = () => {
    const maxValue = getMaxValue();
    const yAxisValues = [0, maxValue / 2, maxValue]; // Adjust as needed

    return yAxisValues.map((value, index) => (
      <div key={index} className="y-axis-label">
        {value}
      </div>
    ));
  };

  const renderXAxis = () => {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']; // Adjust as needed

    return months.map((month, index) => (
      <div key={index} className="x-axis-label">
        {month}
      </div>
    ));
  };

  return (
    <div className="graph-container">
        <div className='x-container'>
      <div className="y-axis">{renderYAxis()}</div>
      <div className="bars">{renderBars()}</div>
      </div>
      <div className="x-axis">{renderXAxis()}</div>
    </div>
  );
};

export default BarGraph;
