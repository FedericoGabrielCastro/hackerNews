import React from 'react'
import { Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

import RegisterPage from '../pages/registerPage';
import LoginPage from '../pages/loginPage';
import FavoritesPage from '../pages/favoritesPage';
import NewsData from '../components/newsData'
import HomePage from '../pages/homePage';
import ErrorPage from '../pages/errorPage';

const CustomRoutes = () => {

    const userCheck = useSelector(state => state.UserAuthReducer)

    return (
        <Routes>
        <Route path="/" element={<RegisterPage />} exact/>
        <Route path="/login" element={<LoginPage />} exact/>
        <Route 
          path="/home/" 
          element={userCheck ? <HomePage /> : <RegisterPage />} 
          exact>
            <Route path=":user" element={<NewsData />}/>
            <Route path="favorites/:user" element={<FavoritesPage />}/>
        </Route>
        <Route path="*" element={<ErrorPage />}/>
      </Routes>
    )
}

export default CustomRoutes