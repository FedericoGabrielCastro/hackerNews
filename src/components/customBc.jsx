import React from 'react'
import background from '../assets/bc.jpeg'
import { useStyles } from '../styles/components/backgroundStyle'

const CustomBackground = () => {
    const classes = useStyles()

    return (
        <section className={classes.content}>
            <img className={classes.bg} 
                src={background} 
                alt="img background"/>
        </section>
    )
}

export default CustomBackground