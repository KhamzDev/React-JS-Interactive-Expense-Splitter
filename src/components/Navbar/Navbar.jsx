import styles from './Navbar.module.css';
import { useRef } from 'react';
import BillSummary from "./InputInfo/BillSummary/BillSummary"
import TipPercent from "./InputInfo/TipPercent/TipPercent"
import PeopleVal from './InputInfo/PeopleVal/PeopleVal';
import PeopleModal from '../Modals/PeopleModal/PeopleModal';



function Navbar() {

  const peopleModalRef = useRef(null)
  const openAddModal = () => {
    peopleModalRef.current?.showModal()
  }
  const closeEditModal = () => {
    peopleModalRef.current?.close()
  }

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <p>Bill Inputs</p>
      </div>
      <BillSummary />
      <TipPercent />
      <PeopleVal openAddModal={openAddModal}/>

      <PeopleModal peopleModalRef={peopleModalRef} closeAddModal={closeEditModal} /> 
    </div>
  )
}

export default Navbar