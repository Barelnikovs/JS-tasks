import React, {useState} from 'react';
import AddTasks from './AddTasks';
import uuid from 'react-uuid';

function id() {
	return uuid()
};

const tasks = [];

function App(){
	const [doings, setDoings] = useState(tasks);
	const [value, setValue] = useState('');

	function editInput(event) { // Редактирует инпут в addTasks
		setValue(event.target.value)
	};

	function AddTask(value) { // Добавление новой задачи
		setDoings([
			...doings,
			{
				id: id(),
				value: value,
				editing: false,
				done: false
			}
		])
		setValue('')
	};

	function editDoing(id, event) { // редактирование дел
		setDoings(doings.map(doing => {
			if (id === doing.id) {
				if (event._reactName === 'onChange') {
					doing.value = event.target.value
				} if (event._reactName === 'onClick') {
					doing.editing = !doing.editing
				}	
			}
			return doing
		}))
	}

	function removeDoing(id) { // Удаление дел
		setDoings(doings.filter(doing => doing.id !== id))
	}

	function doneDoing(id) { // Отмечает дела сделанными
		setDoings(doings.map(doing => {
			if (doing.id === id) {
				doing.done = !doing.done
			}
			return doing
		}))
	}

	let result = doings.map(doing => { // Переменная для вывода элементов в вёрстку
		return <div>
			<p key={doing.id}>
				{
					doing.editing 
					? <input type="text" value={doing.value} onChange={event => editDoing(doing.id, event)} /> 
					: <span className={doing.done ? 'underline' : ''}>{doing.value}</span>
				}
				<button onClick={event => editDoing(doing.id, event)}>
					{doing.editing ? 'Сохранить' : 'Редактировать'}
				</button>
				<button onClick={() => doneDoing(doing.id)}>Сделано</button>
				<button onClick={() => removeDoing(doing.id)}>Удалить</button>
			</p>	
		</div>	
	});

	return <div>
		<AddTasks 
			value={value}
			editInput={editInput}
			AddTask={AddTask}
		/>
		{result}
	</div>;
};

export default App;