import styled from 'styled-components';

const Wrapper = styled.div`
  position: absolute;
  margin: 0 auto;
  text-align: center;
  left: 0;
  right: 0;
  z-index: 100;
  top: calc(50% - 15px);
  transform: translateY(-50%);
  background: #0c0c0c;
  height: 48px;
  width: 48px;
  border-radius: 50%;
  box-shadow: 0 0 20px rgba(12, 12, 12, 0.4);
`;

export default Wrapper;
