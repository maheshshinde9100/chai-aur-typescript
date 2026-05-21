interface ChaiCardProp{
    name:string;
    price:number;
    isSpecial?:boolean
}
export function ChaiCard({name,price,isSpecial = false}:ChaiCardProp
    ){
    return (
        <article>
            <h2>
                {name} - ${price} {isSpecial && <span>✌️</span>}
            </h2>
        </article>
    )
}