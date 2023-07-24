import React, {Fragment} from 'react';

import Button from '../UI/Button';

const Links = () => {
    return (
        <React.Fragment>
            <a href="https://youtube.com/@maryadeboye5069">
                <Button>Support me</Button>
            </a>

            <a href="https://www.instagram.com/invites/contact/?i=5f0ohe5h7w8&utm_content=1lzlhqc">
                <Button>My instagram</Button>
            </a>
            
            <a href="https://wa.me/+2347067313558">
                <Button><i className=""></i>Whatsapp</Button>
            </a>
        </React.Fragment>
    )
}

export default Links;