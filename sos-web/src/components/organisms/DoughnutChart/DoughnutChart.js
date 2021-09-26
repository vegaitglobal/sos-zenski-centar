import { useMemo } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { StyledDoughnutChart } from './DoughnutChart.styles';

const colors = {
  'Samohrani roditelj': '#57415F',
  'Romkinja/Rom': '#E4DAE5',
  'Osoba sa invaliditetom': '#8C4893',
  LGBT: '#FFE0D0',
};

const chartOptions = {
  type: 'doughnut',
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'right',
    },
    tooltip: {
      callbacks: {
        label: ({ label, raw }) => `${label}: ${raw}%`,
      },
    },
  },
};

export const DoughnutChart = ({ chartData, ...props }) => {
  const data = useMemo(
    () => ({
      labels: chartData?.map(({ label }) => label),
      datasets: [
        {
          backgroundColor: Object.values(colors),
          borderWidth: 2,
          data: chartData?.map(({ level }) => level),
        },
      ],
    }),
    [chartData],
  );
  return (
    <StyledDoughnutChart {...props}>
      <Doughnut data={data} options={chartOptions} />
    </StyledDoughnutChart>
  );
};
