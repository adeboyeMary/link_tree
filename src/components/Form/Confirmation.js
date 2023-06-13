import React from 'react';

import styles from './Confirmation.module.css';

const Confirmation = ({confirm}) => {
    return (
        <p className={styles.confirm}>{confirm}</p>
    )
};

export default Confirmation;