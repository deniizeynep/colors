import { Dispatch, PropsWithChildren, useReducer } from 'react';
import { AdjustColorActions, colorReducer, initialState } from './color-reducer';
import { createContext } from 'vm';

type ColorContextState = {
    hexColor: string;
    dispatch: Dispatch<AdjustColorActions>
}


const [useContext, ContextProvider] = createContext<ColorContextState>();

export const useContext = useColorContext;

export const ColorProvider = ({ children }: PropsWithChildren) => {
    const [state, dispatch] = useReducer(colorReducer, initialState);
    const hexColor = state.hexColor;


    return (
        <ContextProvider value={{ hexColor, dispatch }}>
            {children}
        </ContextProvider>
    )
}