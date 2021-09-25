import { Doughnut } from 'react-chartjs-2';
import { StyledDoughnutChart } from './DoughnutChart.styles';

const colors = {
  'Samohrani roditelj': '#57415F',
  'Romkinja/Rom': '#E4DAE5',
  'Osoba sa invaliditetom': '#8C4893',
  LGBT: '#FFE0D0',
};

const data = {
  labels: [
    'Samohrani roditelj',
    'Romkinja/Rom',
    'Osoba sa invaliditetom',
    'LGBT',
  ],
  datasets: [
    {
      backgroundColor: Object.values(colors),
      borderWidth: 2,
      data: [82.5, 7.5, 7.5, 2.5],
    },
  ],
};

const chartOptions = {
  type: 'doughnut',
  data: data,
  maintainAspectRatio: false,
  plugins: {
    tooltip: {
      callbacks: {
        label: ({ label, raw }) => `${label}: ${raw}%`,
      },
    },
  },
};

export const DoughnutChart = (props) => {
  return (
    <StyledDoughnutChart {...props}>
      <Doughnut data={data} options={chartOptions} />
    </StyledDoughnutChart>
  );
};
