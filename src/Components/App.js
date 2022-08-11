//main component for app
import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FormComp from "./FormComp";
import Card from "react-bootstrap/Card";

import style from "../Assets/css/App.module.css";

const App = () => {
    const [tasks, setTasks] = useState([
        { name: "task1", category: "todo" },
        { name: "task2", category: "todo" },
        { name: "task3", category: "todo" },
        { name: "task4", category: "todo" },
        { name: "task5", category: "progress" },
        { name: "task6", category: "done" }
    ]);
    console.log(tasks);

    const handleOnDragStart = (e, id) => {
        console.log("dragstart " + id);

        e.dataTransfer.setData("id", id);
    };

    const handleOnDragOver = e => {
        e.preventDefault();

        console.log("dragover " + e);
    };

    const handleOnDrop = (e, category) => {
        console.log("ondrop " + e);

        let taskId = e.dataTransfer.getData("id");

        let filteredTasks = tasks.filter((eachTask, taskIndex) => {
            if (eachTask.name == taskId) {
                eachTask.category = category;
            }
            return eachTask;
        });

        setTasks(tasks => {
            return filteredTasks;
        });
    };

    useEffect(() => {
        console.log("inside app useeffect");
    }, []);

    return (
        <>
            <Container fluid className={style.app}>
                <Row>
                    <FormComp tasks={tasks} setTasks={setTasks}></FormComp>
                </Row>

                <Row className={style.boardRow}>
                    <Col className={style.boardColumn}>
                        <h3 className={style.columnHeader}>To Do</h3>
                        <div className={style.columnData}>
                            {tasks.map((eachTask, taskIndex) => {
                                if (eachTask.category == "todo") {
                                    let id = eachTask.name;
                                    return (
                                        <Card
                                            draggable='true'
                                            className={style.cardStyle}
                                            key={taskIndex}
                                            onDragStart={e => {
                                                handleOnDragStart(e, id);
                                            }}
                                        >
                                            <Card.Body>{eachTask.name}</Card.Body>
                                        </Card>
                                    );
                                }
                            })}
                        </div>
                    </Col>
                    <Col className={style.boardColumn}>
                        <h3 className={style.columnHeader}>In Progress</h3>
                        <div
                            className={style.columnData}
                            onDragOver={e => {
                                handleOnDragOver(e);
                            }}
                            onDrop={e => {
                                handleOnDrop(e, "progress");
                            }}
                        >
                            {tasks.map((eachTask, taskIndex) => {
                                if (eachTask.category == "progress") {
                                    return (
                                        <Card
                                            draggable='true'
                                            className={style.cardStyle}
                                            key={taskIndex}
                                            // onDragStart={e => {
                                            //     handleOnDragStart(e, eachTask.name);
                                            // }}
                                        >
                                            <Card.Body>{eachTask.name}</Card.Body>
                                        </Card>
                                    );
                                }
                            })}
                        </div>
                    </Col>
                    <Col className={style.boardColumn}>
                        <h3 className={style.columnHeader}>Done</h3>
                        <div className={style.columnData}>
                            {tasks.map((eachTask, taskIndex) => {
                                if (eachTask.category == "done") {
                                    return (
                                        <Card
                                            draggable='true'
                                            className={style.cardStyle}
                                            key={taskIndex}
                                            // onDragStart={e => {
                                            //     handleOnDragStart(e, eachTask.name);
                                            // }}
                                        >
                                            <Card.Body>{eachTask.name}</Card.Body>
                                        </Card>
                                    );
                                }
                            })}
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default App;
