import highcharts from 'highcharts';
import Page from '../components/Page';
import Graph from '../components/Graph';
import SimpleText from '../components/SimpleText';
import scatterplotOptions from '../lib/scatterplotOptions';

const Index = () => (
  <Page>
    <section>
      <Graph highcharts={highcharts} options={scatterplotOptions} />
    </section>
    <section>
      <SimpleText text="91%" />
    </section>
  </Page>
);

export default Index;
