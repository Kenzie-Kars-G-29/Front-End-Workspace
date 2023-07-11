import { SubmitHandler, useForm } from "react-hook-form";
import { StyledAside } from "./style";
import Button from "../../Button/Button";
import { useState } from "react";
// import { UserContext } from "../../../contexts/User";
import { z } from "zod";
import asideFormSchema from "./formSchema";
import { zodResolver } from "@hookform/resolvers/zod";
// import { AnnouncementInfo } from "../../../contexts/User/interfaces";

type tAsideForm = z.infer<typeof asideFormSchema>;

const AsideDesktop = () => {
  // const { isDataAnnouncement, setFilteredAnnouncements } =
  //   useContext(UserContext);

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

    console.log(data)

    // const announcementList: AnnouncementInfo[] = [];

    // isDataAnnouncement.forEach((announc) => {});

    // setFilteredAnnouncements(announcementList);
  };

  return (
    <StyledAside>
      <nav>
        <section className="brand">
          <h3>Marca</h3>
          <ul>
            <li onClick={() => setBrandSelected("chevrolet")}>Chevrolet</li>
            <li onClick={() => setBrandSelected("citroën")}>Citroën</li>
            <li onClick={() => setBrandSelected("fiat")}>Fiat</li>
            <li onClick={() => setBrandSelected("ford")}>Ford</li>
            <li onClick={() => setBrandSelected("honda")}>Honda</li>
            <li onClick={() => setBrandSelected("hyundai")}>Hyundai</li>
            <li onClick={() => setBrandSelected("nissan")}>Nissan</li>
            <li onClick={() => setBrandSelected("peugeot")}>Peugeot</li>
            <li onClick={() => setBrandSelected("renault")}>Renault</li>
            <li onClick={() => setBrandSelected("toyota")}>Toyota</li>
            <li onClick={() => setBrandSelected("volkswagen")}>Volkswagen</li>
          </ul>
        </section>
        <section className="model">
          <h3>Modelo</h3>
          <ul>
            <li onClick={() => setModelSelected("civic")}>Civic</li>
            <li onClick={() => setModelSelected("colrolla")}>Colrolla</li>
            <li onClick={() => setModelSelected("cruze")}>Cruze</li>
            <li onClick={() => setModelSelected("fit")}>Fit</li>
            <li onClick={() => setModelSelected("gol")}>Gol</li>
            <li onClick={() => setModelSelected("ka")}>Ka</li>
            <li onClick={() => setModelSelected("onix")}>Onix</li>
            <li onClick={() => setModelSelected("pulse")}>Pulse</li>
          </ul>
        </section>
        <section className="color">
          <h3>Cor</h3>
          <ul>
            <li onClick={() => setColorSelected("azul")}>Azul</li>
            <li onClick={() => setColorSelected("branca")}>Branca</li>
            <li onClick={() => setColorSelected("cinza")}>Cinza</li>
            <li onClick={() => setColorSelected("prata")}>Prata</li>
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
            <li onClick={() => setFuelSelected("diesel")}>Diesel</li>
            <li onClick={() => setFuelSelected("etanol")}>Etanol</li>
            <li onClick={() => setFuelSelected("gasolina")}>Gasolina</li>
            <li onClick={() => setFuelSelected("flex")}>Flex</li>
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
