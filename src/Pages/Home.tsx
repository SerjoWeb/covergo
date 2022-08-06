import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useStore from '../Store/useStore';
import Button from '../Components/Button';

const Home: React.FC = () => {
  const navigate = useNavigate();

  const { setStoreName, setStoreAge, setStoreLive, setStorePackage, setStorePremium } = useStore(
    (state) => state
  );

  const start = (): void => {
    navigate('/settings');
  };

  useEffect(() => {
    setStoreName('');
    setStoreAge(0);
    setStoreLive('');
    setStorePackage('');
    setStorePremium('');
  }, []);

  return (
    <div className="bg-slate-100 p-[30px] rounded-sm shadow-md min-w-[450px]">
      <h1 className="text-xl font-bold text-center">Hello There!</h1>
      <p className="leading-[3rem]">
        Let&apos;s buy some insurance. It will takes only a few steps.
      </p>

      <div className="flex justify-center items-center mt-[20px]">
        <Button type="button" name="enter" context="Start" view="filled" clickHandler={start} />
      </div>
    </div>
  );
};

export default Home;
