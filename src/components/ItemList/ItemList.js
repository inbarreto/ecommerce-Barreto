import { Item } from "../Item/Item"

export const ItemList = (props) => {

    return (

        <span>

            {props?.itemProduct?.map(ip => <li key={ip.Id}> <Item itemProduct={ip} /> </li>)}

        </span>

    )
}