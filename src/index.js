import React from 'react';
import ReactDOM from 'react-dom/client';
import { Greeting } from './Greeting';
import Product from './Product';
import { UserCard } from './UserCard';
import { Button } from './Button';
import { TaskCard } from './Task';
import { Post } from './Posts';
import { Counter } from './Message';
const root = ReactDOM.createRoot(document.getElementById('root'))
const users = [{
    id: 1,
    name: 'Tadeo',
    profile: 'https://robohash.org/user 1'
},
{
    id: 2,
    name: 'Facundo',
    profile: 'https://robohash.org/user 3'
},
{
    id: 3,
    name: 'Nicolas',
    profile: 'https://robohash.org/user 2'
}]
root.render(<>
    {/*<UserCard
        name="Tadeo Machin"
        amount={3000}
        married={false}
        points={[23, 45.3, 34, 9]}
        adress={{ street: "Joaquin Suarez 504", city: "Canelones" }}
    />
    <UserCard
        name="Federico Lorca"
        amount={20000}
        married={true}
        points={[1, 45, 100, 34]}
        adress={{
            street: "Luis Alberto de Herrera 2345",
            city: "Montevideo"
        }}
    greet={function () { alert("hola mundo") }} />
    <Button text="Hello World" />
    <Button text="Pay" />
    <Button text="Click Me" />
    <TaskCard />
    <Post />
    {users.map((user) => {
        return (
            <div key={user.id}>
                <h1>{user.name}</h1>
                <img src={user.profile} />
            </div>
        )
    })}*/}
    <Counter />
</>)