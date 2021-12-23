import {makeStyles} from '@material-ui/core'

export const useStyles = makeStyles(({
    
    content: {
        display: "flex",
        height: "100vh",
        width: "100%",
        // alignContent: "center",
        alignItems: "center",
        justifyContent: "center",
    },
    title: {
        color: "#fff",
        fontSize: "2rem",
        '@media (max-width: 700px)': {
            fontSize: "1rem",
        }
    },
    contentData: {
        display: "flex",
        flexDirection: "column", 
        alignItems: "center"
    },
    customButton: {
        padding: "10px 20px",
        borderRadius: "16px",
        fontSize: "2rem",
        backgroundColor: "#262626",
        border: "1px solid #000",
        color: "#fff",
        textDecoration: "none"
    },
    alignUser: {
        display: "flex",
        flexDirection: "row", 
        alignItems: "center",
        justifyContent: "flex-start",
        gap: "10px",
        width: "70vh",
        overflow: "auto",
        '@media (max-width: 700px)': {
            width: "48vh"
        },
        '@media (max-width: 400px)': {
            flexDirection: "column",
            height: "50vh"
        }

    }
}))