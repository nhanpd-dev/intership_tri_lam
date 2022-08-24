import { useTranslation } from 'react-i18next';
import { Spin } from 'antd';

import { loadingIcon } from '../../../components/loadingIcon/index';
import { Loading } from './styled';

export const LoadingScreen = () => {
  const { t } = useTranslation(['common']);

  return (
    <Loading>
      <Spin spinning={true} size='large' indicator={loadingIcon} tip={t('loading')}></Spin>
    </Loading>
  );
};
