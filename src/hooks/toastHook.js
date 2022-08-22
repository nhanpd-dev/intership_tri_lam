/* eslint-disable react-hooks/rules-of-hooks */
import { notification } from 'antd';
import { useNavigate } from 'react-router';

export default function toastHook() {
  const navigate = useNavigate();

  const toastOn = (type, message, urlRedirect = '') => {
    notification[type]({ message: message });

    if (urlRedirect) {
      navigate(urlRedirect);
    }
  };

  return { toastOn };
}
