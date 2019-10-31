import StyledScatterplot from './styled';
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

const Scatterplot = () => (
    <StyledScatterplot>
        <HighchartsReact highcharts={Highcharts} options={options} />
    </StyledScatterplot>
)

export default Scatterplot