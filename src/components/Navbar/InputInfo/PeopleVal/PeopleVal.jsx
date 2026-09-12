import { useContext } from 'react';
import styles from './PeopleVal.module.css';
import { ValueContext } from '../../../Context';



function PeopleVal({ openAddModal }){

    const {peopleVal, setPeopleVal} = useContext(ValueContext)
    function handleDel(item){
        setPeopleVal(prev => prev.filter((i) => i.name.toLowerCase() !== item.name.toLowerCase()))
    }

    return (
        <div className={styles.container}>
            <div className={styles.top_info}>
                <h4>Participants</h4>
                <button onClick={openAddModal}>+ Add People</button>
            </div>
            <div className={styles.lists}>
                {peopleVal?.map((item, index) => (
                    <div key={index} className={styles.list}>
                        <p>{item.name}</p>
                        <span onClick={() => handleDel(item)}>🗑️</span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default PeopleVal