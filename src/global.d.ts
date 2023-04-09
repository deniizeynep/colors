type PropsWithHexColor<P> = P & {
    hexColor: string;
}

type PropsWithDispatch<P> = P & {
    dispatch: React.Dispatch<ColorActions>
}

type PropsWithHexColorAndDispatch<P> = P & PropsWithHexColor<P> & PropsWithDispatch<P>