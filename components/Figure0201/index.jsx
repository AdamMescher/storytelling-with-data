import highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import StyledDashboard from './styled';
import SimpleText from '../SimpleText';
import scatterplotOptions from '../../lib/ch2/fig2.1/scatterplot_2.1';

const Dashboard = () => (
  <StyledDashboard>
    <section className="simple-text">
      <SimpleText text="91%" />
      <h2>Simple text</h2>
    </section>
    <section className="scatterplot">
      <HighchartsReact className="sctr" highcharts={highcharts} options={scatterplotOptions} />
      <h2>Scatterplot</h2>
    </section>
    <section className="vertical-bar">
      <div />
      <h2>Vertical bar</h2>
    </section>
    <section className="horizontal-bar">
      <div />
      <h2>Horizontal bar</h2>
    </section>
    <section className="table">
      <div />
      <h2>Table</h2>
    </section>
    <section className="line">
      <div />
      <h2>Line</h2>
    </section>
    <section className="stacked-vertical-bar">
      <div />
      <h2>Stacked vertical bar</h2>
    </section>
    <section className="stacked-horizontal-bar">
      <div />
      <h2>Stacked horizontal bar</h2>
    </section>
    <section className="heatmap">
      <div />
      <h2>Heatmap</h2>
    </section>
    <section className="slopegraph">
      <div />
      <h2>Slopegraph</h2>
    </section>
    <section className="waterfall">
      <div />
      <h2>Waterfall</h2>
    </section>
    <section className="square-area">
      <div />
      <h2>Square area</h2>
    </section>
  </StyledDashboard>
);

export default Dashboard;
