import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../Components/Button';
import useStore from '../Store/useStore';

const Summary: React.FC = () => {
  const { storeName, storeAge, storeLive, storePackage, storePremium } = useStore((state) => state);

  const navigate = useNavigate();

  const back = (): void => {
    navigate('/settings');
  };

  const buy = (): void => {
    navigate('/');
  };

  return (
    <div className="bg-slate-100 p-[30px] rounded-sm shadow-md min-w-[450px]">
      <h1 className="text-xl font-bold text-center">Summary</h1>

      <div className="mt-[20px] text-center">
        <p className="leading-[2rem]">Name: {storeName}</p>
        <p className="leading-[2rem]">Age: {storeAge}</p>
        <p className="leading-[2rem]">Location: {storeLive}</p>
        <p className="leading-[2rem]">Package: {storePackage || 'Standart'}</p>
        <p className="leading-[2rem]">Premium: {storePremium}</p>
      </div>

      <div className="flex justify-center items-center gap-4 mt-[20px]">
        <Button type="button" name="back" context="Back" view="outlined" clickHandler={back} />

        <Button type="button" name="next" context="Buy" view="filled" clickHandler={buy} />
      </div>
    </div>
  );
};

export default Summary;
