import React from 'react'
import"./produit.css"

 const produit = (props) => {
    return (
        <table className="produit">
        <tr>
        <th>Name</th>
        <th>price</th>
        <th>category</th>
        </tr>
            {props.x.map((el)=>(
                <tr>
                <td>{el.name}</td>
                <td>{el.price}</td>
                <td>{el.category}</td>
                </tr>
               
             ))}
        </table>
    )
}
export default produit; 