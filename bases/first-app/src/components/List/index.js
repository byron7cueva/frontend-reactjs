import React from 'react'

function ListItem (props) {
    return <li>{props.value}</li>
}

export const List = (props) => {
    const numbers = [1,2,3,4,5]
    // Es requerido asignar el atributo key para una lista de elementos
    // El key se debe asignar al elemento dentro del array y no pasarlo como atributo y definirlo en el componente
    const listItems = numbers.map((number, index)=> 
        <ListItem key={index} value={number}/>
    )

    return (
        <ul>
            {listItems}
        </ul>
    )
}