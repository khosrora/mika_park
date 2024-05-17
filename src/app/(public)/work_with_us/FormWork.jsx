"use client";
import ButtonCu from "@/app/components/common/ButtonCu";
import InputCu from "@/app/components/common/InputCu";
import TextareaCu from "@/app/components/common/TextareaCu";
import React from "react";
import { useForm } from "react-hook-form";

function FormWork() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

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
  <select {...register('type' , { required : {value : true , message : 'این فیلد الزامی است'} })} className="select select-bordered">
    <option disabled selected>نوع همکاری خود را مشخص کنید</option>
    <option>Star Wars</option>
    <option>Harry Potter</option>
    <option>Lord of the Rings</option>
    <option>Planet of the Apes</option>
    <option>Star Trek</option>
  </select>
  <div className="label">
    <span className="label-text-alt text-red-700">{errors?.lastName?.message}</span>
  </div>
      </label>
      <InputCu
          title="نام "
          placeholder="نام خود را وارد نمایید"
          name="firstName"
          validation={...register("firstName" , { required : {value : true , message : 'این فیلد الزامی است' } })}
          errorMessage={errors?.firstName?.message}
        />
      <InputCu
          title="نام خانوادگی"
          placeholder="نام خانوادگی خود را وارد نمایید"
          name="lastName"
          validation={...register("lastName" , { required : {value : true , message : 'این فیلد الزامی است' } })}
          errorMessage={errors?.lastName?.message}
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
      <InputCu
          title="فایل رزومه"
          placeholder="فایل رزومه خود را بارگذاری کنید"
          name="file"
          type='file'
          validation={...register("file" , { required : {value : true , message : 'این فیلد الزامی است' } })}
          errorMessage={errors?.file?.message}
        />
     <TextareaCu
        title="متن پیام"
        placeholder="متن پیام خود را وارد نمایید"
        name="desc"
        validation={...register("desc" , { required : {value : true , message : 'این فیلد الزامی است' } })}
        errorMessage={errors?.desc?.message}
        />
        <br />
        <ButtonCu type="submit" title='ثبت درخواست'  />
      </form>
    </div>
  );
}

export default FormWork;
