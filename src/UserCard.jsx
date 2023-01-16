export function UserCard (props){
    console.log(props.greet)
    return <div>
        <h1>{props.name}</h1>
        <p>${props.amount}</p>
        <p>{props.married ? "married" : "single"}</p>
        <ul>
            <li>City: {props.adress.city}</li>
            <li>Adress: {props.adress.street}</li>
        </ul>
    </div>
}