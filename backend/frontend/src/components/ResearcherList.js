import React, { useState } from 'react';
import '../stylesheets/ResearcherList.css'
import Topic from './Topic';

function ResearcherList(){

    const json = [{id:"A01410921",rank:"1",name:"Bustamante-Bello Martin Rogelio",papers:"8+1",grants:"1.5M",patents:"3",score:"10"},{id:"A01410922",rank:"2",name:"Guedea Elizalde Federico",papers:"2+7",grants:"1.0M",patents:"0",score:"8.2"},{id:"A01410923",rank:"3",name:"Ramirez-Uresti Jorge Adolfo",papers:"1+7",grants:"0.5M",patents:"1",score:"7.4"},{id:"A01410924",rank:"4",name:"Vazquez-Hurtado, Carlos",papers:"2+2",grants:"0M",patents:"0",score:"7.2"},{id:"A01410925",rank:"5",name:"Hernandez-Rodriguez, Felipe",papers:"1+2",grants:"0M",patents:"0",score:"6.1"}]
    const newTopic = {
        id: "A01410921",
        rank: 1,
        name: "juanito",
        papers: '8+1',
        grants: '1.5MDD',
        patents: 3,
        score: 10,
    }
    const [Researchers, setResearchers] = useState([{
        id: "aaaaaaa",
        text: 'juanito',
        completed: false,
    }]);

    
    
    
	const deleteResearcher = id => {
		const updatedResearchers = Researchers.filter(Researcher => Researcher.id !== id);
      	setResearchers(updatedResearchers);
	}

	return (
		<>
			<div className='Researcher-list-container'>
				{
					Researchers.map((topic) =>
                    <Topic 
							key = {topic.id}
							id = {topic.id}
							text = {topic.text}
							completed = {topic.completed}
						/>
					)
				}
			</div>
		</>
  );
}


export default ResearcherList;