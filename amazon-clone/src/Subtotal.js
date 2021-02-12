import React from 'react';
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from './reducer';

function Subtotal() {
  const [{ basket }, dispatch] = useStateValue();
    
  
  return (
        <div className="subtotal">
          <CurrencyFormat
            renderText={(value) => (
              <>
                <p>
                  {/* Part of the homework - was 
                  Subtotal (0 items): <strong>0</strong>*/}
                  Subtotal ({basket.length} items): <strong>{value}</strong>
                </p>
                <small className="subtotal__gift">
                  <input type="checkbox" /> This order contains a gift
                </small>
              </>
            )}
            decimalScale={2}
            // value={0} // Part of the homework 2
            value={getBasketTotal(basket)} 
            displayType={"text"}
            thousandSeparator={true}
            prefix={"$"}
          />
    
          <button>Proceed to Checkout</button>
        </div>
      );
    }

export default Subtotal
