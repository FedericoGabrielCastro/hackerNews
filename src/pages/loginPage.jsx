import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { useStyles } from '../styles/pagesStyle/loginPageStyle'

import UserRegistedCard from '../components/userRegistedCard'

const LoginPage = () => {
    const classes = useStyles()

    const usersLogin = useSelector(store => store.AccountsReducer)
    console.log(usersLogin)
    console.log(usersLogin.userName)

    return (
        <main className={classes.content}>
            <section> 
                <article className={classes.contentData}> 
                    <h1 className={classes.title}> Welcome Back ... </h1>
                    <div className={classes.alignUser}>
                        {
                            usersLogin.map((item, index) => {
                                return <UserRegistedCard 
                                    key={index} 
                                    userName={item.userName}/>
                            })
                        }
                    </div>
                    <Link to="/" className={classes.customButton}> + </Link>
                </article>  
            </section>
        </main>
    )
}

export default LoginPage
