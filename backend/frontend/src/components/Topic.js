import React from 'react';
import '../stylesheets/Topic.css'
import { AiOutlineCloseCircle } from 'react-icons/ai'


function Topic({ id, text, completed, completeTopic, deleteTopic }){
  return (
    <div className={completed ? 'topic-container completed' : 'topic-container'}>
      <div 
        className='topic-text'
        onClick={() => completeTopic(id)}>
        {text}
      </div>
      <div className='topic-container-icons'
        onClick = {() => deleteTopic(id)}>
        
        <AiOutlineCloseCircle className='topic-icon'/>
      </div>
    </div>
  );
}


export default Topic;