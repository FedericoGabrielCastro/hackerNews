import React, { useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useStyles } from '../styles/components/registerFormStyle'
import { Link, useNavigate } from 'react-router-dom';

import logo from '../assets/logo.png'
import { BsLinkedin, BsInstagram } from "react-icons/bs";

import { AddAccountAction } from '../redux/actions/addAccountAction'
import { SetSessionAction }from '../redux/actions/setSessionAction'

// Etionic social icons url
const urlLinkedIn = "https://www.linkedin.com/company/etionic/"
const urlInstagram = "https://www.instagram.com/etionic_arg/"
const urlEtionic = "https://etionic.com"

const RegisterForm = () => {
    const classes = useStyles()

    const [userName, setName] = useState("")
    const [email, setEmail] = useState("")
    
    const dispatch = useDispatch()

    const username = useSelector(store => store.SessionReducer)
    const accounts = useSelector(store => store.AccountsReducer)
    const navigate = useNavigate()
    
    // onSubmit form 
    const handleSubmit = useCallback(e => {
        e.preventDefault()
        dispatch(AddAccountAction({ userName: userName, email: email }))
        dispatch(SetSessionAction( username ))
        navigate("/login", {replace: false})
    }, [ userName, email ])

    return (
        <div className={classes.content}>
            <article  className={classes.contentForm} >
                <a href={urlEtionic} target="_blank">
                    <img className={classes.logo} 
                        src={logo} 
                        alt="img background"/>
                </a>
                <form className={classes.customForm} onSubmit={handleSubmit}>
                    <label htmlFor='userName'>Type your name: </label>
                    <input
                        type="text"
                        id="userName"
                        name="userName"
                        value={userName}
                        onChange={ e => setName(e.target.value)}
                        required
                        autoFocus />
                    <label htmlFor='email'>Email: </label>
                    <input 
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        onChange={ e => setEmail(e.target.value)}
                        required
                        />
                    <button
                        type='submit'
                        className={classes.registerBtn}> 
                        Register
                    </button>
                </form>
                {
                    accounts.length > 1 ? 
                        <Link to="/login"> Do you already have a user? </Link> 
                        : <div>register first</div>
                }
            </article>
            <hr className={classes.decorationHr}></hr>
            <article className={classes.socialMedia}>
                <a href={urlLinkedIn} target="_blank"> 
                    <BsLinkedin className={classes.socialIconL}/> 
                </a>
                <a href={urlInstagram} target="_blank">
                    <BsInstagram className={classes.socialIconI}/>
                </a>
            </article>
        </div>
    )
}

export default RegisterForm
