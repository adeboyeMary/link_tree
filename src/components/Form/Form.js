import React, { useState } from 'react';

import Hr from '../UI/Hr';
import Button from '../UI/Button';
import styles from './Form.module.css';

const Form = () => {
    const [enteredEmail, setEnteredEmail] = useState('');
    const [error, setError] = useState(false);
    const [formWasTouched, setFormWasTouched] = useState(false);    

    const emailChangeHandler = (event) => {
        setEnteredEmail(event.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault();

        setFormWasTouched(true);

        if(enteredEmail.trim() === ""){
            setError(false);
            return;
        }
        setError(true);

        const myData = { email: enteredEmail };
        console.log(myData);
        setEnteredEmail('');
    }
    const errorMessage = !error && formWasTouched;
    return (
        <>
            <Hr />
            <form className={styles.form} onSubmit={submitHandler}>
                <p>Subscribe for updates</p>
                <input type='email'
                    placeholder='Enter your email'
                    onChange={emailChangeHandler}
                    value={enteredEmail} 
                />

                <Button type="submit">Subscribe</Button>
                {errorMessage && <p className={styles['err-text']}>Email cannot be empty</p>}
                {error && <p>Thank you for subscribing!</p>}
            </form>
        </>
    )
}

export default Form;