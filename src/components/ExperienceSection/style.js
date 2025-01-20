import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100vh;
`;

export const Sidebar = styled.div`
  width: 250px;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
  padding: 20px;
  border-right: 2px solid ${({ theme }) => theme.COLORS.BACKGROUND};;
  display: flex;
  flex-direction: column;
`;

export const ExperienceItem = styled.div`
  padding: 10px;
  margin: 5px 0;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  color: #333;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s ease;
  border-left: ${(props) => (props.isSelected ? '5px solid #0d6efd' : 'none')}; /* Borda lateral azul quando selecionado */

  &:hover {
    background-color: #e1e1e1;
  }
`;


export const ExperienceContent = styled.div`
  flex: 1;
  padding: 20px;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
`;

export const Title = styled.h2`
  font-size: 1.8em;
  color: #000000;
  margin-bottom: 20px;
`;

export const Description = styled.p`
  font-size: 1.2em;
  color: #000000;
  line-height: 1.6;
  margin-bottom: 20px;
`;

export const FunctionList = styled.ul`
  list-style-type: none;
  padding-left: 0;
`;

export const FunctionItem = styled.li`
  font-size: 1.1em;
  color: #000000;
  margin-bottom: 10px;
  line-height: 1.4;
`;
