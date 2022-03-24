import style from "./todolist.css"
import {useState} from "react"



function Todolist(props) {

    const {nom, description, priorite, isFinish} = props

    const [name, setNom] = useState('')
    const [desc, setDesc] = useState('')
    const [priority, setPriority] = useState('normal')
    // const [isfinished, setIsFinished] = useState('')


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

            e.prevent.default()

            const data = {
                name,
                desc,
                priority: priority
            }
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
                        <option value="">Urgent</option>
                        <option value="">Normal</option>
                        <option value="">Basse</option>
                    </select>

                </div>

                <button type="submit">Ajouter</button>
   
            </form>
        </div>


    </div>


  )


}





export default Todolist