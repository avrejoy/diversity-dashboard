import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const data = {
  labels: ['Engineering', 'Marketing', 'Sales', 'HR'],  // Department names
  datasets: [
    {
      label: 'Gender Distribution (Female %)',
      data: [40, 60, 55, 70],  // Example data for each department
      backgroundColor: 'rgba(75, 192, 192, 0.6)',  // Bar color
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Gender Representation by Department',
    },
  },
};

function App() {
  return (
    <div className="App">
      <h1>Diversity & Inclusion Analytics Dashboard</h1>
      <div style={{ width: '600px', margin: '0 auto' }}>
        <Bar data={data} options={options} />
      </div>
    </div>
  );
}

export default App;
