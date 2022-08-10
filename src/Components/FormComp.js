//component for form
import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import style from "../Assets/css/FormComp.module.css";

const FormComp = ({ tasks, setTasks }) => {
    const [inputValue, setInputValue] = useState("");

    const handleSubmit = e => {
        e.preventDefault();

        if (inputValue) {
            setTasks(tasks => {
                return [...tasks, inputValue];
            });
        }
    };

    useEffect(() => {
        console.log("inside form useEffect");
    }, []);

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
