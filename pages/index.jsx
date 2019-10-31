import highcharts from 'highcharts';
import Graph from '../components/Graph/index';
import scatterplotOptions from '../lib/scatterplotOptions';

const Index = () => (
  <section>
    <Graph highcharts={highcharts} options={scatterplotOptions} />
  </section>
);

export default Index;
