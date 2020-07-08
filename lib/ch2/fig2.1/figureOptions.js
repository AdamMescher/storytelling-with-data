export const horizontalBarOptions = {
    chart: { type: 'bar', margin: [0, 0, 0, -25] },
    colors: ['#4F81BD'],
    title: { text: null },
    xAxis: { visible: false },
    yAxis: {
      gridLineWidth: 0,
      plotLines: [{ color: '#BFBFBF', width: 54, value: 0, zIndex: 10 }]
    },
    legend: { enabled: false },
    series: [{ data: [4, 5, 4, 3, 8].reverse() }],
    plotOptions: { series: { cursor: 'pointer' }},
    credits: { enabled: false },
    responsive: {
      rules: [
        {
          condition: { maxWidth: 50 }
        }
      ]
    }
};

export const lineChartOptions = {
  colors: ['#4F81BD'],
  chart: { type: 'line', margin: [0, 0, 0, -5] },
  title: { text: null },
  legend: { enabled: false },
  xAxis: {
    minPadding: 0.1,
    maxPadding: 0.1,
    plotLines: [{ color: '#BFBFBF', width: 2, value: 0 }]
  },
  yAxis: {
    minPadding: 0.2,
    maxPaddign: 1,
    gridLineWidth: 0,
    plotLines: [{ color: '#BFBFBF', width: 2, value: 0.1 }]
  },
  plotOptions: {
    series: {
      marker: { enabled: false },
      lineWidth: 4,
      cursor: 'pointer'
    }
  },
  series: [{ data: [4,5,4,3,8] }],
  credits: { enabled: false }
};

export const scatterplotOptions = {
  chart: { type: 'scatter', margin: [50, 10, 0, 10] },
  colors: ['#4F81BD'],
  title: { text: null },
  xAxis: {
    lineColor: '#BFBFBF',
    lineWidth: 3,
    minPadding: 0.1,
    maxPadding: 0.1
  },
  yAxis: {
    gridLineWidth: 0,
    lineColor: '#BFBFBF',
    lineWidth: 1,
  },
  legend: { enabled: false },
  plotOptions: {
    series: {
      cursor: 'pointer',
      marker: { radius: 6 },
    },
  },
  series: [{ data: [4, 5, 4, 3, 8] }],
  credits: { enabled: false }
};

export const slopegraphOptions = {
    chart: { type: 'line' },
    title: { text: null },
    legend: { enabled: false },
    xAxis: {
      labels: { enabled: false },
      title: { text: null },
      tickWidth: 0,
      lineWidth: 0,
    },
    yAxis: {
      labels: { enabled: false },
      title: { text: null },
      gridLineWidth: 0,
      plotLines: [{ color: '#BFBFBF', width: 4, value: 1 }]
    },
    plotOptions: {
        line:{
            lineWidth:4,
            shadow:false,
            color:'#4F81BD',
            marker:{
                radius: 5,
                symbol: 'circle'
            }
        },
      series: { cursor: 'pointer' },
        scatter:{
            shadow: false,
            color: '#4F81BD',
            marker:{
                radius: 5
            },
        }
    },
    series: [
    {
        name: 'May',
        data: [8,7]
    },
    {
        name: 'Feb',
        data: [5,6]
    },
    {
        name: 'Mar',
        data: [4,2]
    },
    {
        name: 'Apr',
        data: [3,5]
    },
    {
        type:'scatter',
        data: [
            {'x':0,'y':8, name: 'May'},
            {'x':0,'y':5, name: 'Feb'},
            {'x':0,'y':4, name: 'Mar'},
            {'x':0,'y':3, name: 'Apr'}
        ]
    }
  ],
  credits: { enabled: false },
  responsive: {
    maxWidth: 100,
    minWidth: 100,
    maxHeight: 100,
    minHeight: 100
  }
};

