import {makeStyles} from '@material-ui/core'

export const useStyles = makeStyles(({
    
    slider: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        textAlign: 'center',
        color: "#fff",
        height: "100%",
    },
    title: {
        fontSize: "2em",
        textTransform: "uppercase",
        letterSpacing: "4px",
        "&::before": {
            content: "''",
            animation: `$changeTitle 4s linear infinite`,
            color:  "red"     
        },
    },
    subtitle: {
        fontSize: "1.5em",
        textTransform: "uppercase",
        letterSpacing: "2px",
        "&::before": {
            content: "''",
            animation: `$changeSubTitle 5s linear infinite`
        }
    },
    // Animation and change text content
    "@keyframes changeTitle": {
        "0%, 100%": {
            content: "'ETIONIC'"
        },
        "30%,": {
            content: "'We code'"
        },
        "70%": {
            content: "'We love'"
        }
    },
    "@keyframes changeSubTitle": {
        "0%, 100%": {
            content: "'software solution'"
        },
        "30%": {
            content: "'for you'"
        },
        "70%": {
            content: "'developing'"
        }
    }
}))