"use client";
import ButtonCu from "@/app/components/common/ButtonCu";
import InputCu from "@/app/components/common/InputCu";
import TextareaCu from "@/app/components/common/TextareaCu";
import React from "react";
import { useForm } from "react-hook-form";

function Form() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  console.log(watch("example"));

  return  ( 
  <form onSubmit={handleSubmit(onSubmit)}>
  <InputCu
      title="نام و نام خانوادگی "
      placeholder="نام و نام خانوادگی خود را وارد نمایید"
      name="firstName"
      validation={...register("firstName" , { required : {value : true , message : 'این فیلد الزامی است' } })}
      errorMessage={errors?.firstName?.message}
    />
  <InputCu
      title="شماره موبایل"
      placeholder="شماره موبایل خود را وارد نمایید"
      name="phone_number"
      validation={...register("phone_number" , { required : {value : true , message : 'این فیلد الزامی است' } })}
      errorMessage={errors?.phone_number?.message}
    />
  <InputCu
      title="پست الکترونیک"
      placeholder="پست الکترونیک خود را وارد نمایید"
      name="email"
      validation={...register("email" , { required : {value : true , message : 'این فیلد الزامی است' } })}
      errorMessage={errors?.email?.message}
    />
 <TextareaCu
    title="متن پیام"
    placeholder="متن پیام خود را وارد نمایید"
    name="desc"
    validation={...register("desc" , { required : {value : true , message : 'این فیلد الزامی است' } })}
    errorMessage={errors?.desc?.message}
    />
    <ButtonCu type="submit" title='ثبت درخواست'  />
  </form>
  );
}

export default Form;
