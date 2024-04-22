import { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';

const EmployeeDepartment = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://dev.ikramovna.me/api/v1/employee-department');
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const processData = () => {
    const departmentMap = {};

    data.forEach(({ Departament, StaffCount }) => {
      if (Departament) { // Check if Departament is defined
        const department = Departament.length > 55 ? Departament.slice(0, 20) + '...' : Departament;
        if (StaffCount <= 6) {
          departmentMap['Additional Departments'] = (departmentMap['Additional Departments'] || 0) + StaffCount;
        } else {
          departmentMap[department] = (departmentMap[department] || 0) + StaffCount;
        }
      }
    });

    const sortedData = Object.entries(departmentMap).sort((a, b) => b[1] - a[1]);
    const labels = sortedData.map(([department]) => department);
    const values = sortedData.map(([, staffCount]) => staffCount);

    return { labels, values };
  };

  const chartData = {
    datasets: [
      {
        label: "Employee Counts",
        axis: 'y',
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
        borderRadius: 5, // Add border radius to the bars
        hoverBackgroundColor: 'rgba(54, 162, 235, 0.8)',
        hoverBorderColor: 'rgba(54, 162, 235, 1)',
        data: [],
      },
    ],
  };

  if (data.length > 0) {
    const { labels, values } = processData();
    chartData.labels = labels;
    chartData.datasets[0].data = values;
  }
  console.log(data.map(item=>item.Departament));
  return (
    <div style={{ width: "100%",  marginLeft: "0px", marginRight: "0px" }}>

      <Bar
        data={chartData}
        // width={550}
        style={{width:"100%"}}
        height={550}
        options={{
          indexAxis: 'y',
          maintainAspectRatio: false,
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                  precision: 0,
                },
              },
            ],
          },
          plugins: {
            legend: {
                display: false
            },
        },
          tooltips: {
            callbacks: {
              label: (tooltipItem) => {
                const dataset = tooltipItem.dataset;
                const index = tooltipItem.dataIndex;
                const value = dataset.data[index];
                return `${tooltipItem.label}: ${value}`;
              },
            },
          },
        }}
      />
    </div>
  );
};

export default EmployeeDepartment;
