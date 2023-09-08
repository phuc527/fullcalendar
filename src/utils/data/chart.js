export const labels = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

// Line Chart Boundaries
export const optionsDefault = (isShowLabel, title, subTitle) => {
  return {
    responsive: true,
    scales: {
      x: {
        beginAtZero: true,
      },
      y: {
        beginAtZero: true,
        max: 4000,
        ticks: {
          callback: function (value) {
            return `$${Math.round(value / 1000)}k`;
          },
          values: [0, 1000, 2000, 3000, 4000],
          stepSize: 1000,
        },
      },
    },
    plugins: {
      legend: isShowLabel && {
        display: true,
        position: 'top',
        align: 'start',
        labels: {
          usePointStyle: true,
        },
      },
      title: title && {
        display: true,
        text: title,
        position: 'top',
        align: 'start',
        font: {
          size: 20,
        },
      },
      subtitle: subTitle && {
        display: true,
        text: subTitle,
        position: 'top',
        align: 'start',
        padding: 10,
      },
    },
  };
};

export const generateDataSet = (datasets, isFill, isShowLabel) => {
  const commonOptions = {
    borderColor: 'rgba(255, 0, 0, 1)',
    fill: !!isFill,
    fillFromStart: !!isFill,
    pointBorderColor: 'transparent',
    pointBorderWidth: 0,
  };

  if (Array.isArray(datasets)) {
    return datasets.map((data) => ({
      label: isShowLabel ? data.label : '',
      data: data.amount_due,
      backgroundColor: data.color,
      ...commonOptions,
    }));
  }

  const datasetObject = {
    label: isShowLabel ? datasets.label : '',
    data: datasets.amount_due,
    backgroundColor: datasets.color,
    ...commonOptions,
  };

  return [datasetObject];
};


