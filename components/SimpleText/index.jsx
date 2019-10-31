import PropTypes from 'prop-types';
import StyledSimpleText from './styled';

const SimpleText = ({
  text,
}) => (
  <StyledSimpleText>
    <p>{text}</p>
  </StyledSimpleText>
);

SimpleText.propTypes = {
  text: PropTypes.string.isRequired,
};

export default SimpleText;
