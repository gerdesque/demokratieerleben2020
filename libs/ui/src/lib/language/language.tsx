import React, { Fragment } from 'react';
import './language.scss';

/* eslint-disable-next-line */
export interface LanguageProps {}

let language = 'de';

export const Language = (props: LanguageProps) => {
  const changeLanguage = (lng) => {
    language = lng;
  }
  return (
    <Fragment>
      {language === 'en' && <button className='language' onClick={() => changeLanguage('de')}>DE</button>}
      {language === 'de' && <button className='language' onClick={() => changeLanguage('en')}>EN</button>}
    </Fragment>
  );
};

export default Language;
