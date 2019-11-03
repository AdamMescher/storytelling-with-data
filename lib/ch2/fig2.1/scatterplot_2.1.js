const scatterplotOptions = {
  chart: { type: 'scatter', margin: [50, 10, 0, 10] },
  colors: ['#4F81BD'],
  title: { text: null },
  xAxis: { visible: false },
  yAxis: {
    title: { text: null },
    labels: { enabled: false },
    minorGridLineWidth: 0,
    gridLineWidth: 0,
  },
  legend: { enabled: false },
  plotOptions: {
    series: {
      cursor: 'pointer',
      marker: { radius: 6 },
    },
  },
  series: [{ data: [4, 5, 4, 3, 8] }],
  credits: { enabled: false },
};

export default scatterplotOptions;
