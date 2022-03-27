
import React from 'react'

function Tasklist ({tasks})  {


  return tasks.map(task =>    (
        
     
            <div key={task.id}>
                <p>{task.name}</p>
                <p>{task.desc}</p>
                <p>{task.priority}</p>
            </div>
            
            ))


  
}

export default Tasklist