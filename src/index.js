import React from 'react';
import ReactDOM from 'react-dom/client';
import { Greeting } from './Greeting';
import Product from './Product';
import { UserCard } from './UserCard';
import { Button } from './Button';
import { TaskCard } from './Task';

const root = ReactDOM.createRoot(document.getElementById('root'))

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
    <Button text="Click Me" />*/}
    <TaskCard />
</>)