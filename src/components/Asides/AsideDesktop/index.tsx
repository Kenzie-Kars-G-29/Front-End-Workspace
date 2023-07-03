import { SubmitHandler, useForm } from "react-hook-form";
import { StyledAside } from "./style";
import Button from "../../Button/Button";
import { useContext, useState } from "react";
import { UserContext } from "../../../contexts/User";
import { z } from "zod";
import asideFormSchema from "./formSchema";
import { zodResolver } from "@hookform/resolvers/zod";

type tAsideForm = z.infer<typeof asideFormSchema>;

const AsideDesktop = () => {
  const { isDataAnnouncement, filteredAnnouncements, setFilteredAnnouncements } =
    useContext(UserContext);

  const [brandSelected, setBrandSelected] = useState<string>("");
  const [modelSelected, setModelSelected] = useState<string>("");
  const [colorSelected, setColorSelected] = useState<string>("");
  const [yearSelected, setYearSelected] = useState<string>("");
  const [fuelSelected, setFuelSelected] = useState<string>("");

  const { handleSubmit, register } = useForm<tAsideForm>({
    resolver: zodResolver(asideFormSchema),
  });

  const submit: SubmitHandler<tAsideForm> = (formData) => {
    const data = {
      ...formData,
      brand: brandSelected,
      model: modelSelected,
      color: colorSelected,
      year: yearSelected,
      fuel: fuelSelected,
    };

    // const announc = isDataAnnouncement.filter((el) => {
    //   if(){}

    // })

    console.log(data);
  };

  return (
    <StyledAside>
      <nav>
        <section className="brand">
          <h3>Marca</h3>
          <ul>
            <li onClick={() => setBrandSelected("Chevrolet")}>Chevrolet</li>
            <li onClick={() => setBrandSelected("Citroën")}>Citroën</li>
            <li onClick={() => setBrandSelected("Fiat")}>Fiat</li>
            <li onClick={() => setBrandSelected("Ford")}>Ford</li>
            <li onClick={() => setBrandSelected("Honda")}>Honda</li>
            <li onClick={() => setBrandSelected("Hyundai")}>Hyundai</li>
            <li onClick={() => setBrandSelected("Nissan")}>Nissan</li>
            <li onClick={() => setBrandSelected("Peugeot")}>Peugeot</li>
            <li onClick={() => setBrandSelected("Renault")}>Renault</li>
            <li onClick={() => setBrandSelected("Toyota")}>Toyota</li>
            <li onClick={() => setBrandSelected("Volkswagen")}>Volkswagen</li>
          </ul>
        </section>
        <section className="model">
          <h3>Modelo</h3>
          <ul>
            <li onClick={() => setModelSelected("Civic")}>Civic</li>
            <li onClick={() => setModelSelected("Colrolla")}>Colrolla</li>
            <li onClick={() => setModelSelected("Cruze")}>Cruze</li>
            <li onClick={() => setModelSelected("Fit")}>Fit</li>
            <li onClick={() => setModelSelected("Gol")}>Gol</li>
            <li onClick={() => setModelSelected("Ka")}>Ka</li>
            <li onClick={() => setModelSelected("Onix")}>Onix</li>
            <li onClick={() => setModelSelected("Pulse")}>Pulse</li>
          </ul>
        </section>
        <section className="color">
          <h3>Cor</h3>
          <ul>
            <li onClick={() => setColorSelected("Azul")}>Azul</li>
            <li onClick={() => setColorSelected("Branca")}>Branca</li>
            <li onClick={() => setColorSelected("Cinza")}>Cinza</li>
            <li onClick={() => setColorSelected("Prata")}>Prata</li>
            <li>Verde</li>
          </ul>
        </section>
        <section className="year">
          <h3>Ano</h3>
          <ul>
            <li onClick={() => setYearSelected("2022")}>2022</li>
            <li onClick={() => setYearSelected("2021")}>2021</li>
            <li onClick={() => setYearSelected("2018")}>2018</li>
            <li onClick={() => setYearSelected("2015")}>2015</li>
            <li onClick={() => setYearSelected("2013")}>2013</li>
            <li onClick={() => setYearSelected("2012")}>2012</li>
            <li onClick={() => setYearSelected("2010")}>2010</li>
          </ul>
        </section>
        <section className="fuel">
          <h3>Combutível</h3>
          <ul>
            <li onClick={() => setFuelSelected("Diesel")}>Diesel</li>
            <li onClick={() => setFuelSelected("Etanol")}>Etanol</li>
            <li onClick={() => setFuelSelected("Gasolina")}>Gasolina</li>
            <li onClick={() => setFuelSelected("Flex")}>Flex</li>
          </ul>
        </section>
        <form onSubmit={handleSubmit(submit)}>
          <section className="km">
            <h3>Km</h3>
            <div>
              <input
                type="number"
                placeholder="Mínima"
                id="kmMin"
                {...register("kmMin")}
              />
              <input
                type="number"
                placeholder="Máxima"
                id="kmMax"
                {...register("kmMax")}
              />
            </div>
          </section>
          <section className="price">
            <h3>Preço</h3>
            <div>
              <input
                type="number"
                placeholder="Mínima"
                id="priceMin"
                {...register("priceMin")}
              />
              <input
                type="number"
                placeholder="Máxima"
                id="priceMax"
                {...register("priceMax")}
              />
            </div>
          </section>
          <Button variant="brand" type="submit">
            Filtrar
          </Button>
        </form>
      </nav>
    </StyledAside>
  );
};

export default AsideDesktop;
