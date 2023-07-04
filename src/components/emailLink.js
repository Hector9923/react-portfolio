import React from 'react';

const EmailLink = ({ email, subject, body }) => {
    // Replace `email`, `subject`, and `body` with your desired values

    // Create the mailto URL with email, subject, and body parameters
    const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    return (
        <a className='contact-link' href={mailtoUrl}>
            h.manuel2311@hotmail.com
        </a>
    );
};

export default EmailLink;