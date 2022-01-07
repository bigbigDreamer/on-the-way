import {useCallback, useEffect, useRef, useState} from "react";

const useSafeState = (intial: any) => {
    const unMountRef = useRef(false);
    const [state, setState] = useState(intial)

    useEffect(() => {
        return () => {
            unMountRef.current = true;
        }
    }, [])

    const _setState = useCallback((some: any) => {
        if (unMountRef.current) {
            return;
        }
        setState(some);
    }, []);
    return [state, _setState];
}

export default useSafeState;