import React, { FC, useEffect, useRef } from "react";
import useSafeState from '../../hooks/use-safe-state';

const SafeState = () => {

    const unMountRef = useRef(false);
    const [state, setState] = useSafeState(1);

    useEffect(() => {
        return () => {
            console.log(unMountRef.current, "卸载")
            unMountRef.current = true;
        }
    }, [])

    useEffect(() => {
        setTimeout(() => {
            alert(121212)
            setState(Math.random());
        }, 3000);
    }, []);

    return (
        <div>
            <h1>Safe State</h1>
            {state}
        </div>
    )
};

export default SafeState;