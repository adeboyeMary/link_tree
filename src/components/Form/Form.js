import React, { useState } from 'react';

import Hr from '../UI/Hr';
import Button from '../UI/Button';
import Confirmation from './Confirmation';
import styles from './Form.module.css';

const Form = () => {
    const [enteredEmail, setEnteredEmail] = useState('');
    const [confirm, setConfirm] = useState('');
    // const [error, setError] = useState('');

    const emailChangeHandler = (event) => {
        setEnteredEmail(event.target.value);
        // console.log('working!!!');
    }

    const submitHandler = (event) => {
        event.preventDefault();

        const confirmMessage= enteredEmail ? 'Thank you!' : '';

        setConfirm(confirmMessage);

        const myData = { email: enteredEmail };
        console.log(myData);
        setEnteredEmail('');
    }

    return (
        <>
            <Hr />
            <form className={styles.form} onSubmit={submitHandler}>
                <p>Subscribe for updates</p>
                <input 
                    placeholder='Enter your email'
                    onChange={emailChangeHandler}
                    value={enteredEmail} 
                />

                <Button type="submit">Subscribe</Button>
            </form>
            
            <Confirmation confirm={confirm}/>
        </>
    )
}

export default Form;