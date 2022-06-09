import React from "react";
import {Container, makeStyles} from "@material-ui/core";

const useStales = makeStyles((theme) => ({
    root: {
        marginTop: theme.spacing(4),
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    }
}))

export const MainContainer = ({children, ...props}: any) => {
    const Styles = useStales()

    return (
    <Container className={Styles.root} container="main" maxWidth="xs" {...props}>
        {children}
    </Container>
)
}