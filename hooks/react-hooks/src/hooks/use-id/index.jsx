import { useId } from "react"

export const UseIdExample = () => {
    const id = useId();
    return (
        <div>
            <label htmlFor={id}>Enter your name:</label>
            <input id={id} type="text" />
        </div>
    );
};