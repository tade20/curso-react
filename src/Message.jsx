import { useEffect, useState } from "react";
export function Counter(){

    const [mensaje, setMensaje] = useState('');
    const [counter, setCounter] = useState(0);
    useEffect(()=>{
        console.log("render")
    },[mensaje])
    return (
        <div>
           <input onChange={e => setMensaje(e.target.value)} />
            <button onClick={() => {
                alert("El mensaje es " + mensaje)
            }}>
                Save
            </button>
            <hr />
            <h3>
                Counter: {counter}
            </h3>
            <button onClick={()=>{
                setCounter(counter + 1)
            }}>
                Increase
            </button>
        </div>
    )
}