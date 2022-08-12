import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';

export default function Page404() {
  const { t } = useTranslation();
  return (
    <div className='error-page'>
      <div className='error-404'>
        <h1 className='error-code'>{t('error_pages.404.error_code')}</h1>
        <p className='error-desc'>{t('error_pages.404.error_msg')}</p>
        <div className='go-back-home'>
          <Link to="/">{t('error_pages.back_home_msg')}</Link>
        </div>
      </div>
    </div>
  )
};