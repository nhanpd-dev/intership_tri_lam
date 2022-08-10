import React from 'react';
import { Row, Col, Space, DatePicker, Radio, Form, Button, Image, Input } from 'antd';

import FiledInput from './fieldInput/FiledInput.component';
import DefaultImg from '../../../../../assets/imgs/profile/defaultImg.png';
import { WrapperForm } from './styled';

export default function FormProfile() {
  return (
    <WrapperForm>
      <Form className='form'>
        <Space direction='vertical' size='large' className='space'>
          <Row justify='center' align='middle' gutter={24}>
            <Col xl={6} sm={24} xs={24} className='flex-avatar'>
              <Image src={DefaultImg} alt='default img' className='avatar-view' />
            </Col>
            <Col xl={18} sm={24} xs={24}>
              <Space direction='vertical' size='large' className='space'>
                <FiledInput label='Họ & Tên' nameField='name' />
                <FiledInput label='Email' nameField='email' />
                <FiledInput label='Số điện thoại' nameField='phone' />
              </Space>
            </Col>
          </Row>

          <Row justify='center' align='middle'>
            <Col xl={3} sm={24} xs={24}>
              Ngày sinh
            </Col>
            <Col xl={21} sm={24} xs={24}>
              <DatePicker />
            </Col>
          </Row>

          <Row justify='center' align='middle'>
            <Col xl={3} sm={24} xs={24}>
              Giới tính
            </Col>
            <Col xl={21} sm={24} xs={24}>
              <Radio.Group className='radio-gender'>
                <Radio value='Name'>Nam</Radio>
                <Radio value='Nữ'>Nữ</Radio>
                <Radio value='Khác'>Khác</Radio>
              </Radio.Group>
            </Col>
          </Row>

          <Row justify='center' align='middle'>
            <Col xl={3} sm={24} xs={24}>
              Địa chỉ
            </Col>
            <Col xl={21} sm={24} xs={24}>
              <Input size='large' />
            </Col>
          </Row>

          <Row>
            <Col span={24} className='button-save'>
              <Button type='primary'>Lưu Thay Đổi</Button>
            </Col>
          </Row>
        </Space>
      </Form>
    </WrapperForm>
  );
}
