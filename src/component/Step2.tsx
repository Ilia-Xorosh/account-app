import React from "react";
import { Form } from "./Form";
import {Input} from "./Input";
import {Checkbox, FormControlLabel, Typography} from "@material-ui/core";
import {PrimaryButton} from "./PrimaryButton";
import {SubmitHandler, useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";
import { MainContainer } from "./MainContainer";
import {object, string} from "yup";
import {yupResolver} from "@hookform/resolvers/yup/dist/yup";
import {parsePhoneNumberFromString} from "libphonenumber-js";
import {useDate} from "../DataContext";

type FormInput = {
    email: string
    hasPhone: boolean
    phoneNumber: number
}

const schema = object().shape({
    email: string().email("Email should have correct format").required("Email is a required field")
})

export const Step2 = () => {
    const navigate = useNavigate()
    const {data, setValues} = useDate()
    const {register, handleSubmit, formState: { errors }, watch} = useForm<FormInput>({
            defaultValues: {email: data.email, hasPhone: data.hasPhone, phoneNumber: data.phoneNumber},
            mode: "onBlur",
            resolver: yupResolver(schema)
        })


    const normalizePhoneNumber = (value: any) => {
        const phoneNumber = parsePhoneNumberFromString(value)
        if(!phoneNumber) {
            return value
        }
        return (
            phoneNumber.formatInternational()
        )
    }

    const hasPhone = watch("hasPhone")

    const onSubmit: SubmitHandler<FormInput> = (data) => {
        navigate("/step3")
        setValues(data)
    }
    return(
    <MainContainer>
        <Typography component="h2" variant="h5">Step 2</Typography>
        <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
            {...register("email")}
            id="email"
            type="email"
            label="Email"
            required
            error={!!errors.email} helperText={errors?.email?.message}/>
            <FormControlLabel
                control={
                <Checkbox defaultValue={data.hasPhone} defaultChecked={data.hasPhone} {...register("hasPhone")} color="primary"/>
                } label="Do you have a phone"/>
            {hasPhone && <Input {...register("phoneNumber")}  type="tel" label="Phone Number"
                                onChange={(event) => {
                                    event.target.value = normalizePhoneNumber(event.target.value)}}/>}
            <PrimaryButton>Next</PrimaryButton>
        </Form>
    </MainContainer>
    )}