//component for form
import React, { useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import style from "../Assets/css/FormComp.module.css";

const FormComp = () => {
    const handleSubmit = e => {
        e.preventDefault();
        console.log("submit clicked");
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
                    placeholder='Write your task...'
                    className={style.formInput}
                    onChange={e => console.log(e.target.value)}
                />
                <Button className={style.formButton} variant='light' type='submit'>
                    Add
                </Button>
            </Form>
        </>
    );
};

export default FormComp;
