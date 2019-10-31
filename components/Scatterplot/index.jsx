import highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import StyledScatterplot from './styled';

const options = {
  title: {
    text: 'My chart',
  },
  series: [{
    data: [1, 2, 3],
  }],
};

const Scatterplot = () => (
  <StyledScatterplot>
    <HighchartsReact highcharts={highcharts} options={options} />
  </StyledScatterplot>
);

export default Scatterplot;
