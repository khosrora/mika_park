"use client";
import ButtonCu from "@/app/components/common/ButtonCu";
import InputCu from "@/app/components/common/InputCu";
import TextareaCu from "@/app/components/common/TextareaCu";
import { postDataAPI } from "@/utils/get_data";
import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

function Form() {
  const {
    register,
    handleSubmit,
    watch,
    reset , 
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) =>  {
    try {
        const {status} = await postDataAPI(['siteinfo/critic/'] , data);

      if(status === 201) {
        toast.success("پیشنهاد شما با موفقیت ارسال شد")
        reset()
      }
    } catch (error) {
      toast.error("مجدد امتحان کنید")
    }
  };

  console.log(watch("example"));

  return  ( 
  <form onSubmit={handleSubmit(onSubmit)}>
  <InputCu
      title="نام و نام خانوادگی "
      placeholder="نام و نام خانوادگی خود را وارد نمایید"
      name="full_name"
      validation={...register("full_name" , { required : {value : true , message : 'این فیلد الزامی است' } })}
      errorMessage={errors?.full_name?.message}
    />
  <InputCu
      title="شماره موبایل"
      placeholder="شماره موبایل خود را وارد نمایید"
      name="phone"
      validation={...register("phone" , { required : {value : true , message : 'این فیلد الزامی است' } })}
      errorMessage={errors?.phone?.message}
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
    name="text"
    validation={...register("text" , { required : {value : true , message : 'این فیلد الزامی است' } })}
    errorMessage={errors?.text?.message}
    />
    <ButtonCu type="submit" title='ثبت درخواست'  />
  </form>
  );
}

export default Form;
