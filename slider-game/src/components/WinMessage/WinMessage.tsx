import React from "react";
import styled from "styled-components";

const MessageContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  z-index: 1000; /* Make sure it's above other elements */
`;

const Button = styled.button`
  margin-top: 10px;
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

interface WinMessageProps {
  onRestart: () => void;
}

const WinMessage: React.FC<WinMessageProps> = ({ onRestart }) => {
  return (
    <MessageContainer>
      <h2>You win!!!</h2>
      <Button onClick={onRestart}> New Game</Button>
    </MessageContainer>
  );
};

export default WinMessage;
