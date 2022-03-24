import { useEffect, useState } from "react";

export default function WindowSize() {

    const [windowSize, setWindowSize] = useState({
        height: undefined,
        width: undefined,
    });

    useEffect(() => {
        function handleResize() {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        }
    

        window.addEventListener("resize", handleResize);

        handleResize()

        return() => window.removeEventListener("resize", handleResize);
    }, []);

    return windowSize
}