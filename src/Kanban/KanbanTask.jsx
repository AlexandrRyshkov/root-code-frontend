import React from 'react';
import {Card, CardContent, Typography} from "@mui/material";
import {useDrag} from "react-dnd";

const KanbanTask = ({task, onDragComplete}) => {
    const [, drag] = useDrag(() => ({
        type: 'task',
        item: task,
        end: (item, monitor) => {
            const dropResult = monitor.getDropResult()
            if (item && dropResult) {
                onDragComplete(item, dropResult.name);
            }
        },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
            handlerId: monitor.getHandlerId(),
        }),
    }));


    return <Card className="kanban-grid-card" ref={drag}>
        <CardContent>
            <Typography sx={{fontSize: 14}} color="text.secondary" gutterBottom>
                {task.name}
            </Typography>
            <Typography variant="h5" component="div">
                {task.description}
            </Typography>
        </CardContent>
    </Card>
};

export default KanbanTask;