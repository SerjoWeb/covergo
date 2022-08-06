import React from 'react';
import { ButtonInterface } from '../Models/UIInterfaces';

const Button: React.FC<ButtonInterface> = ({ type, name, context, styles, view, clickHandler }) => {
  const filledBtnStyles = `
    h-auto w-auto flex justify-center items-center border border-black
    rounded-md text-sm text-white uppercase bg-black transition-all
    px-[50px] py-[10px] hover:shadow-md
  `;

  const outlinedBtnStyles = `
    h-auto w-auto flex justify-center items-center border border-black
    rounded-md text-sm text-black uppercase bg-white transition-all
    px-[50px] py-[10px] hover:shadow-md
  `;

  return (
    <button
      type={type}
      name={name}
      onClick={clickHandler}
      className={
        view === 'filled' ? `${filledBtnStyles} ${styles}` : `${outlinedBtnStyles} ${styles}`
      }>
      {context}
    </button>
  );
};

export default Button;
