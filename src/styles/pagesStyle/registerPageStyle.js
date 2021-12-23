import {makeStyles} from '@material-ui/core'

export const useStyles = makeStyles(({
    
    content: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "transparet",
        height: "100vh",
        zIndex: "100"
    },
    boxContent: {
        display: "flex",
        flexDirection: "row",
        borderRadius: "16px",
        height: "80vh",
        width: "80%",
        gap: "10px",
    },
    carruselContent: {
        width: "50%",
        '@media (max-width: 700px)': {
            display: "none",
        }
    },
    formRegisterContent: {
        border: "2px solid  #000",
        background: "rgba(255,255,255,0.1)",
        borderRadius: "16px",
        height: "100%",
        width: "50%",
        '@media (max-width: 700px)': {
            width: "100%",
        }
    },
    bg: {
        height: "auto",
        width: "100%",
        zIndex: 1000
    },
}))