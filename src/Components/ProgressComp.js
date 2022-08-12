//component for progress column
import React from "react";
import Card from "react-bootstrap/Card";
import style from "../Assets/css/TodoComp.module.css";

const ProgressComp = ({ tasks, handleOnDragOver, handleOnDrop, handleOnDragStart }) => {
    return (
        <>
            <div
                className={style.columnData}
                onDragOver={e => {
                    handleOnDragOver(e);
                }}
                onDrop={e => {
                    handleOnDrop(e, "progress");
                }}
            >
                {tasks?.map((eachTask, taskIndex) => {
                    if (eachTask.category == "progress") {
                        let id = eachTask.id;
                        return (
                            <Card
                                id={id}
                                className={style.cardStyle}
                                key={id}
                                draggable='true'
                                onDragStart={e => {
                                    handleOnDragStart(e, id);
                                }}
                            >
                                <Card.Body>{eachTask.task_name}</Card.Body>
                            </Card>
                        );
                    }
                })}
            </div>
        </>
    );
};

export default ProgressComp;
