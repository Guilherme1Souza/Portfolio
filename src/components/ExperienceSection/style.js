import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
  margin-block: 50px;

`;

export const Sidebar = styled.div`
  width: 250px;
  height: 400px;
  background-color: ${({ theme }) => theme.COLORS.BORDER};
  padding: 20px;
  border-right: 2px solid ${({ theme }) => theme.COLORS.OVERLAY};
  box-shadow: 0px 4px 5px 6px ${({ theme }) => theme.COLORS.BOX_SHADOW};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  margin-left: 200px;
`;

export const ExperienceItem = styled.div`
  padding: 10px;
  margin: 5px 0;
  border-bottom: 1px solid ${({ theme }) => theme.COLORS.GRAY_100};
  cursor: pointer;

  transition: background-color 0.3s ease;
  border-left: ${({ theme, isSelected }) => isSelected ? `3px solid ${theme.COLORS.BLUE}` : 'none'};

  &:hover {
    background-color: ${({ theme }) => theme.COLORS.GRAY_400};
  }
`;


export const ExperienceContent = styled.div`
  flex: 1;
  padding: 20px;
  margin-right: 240px;
  background-color: ${({ theme }) => theme.COLORS.BORDER};
  box-shadow: 2px 4px 5px 6px ${({ theme }) => theme.COLORS.BOX_SHADOW};
  border-radius: 10px;
  height: 400px;
`;

export const Title = styled.p`
  font-size: 36px;
  color: ${({ theme }) => theme.COLORS.WHITE};
  margin-bottom: 2px;
  font-weight: 900;
`;

export const Cargo = styled.strong`
  display: block;
  font-size: 20px;
  color: ${({ theme }) => theme.COLORS.WHITE};
  margin-bottom: 5px;
`;

export const Date = styled.data`
   font-size: 16px;
  color: ${({ theme }) => theme.COLORS.GRAY_400};
  margin-bottom: 25px;
`;

export const Description = styled.div`
  font-size: 16px;
  color: ${({ theme }) => theme.COLORS.WHITE};
  margin-top: 25px;
  text-align: justify;

`;

export const FunctionItem = styled.ul`
  font-size: 1.1em;
  color: ${({ theme }) => theme.COLORS.WHITE};
  
`;


export const TechsList = styled.div`
  list-style-type: none;
  padding-left: 0;
`;

