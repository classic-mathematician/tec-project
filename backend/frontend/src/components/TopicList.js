import React, { useState } from 'react';
import '../stylesheets/TopicList.css'
import TopicForm from './TopicForm';
import Topic from './Topic';

function TopicList(){

	const [topics, setTopics] = useState([]);

	const addTopic = topic => { 

		
		if(topic.text.trim()){
			topic.text = topic.text.trim()
			const updatedTopics = [topic, ...topics];
      		setTopics(updatedTopics);
		}
	}

	const deleteTopic = id => {
		const updatedTopics = topics.filter(topic => topic.id !== id);
      	setTopics(updatedTopics);
	}


	const completeTopic = id => {
		const updatedTopics = topics.map(topic => {
			if (topic.id === id){
				topic.completed = !topic.completed; 
			}
			return topic;
		});
		setTopics(updatedTopics);
	}

	return (
		<>
			<TopicForm onSubmit={addTopic}/>
			<div className='topic-list-container'>
				{
					topics.map((topic) =>
						<Topic 
							key = {topic.id}
							id = {topic.id}
							text = {topic.text}
							completed = {topic.completed}
							completeTopic = {completeTopic}
							deleteTopic = {deleteTopic}
						/>
					)
				}
			</div>
		</>
  );
}


export default TopicList;