import React from "react";
import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%",
        marginTop: theme.spacing(1),
        textAlign: "center"
    }
}))

export const Form = ({children, ...props}: any) => {
    const Styles = useStyles()
    return (
        <form className={Styles.root} noValidate {...props}>{children}</form>
    )
}