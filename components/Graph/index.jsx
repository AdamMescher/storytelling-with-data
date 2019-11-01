import HighchartsReact from 'highcharts-react-official';
import PropTypes from 'prop-types';
import StyledGraph from './styled';

const Graph = ({
  highcharts,
  options,
}) => (
  <StyledGraph>
    <HighchartsReact highcharts={highcharts} options={options} borders />
  </StyledGraph>
);

Graph.propTypes = {
  highcharts: PropTypes.func.isRequired,
  options: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default Graph;
