import highcharts from 'highcharts';
import Graph from '../components/Graph/index';
import scatterplotOptions from '../lib/scatterplotOptions';

const Index = () => {
  return (
    <Graph highcharts={highcharts} options={scatterplotOptions}/>
  )
}

export default Index;
