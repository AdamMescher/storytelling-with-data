const verticalBarOptions = {
  chart: { type: 'column', margin: [0, 0, 0, 0] },
  colors: ['#4F81BD'],
  title: { text: null },
  legend: { enabled: false },
  xAxis: { tickWidth: 0, labels: { enabled: false } },
  yAxis: { visible: false },
  series: [{ data: [4, 5, 4, 3, 8] }],
  plotOptions: { series: { cursor: 'pointer' } },
  credits: { enabled: false },
};

export default verticalBarOptions;
