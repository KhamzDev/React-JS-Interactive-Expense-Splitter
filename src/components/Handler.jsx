import styles from './Handler.module.css'
import { ValueContext } from './Context'
import MainPage from './MainPage/MainPage'
import Navbar from './Navbar/Navbar'
import { useState } from 'react'


function Handler() {

  const [totalBill, setTotalBill] = useState(0);
  const [tipPercent, setTipPercent] = useState(0);
  const [peopleVal, setPeopleVal] = useState([]);

    return (
        <div className={styles.container}>
            <ValueContext.Provider value={{totalBill, setTotalBill, tipPercent, setTipPercent, peopleVal, setPeopleVal}}>
                <Navbar />
                <MainPage />
            </ValueContext.Provider>
        </div>
    )
}

export default Handler