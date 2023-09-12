import { SubmitHandler, useForm } from "react-hook-form";
import { StyledAside } from "./style";
import Button from "../../Button/Button";
import { useContext } from "react";
import { UserContext } from "../../../contexts/User";
import { string, z } from "zod";
import asideFormSchema from "./formSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { SellerContext } from "../../../contexts/Seller";

type tAsideForm = z.infer<typeof asideFormSchema>;

const AsideDesktop = () => {
  const {
    setFilteredAnnouncements,
    filteredAnnouncements,
    isDataAnnouncement,
  } = useContext(UserContext);

  // const { handleSubmit, register } = useForm<tAsideForm>({
  //   resolver: zodResolver(asideFormSchema),
  // });

  // const submit: SubmitHandler<tAsideForm> = (formData) => {
  //   console.log(formData);
  // };

  const filter = (type: string, value: string | number) => {

    switch (type) {
      case "brand":
        setFilteredAnnouncements(
          isDataAnnouncement.filter(
            (announcement) => announcement.brand == value
          )
        );
        break;

      case "model":
        setFilteredAnnouncements(
          isDataAnnouncement.filter((announcement) => {
            if (announcement.model.includes(`${value}`)) {
              return announcement;
            }
          })
        );
        break;

      case "color":
        setFilteredAnnouncements(
          isDataAnnouncement.filter(
            (announcement) => announcement.color == value
          )
        );
        break;

      case "year":
        setFilteredAnnouncements(
          isDataAnnouncement.filter(
            (announcement) => announcement.year == value
          )
        );
        break;

      case "fuel":
        setFilteredAnnouncements(
          isDataAnnouncement.filter(
            (announcement) => announcement.fuel == value
          )
        );
        break;
    }
  };

  return (
    <StyledAside>
      <nav>
        {filteredAnnouncements.length > 0 ? (
          <Button
            variant="brand"
            type="button"
            onClick={() => setFilteredAnnouncements([])}
          >
            Limpar filtro
          </Button>
        ) : (
          <Button variant="brand" type="submit">
            Filtrar
          </Button>
        )}

        <section className="brand">
          <h3>Marca</h3>

          <ul>
            <li onClick={() => filter("brand", "chevrolet")}>Chevrolet</li>
            <li onClick={() => filter("brand", "citroën")}>Citroën</li>
            <li onClick={() => filter("brand", "fiat")}>Fiat</li>
            <li onClick={() => filter("brand", "ford")}>Ford</li>
            <li onClick={() => filter("brand", "honda")}>Honda</li>
            <li onClick={() => filter("brand", "hyundai")}>Hyundai</li>
            <li onClick={() => filter("brand", "nissan")}>Nissan</li>
            <li onClick={() => filter("brand", "peugeot")}>Peugeot</li>
            <li onClick={() => filter("brand", "renault")}>Renault</li>
            <li onClick={() => filter("brand", "toyota")}>Toyota</li>
            <li onClick={() => filter("brand", "volkswagen")}>Volkswagen</li>
          </ul>
        </section>

        <section className="model">
          <h3>Modelo</h3>

          <ul>
            <li onClick={() => filter("model", "civic")}>Civic</li>
            <li onClick={() => filter("model", "colrolla")}>Colrolla</li>
            <li onClick={() => filter("model", "cruze")}>Cruze</li>
            <li onClick={() => filter("model", "fit")}>Fit</li>
            <li onClick={() => filter("model", "gol")}>Gol</li>
            <li onClick={() => filter("model", "ka")}>Ka</li>
            <li onClick={() => filter("model", "onix")}>Onix</li>
            <li onClick={() => filter("model", "pulse")}>Pulse</li>
          </ul>
        </section>

        <section className="color">
          <h3>Cor</h3>
          <ul>
            <li onClick={() => filter("color", "Azul")}>Azul</li>
            <li onClick={() => filter("color", "Branco")}>Branco</li>
            <li onClick={() => filter("color", "Cinza")}>Cinza</li>
            <li onClick={() => filter("color", "Prata")}>Prata</li>
            <li onClick={() => filter("color", "Verde")}>Verde</li>
          </ul>
        </section>

        <section className="year">
          <h3>Ano</h3>
          <ul>
            <li onClick={() => filter("year", "2022")}>2022</li>
            <li onClick={() => filter("year", "2021")}>2021</li>
            <li onClick={() => filter("year", "2018")}>2018</li>
            <li onClick={() => filter("year", "2015")}>2015</li>
            <li onClick={() => filter("year", "2013")}>2013</li>
            <li onClick={() => filter("year", "2012")}>2012</li>
            <li onClick={() => filter("year", "2010")}>2010</li>
          </ul>
        </section>

        <section className="fuel">
          <h3>Combutível</h3>

          <ul>
            <li onClick={() => filter("fuel", "flex")}>Flex</li>
            <li onClick={() => filter("fuel", "hibrido")}>Híbrido</li>
            <li onClick={() => filter("fuel", "eletrico")}>Elétrico</li>
          </ul>
        </section>

        <section className="km">
          <h3>Km</h3>
          {/* <div>
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
          </div> */}
        </section>

        <section className="price">
          <h3>Preço</h3>
          {/* <div>
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
          </div> */}
        </section>
      </nav>
    </StyledAside>
  );
};

export default AsideDesktop;
