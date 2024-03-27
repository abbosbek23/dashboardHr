/* eslint-disable no-unused-vars */
import { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const DoughnutChart = () => {
  const chartRef = useRef();

  useEffect(() => {
    const data = {
      "yetakchi mutaxassisi": 126,
      "Inspektor": 125,
      "Ijrochi (call centr)": 123,
      "ijrochi": 112,
      "Mutaxassis (operator)": 81,
      "Stajyor": 78,
      "bosh mutaxassisi": 77,
      "Bosh mutaxassis": 77,
      "boshlig'i": 36,
      "1-toifali mutaxassis": 36,
      "Mutaxassis": 22,
      "mutaxassis": 16,
      "boshlig`i": 15,
      "direktori": 13,
      "yollanma xodim": 11,
      "bosh yuriskonsulti": 9,
      "Etakchi mutaxassis": 7,
      "katta auditori": 7,
      "boshlig`i o`rinbosari": 6,
      "dasturchisi": 6,
      "direktori o`rinbosari": 6,
      "Menejer (bosh mutaxassis)": 5,
      "Departament direktori urinbosari": 5,
      "boshlig`i-boshqarma boshlig`i o`rinbosari": 5,
      "yetakchi dasturchisi": 3,
      "Xizmat xonalari farroshi": 3,
      "strategik loyihalar menejeri": 3,
      "auditori": 3,
      "Engil avtomobil xaydovchisi ": 3,
      "mahallabay bo`yicha ishchi": 2,
      "ekspert-mutaxassisi": 2,
      "mudiri": 2,
      "Boshkaruv Raisi yordamchisi": 2,
      "bosh mutaxassisi (0,5 stavka)": 2,
      "2-toifali mutaxassisi": 2,
      "direktori o`rinbosari - boshqarma boshlig`i": 2,
      "biznes analitik": 2,
      "yetakchi mutaxassis (shtatdan tashqari0": 2,
      "Boshqaruv Raisi o`rinbosari": 2,
      "Maslahatchi": 1,
      "boshlig`i (0,5 stavka)": 1,
      "Bog`bon": 1,
      "2-guruh rahbari": 1,
      "direktori-bosh buxgalter": 1,
      "Boshqaruv Rasining  maslahatchisi": 1,
      "Boshqaruv Raisining maslahatchisi": 1,
      "rahbari-Korporativ maslahatchi": 1,
      "anderrayteri": 1,
      "yetakchi mutaxassisi (0,5 stavka)": 1,
      "Call center direktori": 1,
      "Call center direktori o`rinbosari": 1,
      "direktori o'rinbosari ": 1,
      "3-guruh rahbari": 1,
      "Kassir": 1,
      "direktori o'rinbosari - boshqarma boshlig'i": 1,
      "Boshqaruvchi o`rinbosari ": 1,
      "filiallar tarmog'i koordinatori": 1,
      "mahalliy soliqlar bo'yicha eksperti": 1,
      "dizayner-sahifalovchi": 1,
      "Kompleks rahbari": 1,
      "Boshqaruv Raisi o`rinbosari yordamchisi": 1,
      "Kengash a`zosi": 1,
      "Axborot xizmati rahbari o`rinbosari": 1,
      "Sanksiyaviy-komplayens menejeri": 1,
      "1-toifali mutaxassis (0,5 stavka)": 1,
      "muharrir": 1,
      "rahbari-Boshqaruv Raisining axborot siyosati maslahatchisi": 1,
      "Omborxona mudiri ": 1,
      "bo`lim boshlig`i": 1,
      "risk maslahatchisi": 1,
      "Ishchi": 1,
      "markaz boshlig'i": 1,
      "data analitik": 1,
      "Pensiya va nafaqat tarqatish bo`yicha buxgalter": 1,
      "Boshqaruv Raisi birinchi o`rinbosari": 1,
      "sho`ba mudiri": 1,
      "Boshkaruv Raisi o`rinbosari yordamchisi": 1,
      "Buxgalter-nazoratchi": 1,
      "Amaliyot bo`limi boshlig`i o`rinbosari ": 1,
      "strategik loyihalar menejeri o'rinbosari": 1,
      "bosh mutaxassisi (yurist)": 1,
      "katta biznes analitik": 1,
      "Kredit portfeli monitoringi rahbari": 1,
      "Engil avtomobil xaydovchisi (dvigatel ish xajmi - 1,8 litrgacha)": 1,
      "Texnik (aloqachi)": 1,
      "Elektr, santexnik": 1,
      "pensiya va nafaqa tarqatish bo`yicha kassiri": 1,
      "Jamoatchi tarkatuvchi": 1,
      "pensiya va nafaqa  buxgalter": 1,
      "Engil avtomobil haydovchisi ": 1,
      "bosh loyiha menejeri": 1,
      "boshqarma boshlig`i o`rinbosari ": 1
    };

    const sortedData = Object.entries(data)
    .sort((a, b) => b[1] - a[1]);

  // Get top 20 positions
  const top20 = sortedData.slice(0, 10);

  // Sum counts of positions beyond the top 20
  const otherCount = sortedData.slice(10).reduce((acc, [_, count]) => acc + count, 0);

  // Create labels and counts for the chart data
  const labels = top20.map(([position, _]) => position);
  const counts = top20.map(([_, count]) => count);
  if (otherCount > 0) {
    labels.push('Others');
    counts.push(otherCount);
  }

  const chartData = {
    labels: labels,
    datasets: [{
      data: counts,
      backgroundColor: [
        '#FF6384',
        '#36A2EB',
        '#FFCE56',
        // Add more colors as needed
      ],
    }],
  };

  const config = {
    type: 'doughnut',
    data: chartData,
    options: {
      // Add chart options here if needed
    },
  };

  const myChart = new Chart(chartRef.current, config);

  // Cleanup function
  return () => {
    myChart.destroy();
  };
}, []);

return <canvas ref={chartRef} />;
};

export default DoughnutChart;