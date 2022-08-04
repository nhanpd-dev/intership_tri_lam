import React from 'react';
import { useTranslation } from 'react-i18next';

function RegisterScreen() {
  const { t } = useTranslation(['common']);
  return <div>{t('name')}</div>;
}

export default RegisterScreen;
