import styled from "styled-components";

export const HeroContainer = styled.aside``;

export const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  margin-top: 250px;
  margin-left: 15px;

  a {
    font-size: 25px;
    width: 5px;
    transition: 0.2s;
  }

  a:hover {
    color: ${({ theme }) => theme.COLORS.BLUE};
  }
`;
