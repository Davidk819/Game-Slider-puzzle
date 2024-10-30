import { useEffect } from "react";
import useTimer from "./useTimer";
import { useGameContext } from "../../context/GameContext";

const Timer = () => {
  const { seconds, start, stop, reset } = useTimer();
  const { arr, isWin, shuffle } = useGameContext();

  useEffect(() => {
    start();
  }, [arr]);
  useEffect(() => {
    stop();
  }, [isWin]);
  useEffect(() => {
    reset();
  }, [shuffle]);

  return (
    <div>
      <h1>Timer: {seconds} seconds</h1>
    </div>
  );
};

export default Timer;
