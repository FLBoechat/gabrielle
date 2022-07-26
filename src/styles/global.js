import { createGlobalStyle } from "styled-components";
import px2vw from "../utils/px2vw";

export const Global = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    -webkit-font-smoothing: antialiased !important;
  }

  body html #root {
    height: 100%;
  }

  :root {
      font-size: ${px2vw(24)};

      @media (min-width: 375px) {
        font-size: ${px2vw(18)};
      }

      @media (min-width: 1440px) {
        font-size: ${px2vw(16)};
      }
    }
`;

export default Global;
