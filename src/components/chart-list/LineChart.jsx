import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import { StyledWrapChart } from './style';

const LineChart = ({ config }) => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (config && chartRef.current) {
      const ctx = chartRef.current.getContext('2d');

      if (chartInstance.current) {
        chartInstance.current.destroy();
      }

      chartInstance.current = new Chart(ctx, config);
    }

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [config]);

  return (
    <StyledWrapChart>
      <canvas className="line-chart" ref={chartRef}></canvas>
    </StyledWrapChart>
  );
};

export default LineChart;
