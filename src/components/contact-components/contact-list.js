import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function ContactList({icon, link, title}) {
    return (
        <li className={title} >
            <a href={link} target='_blank' rel='noreferrer' className='contact-link'>
                <FontAwesomeIcon icon={icon} className='contacts-icon'/>
                <span className='contacts-icon-txt'>{title}</span>
            </a>
        </li>
    )
}

export default ContactList;