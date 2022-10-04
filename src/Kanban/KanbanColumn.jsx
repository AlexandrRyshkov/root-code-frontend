import React from 'react';
import KanbanTask from "./KanbanTask";
import {Paper, Typography} from "@mui/material";
import {useDrop} from "react-dnd";

const KanbanColumn = ({name, tasks, onDragComplete}) => {
    const [, drop] = useDrop(() => ({
        accept: 'task',
        drop: () => ({ name }),
        collect: (monitor) => ({
            isOver: monitor.isOver(),
            canDrop: monitor.canDrop(),
        }),
    }))

    return (
        <div>
            <Typography>{name}</Typography>
            <Paper ref={drop} elevation={3} className="kanban-grid-column">
                {tasks.map(task => <KanbanTask key={task.id} task={task} onDragComplete={onDragComplete}/>)}
            </Paper>
        </div>
    );
};

export default KanbanColumn;