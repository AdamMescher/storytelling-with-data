import HighchartsReact from 'highcharts-react-official';
import StyledGraph from './styled';

const Graph = ({
  highcharts,
  options,
}) => (
  <StyledGraph>
    <HighchartsReact highcharts={highcharts} options={options} />
  </StyledGraph>
);

export default Graph;
