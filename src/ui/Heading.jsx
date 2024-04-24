import styled, { css } from "styled-components";

/* Creating a more reusable styled component */
/* css function allows us to get the highling when using the sintax in a variable and also to allow writing logic in some cases where it wouldn't be allowed */
/* const test = css`
  text-align: center;
  ${10 > 5 && "background-color: yellow"}
`; */

/* receiving props */
const Heading = styled.h1`
  ${(props) =>
    props.as === "h1" &&
    css`
      font-size: 3rem;
      font-weight: 600;
    `}

  ${(props) =>
    props.as === "h2" &&
    css`
      font-size: 2rem;
      font-weight: 600;
    `}

  ${(props) =>
    props.as === "h3" &&
    css`
      font-size: 2rem;
      font-weight: 500;
    `}

    ${(props) =>
    props.as === "h4" &&
    css`
      font-size: 3rem;
      font-weight: 600;
      text-align: center;
    `}

  line-height: 1.4;
`;

export default Heading;
