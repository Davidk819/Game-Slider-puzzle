import styled from "styled-components";
import Board from "../Board/Board";
import { useGameContext } from "../../context/GameContext";

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;
const ResetButton = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;
const Home = () => {
  const { shuffle, isWin } = useGameContext();

  return (
    <HomeContainer>
      <h1>Welcome to slider game!</h1>
      <Board />
      {!isWin && <ResetButton onClick={shuffle}>Restart Game</ResetButton>}
    </HomeContainer>
  );
};

export default Home;
