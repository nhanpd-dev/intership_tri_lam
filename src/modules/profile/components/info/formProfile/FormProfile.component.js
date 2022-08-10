import React from 'react';
import { Row, Col, Space, DatePicker, Radio, Form, Button, Image, Input, Typography } from 'antd';

import FiledInput from './fieldInput/FiledInput.component';
import DefaultImg from '../../../../../assets/imgs/profile/defaultImg.png';
import { WrapperForm } from './styled';

export default function FormProfile({ t }) {
  const { Text } = Typography;

  return (
    <WrapperForm>
      <Form className='form'>
        <Space direction='vertical' size='large' className='space'>
          <Row justify='center' align='middle' gutter={24}>
            <Col xl={6} sm={24} xs={24} className='flex-avatar'>
              <Image src={DefaultImg} alt='default img' preview={false} className='avatar-view' />
            </Col>
            <Col xl={18} sm={24} xs={24}>
              <Space direction='vertical' size='large' className='space'>
                <FiledInput label={t('common:name')} nameField='name' />
                <FiledInput label={t('common:email')} nameField='email' />
                <FiledInput label={t('common:phone_number')} nameField='phone' />
              </Space>
            </Col>
          </Row>

          <Row justify='center' align='middle'>
            <Col xl={3} sm={24} xs={24}>
              <Text>{t('common:birth_date')}</Text>
            </Col>
            <Col xl={21} sm={24} xs={24}>
              <DatePicker />
            </Col>
          </Row>

          <Row justify='center' align='middle'>
            <Col xl={3} sm={24} xs={24}>
              <Text> {t('common:gender')}</Text>
            </Col>
            <Col xl={21} sm={24} xs={24}>
              <Radio.Group className='radio-gender'>
                <Radio value={t('common:male')}> {t('common:male')}</Radio>
                <Radio value={t('common:female')}>{t('common:female')}</Radio>
                <Radio value={t('other')}>{t('other')}</Radio>
              </Radio.Group>
            </Col>
          </Row>

          <Row justify='center' align='middle'>
            <Col xl={3} sm={24} xs={24}>
              <Text>{t('address')}</Text>
            </Col>
            <Col xl={21} sm={24} xs={24}>
              <Input size='large' />
            </Col>
          </Row>

          <Row>
            <Col span={24} className='button-save'>
              <Button type='primary'>{t('save_change')}</Button>
            </Col>
          </Row>
        </Space>
      </Form>
    </WrapperForm>
  );
}
