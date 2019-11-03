const horizontalBarOptions = {
  chart: { type: 'bar', margin: [0, 0, 0, 0] },
  colors: ['#4F81BD'],
  title: { text: null },
  xAxis: { visible: false },
  yAxis: { visible: false },
  legend: { enabled: false },
  series: [{ data: [4, 5, 4, 3, 8].reverse() }],
  plotOptions: { series: { cursor: 'pointer' } },
  credits: { enabled: false },
};

export default horizontalBarOptions;
