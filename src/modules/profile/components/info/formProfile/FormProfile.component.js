import React, { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import {
  UserOutlined,
  MailOutlined,
  PhoneOutlined,
  CalendarOutlined,
  HeartOutlined,
  AuditOutlined,
  EditOutlined,
} from '@ant-design/icons';
import { Row, Col, Radio, Form, Image, Typography, Spin } from 'antd';

import { PrimaryButton } from '../../../../../components/button';
import toastHook from '../../../../../hooks/toastHook';
import { upload } from '../../../../../config/firebase/firebase';
import { useAuthStore } from '../../../../../hooks/useAuth';
import { ProfileSchema } from '../../../schema/Schema';
import FormInput from '../../../../../components/form/input';
import DefaultImg from '../../../../../assets/imgs/profile/defaultImg.png';
import { WrapperForm, ValidationError } from './styled';

export default function FormProfile() {
  const { Text } = Typography;

  const { t } = useTranslation(['profile', 'common']);

  const { toastOn } = toastHook();

  const { currentUser, isLoading, updateUser } = useAuthStore();

  const inputRef = useRef(null);

  const [isUpload, setIsUpload] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(ProfileSchema),
  });

  const updateInfoSuccess = () => {
    toastOn('success', t('change_info_success'));
  };

  const updateInfoFail = () => {
    toastOn('error', t('change_info_fail'));
  };

  const onSubmit = (data) => {
    delete data.email;
    updateUser({ data, callbackSuccess: updateInfoSuccess, callbackFail: updateInfoFail });
  };

  const handleChange = async (e) => {
    setIsUpload(true);
    await upload(e.target.files[0])
      .then((res) => {
        const data = { avatar: res };
        updateUser({ data, callbackSuccess: updateInfoSuccess, callbackFail: updateInfoFail });
      })
      .catch()
      .finally(() => setIsUpload(false));
    setIsUpload(false);
  };

  return (
    <WrapperForm>
      {currentUser ? (
        <Spin spinning={isLoading || isUpload} delay={500}>
          <Form className='form' onFinish={handleSubmit(onSubmit)}>
            <Row justify='center' align='middle' gutter={24}>
              <Col xl={6} sm={24} xs={24} className='flex-avatar'>
                <Image
                  src={currentUser?.avatar ? currentUser.avatar : DefaultImg}
                  alt='Avatar'
                  className='avatar-view'
                />
                <EditOutlined
                  onClick={() => {
                    inputRef.current.click();
                  }}
                />
                <input
                  className='upload-file'
                  ref={inputRef}
                  type='file'
                  onChange={handleChange}
                  accept='image/gif, image/jpeg, image/png'
                />
              </Col>

              <Col xl={18} sm={24} xs={24}>
                <FormInput
                  label={t('common:name')}
                  name='username'
                  defaultValue={currentUser?.username}
                  control={control}
                  errors={t(errors?.username?.message)}
                  Icon={UserOutlined}
                />
                <FormInput
                  label={t('common:email')}
                  name='email'
                  defaultValue={currentUser?.email}
                  control={control}
                  errors={t(errors?.email?.message)}
                  Icon={MailOutlined}
                  disabled={true}
                />
                <FormInput
                  label={t('common:phone_number')}
                  name='phoneNumber'
                  defaultValue={currentUser?.phoneNumber}
                  control={control}
                  errors={t(errors?.phoneNumber?.message)}
                  Icon={PhoneOutlined}
                />
              </Col>
            </Row>

            <FormInput
              label={t('common:birth_date')}
              name='birthdate'
              defaultValue={currentUser?.birthdate}
              control={control}
              errors={t(errors?.birthdate?.message)}
              Icon={CalendarOutlined}
              span={20}
              type='date'
            />

            <Row justify='center' align='middle'>
              <Col xl={4} sm={24} xs={24}>
                <Text className='form__label'>
                  <HeartOutlined className='icon' /> {t('common:gender')}:
                </Text>
              </Col>

              <Col xl={20} sm={24} xs={24}>
                <Controller
                  name='gender'
                  defaultValue={currentUser?.gender.toString()}
                  control={control}
                  render={({ field }) => (
                    <Radio.Group className='radio-gender' {...field}>
                      <Radio value='1'> {t('common:male')}</Radio>
                      <Radio value='0'>{t('common:female')}</Radio>
                    </Radio.Group>
                  )}
                />
              </Col>
            </Row>

            <Row>
              <Col xl={{ span: 20, offset: 4 }} sm={24} xs={24}>
                <ValidationError>{errors.gender && t(errors.gender?.message)}</ValidationError>
              </Col>
            </Row>

            <FormInput
              label={t('address')}
              name='address'
              defaultValue={currentUser?.address}
              control={control}
              errors={t(errors?.address?.message)}
              Icon={AuditOutlined}
              span={20}
            />

            <Row>
              <Col span={24} className='button-save'>
                <PrimaryButton title={t('save_change')} htmlType='submit' />
              </Col>
            </Row>
          </Form>
        </Spin>
      ) : null}
    </WrapperForm>
  );
}
