import React, { useEffect, useCallback} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useStyles } from '../styles/components/newsDataStyle'

import { getAPiAction } from '../redux/actions/exampleApiAction'
import { AddFavoriteNewsAction } from '../redux/actions/addFavoritesNewsAction'

const NewsData = () => {
    const classes = useStyles()

    const dispatch = useDispatch()

    const GetApiInfo = useSelector(store => store.getApiReducer.info)
    console.log("ACAAA", GetApiInfo)

    useEffect(() => {
        dispatch(getAPiAction())
    }, [])
 
    // IN PROGRESS -----------------------------------------
    const addToFavorites = useCallback(()  => {
        dispatch(AddFavoriteNewsAction( {favorites: ""}))
    }, [])
    // IN PROGRESS -----------------------------------------

    return (
        <div>
            {
                GetApiInfo.map((item ) => {
                    return (
                        <div key={item.id} className={classes.content}>
                        <h3> {item.name} </h3>
                        <button 
                            className={classes.customButton}
                            onClick={addToFavorites(item.id)}> 
                            add + 
                        </button>
                    </div>
                    ) 
                })
            }
        </div>
    )
}

export default NewsData
