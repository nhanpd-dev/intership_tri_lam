import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useTranslation } from "react-i18next";
import Banner from "../../../assets/images/shopingcart.png";
import { SigninSchema } from "./schema";
import { Link } from "react-router-dom";
import { useGlobalStore } from "../../../hooks/useGlobal";
import { MailOutlined, LockOutlined } from "@ant-design/icons";
import {
  Container,
  WrapperImg,
  WrapperForm,
  FormLogin,
  FormItem,
  FlexItem,
  ButtonItem,
  ValidationError,
} from "./styled";

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
    loginUser(data);
  };

  return (
    <Container>
      <WrapperImg>
        <img src={Banner} alt='banner' />
      </WrapperImg>
      <WrapperForm>
        <FormLogin>
          <h2>{t("signIn")}</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormItem>
              <FlexItem>
                <p>
                  <MailOutlined className='email-icon' />
                  {t("email")}
                  <span>*</span>
                </p>
                <input
                  name='email'
                  type='text'
                  {...register("email")}
                  placeholder={t("email")}
                />
              </FlexItem>
              <ValidationError>
                {errors.email && t(errors.email?.message)}
              </ValidationError>
            </FormItem>
            <FormItem>
              <FlexItem>
                <p>
                  <LockOutlined className='lock-icon' />
                  {t("password")}
                  <span>*</span>
                </p>
                <input
                  name='passsword'
                  type='password'
                  {...register("password")}
                  placeholder={t("password")}
                />
              </FlexItem>
              <ValidationError>
                {errors.password && t(errors.password?.message)}
              </ValidationError>
            </FormItem>
            <ButtonItem>
              <button>{t("signIn")}</button>
            </ButtonItem>
            <FormItem>
              <p className='link'>
                {t("dont_have_account")}?
                <Link to='/register'>{t("signUp")}</Link>
              </p>
            </FormItem>
          </form>
        </FormLogin>
      </WrapperForm>
    </Container>
  );
}
