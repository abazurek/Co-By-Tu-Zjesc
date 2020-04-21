import React, {Component, useState, useEffect} from "react";

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
                    <a href='https://www.facebook.com/' target='_blank'>
                        <img src='../../src/images/Facebook.svg' alt='Facebook icon'/></a>
                    <a href='https://twitter.com/?lang=pl' target='_blank'>
                        <img src='../../src/images/Twitter.svg' alt='Twitter icon'/></a>
                </div>
            </div>
        </footer>
    )
}

export default Footer