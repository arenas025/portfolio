import React, { useState } from 'react'
import useOnView from 'react-useonview';
import './Contact.scss'

export const Contact = () => {
    const [visible, setVisible]=useState(false)
    const trigger = useOnView(() => setVisible(true));

return (
    <div className='contact' id='contact'>
        <div className={ visible ? 'contact--container' : 'contact--container-noVisible'}>
            <h1 className='contact--container__title'>Get in touch!</h1>
            <div className='contact--container__info'>
                <div ref={trigger} className='contact--container__info--github'>
                    <a href='https://www.linkedin.com/in/sergio-arenas/'>
                        <img src='https://cdn-icons-png.flaticon.com/512/174/174857.png' />
                    </a>
                </div>
                <div className='contact--container__info--linkedin'>
                    <a href='https://github.com/arenas025'>
                        <img src='https://cdn-icons-png.flaticon.com/512/38/38401.png'/>    
                    </a>
                    
                </div>
                {/* <div className='contact--container__info--personalsite'>
                    <a href='https://sergioarenas.com/'>
                        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Logo_Sitio_Web.png/546px-Logo_Sitio_Web.png'/>
                    </a>
                    
                </div> */}
            </div>
            {/* <h2>... Or send me a message</h2> */}
        </div>
    </div>
)
}
