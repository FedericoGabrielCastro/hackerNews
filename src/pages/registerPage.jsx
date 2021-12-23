import React from 'react'
import { useStyles } from '../styles/pagesStyle/registerPageStyle'

import Carrousel from '../components/carrousel'
import RegisterForm from '../components/registerForm'

const RegisterPage = () => {
    const classes = useStyles()

    return (
        <main className={classes.content}>
            <section className={classes.boxContent}>
                <article className={classes.carruselContent}>
                    <Carrousel />
                </article>
                <aside className={classes.formRegisterContent}>
                    <RegisterForm />
                </aside>
            </section>
            
        </main>
    )
}

export default RegisterPage
