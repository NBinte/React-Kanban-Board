//component for form
import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";

import style from "../Assets/css/FormComp.module.css";

const FormComp = ({ tasks, setTasks }) => {
    const [inputValue, setInputValue] = useState("");

    const handleSubmit = e => {
        e.preventDefault();

        if (inputValue) {
            let taskObject = { name: inputValue, category: "todo" };

            const requestResponse = () => {
                return axios
                    .post(
                        "http://127.0.0.1:8000/api/saveTask/" +
                            taskObject.name +
                            "/" +
                            taskObject.category
                    )
                    .then(response => {
                        return response;
                    })
                    .catch(error => {
                        return error;
                    });
            };

            const getResponse = async () => {
                let response = await requestResponse();

                if (response.data !== "exists") {
                    let newTask = response.data;
                    setTasks(tasks => {
                        return [...tasks, ...newTask];
                    });
                }
            };

            getResponse();
        }
    };

    return (
        <>
            <Form className={style.formClass} onSubmit={handleSubmit}>
                <Form.Control
                    id='task'
                    name='task'
                    type='text'
                    value={inputValue}
                    placeholder='Write your task...'
                    className={style.formInput}
                    onChange={e => {
                        setInputValue(prevValue => {
                            return e.target.value;
                        });
                    }}
                />
                <Button className={style.formButton} variant='light' type='submit'>
                    Add
                </Button>
            </Form>
        </>
    );
};

export default FormComp;
