import React from 'react'
import style from "./todolist.css"
import Todolist from "./Todoform"
import {useState} from "react"
import Tasklist from './Tasklist'


function Addtask(props) {

    const {name, desc,priority} = props

    


    
 
  return (

            <div className="divtaches">
                <h2>Liste des tâches</h2>
                {name}
                {desc}
                {priority}
                
                <div>
            
                </div>
                
            

                <div className="tache1">
                    <h3>Acheter du café</h3>
                    <button>Terminer</button>
                    <button>Supprimer</button>
                </div>

                <div className="tache2">
                    <h3>Réaliser l'exercice</h3>
                    <button>Terminer</button>
                    <button>Supprimer</button>
                </div>

                <div className="tache3">
                    <h3>Tâche terminée</h3>
                    <button>Terminer</button>
                    <button>Supprimer</button>
                </div>
            </div>

  )
}

// export default Addtask