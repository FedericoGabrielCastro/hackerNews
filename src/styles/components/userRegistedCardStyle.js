import {makeStyles} from '@material-ui/core'

export const useStyles = makeStyles(({
    
    contentCard: {
        display: "flex",
        flexDirection: "column", 
        alignItems: "center",
        gap: "10px",
        padding: "20px",
        marginBottom: "10px",
        border: "1px solid #000",
        borderRadius: "16px",
        backgroundColor: "#262626",
        minWidth: "100px",
        textDecoration: "none"
    },
    userImg: {
        fontSize: "50px",
        color: "#000",
        '@media (max-width: 700px)': {
            fontSize: "20px",
        },
        '@media (max-width: 530px)': {
            display: "none"
        }
    },
    userName: {
        color: "#fff",
        fontSize: "1rem",
        '@media (max-width: 700px)': {
            fontSize: ".5rem",
        }
    },
}))