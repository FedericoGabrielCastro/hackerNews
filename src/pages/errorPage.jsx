import React from 'react'
import { useStyles } from '../styles/pagesStyle/errorPageStyle'

import { CgSmileSad } from "react-icons/cg";

const ErrorPage = () => {
    const classes = useStyles()

    return (
        <main className={classes.content}>   
            <section > 
                <CgSmileSad className={classes.customIcon}/>
                <h1> 404 </h1>
                <h3> Page not found</h3>
                <p> The page you are looking for doesn't exist or other error occurred. </p>
            </section>
        </main>
    )
}

export default ErrorPage
