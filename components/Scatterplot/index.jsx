import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import StyledScatterplot from './styled';

const Scatterplot = () => (
  StyledScatterplot>
    <HighchartsReact highcharts={Highcharts} options={options} />
  </StyledScatterplot>
)

export default Scatterplot;