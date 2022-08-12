import React from "react";
import Card from "react-bootstrap/Card";
import style from "../Assets/css/TodoComp.module.css";

const DoneComp = ({ tasks, handleOnDragOver, handleOnDrop, handleOnDragStart }) => {
    return (
        <>
            <div
                className={style.columnData}
                onDragOver={e => {
                    handleOnDragOver(e);
                }}
                onDrop={e => {
                    handleOnDrop(e, "done");
                }}
            >
               
                {tasks?.map((eachTask, taskIndex) => {
                    if (eachTask.category == "done") {
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

export default DoneComp;
