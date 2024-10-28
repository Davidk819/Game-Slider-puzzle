import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';

interface GameContextType {
    arr: (number | null)[];
    shuffle: () => void;
    setArr: (newArr: (number | null)[]) => void;
}

const GameContext = createContext<GameContextType>({
    arr: [],
    shuffle: () => {},
    setArr: () => {}
});

export const useGameContext = () => useContext(GameContext);

interface GameProviderProps {
    children: ReactNode;
}

export const GameProvider: React.FC<GameProviderProps> = ({ children }) => {
    const [arr, setArr] = useState<(number | null)[]>([1, 2, 3, 4, 5, 6, 7, 8, null]);

    useEffect(() => {
        shuffle()
    },[])
    const shuffle = () => {
        const newArr = [...arr];
        for (let i = newArr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
        }        
        setArr(newArr);
    };

    return (
        <GameContext.Provider value={{ arr, shuffle, setArr }}>
            {children}
        </GameContext.Provider>
    );
};
