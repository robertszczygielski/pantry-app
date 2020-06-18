import React from "react";
import { useTranslation } from 'react-i18next';

export function DangerMessage(props) {
    const { t, i18n } = useTranslation();

    return <p className="alert alert-danger">{t(props.message)}</p>
}
