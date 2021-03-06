import React, {useState} from "react";
import {useDate} from "../DataContext";
import {MainContainer} from "./MainContainer";
import {
    List, ListItem, ListItemIcon, ListItemText, makeStyles,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography
} from "@material-ui/core";
import { Link } from "react-router-dom";
import {InsertDriveFile} from "@material-ui/icons";
import {PrimaryButton} from "./PrimaryButton";
import Swal from "sweetalert2";

const useStyles = makeStyles({
    root: {
        marginBottom: "30px"
    },
    table: {
        marginBottom: "30px"
    }
})

export  const Result = () => {
    const [success, setSuccess] = useState(false);
    const { data } = useDate()
    const styles = useStyles()
    const entries = Object.entries(data).filter((entry) => entry[0] !== "files")
    const { files } = data


    const onSubmit = async () => {

        const res = await fetch("http://localhost:3000/register/", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
        })

        console.log(res)

            if (res.ok) {
            Swal.fire("Great job!", "success");
            setSuccess(true)
        }
    };

    if (success) {
        return
    }

    return (
        <>
            <MainContainer>
                <Typography component="h2" variant="h5">
                    📋 Form Values
                </Typography>
                <TableContainer className={styles.root} component={Paper}>
                    <Table className={styles.table} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Field</TableCell>
                                <TableCell align="right">Value</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {entries.map((entry) => (
                                <TableRow key={entry[0]}>
                                    <TableCell component="th" scope="row">
                                        {entry[0]}
                                    </TableCell>
                                    <TableCell align="right">{entry[1].toString()}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                {files && (
                    <>
                        <Typography component="h2" variant="h5">
                            📦 Files
                        </Typography>
                        <List>
                            {files.map((f, index) => (
                                <ListItem key={index}>
                                    <ListItemIcon>
                                        <InsertDriveFile />
                                    </ListItemIcon>
                                    <ListItemText primary={f.name} secondary={f.size} />
                                </ListItem>
                            ))}
                        </List>
                    </>
                )}
                <PrimaryButton onClick={onSubmit}>Submit</PrimaryButton>
                <Link to="/">Start over</Link>
            </MainContainer>
        </>
    )
}