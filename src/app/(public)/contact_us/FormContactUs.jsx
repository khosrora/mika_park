"use client";
import React from "react";

import TitleSection from "@/app/components/common/TitleSection";
import { useForm } from "react-hook-form";
import InputCu from "@/app/components/common/InputCu";
import ButtonCu from "@/app/components/common/ButtonCu";
import TextareaCu from "@/app/components/common/TextareaCu";

function FormContactUs() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit =  (data) => console.log(data);
  return (
    <div className="space-y-4 lg:w-1/2">
      <TitleSection title="ارسال درخواست" />

      <form onSubmit={handleSubmit(onSubmit)} className="w-full">
        <InputCu
          title="نام ونام خانوادگی"
          placeholder="نام و نام خانوادگی خود را وارد نمایید"
          name="fullname"
          validation={...register("fullname" , { required : {value : true , message : 'این فیلد الزامی است' } })}
          errorMessage={errors?.fullname?.message}
        />
        <InputCu
          title="شماره تماس"
          placeholder="شماره تماس خود را وارد نمایید"
          name="phone_number"
          validation={...register("phone_number" , { required : {value : true , message : 'این فیلد الزامی است' } })}
          errorMessage={errors?.phone_number?.message}
        />
        <TextareaCu
        title="متن پیام"
        placeholder="متن پیام خود را وارد نمایید"
        name="desc"
        validation={...register("desc" , { required : {value : true , message : 'این فیلد الزامی است' } })}
        errorMessage={errors?.desc?.message}
        />
        <ButtonCu type='submit' title='ارسال درخواست' />
      </form>
    </div>
  );
}

export default FormContactUs;
