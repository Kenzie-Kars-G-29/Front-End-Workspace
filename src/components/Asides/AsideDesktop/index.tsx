import { SubmitHandler, useForm } from "react-hook-form";
import { StyledAside } from "./style";
import Button from "../../Button/Button";
import { useContext } from "react";
import { UserContext } from "../../../contexts/User";
import { z } from "zod";
import asideFormSchema from "./formSchema";
import { zodResolver } from "@hookform/resolvers/zod";

type tAsideForm = z.infer<typeof asideFormSchema>;

const AsideDesktop = () => {
  const { setFilteredAnnouncements, filteredAnnouncements } =
    useContext(UserContext);

  const { handleSubmit, register } = useForm<tAsideForm>({
    resolver: zodResolver(asideFormSchema),
  });

  const submit: SubmitHandler<tAsideForm> = (formData) => {
    console.log(formData);
  };

  return (
    <StyledAside>
      <nav>
        <section className="brand">
          <h3>Marca</h3>
          <ul>
            <li>Chevrolet</li>
            <li>Citroën</li>
            <li>Fiat</li>
            <li>Ford</li>
            <li>Honda</li>
            <li>Hyundai</li>
            <li>Nissan</li>
            <li>Peugeot</li>
            <li>Renault</li>
            <li>Toyota</li>
            <li>Volkswagen</li>
          </ul>
        </section>

        <section className="model">
          <h3>Modelo</h3>
          <ul>
            <li>Civic</li>
            <li>Colrolla</li>
            <li>Cruze</li>
            <li>Fit</li>
            <li>Gol</li>
            <li>Ka</li>
            <li>Onix</li>
            <li>Pulse</li>
          </ul>
        </section>

        <section className="color">
          <h3>Cor</h3>
          <ul>
            <li>Azul</li>
            <li>Branca</li>
            <li>Cinza</li>
            <li>Prata</li>
            <li>Verde</li>
          </ul>
        </section>

        <section className="year">
          <h3>Ano</h3>
          <ul>
            <li>2022</li>
            <li>2021</li>
            <li>2018</li>
            <li>2015</li>
            <li>2013</li>
            <li>2012</li>
            <li>2010</li>
          </ul>
        </section>

        <section className="fuel">
          <h3>Combutível</h3>
          <ul>
            <li>Diesel</li>
            <li>Etanol</li>
            <li>Gasolina</li>
            <li>Flex</li>
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
        </form>
      </nav>
    </StyledAside>
  );
};

export default AsideDesktop;
