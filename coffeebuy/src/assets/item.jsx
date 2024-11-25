import "./item.scss"
import { useState } from "react"

export default function Item({img, itemName, weight, oldPrice, newPrice, sale}){

    const [quantity, setQuantity ] = useState(1)
    const className = "item__main"

    return( 
        <article className="item">
            <div className="item__main">
                <img className={`${className}__img`} src={img} alt="img"></img>
                <h2 className={`${className}__name`}>{itemName}</h2>
                <p className={`${className}__weight`}>{weight}g</p>
                <div className={`${className}__price`}>
                    <h2 className={`${className}__price__old`}>$ {oldPrice}</h2>
                    <h2 className={`${className}__price__new`}>$ {newPrice}</h2>
                </div>
                <div className={`${className}__quantity`}>
                    <button onClick={() => setQuantity(quantity <= 0 ? quantity : quantity - 1)}>-</button>
                    <p>{quantity}</p>
                    <button onClick={() => setQuantity(quantity + 1)}>+</button>
                </div>
                <button className={`${className}__add`}>Add to cart</button>
            </div>
            <div className="item__sale">{sale}</div>
        </article>
    );
}