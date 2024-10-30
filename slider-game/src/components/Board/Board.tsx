import styled from "styled-components";
import { useGameContext } from "../../context/GameContext";
import { useEffect, useState } from "react";
import WinMessage from "../WinMessage/WinMessage";

interface TileProps {
  $empty: boolean;
}

const BoardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 100px);
  grid-template-rows: repeat(3, 100px);
  gap: 5px;
  background-color: #edff00;
  border-radius: 10px;
  overflow: hidden;
  border: 2px solid #55ab9f;
  padding: 5px;
`;

const Tile = styled.div<TileProps>`
  width: 100px;
  height: 100px;
  background-color: ${({ $empty }) => ($empty ? "#eee" : "#007bff")};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2em;
  color: ${({ $empty }) => ($empty ? "transparent" : "#fff")};
  border-radius: 5px;
  cursor: ${({ $empty }) => ($empty ? "default" : "pointer")};
`;

const Board = () => {
  const { arr, setArr,shuffle, setIsWin } = useGameContext();
  const [showWinMessage, setShowWinMessage] = useState(false); 
  const [gameStarted, setGameStarted] = useState(false); 


  const findEmptyTileIndex = () => arr.indexOf(null);

  const isValidMove = (index: number, emptyIndex: number): boolean => {
    const rowLength = 3; // מספר העמודות

    const isAdjacent =
      Math.abs(index - emptyIndex) === 1 &&
      Math.floor(index / rowLength) === Math.floor(emptyIndex / rowLength);
    const isAbove = index === emptyIndex - rowLength;
    const isBelow = index === emptyIndex + rowLength;

    return isAdjacent || isAbove || isBelow;
  };

  const handleTileClick = (index: number) => {
    const emptyIndex = findEmptyTileIndex();

    if (isValidMove(index, emptyIndex)) {
      const newArr = [...arr];
      [newArr[index], newArr[emptyIndex]] = [newArr[emptyIndex], newArr[index]];
      setArr(newArr);
      setGameStarted(true);
    }
  };
  const handleWin = () => {
    setArr([1,2,3,4,5,6,7,null,8])
  }

  const checkWin = (array: (number | null)[]) => {
    console.log("cccc");
    const winningArr = [1, 2, 3, 4, 5, 6, 7, 8, null];
    return array.every((value, index) => value === winningArr[index]);
  };

  const restartGame = () => {
    shuffle()
    setShowWinMessage(false);
    setIsWin(false)
    setGameStarted(false); 

  };
  useEffect(() => {
    if (gameStarted && findEmptyTileIndex() === 8 && checkWin(arr)) {
      console.log("Congratulations! You've won the game!");
      setShowWinMessage(true);
        setIsWin(true)
    } else {
      setShowWinMessage(false);
    }
  }, [arr, gameStarted]);

  return (
    <div>
    <BoardContainer>
      {arr.map((value, index) => (
        <Tile
          key={index}
          $empty={value === null}
          onClick={() => handleTileClick(index)}
        >
          {value}
        </Tile>
      ))}
    </BoardContainer>
      <button onClick={handleWin}>Winnnn</button>
      {showWinMessage && <WinMessage onRestart={restartGame}></WinMessage>}
    </div>
  );
};

export default Board;
