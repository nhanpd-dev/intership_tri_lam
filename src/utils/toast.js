/* eslint-disable react-hooks/rules-of-hooks */
import { notification } from 'antd';

export default function toast(type, message, urlRedirect = '', navigate) {
  notification[type]({ message: message });

  if (urlRedirect) {
    navigate(urlRedirect);
  }
}
