import { useState } from "react";

export const StateExample = () => {

    const [count, setCount] = useState(0);

    const increaseCount = () => {
        setCount((prev) => prev + 1);

        //the out put value will be lag behind due to the setCount update the value after the current render
        console.log(count);
    }

    return  (
        <div>
            <p> Count: {count}</p>
            <button onClick={increaseCount}> Increase Counter</button>
        </div>
    );
}