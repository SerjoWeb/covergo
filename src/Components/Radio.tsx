import React, { useState } from 'react';
import { IoIosRadioButtonOff, IoIosRadioButtonOn } from 'react-icons/io';
import { InputRadioInterface, RadioInterface } from '../Models/UIInterfaces';
import useStore from '../Store/useStore';

const Radio: React.FC<RadioInterface> = ({ options, changeHandler }) => {
  const { storePackage } = useStore((state) => state);

  const defaultValue: any = storePackage !== '' ? storePackage : options[0].value;
  const [currentValue, setCurrentValue] = useState<string>(defaultValue);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setCurrentValue(e.target.value);
    changeHandler(e.target.value);
  };

  return (
    <div className="flex flex-col justify-start items-start">
      {options.map((option: InputRadioInterface, index: number) => (
        <label key={index}>
          <input
            type={option.type}
            name={option.name}
            id={option.id}
            value={option.value}
            checked={currentValue === option.value}
            className={`hidden ${option.styles}`}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChangeHandler(e)}
          />

          <div className="flex justify-start items-center">
            {currentValue === option.value ? <IoIosRadioButtonOn /> : <IoIosRadioButtonOff />}

            <span className="text-sm ml-[10px]">
              {option.value}
              {option.info && <small>&nbsp;{option.info}</small>}
            </span>
          </div>
        </label>
      ))}
    </div>
  );
};

export default Radio;
