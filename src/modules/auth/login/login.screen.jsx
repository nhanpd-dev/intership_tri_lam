import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Banner from "../../../assets/images/shopingcart.png";
import { Wrapper } from "./styled";
import { SigninSchema } from "./schema";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useGlobalStore } from "../../../hooks/useGlobal";
import { notification } from "antd";
import { MailOutlined, LockOutlined } from "@ant-design/icons";
export default function LoginScreen() {
  const { loginUser } = useGlobalStore();
  const { t } = useTranslation(["login"]);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(SigninSchema),
  });
  const onSubmit = (data) => {
    loginUser(
      data,
      () => {
        notification.success({
          message: t("success"),
          duration: 2,
        });
      },
      () => {
        notification.error({
          message: t("fail"),
          duration: 2,
        });
      }
    );
  };

  return (
    <Wrapper>
      <section>
        <div className='imgBx'>
          <img src={Banner} alt='banner' />
        </div>
        <div className='contentBx'>
          <div className='formBx'>
            <h2>{t("signIn")}</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className='inputBx'>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <span>
                    <MailOutlined style={{ marginRight: 10 }} />
                    Email<p style={{ color: "red" }}>*</p>
                  </span>
                  <input
                    name='email'
                    type='text'
                    {...register("email")}
                    placeholder='Email'
                  />
                </div>
                <div className='error'>
                  {errors.email ? t(errors.email?.message) : ""}
                </div>
              </div>
              <div className='inputBx'>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <span>
                    <LockOutlined style={{ marginRight: 10 }} />
                    {t("password")}
                    <p style={{ color: "red" }}>*</p>
                  </span>
                  <input
                    className='title-input'
                    name='passsword'
                    type='password'
                    {...register("password")}
                    placeholder={t("password")}
                  />{" "}
                </div>

                <div className='error'>
                  {errors.password ? t(errors.password?.message) : ""}
                </div>
              </div>
              <div
                className='inputBx'
                style={{ display: "flex", justifyContent: "flex-end" }}
              >
                <input type='submit' value={t("signIn")} />
              </div>
              <div className='inputBx'>
                <p>
                  {t("hasAccout")}?<Link to='/register'>{t("signUp")}</Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>
      ;
    </Wrapper>
  );
}
