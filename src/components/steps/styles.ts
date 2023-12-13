import styled from "styled-components";

const Disclaimer = styled.div`
  text-align: center;
  h1 {
    font-size: 1.1rem;
    font-weight: 700;
  }

  p {
    font-size: 0.7rem;
    font-weight: 500;
  }
  margin-bottom: 2rem;
`;

const FlexContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
`;

export { Disclaimer, FlexContainer };
