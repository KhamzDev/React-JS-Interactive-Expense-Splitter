import styles from './PeopleModal.module.css';
import { useContext } from 'react';
import { ValueContext } from '../../Context';


function PeopleModal({ peopleModalRef, closeAddModal}) {

  const { peopleVal, setPeopleVal } = useContext(ValueContext)

    function handleSubmit(e){
      e.preventDefault()

      const inputVals = e.target.elements
      const nameVal = inputVals.name.value
      const sameName = peopleVal.some((item) => item.name.toLowerCase() === nameVal.toLowerCase())

      if(sameName){
        window.alert('Name alredy entered')
        e.target.reset()
        return
      }

      setPeopleVal(prev => [...prev, {name: nameVal}])
      e.target.reset()
      closeAddModal()
    }

  return (
    <dialog ref={peopleModalRef} className={styles.modal}>
        <form onSubmit={handleSubmit}>
            <span>Name:</span>
            <input name="name" pattern='[a-zA-Z\s]+' required minLength={2} maxLength={10}></input>

            <button className={styles.submit_btn} type="submit">Submit</button>
        </form>
            <button className={styles.close_btn} onClick={closeAddModal}>X</button>
        
            
    </dialog>
  )
}

export default PeopleModal