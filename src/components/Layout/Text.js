import styled from "styled-components";

export const PageTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 22px;
  font-weight: 600;
  color: ${(props) => (props.color ? props.color : "#363E52")};
  text-transform: capitalize;

  @media screen and (max-width: 768px) {
    font-size: 1.2rem;
    /* letter-spacing: 1px; */
  }
`;

export const SubTitle = styled.p`
  font-size: 0.85em;
  color: ${(props) => (props.color ? props.color : "var(--secondary-color)")};
`;

export const Label = styled.label`
  display: inline-block; 
  font-size: ${({ size }) => (size ? size : "14px")};
  font-weight: ${({ weight }) => (weight ? weight : "400")};
  color: ${({ color }) => (color ? color : "#363E52")};
  margin-bottom: ${({ gap }) => (gap ? gap : "0px")};
`;
