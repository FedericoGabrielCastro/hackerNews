import React from 'react'
import { NavLink, Link, useParams, Outlet } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { useStyles } from '../styles/pagesStyle/homePageStyle'

import { BsArrowRepeat } from "react-icons/bs";
import { FaUserTie } from "react-icons/fa";

import { UserLogoutAction } from '../redux/actions/setUserAuthAction'

const HomePage = () => {
    const classes = useStyles()
    const { user } = useParams()

    const dispatch = useDispatch()

    return (
        <main className={classes.content}> 
            <section className={classes.contentData}>
                <article className={classes.userInfoContet}>
                    <FaUserTie className={classes.userImg}/>
                    <h1 className={classes.userName}> Bienvenido { user } </h1>
                </article>
                <article className={classes.boxInfoContent}>
                    <div className={classes.alingLinks}> 
                        <NavLink 
                            className={(props) => {
                                return `${props.isActive ? classes.activeLink : classes.disable}`
                            }}
                            to={`/home/${user}`} >
                            News 
                        </NavLink>
                        <NavLink 
                            className={(props) => {
                                return `${props.isActive ? classes.activeLink : classes.disable}`
                            }}
                            
                            to={`/home/favorites/${user}`}>
                            Favorites 
                        </NavLink>
                    </div>
                    <div className={classes.alingDataInteractive}>
                        <Outlet />
                    </div>
                </article>
            </section>
            <Link 
                to="/" 
                className={classes.changeUserContent} 
                onClick={() => dispatch(UserLogoutAction())}
                >
                <BsArrowRepeat className={classes.iconChange}/>
                <h4 className={classes.changeUserTitle}> Logout</h4>
            </Link>
        </main>
    )
}

export default HomePage
