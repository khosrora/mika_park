"use client";
import ButtonCu from "@/app/components/common/ButtonCu";
import InputCu from "@/app/components/common/InputCu";
import TextareaCu from "@/app/components/common/TextareaCu";
import SkDives from "@/app/components/loading/SkDives";
import { fetcher, postDataAPI } from "@/utils/get_data";
import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import useSWR from 'swr'

function FormWork() {

  const {data , isLoading , error} = useSWR(['cooperation/types/'] , fetcher)

  const {
    register,
    handleSubmit,
    watch,
    reset , 
    formState: { errors },
  } = useForm();
  
  const onSubmit = async (data) => {
    try {
      const {status}  = await postDataAPI(['cooperation/send_request/'] , data)
      if(status === 201) {
        toast.success("پیام شما با موفقیت ارسال شد");
        reset();
      }
    } catch (error) {
      toast.error("مشکلی از سمت سرور رخ داده است")
    }
  };

  if (!!isLoading) return <SkDives />;
  if (error) return <p> {error.message} </p>;
  return (
    <div className="bg-white p-4 lg:rounded-md">
      <p>درخواست همکاری</p>
      <small className="text-xs font-light">
      برای تماس از راه های ارتباطی زیر می توانید استفاده نمایید .
      </small>
      <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4 grid-cols-1 lg:grid-cols-2">
      <label className="form-control w-full">
  <div className="label">
    <span className="label-text-alt">نوع همکاری</span>
  </div>
  <select name="type" {...register('type' , { required : {value : true , message : 'این فیلد الزامی است'} })} className="select select-bordered">
    <option disabled selected>نوع همکاری خود را مشخص کنید</option>
    {
      data.map(item => 
        <option value={item.id} key={item.id}> {item.title} </option>
        )
    }
  </select>
  <div className="label">
    <span className="label-text-alt text-red-700">{errors?.type?.message}</span>
  </div>
      </label>
      <InputCu
          title="نام "
          placeholder="نام خود را وارد نمایید"
          name="first_name"
          validation={...register("first_name" , { required : {value : true , message : 'این فیلد الزامی است' } })}
          errorMessage={errors?.first_name?.message}
        />
      <InputCu
          title="نام خانوادگی"
          placeholder="نام خانوادگی خود را وارد نمایید"
          name="last_name"
          validation={...register("last_name" , { required : {value : true , message : 'این فیلد الزامی است' } })}
          errorMessage={errors?.last_name?.message}
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
      {/* <InputCu
          title="فایل رزومه"
          placeholder="فایل رزومه خود را بارگذاری کنید"
          name="cv"
          type='file'
          validation={...register("cv" , { required : {value : true , message : 'این فیلد الزامی است' } })}
          errorMessage={errors?.cv?.message}
        /> */}
        <br />
     <TextareaCu
        title="متن پیام"
        placeholder="متن پیام خود را وارد نمایید"
        name="message"
        validation={...register("message" , { required : {value : true , message : 'این فیلد الزامی است' } })}
        errorMessage={errors?.message?.message}
        />
        <br />
        <ButtonCu type="submit" title='ثبت درخواست'  />
      </form>
    </div>
  );
}

export default FormWork;
