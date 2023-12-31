import { generateDataSet, labels, optionsDefault } from './chart';
import { saleForecast } from './prototype_chart';

const isFillColor = true;
const isShowLabel = false;

const data = {
  labels,
  datasets: generateDataSet(saleForecast, isFillColor, isShowLabel),
};

const options = optionsDefault(
  isShowLabel,
  saleForecast.total,
  saleForecast.description
);

export const configSaleForeCast = {
  type: 'line',
  data,
  options,
};
