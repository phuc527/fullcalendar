import { generateDataSet, labels, optionsDefault } from './chart';
import { revenuePerMonth } from './prototype_chart';

const isFillColor = true;
const isShowLabel = true;

const data = {
  labels,
  datasets: generateDataSet(revenuePerMonth.data, isFillColor, isShowLabel)
};

const options = optionsDefault(isShowLabel);

export const configRevenuePerMonth = {
  type: 'line',
  data,
  options,
};