export const squareAreaOptions = {
  title: {text: null},
  series: [{
    type: 'treemap',
    layoutAlgorithm: 'forceSquares',
    borderWidth: 2,
    data: [
      {value: 1, color: '#BFBFBF'},
      {value: 1, color: '#BFBFBF'},
      {value: 1, color: '#BFBFBF'},
      {value: 1, color: '#BFBFBF'},
      {value: 1, color: '#BFBFBF'},
      {value: 1, color: '#BFBFBF'},
      {value: 1, color: '#BFBFBF'},
      {value: 1, color: '#BFBFBF'},
      {value: 1, color: '#BFBFBF'},
      {value: 1, color: '#BFBFBF'},
      {value: 1, color: '#4F81BD'},
      {value: 1, color: '#4F81BD'},
      {value: 1, color: '#BFBFBF'},
      {value: 1, color: '#BFBFBF'},
      {value: 1, color: '#4F81BD'},
      {value: 1, color: '#4F81BD'},
    ]
  }],
  plotOptions: {series: {cursor: 'pointer' }},
  credits: {enabled: false},
  responsive: {
    maxWidth: 100,
    minWidth: 100,
    maxHeight: 100,
    minHeight: 100
  }
};

export const stackedHorizontalBarOptions = {
  chart: { type: 'bar', margin: [0,0,0,0] },
  title: { text: null },
  colors: ['#BFBFBF', '#4F81BD'],
  legend: { enabled: false },
  xAxis: { visible: false },
  yAxis: {
    gridLineWidth: 0,
    plotLines: [{ color: '#BFBFBF', width: 4, value: 0, zIndex: 10 }]
  },
  plotOptions: {
        series: {
          cursor: 'pointer',
          stacking: 'normal',
          borderWidth: 0
        },
    },
  series: [
    { name: 'a', data: [4,5,4,3,8] },
    { name: 'b', data: [3,6,2,5,7] }
  ],
  credits: { enabled: false }
};

export const stackedVerticalBarOptions = {
  chart: { type: 'column', margin: [0,0,0,0] },
  title: { text: null },
  colors: ['#BFBFBF', '#4F81BD'],
  xAxis: {
    plotLines: [
      {
        color: '#BFBFBF',
        width: 2,
        value: -0.53
      }
    ]
  },
  yAxis: {
    gridLineWidth: 0,
    plotLines: [{ color: '#BFBFBF', width: 4, value: 0.2 } ]
  },
  legend: { enabled: false },
  plotOptions: {
    column: { stacking: 'normal' },
    series: {
      cursor: 'pointer',
      borderWidth: 0
    }
  },
  series: [
    {name: 'a', data: [4,5,4,3,8]},
    {name: 'b', data: [3,6,2,5,7]}
  ],
  credits: {enabled: false}
};

export const verticalBarOptions = {
    chart: { type: 'column', margin: [0, 0, 0, 0] },
    colors: ['#4F81BD'],
    title: { text: null },
    legend: { enabled: false },
    xAxis: {
      tickWidth: 0,
      labels: { enabled: false },
      lineWidth: 0,
      plotLines: [{ color: '#BFBFBF', width: 3, value: -0.53, zIndex: 10 }]
    },
    yAxis: {
      gridLineWidth: 0,
      lineWidth: 0,
      plotLines: [{ color: '#BFBFBF', width: 3, value: 0.05, zIndex: 10 }]
    },
    series: [{ data: [4, 5, 4, 3, 8] }],
    plotOptions: { series: { cursor: 'pointer' } },
    credits: { enabled: false },
    responsive: {
      rules: [
        {
          condition: { maxWidth: 50 }
        }
      ]
    }
};

export const waterfallOptions = {
  colors: ['#4F81BD'],
  chart: { type: 'waterfall'  },
  title: { text: null },
  xAxis: {
    labels: { enabled: false },
    tickWidth: 0,
    lineWidth: 0,
    plotLines: [{ color: '#BFBFBF', width: 4, value: -0.53 }]
  },
  yAxis: {
    title: { text: null },
    gridLineWidth: 0,
    labels: { enabled: false },
    plotLines: [{ color: '#BFBFBF', width: 4, value: 0, zIndex: 10 }]
  },
  legend: { enabled: false },
  series: [{
      data: [
        { y: 100 },
        { y: 30 },
        { y: 8 },
        { y: -12 },
        { y: -10 },
        { y: -116 }
      ],
  }],

plotOptions: {
  series: {
    cursor: 'pointer',
    borderColor: null
  },
},
credits: { enabled: false }
};
