import React, { useEffect, useState } from 'react';
import { InputInterface } from '../Models/UIInterfaces';
import useStore from '../Store/useStore';

const Input: React.FC<InputInterface> = ({
  type,
  name,
  placeholder,
  minL,
  maxL,
  required,
  id,
  styles,
  autoComplete,
  changeHandler
}) => {
  const { storeName, storeAge } = useStore((state) => state);
  const defaultValue: any = name === 'name' ? storeName : name === 'age' ? storeAge : '';

  const [value, setValue] = useState<any>(defaultValue !== '' ? defaultValue : '');

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setValue(e.target.value);
    changeHandler(e.target.value);
  };

  return (
    <div className="my-[20px]">
      <label className="text-sm mb-[3px] ml-[5px] block">{placeholder}</label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        minLength={minL}
        maxLength={maxL}
        required={required}
        value={value}
        id={id}
        className={`
          h-auto w-full border border-slate-200 py-[15px] px-[10px] text-sm bg-white
          rounded-md transition-colors focus:outline-none focus:border-black
          ${styles}
        `}
        autoComplete={autoComplete}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChangeHandler(e)}
      />
    </div>
  );
};

export default Input;
