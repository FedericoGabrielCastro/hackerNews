//  If you want to change text slider go to ./src/styles/components/carrouselStyle.js

import React from 'react'
import { useStyles } from '../styles/components/carrouselStyle'

const Carrousel = () => {
    const classes = useStyles()

    return (
        <div className={classes.slider}>
            <h2 className={classes.title}></h2>
            <h2 className={classes.subtitle}></h2>
        </div>
    )
}

export default Carrousel
