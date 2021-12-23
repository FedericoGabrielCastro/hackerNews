import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { useStyles } from '../styles/components/userRegistedCardStyle'

import { FaUserTie } from "react-icons/fa";

import { UserLoginAction } from '../redux/actions/setUserAuthAction'

const UserRegistedCard = ({userName}) => {
    const classes = useStyles()

    const dispatch = useDispatch()

    const link = `/home/${userName}`

    return (
        <Link 
            to={link} 
            className={classes.contentCard}
            onClick={() => dispatch(UserLoginAction())}
            >
            <FaUserTie className={classes.userImg}/> 
            <span className={classes.userName}> { userName} </span>
        </Link>
    )
}

export default UserRegistedCard
