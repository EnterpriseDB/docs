import styled from '@emotion/styled';

const HitsWrapper = styled('div')`
  display: ${props => (props.show ? `grid` : `none`)};
  max-height: 40vh;
  overflow: scroll;
  z-index: 2;
  -webkit-overflow-scrolling: touch;
  position: absolute;
  left: 2em;
  top: 4em;
  width: 60vw;
  max-width: 800px;
  box-shadow: 0 0 5px 0;
  padding: 0.7em 0 0.4em;
  background: white;

  ul {
    list-style-type: none;
  }
`;

export default HitsWrapper;
