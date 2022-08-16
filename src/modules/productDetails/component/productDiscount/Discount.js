import { useTranslation } from 'react-i18next';
import { Select, Space } from 'antd';
import DiscountWrap from './style';

const { Option } = Select;

const Discount = ({ getvouchers, discount, price }) => {
  const { t } = useTranslation(['productDetails']);

  const vouchers = [];

  const handleChange = (value) => {
    vouchers.push(value);
    getvouchers(vouchers);
  };

  return (
    <DiscountWrap>
      <Select
        className='discountWrap'
        mode='multiple'
        placeholder='select one your vorcher'
        defaultValue={[`${t('buy.no_vouchers')}`]}
        onChange={handleChange}
        optionLabelProp='label'
      >
        {discount && (
          <Option value={discount} label={`${discount * 100}%`}>
            <div className='demo-option-label-item'>
              <Space role='img' aria-label='VietNam'>
                vn
              </Space>
              {` ${t('buy.discount')} ${discount * 100}%`}
            </div>
          </Option>
        )}
      </Select>
    </DiscountWrap>
  );
};

export default Discount;
