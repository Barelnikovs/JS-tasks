import React from 'react';

function AddTasks({value, editInput, AddTask}) {
    // const [flag, setFlag] = useState(false)

    return <div>
        <input type="text" value={value} onChange={event => editInput(event)} />
        <button onClick={() => AddTask(value)}>Добавить</button>
    </div>
}

export default AddTasks;