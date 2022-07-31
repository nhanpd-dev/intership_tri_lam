import React from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from 'react-i18next'
import { PrimaryButton } from '../../components'

function DashboardScreen() {
  const { t } = useTranslation(['common'])
  const navigate = useNavigate();
  const onNavigate = () => navigate("login");
  return (
    <div>
      Navigate
      <PrimaryButton onClick={onNavigate} title={t('login')} />
    </div>
  );
}

export default DashboardScreen;
