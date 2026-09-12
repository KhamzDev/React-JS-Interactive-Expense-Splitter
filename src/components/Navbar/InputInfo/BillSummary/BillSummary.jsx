import styles from './BillSummary.module.css';
import { useContext } from 'react';
import { ValueContext } from '../../../Context';

function BillSummary() {

  const {setTotalBill} = useContext(ValueContext);

  function handleBill(e){

    let inputVal = e.target.value
    const parts = inputVal.split(".")
    if(parts[1] && parts[1].length > 2){
      return;
    }

    setTotalBill(Number(inputVal))
  }

  return (
    <div className={styles.container}>
          <h4>BillSummary</h4>

          <div className={styles.input_fields}>
            <div className={styles.div1}>
              <span>Total Bill Amount</span>
              <input onChange={handleBill} type='number' min={1}></input>
            </div>
          </div>
    </div>
  )
}

export default BillSummary