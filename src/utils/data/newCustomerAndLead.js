import { generateDataSet, hideDot, labels } from './chart';
import { lineChart } from './prototype_chart';

const isFillColor = false;
const isShowLabel = true;

const data = {
  labels,
  datasets: generateDataSet(lineChart.data, isFillColor, isShowLabel)
};

const options = {
  responsive: true,
  scales: {
    x: {
      beginAtZero: true,
    },
    y: {
      beginAtZero: true,
      max: 8,
      ticks: {
        stepSize: 2,
      },
    },
  },
  plugins: {
    legend: {
      display: true,
      position: 'top',
      align: 'start',
      labels: {
        usePointStyle: true,
      },
    },
  },
  elements: hideDot,
};

export const configNewCustomerAndLead = {
  type: 'line',
  data,
  options,
};
