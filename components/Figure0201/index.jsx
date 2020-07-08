import StyledDashboard from './styled';
import Highcharts from 'highcharts';
import HighchartsMore from "highcharts/highcharts-more";
import HighchartsReact from 'highcharts-react-official';
import Treemap from 'highcharts/modules/treemap';
import SimpleText from '../SimpleText';
import ReactTable from '../ReactTable';
import ReactTableHeatmap from '../ReactTableHeatmap';
import {
  horizontalBarOptions,
  lineChartOptions,
  scatterplotOptions,
  slopegraphOptions,
  squareAreaOptions,
  stackedHorizontalBarOptions,
  stackedVerticalBarOptions,
  verticalBarOptions,
  waterfallOptions
} from '../../lib/ch2/fig2.1/figureOptions';

if (typeof Highcharts === 'object') {
  HighchartsMore(Highcharts)
  Treemap(Highcharts)
  const forceSquares = (parent, children) => {
    const childrenAreas = [];
    const buildChild = (x,y,width,height) => childrenAreas.push({x,y,width: '25%', height: '25%'});
    let x = 0;
    let y = 0;
    const area = 25;
    children.forEach((child, i) => {
      if (i % 4 === 0 && i !== 0) { y += area; x = 0; }
      childrenAreas.push({
        x: x,
        y: y,
        width: area,
        height: area
      });
      x += area;
    });
    return childrenAreas;
  };
  Highcharts.seriesTypes.treemap.prototype.forceSquares = forceSquares;
}



const Dashboard = () => (
  <StyledDashboard>
    <section className="simple-text">
      <SimpleText text="91%" />
      <h2>Simple text</h2>
    </section>
    <section className="scatterplot">
      <HighchartsReact highcharts={Highcharts} options={scatterplotOptions} />
      <h2>Scatterplot</h2>
    </section>
    <section className="vertical-bar">
      <HighchartsReact highcharts={Highcharts} options={verticalBarOptions} />
      <h2>Vertical bar</h2>
    </section>
    <section className="horizontal-bar">
      <HighchartsReact highcharts={Highcharts} options={horizontalBarOptions} />
      <h2>Horizontal bar</h2>
    </section>
    <section className="table">
      <ReactTable />
      <h2>Table</h2>
    </section>
    <section className="line">
      <HighchartsReact highcharts={Highcharts} options={lineChartOptions} />
      <h2>Line</h2>
    </section>
    <section className="stacked-vertical-bar">
      <HighchartsReact highcharts={Highcharts} options={stackedVerticalBarOptions} />
      <h2>Stacked vertical bar</h2>
    </section>
    <section className="stacked-horizontal-bar">
      <HighchartsReact highcharts={Highcharts} options={stackedHorizontalBarOptions} />
      <h2>Stacked horizontal bar</h2>
    </section>
    <section className="heatmap">
      <ReactTableHeatmap />
      <h2>Heatmap</h2>
    </section>
    <section className="slopegraph">
      <HighchartsReact highcharts={Highcharts} options={slopegraphOptions}/>
      <h2>Slopegraph</h2>
    </section>
    <section className="waterfall">
      <HighchartsReact highcharts={Highcharts} options={waterfallOptions} />
      <h2>Waterfall</h2>
    </section>
    <section className="square-area">
      <HighchartsReact highcharts={Highcharts} options={squareAreaOptions}/>
      <h2>Square area</h2>
    </section>
  </StyledDashboard>
);

export default Dashboard;
