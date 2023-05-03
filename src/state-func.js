import React, {useState} from "react"

export default function Cart(){
    let [numItem, setNumItem] = useState(0)

    const onClickAddCart = () => {
        let newItem = numItem + 1
        setNumItem(newItem)
    }
    const onClickDelCart = () => {
        if (numItem > 0){
        setNumItem(numItem - 1)
    }
}
    return(
        <div>
            <div>จำนวนสินค้าในตะกร้า</div>
            <button onClick={onClickAddCart}>เพิ่มสินค้าในตะกร้า</button>
            <button onClick={onClickDelCart}>ลบสินค้าในตะกร้า</button>
        </div>
    )
}