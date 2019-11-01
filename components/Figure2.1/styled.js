import styled from 'styled-components';

const StyledDashboard = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: minmax(300px, auto);
  grid-template-areas:
    "simple-text scatterplot vertical-bar horizontal-bar"
    "table line stacked-vertical-bar stacked-horizontal-bar"
    "heatmap slopegraph waterfall square-area";
  section {
    background-color: teal;
  }
`;

export default StyledDashboard;
