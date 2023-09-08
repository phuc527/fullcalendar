import React from 'react';

// Component
import LineChart from './LineChart.jsx';

// Config
import {
  configSaleForeCast,
  configRevenuePerMonth,
  configNewCustomerAndLead,
} from '../../utils/data/index.js';

// Style
import { StyledWrapChart } from './style.jsx';

const ChartList = () => {
  return (
    <StyledWrapChart>
      <LineChart config={configNewCustomerAndLead} />
      <LineChart config={configRevenuePerMonth} />
      <LineChart config={configSaleForeCast} />
    </StyledWrapChart>
  );
};

export default ChartList;
