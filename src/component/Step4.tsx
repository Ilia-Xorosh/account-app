import {object, ref, string} from "yup";
import {useNavigate} from "react-router-dom";
import {useDate} from "../DataContext";
import {SubmitHandler, useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {MainContainer} from "./MainContainer";
import {Typography} from "@material-ui/core";
import {Form} from "./Form";
import {Input} from "./Input";
import {PrimaryButton} from "./PrimaryButton";
import React from "react";


type FormInput = {
    password: string
    confirmPassword: string
}

const schema = object().shape({
    password: string().required("name is required"),
    confirmPassword: string().oneOf([ref("password")], "Passwords do not match")
})

export const Step4 = () => {
    const navigate = useNavigate()
    const {data, setValues} = useDate()
    const {register, handleSubmit, formState: { errors }} = useForm<FormInput>({
        defaultValues: {password: data.password, confirmPassword: data.confirmPassword},
        mode: "onBlur",
        resolver: yupResolver(schema)
    })

    const onSubmit: SubmitHandler<FormInput> = (data) => {
        navigate("/result")
        setValues(data)
    }
    return (
        <MainContainer>
            <Typography component="h2" variant="h5">Step 1</Typography>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Input {...register("password")}
                       id="password"
                       type="password"
                       label="Password"
                       error={!!errors.password}
                       helperText={errors?.password?.message}/>
                <Input {...register("confirmPassword")}
                       id="confirmPassword"
                       type="password"
                       label="Confirm Password"
                       error={!!errors.confirmPassword}
                       helperText={errors?.confirmPassword?.message}/>
                <PrimaryButton>Next</PrimaryButton>
            </Form>
        </MainContainer>
    )
}