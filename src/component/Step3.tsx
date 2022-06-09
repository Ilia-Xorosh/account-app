import React from "react";
import {Form} from "./Form";
import {MainContainer} from "./MainContainer";
import {Typography} from "@material-ui/core";
import {SubmitHandler, useForm} from "react-hook-form";
import {FileInput} from "./FileInput";
import {useNavigate} from "react-router-dom";
import {useDate} from "../DataContext";
import {PrimaryButton} from "./PrimaryButton";




export  const Step3 = () => {
    const navigate = useNavigate()
    const {data, setValues} = useDate()
    const {control, handleSubmit} = useForm({
        defaultValues: {
            files: data.files
        }
    })

    const onSubmit = (data) => {
        navigate("/step4")
        setValues(data)
    }
    return (
        <MainContainer>
            <Typography component="h2" variant="h5">Step 3</Typography>
        <Form onSubmit={handleSubmit(onSubmit)}>
            <FileInput name="files" control={control} />
            <PrimaryButton>Next</PrimaryButton>
        </Form>
        </MainContainer>
    )
}