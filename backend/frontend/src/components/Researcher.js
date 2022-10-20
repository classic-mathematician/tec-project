import React from 'react';
import '../stylesheets/Researcher.css'


function Researcher({ id, rank, name, papers, grants, patents, score, selected, selectResearcher}){
    return (
        <>
            <div className={selected ? 'Researcher-container selected' : 'Researcher-container'}>
            <div className='Researcher-text' onClick={() => completeResearcher(id)}>
                <h4>rank: {rank} {name}</h4>
                <h5>papers: {papers} grants: {grants} patents: {patents}</h5>
                <h4>score: {score}</h4>
            </div>
            </div>
        </>
    )
}



export default Researcher;