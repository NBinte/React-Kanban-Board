//main component for app
import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FormComp from "./FormComp";
import TodoComp from "./TodoComp";
import ProgressComp from "./ProgressComp";
import DoneComp from "./DoneComp";
import axios from "axios";

import style from "../Assets/css/App.module.css";

const App = () => {
    const [tasks, setTasks] = useState([]);

    const handleOnDragStart = (e, id) => {
        e.dataTransfer.setData("id", id);
    };

    const handleOnDragOver = e => {
        e.preventDefault();
    };

    const handleOnDrop = (e, category) => {
        let taskId = e.dataTransfer.getData("id");

        let filteredTasks = tasks.filter((eachTask, taskIndex) => {
            if (eachTask.id == taskId) {
                eachTask.category = category;
            }
            return eachTask;
        });

        setTasks(tasks => {
            return filteredTasks;
        });

        const requestResponse = () => {
            return axios
                .post("http://127.0.0.1:8000/api/updateCategory/" + taskId + "/" + category)
                .then(response => {
                    return response;
                })
                .catch(error => {
                    return error;
                });
        };

        const getResponse = async () => {
            let response = await requestResponse();
        };

        getResponse();
    };

    const requestResponse = () => {
        return axios
            .get("http://127.0.0.1:8000/api/getTasks")
            .then(response => {
                return response;
            })
            .catch(error => {
                return error;
            });
    };

    const getResponse = async () => {
        const response = await requestResponse();

        setTasks(tasks => {
            return response.data;
        });
    };

    useEffect(() => {
        getResponse();
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
                        <TodoComp
                            tasks={tasks}
                            handleOnDragOver={handleOnDragOver}
                            handleOnDrop={handleOnDrop}
                            handleOnDragStart={handleOnDragStart}
                        ></TodoComp>
                    </Col>
                    <Col className={style.boardColumn}>
                        <h3 className={style.columnHeader}>In Progress</h3>
                        <ProgressComp
                            tasks={tasks}
                            handleOnDragOver={handleOnDragOver}
                            handleOnDrop={handleOnDrop}
                            handleOnDragStart={handleOnDragStart}
                        ></ProgressComp>
                    </Col>
                    <Col className={style.boardColumn}>
                        <h3 className={style.columnHeader}>Done</h3>
                        <DoneComp
                            tasks={tasks}
                            handleOnDragOver={handleOnDragOver}
                            handleOnDrop={handleOnDrop}
                            handleOnDragStart={handleOnDragStart}
                        ></DoneComp>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default App;
