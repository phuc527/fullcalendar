import { generateDataSet, hideDot, labels } from './chart';
import { jobs } from './prototype_chart';

const isFillColor = false;
const isShowLabel = true;

const data = {
  labels,
  datasets: generateDataSet(jobs.data, isFillColor, isShowLabel)
};

const options = {
  responsive: true,
  scales: {
    x: {
      display: false,
    },
    y: {
      display: false,
      beginAtZero: true,
      max: 8,
    },
  },
  plugins: {
    legend: {
      display: true,
      position: 'bottom',
      labels: {
        usePointStyle: true,
      },
      align: 'start'
    },
  },
  elements: hideDot,
};

export const configCompleteOrInComplete = {
  type: 'line',
  data,
  options,
};
