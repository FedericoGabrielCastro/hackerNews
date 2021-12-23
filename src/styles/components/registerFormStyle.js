import {makeStyles} from '@material-ui/core'

export const useStyles = makeStyles(({

    content: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-around",
        height: "100%",
    },
    contentForm: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "10px",
        color: "#fff",
        "& input": {
            backgroundColor: "#262626",
            borderRadius: "16px",
            border: "1px solid #000",
            padding: "5px",
            color: "#fff",
        }
    },
    logo: {
        height: "100px",
        width: "100px",
        '&:hover': {
            transform: "scale(1.2)",
            transitionDuration: "2s"
        }
    },
    customForm: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "10px"
    },
    decorationHr: {
        backgroundColor: "#000",
        width: "80%",
        height: "1px",
        border: "none"
    },
    registerBtn: {
        backgroundColor: "#262626",
        color: "#fff",
        padding: "10px",
        border: "2px solid #000",
        borderRadius: "16px",
        width: "50%"
    },
    socialMedia: {
        display: "flex",
        width: "50%",
        alignItems: "center",
        alignContent: "center",
        justifyContent: "space-around",
        justifyItems: "space-around",
        gap: "10px"
    },
    socialIconL: {
        fontSize: "50px",
        color: "#337Ab7"
    },
    socialIconI: {
        fontSize: "50px",
        color: "#337"
    }
}))