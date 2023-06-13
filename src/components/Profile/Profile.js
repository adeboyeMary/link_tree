import {React} from 'react';

import styles from './Profile.module.css';
import me from './img.jpg';
// import me from './components/img.jpg';

const Profile = () => {
    return (
        <div className={styles.profContainer}>
            <div><img src={me} alt="Me! "/></div>
            <h1 className="mt-3 mb-2 fw-bold">Mary Adeboye</h1>
            <p className="edit-top">Here are my links:</p>
        </div>
    )
}

export default Profile;