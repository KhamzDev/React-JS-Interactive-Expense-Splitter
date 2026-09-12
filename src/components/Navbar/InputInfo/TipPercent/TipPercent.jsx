import styles from './TipPercent.module.css';
import { useContext } from 'react';
import { ValueContext } from '../../../Context';


function TipPercent() {

    const {tipPercent, setTipPercent} = useContext(ValueContext)

  return (
    <div className={styles.container}>
        <h4>Tip Percentage</h4>
        <div className={styles.percent_info}>
            
            <span style={{...style, 
                          backgroundColor: tipPercent === 5 ? "#5ea3fc" : "#b6d3f8"}} 
                  onClick={() => setTipPercent(5)}
            >5%</span>
            <span style={{...style, 
                          backgroundColor: tipPercent === 10 ? "#5ea3fc" : "#b6d3f8"}} 
                  onClick={() => setTipPercent(10)}
            >10%</span>
            <span style={{...style, 
                          backgroundColor: tipPercent === 15 ? "#5ea3fc" : "#b6d3f8"}} 
                  onClick={() => setTipPercent(15)}
            >15%</span>
            <span style={{...style, 
                          backgroundColor: tipPercent === 20 ? "#5ea3fc" : "#b6d3f8"}} 
                  onClick={() => setTipPercent(20)}
            >20%</span>

            <div style={{position: "relative"}}>
                <span style={{position: "absolute", top: "-7px", left: "6.5px", backgroundColor: "#fff", fontSize: "13px"}}>Custom</span>
                <input 
                    type='number' 
                    style={{...style, backgroundColor: "#fff", outline: "none", border: "2px solid grey", fontSize: "18px", padding: "5px 10px"}}
                    min={1}
                    max={100}
                    onChange={(e) => setTipPercent(Number(e.target.value))}
                />
            </div>
        </div>
    </div>
  )
}

const style = {
    width: "60px",
    height: "50px",
    borderRadius: "15px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    transition: "background-color 0.15s ease"
}

export default TipPercent