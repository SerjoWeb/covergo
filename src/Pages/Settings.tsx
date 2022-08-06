import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useStore from '../Store/useStore';
import Input from '../Components/Input';
import Select from '../Components/Select';
import Radio from '../Components/Radio';
import Button from '../Components/Button';

export interface OptionsInterface {
  country: string;
  currency: string;
  rate: number;
}

export interface PackagesInterface {
  type: string;
  name: string;
  value: string;
  info?: string;
  price: number;
}

const Settings: React.FC = () => {
  const {
    storeName,
    storeAge,
    storeLive,
    storePremium,
    setStoreName,
    setStoreAge,
    setStoreLive,
    setStorePackage,
    setStorePremium
  } = useStore((state) => state);

  const navigate = useNavigate();

  const [name, setName] = useState<string>(storeName !== '' ? storeName : '');
  const [age, setAge] = useState<number>(storeAge > 0 ? storeAge : 0);

  const [options] = useState<OptionsInterface[]>([
    { country: 'Hong Kong', currency: 'HKD', rate: 1 },
    { country: 'USA', currency: 'USD', rate: 2 },
    { country: 'Australia', currency: 'AUD', rate: 3 }
  ]);

  const [live, setLive] = useState<string>(storeLive !== '' ? storeLive : options[0].country);

  const getCurrencyAndRate = () => {
    let result = {
      currency: '',
      rate: 0
    };

    options.forEach((option) => {
      if (option.country === storeLive) {
        result.currency = option.currency;
        result.rate = option.rate;
      }
    });

    return result;
  };

  const [currency, setCurrency] = useState<string>(
    storeLive !== '' ? getCurrencyAndRate().currency : options[0].currency
  );

  const [currentRate, setCurrentRate] = useState<number>(
    storeLive !== '' ? getCurrencyAndRate().rate : options[0].rate
  );

  const [premium, setPremium] = useState<string>(storePremium !== '' ? storePremium : '');

  const packages: PackagesInterface[] = [
    { type: 'radio', name: 'package', value: 'Standart', price: 0 },
    { type: 'radio', name: 'package', value: 'Safe', info: `(+250${currency}, 50%)`, price: 250 },
    {
      type: 'radio',
      name: 'package',
      value: 'Super Safe',
      info: `(+375${currency}, 75%)`,
      price: 375
    }
  ];

  const [pack, setPack] = useState<string>(packages[0].value);
  const [currentPackPrice, setCurrentPackPrice] = useState<number>(0);

  const getNameValue = (value: string): void => {
    if (value !== '') {
      setName(value);
      setStoreName(value);
    }
  };

  const getAgeValue = (value: number): void => {
    if (value > 0 && value < 100) {
      setStoreAge(value);
      setAge(value);

      options.forEach((option) => {
        if (option.country.toLowerCase() === live.toLowerCase()) {
          const premiumCalc = 10 * value * option.rate + currentPackPrice;

          setStorePremium(`${premiumCalc}${currency}`);
          setPremium(`${premiumCalc}${currency}`);
        }
      });
    } else if (!value || value === 0) {
      setStoreAge(0);
      setStorePremium('');
      setPremium('');
    } else {
      navigate('/error');
    }
  };

  const getLiveValue = (value: string): void => {
    console.log(value);

    setStoreLive(value);
    setLive(value);

    options.forEach((option) => {
      if (option.country.toLowerCase() === value.toLowerCase()) {
        const premiumCalc = 10 * age * option.rate + currentPackPrice;

        setCurrency(option.currency);
        setCurrentRate(option.rate);
        setStorePremium(`${premiumCalc}${option.currency}`);
        setPremium(`${premiumCalc}${option.currency}`);
      }
    });
  };

  const getPackageValue = (value: string): void => {
    setStorePackage(value);
    setPack(value);

    packages.forEach((pack) => {
      if (pack.value === value) {
        const premiumCalc = 10 * age * currentRate + pack.price;

        setCurrentPackPrice(pack.price);
        setStorePremium(`${premiumCalc}${currency}`);
        setPremium(`${premiumCalc}${currency}`);
      }
    });
  };

  const back = (): void => {
    navigate('/');
  };

  const next = (): void => {
    navigate('/summary');
  };

  return (
    <div className="bg-slate-100 p-[30px] rounded-sm shadow-md min-w-[450px]">
      <h1 className="text-xl font-bold text-center">Tell to us about yourself</h1>

      <form>
        <Input
          type="text"
          name="name"
          placeholder="Name"
          minL={3}
          required={true}
          autoComplete="off"
          changeHandler={getNameValue}
        />

        <Input
          type="number"
          name="age"
          placeholder="Age"
          required={true}
          autoComplete="off"
          changeHandler={getAgeValue}
        />

        <Select
          name="live"
          required={true}
          options={options.map((option) => option.country)}
          placeholder="Where do you live"
          changeHandler={getLiveValue}
        />

        <Radio options={packages} changeHandler={getPackageValue} />

        {age > 0 && (
          <div className="mt-[20px]">
            <h2 className="text-xl font-bold text-center">Your Premium is: {premium}</h2>

            <div className="flex justify-center items-center gap-4 mt-[20px]">
              <Button
                type="button"
                name="back"
                context="Back"
                view="outlined"
                clickHandler={back}
              />

              {name !== '' && (
                <Button
                  type="button"
                  name="next"
                  context="Next"
                  view="filled"
                  clickHandler={next}
                />
              )}
            </div>
          </div>
        )}
      </form>
    </div>
  );
};

export default Settings;
