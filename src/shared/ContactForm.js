import React, { useState } from 'react'
import { sendContactEmail } from './api';

const ContactForm = () => {
    const [name, changeName] = useState('')
    const [email, changeEmail] = useState('')
    const [reason, changeReason] = useState('')
    const [isHuman, changeIsHuman] = useState(false)
    const [emailSent, setEmailSent] = useState(false)

    const submitForm = (e) => {
        e.preventDefault()
        sendContactEmail({ name, email, reason }).then(res=>console.log(res))
    }
    const validForm = ()=>{

    }
    const sendTargetValue = (fn) => (e) => fn(e.target.value)

    return (
        <form onSubmit={ submitForm }>
            <div className="header">Contact Me</div>
            <div className="input-field">
                <i className="material-icons prefix">face</i>
                <input type="text" value={name} onChange={sendTargetValue(changeName)} placeholder="Name"/>
            </div>
            <div className="input-field">
                <div className="material-icons prefix">mail</div>
                <input type="email" value={email} placeholder={'Email'} onChange={sendTargetValue(changeEmail)} />
            </div>
            <div className="input-field">
                <textarea name="reason" id="reason" cols="30" rows="10" onChange={sendTargetValue(changeReason)} value={ reason } className={'white-text materialize-textarea'}></textarea>
                <label htmlFor="reason" className={'white-text'}>Reason for contacting me?!</label>
            </div>
            <div className={'b-validation'}>
                <label className={'white-text'}> Click The Thumbs Up </label>
                <button className={'btn'} type={'button'} onClick={()=>{ changeIsHuman(true) }}> <i className="material-icons">thumb_up</i> </button>
                <button className={'btn'} type={'button'} onClick={()=>{ changeIsHuman(false) }}> <i className="material-icons">thumb_down</i> </button>
            </div>
            <button className={'btn'} type="submit" disabled={!isHuman}>Send It</button>
        </form>
    )
}

export default ContactForm