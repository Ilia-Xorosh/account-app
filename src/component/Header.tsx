import React from "react";
import {makeStyles, Typography} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
      fontFamily: "Noto Serif",
      margin: theme.spacing(3, 0, 2),
      textAlign: "center",
      fontSize: "40px",
      color: "burlywood",
      textShadow: "1px 1px darkmagenta"
  }
}))

const Header = () => {
    const Styles = useStyles()
    return <Typography className={Styles.root} component="h1" variant="h5">Header</Typography>

}
export default Header