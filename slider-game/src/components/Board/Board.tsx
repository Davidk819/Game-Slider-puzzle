import styled from 'styled-components';
import { useGameContext } from '../../context/GameContext';


interface TileProps {
  empty: boolean;
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
  background-color: ${({ empty }) => (empty ? '#eee' : '#007bff')};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2em;
  color: ${({ empty }) => (empty ? 'transparent' : '#fff')};
  border-radius: 5px;
  cursor: ${({ empty }) => (empty ? 'default' : 'pointer')};
`;




const Board = () => {

    const { arr } = useGameContext();

  return (
    <BoardContainer>
      {arr.map((value, index) => (
        <Tile key={index} empty={value === null}>
          {value}
        </Tile>
      ))}
    </BoardContainer>
  );
};

export default Board;
