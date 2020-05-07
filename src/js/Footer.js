import React from "react";

function Footer() {
    return (
        <footer className='footer '>
            <div className='container'>
                <div className=' contact'>
                    <p>Kontakt:</p>
                    <div className='mail'>
                        <a href='https://mail.google.com/mail/' target='_blank'>
                            <img src='../../src/images/Mail%20Icon.svg'
                                alt='Mail icon'/></a>
                        <span>zurek.alicja.zurek@gmail.com</span></div>
                </div>
                <div className='contact'>
                    <p>Media:</p>
                    <a href='https://www.linkedin.com/in/alicja-%C5%BCurek-33898a196/' target='_blank'>
                        <img src='../../src/images/linkedin.png' alt='LinkedIn icon'/></a>
                    <a href='https://github.com/abazurek' target='_blank'>
                        <img src='../../src/images/github.webp' alt='Github icon'/></a>
                </div>
            </div>
        </footer>
    )
}

export default Footer