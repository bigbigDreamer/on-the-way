import React, {FC, useCallback, useState, useEffect} from "react";
import { useRouter } from "@aktiv/launcher";

const Home: FC = () => {

    const router = useRouter();
    const [key, setKey] = useState(true);
    const handleClick = useCallback(() => {
        setKey(false);
    }, []);

    useEffect(() => {

    }, []);

    const handleRouterClick = () => {
        router.redirect('/carousel')
    }


    return (
        <div>
            Hello World
            <button onClick={handleClick}>重载</button>
            <button onClick={handleRouterClick}>轮播图</button>
        </div>
    )
};

export default Home;