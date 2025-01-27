import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        color: ${({ theme }) => theme.COLORS.WHITE};

        background: linear-gradient(45deg,rgb(0, 0, 0), #327FC5);
  background-size: 400% 400%;
  animation: linearGradientAnimation 15s ease infinite;

        -webkit-font-smoothing: antialiased;
    }
    @keyframes linearGradientAnimation {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
    body, input, button, textarea {
        font-family: "Roboto Slab", serif;
        font-size: 16px;
        outline: none;
    }

    a {
        text-decoration: none;
        color: inherit;
    }

    button, a {
        cursor: pointer;

    }
`;
