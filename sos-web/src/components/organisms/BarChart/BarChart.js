import { StyledBarChart } from './BarChart.styles';
import { Bar, defaults } from 'react-chartjs-2';
import { useEffect } from 'react';

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
      label: 'test',
      backgroundColor: '#57415F',
      borderWidth: 2,
      borderRadius: 20,
      data: [90, 40, 48, 78, 55],
    },
  ],
};

const chartOptions = {
  type: 'bar',
  data: data,
};

export const BarChart = (props) => {
  useEffect(() => {
    console.log(defaults);
    defaults.plugins.legend.display = false;
  }, []);

  return (
    <StyledBarChart {...props}>
      <Bar data={data} options={chartOptions} />
    </StyledBarChart>
  );
};
