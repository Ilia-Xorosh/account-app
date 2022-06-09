import React, {FC} from "react";
import { MainContainer } from "./MainContainer";
import {Typography} from "@material-ui/core";
import { Form } from "./Form";
import {SubmitHandler, useForm} from "react-hook-form";
import {PrimaryButton} from "./PrimaryButton";
import {Input} from "./Input";
import {object, string} from "yup";
import {yupResolver} from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import {useDate} from "../DataContext";

type FormInput = {
    firstname: string
    lastname: string
}

const schema = object().shape({
    firstname: string().required("name is required"),
    lastname: string().required("name is required")
})

export const Step1 = () => {
  const navigate = useNavigate()
  const {data, setValues} = useDate()
  const {register, handleSubmit, formState: { errors }} = useForm<FormInput>({
      defaultValues: {firstname: data.firstname, lastname: data.lastname},
      mode: "onBlur",
      resolver: yupResolver(schema)
    })

    const onSubmit: SubmitHandler<FormInput> = (data) => {
        navigate("/step2")
        setValues(data)
    }
    return (
        <MainContainer>
            <Typography component="h2" variant="h5">Step 1</Typography>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Input {...register("firstname")}
                       id="firstname"
                       type="text"
                       label="First Name"
                       error={!!errors.firstname}
                       helperText={errors?.firstname?.message}/>
                <Input {...register("lastname")}
                       id="lastname"
                       type="text"
                       label="Last Name"
                       errors={!!errors.lastname}
                       helperText={errors?.lastname?.message}/>
                <PrimaryButton>Next</PrimaryButton>
            </Form>
        </MainContainer>
    )
}