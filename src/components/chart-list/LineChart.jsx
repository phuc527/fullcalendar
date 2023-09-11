import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import { StyledItemChart } from './style';

const LineChart = ({ config }) => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current?.getContext('2d');

    if (ctx && config) {
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
    <StyledItemChart>
      <canvas className="line-chart" ref={chartRef}></canvas>
    </StyledItemChart>
  );
};

export default LineChart;
