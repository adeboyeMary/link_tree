import React, { useState } from 'react';

import Hr from '../UI/Hr';
import Button from '../UI/Button';
// import Confirmation from './Confirmation';
import styles from './Form.module.css';

const Form = (props) => {
    const [enteredEmail, setEnteredEmail] = useState('');
    

    const emailChangeHandler = (event) => {
        setEnteredEmail(event.target.value);
        // console.log('working!!!');
    }

    const submitHandler = (event) => {
        event.preventDefault();

        
        const myData = { email: enteredEmail };
        console.log(myData);
        setEnteredEmail('');
    }
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
                {/* {message && <p>Thank you for subscribing!</p>} */}
            </form>
            
            {/* <Confirmation confirm={confirm}/> */}
        </>
    )
}

export default Form;