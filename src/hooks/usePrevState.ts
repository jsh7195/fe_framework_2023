import { useEffect, useRef } from "react";

export const usePrevState = (state: any) => {
    const ref = useRef(state);
    useEffect(() => { ref.current = state; }, [state]);
    return ref.current;
}
