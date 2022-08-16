import React from 'react';
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
} from '@ant-design/icons';
import { Row, Col, Radio, Form, Button, Image, Input, Typography, notification, Spin } from 'antd';

import { useAuthStore } from '../../../../../hooks/useAuth';
import { ProfileSchema } from '../../../schema/Schema';
import FiledInput from './fieldInput/FiledInput.component';
import DefaultImg from '../../../../../assets/imgs/profile/defaultImg.png';
import { WrapperForm, ValidationError } from './styled';

export default function FormProfile() {
  const { Text } = Typography;

  const { t } = useTranslation(['profile', 'common']);

  const { currentUser, isLoading, updateUser } = useAuthStore();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(ProfileSchema),
  });

  const onSubmit = (data) => {
    delete data.email;
    updateUser(data, updateSuccess, updateFail);
  };

  const updateSuccess = async () => {
    await notification.success({
      message: t('change_info_success'),
    });
  };

  const updateFail = async () => {
    await notification.error({
      message: t('change_info_fail'),
    });
  };

  return (
    <WrapperForm>
      {currentUser && (
        <Spin spinning={isLoading} delay={500}>
          <Form className='form' onFinish={handleSubmit(onSubmit)}>
            <Row justify='center' align='middle' gutter={24}>
              <Col xl={6} sm={24} xs={24} className='flex-avatar'>
                <Image src={DefaultImg} alt='default img' preview={false} className='avatar-view' />
              </Col>

              <Col xl={18} sm={24} xs={24}>
                <FiledInput
                  label={t('common:name')}
                  nameField='username'
                  Controller={Controller}
                  control={control}
                  errors={errors.username}
                  Icon={UserOutlined}
                  placeholder={currentUser?.username}
                />
                <FiledInput
                  label={t('common:email')}
                  nameField='email'
                  Controller={Controller}
                  control={control}
                  errors={errors.email}
                  Icon={MailOutlined}
                  placeholder={currentUser?.email}
                />
                <FiledInput
                  label={t('common:phone_number')}
                  nameField='phoneNumber'
                  Controller={Controller}
                  control={control}
                  errors={errors.phoneNumber}
                  Icon={PhoneOutlined}
                  placeholder={currentUser?.phoneNumber}
                />
              </Col>
            </Row>

            <Row justify='center' align='middle'>
              <Col xl={3} sm={24} xs={24}>
                <Text>
                  <CalendarOutlined className='icon' />
                  {t('common:birth_date')}
                </Text>
              </Col>

              <Col xl={21} sm={24} xs={24}>
                <Controller
                  name='birthdate'
                  defaultValue={currentUser?.birthdate.split('T')[0]}
                  control={control}
                  render={({ field }) => <Input size='large' type='date' value='2022-08-30T00:00:00.000Z' {...field} />}
                />
              </Col>
            </Row>

            <Row>
              <Col xl={{ span: 21, offset: 3 }} sm={24} xs={24}>
                <ValidationError>{errors.birthdate && t(errors.birthdate?.message)}</ValidationError>
              </Col>
            </Row>

            <Row justify='center' align='middle'>
              <Col xl={3} sm={24} xs={24}>
                <Text>
                  <HeartOutlined className='icon' /> {t('common:gender')}
                </Text>
              </Col>

              <Col xl={21} sm={24} xs={24}>
                <Controller
                  name='gender'
                  defaultValue={currentUser?.gender === 1 ? '1' : '0'}
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
              <Col xl={{ span: 21, offset: 3 }} sm={24} xs={24}>
                <ValidationError>{errors.gender && t(errors.gender?.message)}</ValidationError>
              </Col>
            </Row>

            <Row justify='center' align='middle'>
              <Col xl={3} sm={24} xs={24}>
                <Text>
                  <AuditOutlined className='icon' />
                  {t('address')}
                </Text>
              </Col>

              <Col xl={21} sm={24} xs={24}>
                <Controller
                  name='address'
                  defaultValue={currentUser?.address}
                  control={control}
                  render={({ field }) => (
                    <Input size='large' type='text' placeholder={currentUser?.address} {...field} />
                  )}
                />
              </Col>
            </Row>

            <Row>
              <Col xl={{ span: 21, offset: 3 }} sm={24} xs={24}>
                <ValidationError>{errors.address && t(errors.address?.message)}</ValidationError>
              </Col>
            </Row>

            <Row>
              <Col span={24} className='button-save'>
                <Button type='primary' htmlType='submit'>
                  {t('save_change')}
                </Button>
              </Col>
            </Row>
          </Form>
        </Spin>
      )}
    </WrapperForm>
  );
}
