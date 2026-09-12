import styles from "./ResultDisplay.module.css";
import { useContext } from "react";
import { ValueContext } from "../../../Context";

function ResultDisplay() {

    const {totalBill, tipPercent, peopleVal} = useContext(ValueContext);

    function formatTotalTip(){
        const resultVal = totalBill * (tipPercent / 100);
        return resultVal.toFixed(2);
    }
    function formatGrandTotal(){
        const grandTotal = totalBill * (1 + (tipPercent / 100));
        return grandTotal.toFixed(2)
    }
    function formatEachTotal(){
        const grandTotal = totalBill * (1 + (tipPercent / 100));
        const resultVal = grandTotal / peopleVal.length
        if(peopleVal.length === 0){
            return 0
        }
        return resultVal.toFixed(2)
    }

    return(
        <div className={styles.container}>
            <div className={styles.title}>Calculations Results</div>
            <div className={styles.main}>
                <div className={styles.total_tip}>
                    <h4>Total Tip:</h4>
                    <h1>{formatTotalTip()}$</h1>
                </div>
                <div className={styles.grand_total}>
                    <h4>Grand Total:</h4>
                    <h1>{formatGrandTotal()}$</h1>
                </div>
                <div className={styles.each_total}>
                    <h4>Each Person Pays:</h4>
                    <h1>{formatEachTotal()}$</h1>
                </div>
            </div>
        </div>
  )
}

export default ResultDisplay