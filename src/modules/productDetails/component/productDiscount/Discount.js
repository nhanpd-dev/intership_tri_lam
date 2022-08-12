import { useTranslation } from 'react-i18next';
import { Select, Space } from 'antd';

import DiscountWrap from './style';

const { Option } = Select;
const vouchers = [];
const Discount = ({ getvouchers }) => {
  const { t } = useTranslation(['productDetails']);

  const handleChange = (value) => {
    vouchers.push(value);
    getvouchers(vouchers);
  };
  return (
    <DiscountWrap>
      <Select
        mode='multiple'
        style={{
          width: '100%',
        }}
        placeholder='select one your vorcher'
        defaultValue={[`${t('buy.no_vouchers')}`]}
        onChange={handleChange}
        optionLabelProp='label'
      >
        <Option value='2000' label='2000Đ'>
          <div className='demo-option-label-item'>
            <Space role='img' aria-label='VietNam'>
              vn
            </Space>
            {t('buy.2_thousand_dong_discount')}
          </div>
        </Option>

        <Option value='50000' label='5000Đ'>
          <div className='demo-option-label-item'>
            <Space role='img' aria-label='VietNam'>
              vn
            </Space>
            {t('buy.50_thousand_dong_discount')}
          </div>
        </Option>
      </Select>
    </DiscountWrap>
  );
};

export default Discount;
