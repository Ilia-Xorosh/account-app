import React, {forwardRef} from "react";
import {TextField} from "@material-ui/core/";

type InputProps = React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
    >

export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {

    return(
        <TextField variant="outlined" margin="normal" inputRef={ref} fullWidth {...props} />
    )
})