import highcharts from 'highcharts';
import Graph from '../components/Graph/index';
import SimpleText from '../components/SimpleText/index';
import scatterplotOptions from '../lib/scatterplotOptions';

const Index = () => (
  <main>
    <section>
      <Graph highcharts={highcharts} options={scatterplotOptions} />
    </section>
    <section>
      <SimpleText text={'91%'} />
    </section>
  </main>
);

export default Index;
