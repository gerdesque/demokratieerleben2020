import React, { Fragment, useContext } from 'react';
import { AppContext } from '../chapter/context';
import './language.scss';

export const Language = () => {
  const [,,, setLanguage] = useContext(AppContext);
  const changeLanguage = (language) => {
    setLanguage(language)
  }
  return (
    <Fragment>
      <label className='language-switcher'>
        <input type='checkbox'/>
        <span className='slider round'></span>
        <span className='select-de' onClick={() => changeLanguage('de')}>DE</span>
        <span className='select-en' onClick={() => changeLanguage('en')}>EN</span>
      </label>
    </Fragment>
  );
};

export default Language;
