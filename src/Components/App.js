//main component for app
import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FormComp from "./FormComp";
import Card from "react-bootstrap/Card";

import style from "../Assets/css/App.module.css";

const App = () => {
    const [tasks, setTasks] = useState([]);
    console.log(tasks);

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
                                return (
                                    <Card className={style.cardStyle} key={taskIndex}>
                                        <Card.Body>{eachTask}</Card.Body>
                                    </Card>
                                );
                            })}
                        </div>
                    </Col>
                    <Col className={style.boardColumn}>
                        <h3 className={style.columnHeader}>In Progress</h3>
                        <div className={style.columnData}>
                            <Card className={style.cardStyle}>
                                <Card.Body>Task 04</Card.Body>
                            </Card>

                            <Card className={style.cardStyle}>
                                <Card.Body>Task 03</Card.Body>
                            </Card>

                            <Card className={style.cardStyle}>
                                <Card.Body>Task 05</Card.Body>
                            </Card>
                        </div>
                    </Col>
                    <Col className={style.boardColumn}>
                        <h3 className={style.columnHeader}>Done</h3>
                        <div className={style.columnData}>
                            <Card className={style.cardStyle}>
                                <Card.Body>Task 02</Card.Body>
                            </Card>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default App;
