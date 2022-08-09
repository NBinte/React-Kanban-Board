//main component for app
import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FormComp from "./FormComp";

import style from "../Assets/css/App.module.css";

const App = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        console.log("inside app useeffect");
    }, []);

    return (
        <>
            <Container fluid className={style.app}>
                <Row>
                    <FormComp></FormComp>
                </Row>
            </Container>
        </>
    );
};

export default App;
