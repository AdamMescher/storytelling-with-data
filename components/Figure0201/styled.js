import styled from 'styled-components';

const StyledDashboard = styled.section`
  height: 100vh;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: minmax(300px, auto);
  grid-template-areas:
    "simple-text scatterplot vertical-bar horizontal-bar"
    "table line stacked-vertical-bar stacked-horizontal-bar"
    "heatmap slopegraph waterfall square-area";
  section div {
    height: 90%;
    padding: 10px;
  }
  section h2 {
    margin: 0 0 0 10px;
    height: 10%;
    display: flex;
    align-items: center;
  }
  .scatterplot .highcharts-root,
  .vertical-bar .highcharts-root {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 90%;
    width: 100%;
    border-left: 2px solid #BFBFBF;
    border-bottom: 2px solid #BFBFBF;
  }
`;

export default StyledDashboard;
