import { StyledBarChart } from './BarChart.styles';
import { Bar } from 'react-chartjs-2';
import { useMemo } from 'react';

const colors = {
  'SOS telefon': '#57415F',
  'SOS poruke': '#FAF0FC',
  'Psiholosko savetovanje': '#FFA480',
  'Omladinsko savetovanje': '#8C4893',
  'Pravna pomoc': '#FFE0D0',
};

const chartOptions = {
  type: 'bar',
  plugins: {
    legend: {
      display: false,
    },
  },
};

export const BarChart = ({ chartData, ...props }) => {
  const data = useMemo(
    () => ({
      labels: chartData?.map(({ label }) => label),
      datasets: [
        {
          backgroundColor: Object.values(colors),
          borderWidth: 2,
          borderRadius: 20,
          data: chartData?.map(({ level }) => level),
        },
      ],
    }),
    [chartData],
  );

  return (
    <div>
      <StyledBarChart {...props}>
        <Bar data={data} options={chartOptions} />
      </StyledBarChart>
    </div>
  );
};
