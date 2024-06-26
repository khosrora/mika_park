"use client";
import React from "react";

import TitleSection from "@/app/components/common/TitleSection";
import { useForm } from "react-hook-form";
import InputCu from "@/app/components/common/InputCu";
import ButtonCu from "@/app/components/common/ButtonCu";
import TextareaCu from "@/app/components/common/TextareaCu";
import { toast } from "sonner";
import { postDataAPI } from "@/utils/get_data";

function FormContactUs() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset
  } = useForm();
  const onSubmit = async (data) => {
    try {
      const {status}  = await postDataAPI(['contactus/message/'] , data)
      if(status === 201) {
        toast.success("پیام شما با موفقیت ارسال شد");
        reset();
      }
    } catch (error) {
      toast.error("مشکلی از سمت سرور رخ داده است")
    }
  };
  return (
    <div className="space-y-4 lg:w-1/2">
      <TitleSection title="ارسال درخواست" />

      <form onSubmit={handleSubmit(onSubmit)} className="w-full">
        <InputCu
          title="نام ونام خانوادگی"
          placeholder="نام و نام خانوادگی خود را وارد نمایید"
          name="full_name"
          validation={...register("full_name" , { required : {value : true , message : 'این فیلد الزامی است' } })}
          errorMessage={errors?.full_name?.message}
        />
        <InputCu
          title="شماره تماس"
          placeholder="شماره تماس خود را وارد نمایید"
          name="phone"
          validation={...register("phone" , { required : {value : true , message : 'این فیلد الزامی است' }, 
          pattern:{ value: /^09([0-9][0-9]|3[1-9]|2[1-9])-?[0-9]{3}-?[0-9]{4}/, message: 'شماره تماس شما معتبر نیست' } })}
          errorMessage={errors?.phone?.message}
        />
        <TextareaCu
        title="متن پیام"
        placeholder="متن پیام خود را وارد نمایید"
        name="text"
        validation={...register("text" , { required : {value : true , message : 'این فیلد الزامی است' } })}
        errorMessage={errors?.text?.message}
        />
        <ButtonCu type='submit' title='ارسال درخواست' />
      </form>
    </div>
  );
}

export default FormContactUs;
