import {makeStyles} from '@material-ui/core'

export const useStyles = makeStyles(({
    
    content: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        width: "90%",
        border: "1px solid #000",
        borderRadius: "16px",
        margin: "10px",
        overflow: "hidden",
        "& h3": {
            '@media (max-width: 700px)': {
                fontSize: ".4rem"
            }
        }
    },
    customButton: {
        border: "1px solid #fff",
        borderRadius: "16px",
        backgroundColor: "transparent",
        color: "#fff",
        fontSize: "1rem",
        '@media (max-width: 700px)': {
            fontSize: ".4rem"
        }
    }
}))