import {makeStyles} from '@material-ui/core'

export const useStyles = makeStyles(({

    content: {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100vh",
        backgroundPositionX: "center",
        overflow: "hidden",
        background: "#000",
        zIndex: "-1000",    
    },
    bg: {
        objectFit: "cover",
        opacity: ".4"
    },

}))