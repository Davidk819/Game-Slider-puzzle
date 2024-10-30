import styled from "styled-components";
import { useGameContext } from "../../context/GameContext";


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
const ResetButton = () => {
    const { shuffle, isWin, isRunning } = useGameContext();

}