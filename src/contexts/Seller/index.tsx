import { createContext, useEffect, useState } from "react";
import carsApi from "../../services/carsApi";
import { iCar } from "../User/interfaces";

interface iSellerContextProps {
  brand: string;
  setBrand: React.Dispatch<React.SetStateAction<string>>;
  cars: iCar[];
  setCars: React.Dispatch<React.SetStateAction<[] | iCar[]>>;
}

interface iSellerProviderProps {
  children: React.ReactNode;
}

const SellerContext = createContext({} as iSellerContextProps);

const SellerProvider = ({ children }: iSellerProviderProps) => {
  const [brand, setBrand] = useState("chevrolet");
  const [cars, setCars] = useState<[] | iCar[]>([]);

  const listCarsByBrand = async (brand: string) => {
    try {
      const response = await carsApi.get(`/cars?brand=${brand}`);
      setCars(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const listAllCars = async () => {
    try {
      const response = await carsApi.get(`/cars`);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    listCarsByBrand(brand);
  }, [brand]);

  return (
    <SellerContext.Provider value={{ brand, setBrand, cars, setCars }}>
      {children}
    </SellerContext.Provider>
  );
};

export { SellerContext, SellerProvider };
