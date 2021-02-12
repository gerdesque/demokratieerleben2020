import React, { Fragment, useContext } from 'react';
import { AppContext } from '../chapter/context';
import './language.scss';

export const Language = () => {
  const [,,language, setLanguage] = useContext(AppContext);
  const changeLanguage = (language) => {
    setLanguage(language)
  }
  return (
    <Fragment>
      {language === 'en' && <button className='language' onClick={() => changeLanguage('de')}>DE</button>}
      {language === 'de' && <button className='language' onClick={() => changeLanguage('en')}>EN</button>}
    </Fragment>
  );
};

export default Language;
