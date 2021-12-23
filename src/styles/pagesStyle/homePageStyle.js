import {makeStyles} from '@material-ui/core'

export const useStyles = makeStyles(({
    
    content: {
        display: "flex",
        flexDirection: "row",
        width: "100%",
        backgroundColor: "transparet",
        height: "100vh",
        zIndex: "100"
    },
    contentData: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        gap: "20px"
    },
    userInfoContet: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        alignContent: "center",
    },
    userImg: {
        fontSize: "50px",
        color: "#fff"
    },
    userName: {
        color: "#fff",
        fontSize: "1rem",
    },
    boxInfoContent: {
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        width: "80%",
        height: "60vh",
        borderRadius: "16px",
        border: "2px solid  #000",
        background: "rgba(255,255,255,0.1)",
        color: "#fff",
    },
    alingLinks: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        padding: "10px",
        "& a": {
            color: "#fff",
            fontSize: "1.2rem"
        }
    },
    activeLink: {
        // textTransform: "uppercase",
        // letterSpacing: "5px"
    },
    disable: {
        opacity: 0.2,
        textDecoration: "none"
    },
    alingDataInteractive: {
        display: "flex",
        flexDirection: "column",
        height: "100%",
        overflow: " hidden scroll",
        margin: "20px",
        gap: "10px",
    },
    changeUserContent: {
        position: "absolute",
        widht: "-100%",
        padding: "5px",
        margin: "10px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-end",
        alignItems: "center",
        gap: "10px",
        textDecoration: "none"
    },
    iconChange: {
        color: "#fff",
        fontSize: "20px"
    },
    changeUserTitle: {
        color: "#fff",
        fontSize: "0.5rem"
    }
}))