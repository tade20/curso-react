import { IoIosAddCircle } from "react-icons/io";

export function Post(){
    return <button onClick={()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.error(error))
    }}>
        <IoIosAddCircle/>
        Traer datos
    </button>
}