import { useRef } from "react"

export const RefExample = () => {
    const inputRef = useRef();

    const onClick = () => {
        console.log(inputRef.current.value);
        inputRef.current.focus();
        //Change value without rerender
        inputRef.current.value = "GG";
    };

    return(
        <div>
            <input type="text" ref={inputRef}/>
            <button onClick={onClick}> Console log</button>
        </div>
        
    )
}