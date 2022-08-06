import React, { useState } from 'react';
import { FaCaretDown } from 'react-icons/fa';
import { SelectInterface } from '../Models/UIInterfaces';
import useStore from '../Store/useStore';

const Select: React.FC<SelectInterface> = ({
  name,
  multiple,
  required,
  options,
  styles,
  placeholder,
  changeHandler
}) => {
  const { storeLive } = useStore((state) => state);
  const defaultValue: any = storeLive !== '' ? storeLive : '';

  const [value, setValue] = useState<any>(defaultValue);

  const onChangeHandler = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    setValue(e.target.value);
    changeHandler(e.target.value);
  };

  return (
    <div className="relative my-[20px]">
      <label className="text-sm mb-[3px] ml-[5px] block">{placeholder}</label>
      <select
        name={name}
        multiple={multiple}
        required={required}
        value={value}
        onChange={(e: React.ChangeEvent<HTMLSelectElement>) => onChangeHandler(e)}
        className={`
          h-auto w-full border border-slate-200 py-[15px] px-[10px] text-sm bg-white
          rounded-md appearance-none transition-colors focus:outline-none focus:border-black
          ${styles}
        `}>
        {options.map((option: string, index: number) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>

      <FaCaretDown className="absolute top-[39px] right-[10px]" />
    </div>
  );
};

export default Select;
