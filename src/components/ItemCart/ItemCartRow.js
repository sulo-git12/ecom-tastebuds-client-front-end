import React, { useContext, useState } from "react";
import CartContext from "../../store/cart-context";

const ItemCartRow = ({ itemName, itemQty, itemPrice, itemSize, itemId }) => {

    const cartCtx = useContext(CartContext);
    const [rowItemCount, setRowItemCount] = useState(itemQty);

    const incrementHandler = (itemObj) => {
        setRowItemCount(currentCount => currentCount + 1);
        itemObj.qty = rowItemCount + 1;
        cartCtx.editItem(itemObj);
      }
    
    const decrementHandler = (itemObj) => {
        setRowItemCount(currentCount => {
            const updatedCount = currentCount - 1;
            if(updatedCount <= 0)
            return 1;
            else
            return updatedCount;
        });

        itemObj.qty = (rowItemCount - 1) <= 0 ? 1 : (rowItemCount - 1);
        cartCtx.editItem(itemObj);
    }

    const removeItemHandler = (removeItemId) => {
        cartCtx.removeItem(removeItemId);
    }

    return (
        <tr className="shadow">
            <th scope="col">{`${itemName}`}</th>

            <th scope="col">
                <div style={{ 
                    border: "1px solid black", 
                    height: "50px", 
                    width: "140px",
                    marginBottom: "20px"
                }}>
                    <button 
                        type="button" 
                        className="btn btn-light"
                        style={{ 
                        backgroundColor: "#ffffff",
                        border: "none" 
                        }}
                        onClick={() => incrementHandler({
                            id: itemId, 
                            name: itemName, 
                            qty: rowItemCount, 
                            price: itemPrice, 
                            size: itemSize 
                        })}
                    >
                        +
                    </button>
                
                    <span
                        style={{
                        marginLeft: "20px"
                        }}
                    >
                        {rowItemCount}
                    </span>

                    <button 
                        type="button" 
                        className="btn btn-light"
                        style={{ 
                        float: "right",
                        backgroundColor: "#ffffff",
                        border: "none" 
                        }}
                        onClick={() => decrementHandler({
                            id: itemId, 
                            name: itemName, 
                            qty: rowItemCount, 
                            price: itemPrice, 
                            size: itemSize 
                        })}
                    >
                        -
                    </button>
                </div>
            </th>

            <th scope="col"> {itemPrice.toFixed(2)}</th>
            <th scope="col">{(rowItemCount*itemPrice).toFixed(2)}</th>
            <th scope="col">
                <button 
                    type="button" 
                    className="btn" 
                    style={{
                        backgroundColor: "red",
                        color: "#ffffff"
                    }}
                    onClick={() => removeItemHandler(itemId)}
                >
                    Remove
                </button>
            </th>
        </tr>
    )
}

export default ItemCartRow;