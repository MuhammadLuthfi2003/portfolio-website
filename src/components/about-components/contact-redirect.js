import React from 'react';

function redirect(link) {
    window.location.href = link;
}

function ContactRedirect() {
    return (
        <div>
            <div className='contact-redirect-container'>
                <div className='contact-redirect-header'>
                    Get To Know More About Me Here ⬇️⬇️⬇️
                </div>
                <div className='contact-redirect-content'>
                    <button className='contact-redirect-button' onClick={() => redirect('/contact')}>
                        My Contacts
                    </button>   
                </div>
            </div>
        </div>
    )
}

export default ContactRedirect;