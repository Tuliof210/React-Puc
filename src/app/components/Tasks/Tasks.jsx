import React, { Component } from 'react';
import './Tasks.style.css';

class Tasks extends Component {
	state = {
		list: ['estudar', 'jogar'],
	};
	render() {
		return (
			<div>
				<h3 className='title'>{this.countTasks()}</h3>
				<ul className='list'>
					{this.state['list'].map((item, index) => (
						<li key={index}>{item}</li>
					))}
				</ul>
			</div>
		);
	}

	populateList(items) {
		return items.map((item, index) => {
			return <li key={index}>{item}</li>;
		});
	}

	countTasks() {
		const { list } = this.state;
		if (!list.length) return 'sem tarefas pendentes';
		return list.length === 1 ? `${list.length} tarefa pendente` : `${list.length} tarefas pendentes`;
	}
}

export default Tasks;
