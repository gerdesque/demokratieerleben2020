import React from 'react';

import Image from '../image/image';


/* eslint-disable-next-line */
export interface SmokingpitProps {
  value: string
}

export const Smokingpit = (props: SmokingpitProps) => {
  return (
    <div className='smokingPit'>
      <Image value='daheim_arbeiterschaft'/>
      <div className='smoke'>
        <span className='s0'></span>
        <span className='s1'></span>
        <span className='s2'></span>
        <span className='s3'></span>
        <span className='s4'></span>
        <span className='s5'></span>
        <span className='s6'></span>
        <span className='s7'></span>
        <span className='s8'></span>
        <span className='s9'></span>
      </div>
    </div>
  );
};

export default Smokingpit;