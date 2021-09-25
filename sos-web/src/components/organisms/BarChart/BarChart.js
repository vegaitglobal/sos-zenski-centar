import { StyledBarChart } from './BarChart.styles';
import { Bar } from 'react-chartjs-2';

const colors = {
  'SOS telefon': '#57415F',
  'Konsultacije preko poruka': '#FAF0FC',
  'Psihološko savetovalište': '#FFA480',
  'Omladinsko savetovalište': '#8C4893',
  'Pravna pomoć': '#FFE0D0',
};

const data = {
  labels: [
    'SOS telefon',
    'Konsultacije preko poruka',
    'Psihološko savetovalište',
    'Omladinsko savetovalište',
    'Pravna pomoć',
  ],
  datasets: [
    {
      backgroundColor: Object.values(colors),
      borderWidth: 2,
      borderRadius: 20,
      data: [90, 40, 48, 78, 55],
    },
  ],
};

const chartOptions = {
  type: 'bar',
  data: data,
  plugins: {
    legend: {
      display: false,
    },
  },
};

export const BarChart = (props) => {
  return (
    <StyledBarChart {...props}>
      <Bar data={data} options={chartOptions} />
    </StyledBarChart>
  );
};
