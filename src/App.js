import './App.css';
import React, { useEffect } from 'react'
import { useGlobalStore } from './hooks/useGlobal'
import { useTranslation } from "react-i18next"
import i18next from './i18n'

function App() {
  const { testSaga } = useGlobalStore()
  const { t } = useTranslation(['common'])
  console.log('=====>useTranslation ', i18next.t('name'))
  useEffect(() => {
    testSaga()
  }, [])
  return (
    <div className="App">
      nhan
    </div>
  );
}

export default App;
