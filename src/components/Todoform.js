import style from "./todolist.css"
import {useState} from "react"
import PropTypes from 'prop-types'
import Tasklist from "./Tasklist"


function Todoform() {

    
    const[tasks, setTasks] = useState([])

    const [name, setNom] = useState('')
    const [desc, setDesc] = useState('')
    const [priority, setPriority] = useState('normal')
  

 

    const handleNom = (e) => {

         setNom(e.target.value)
    }
    
    const handleDesc = (e) => {

        setDesc(e.target.value)
        }

    const handleSelect = (e) => {

        setPriority(e.target.value)
        }


        const handleAdd= (e) => {

            e.preventDefault()

            const data = {
                name,
                desc,
                priority

                
            }

        
            setTasks([...tasks, data])

                setNom('')
                setDesc('')
                setPriority('normal')

        }


        
        

            
       
          
  return (


    <div className="divApp">
        <div className="sousdiv">

            <h1>Ajouter une nouvelle tâche à la liste</h1>
            <form action="" onSubmit={handleAdd}>

                <label htmlFor="">Nom  </label>
                <input type="text" value={name} onChange={handleNom}/>

                <div>
                    <label htmlFor="">Description  </label>
                    <textarea value={desc} onChange={handleDesc} ></textarea>
                </div>


                <div>
                    <label htmlFor="">Priorité  </label>
                    <select name="" value={priority} id="" onChange={handleSelect}>
                        <option value="high">Urgent</option>
                        <option value="normal">Normal</option>
                        <option value="low">Basse</option>
                    </select> 

                </div>

                <button type="submit">Ajouter</button>
   
     

            </form>
        </div>

        <div>
    <Tasklist tasks={tasks}/>
</div>

    </div>


  )


}



// Todolist.defaultProps = {
//     onNewTask : () => {}
// }

// Todolist.propTypes = {
//     onNewTask : PropTypes.func
// }


export default Todoform