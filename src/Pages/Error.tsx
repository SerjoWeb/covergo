import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../Components/Button';

const Error: React.FC = () => {
  const navigate = useNavigate();

  const back = (): void => {
    navigate('/');
  };

  return (
    <div className="bg-slate-100 p-[30px] rounded-sm shadow-md min-w-[450px]">
      <h1 className="text-xl font-bold text-center">Ooops</h1>
      <p className="text-center">Your age is over our accepted limit.</p>
      <p className="text-center">We are sorry, but we cannot insure you now.</p>

      <div className="flex justify-center items-center mt-[20px]">
        <Button type="button" name="back" context="Ok :(" view="filled" clickHandler={back} />
      </div>
    </div>
  );
};

export default Error;
