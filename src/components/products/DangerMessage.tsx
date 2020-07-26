import React from 'react';
import { useTranslation } from 'react-i18next';

interface IMessage {
  message: string;
}

export const DangerMessage: React.FC<IMessage> = ({ message }) => {
  const { t } = useTranslation();

  return <p className="alert alert-danger">{t(message)}</p>;
};
