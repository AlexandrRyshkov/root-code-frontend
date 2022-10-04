import React, {useMemo, useState} from 'react';
import {HTML5Backend} from 'react-dnd-html5-backend'
import {DndProvider} from 'react-dnd'

import './index.css';

import KanbanColumn from "./KanbanColumn";

const statuses = ['backlog', 'inProgress', 'done']

const tasksExample = [
    {id: 1, name: 'name1', description: 'description1', status: 'backlog'},
    {id: 2, name: 'name2', description: 'description2', status: 'inProgress'},
    {id: 3, name: 'name3', description: 'description3', status: 'inProgress'},
    {id: 4, name: 'name4', description: 'description4', status: 'done'},
    {id: 5, name: 'name5', description: 'description5', status: 'done'},
]

export default function Kanban() {
    const [tasks, setTasks] = useState(tasksExample);

    const groupedTasks = useMemo(() => statuses.reduce((prevValue, value) => ({
        ...prevValue,
        [value]: tasks.filter(task => task.status === value)
    }), {[statuses[0]]: tasks.filter(task => task.status === statuses[0])}), [tasks]);

    const taskDragCompleteHandler = (droppedTask, newStatus) => {
        setTasks(prevValue => prevValue.map(task => droppedTask.id === task.id ? {...task, status: newStatus} : task));
    }

    return <DndProvider backend={HTML5Backend}>
        <div className="kanban-grid">
            {Object.keys(groupedTasks).map(key => <KanbanColumn key={key} name={key} tasks={groupedTasks[key]}
                                                                onDragComplete={taskDragCompleteHandler}/>)}
        </div>
    </DndProvider>;
};
