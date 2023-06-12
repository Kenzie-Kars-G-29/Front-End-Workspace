import { StyledAside } from "./style";

const AsideDesktop = () => {
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
        <section className="km">
          <h3>Km</h3>
          <div>
            <input type="text" placeholder="Mínima" />
            <input type="text" placeholder="Máxima" />
          </div>
        </section>
        <section className="price">
          <h3>Preço</h3>
          <div>
            <input type="text" placeholder="Mínima" />
            <input type="text" placeholder="Máxima" />
          </div>
        </section>
      </nav>
    </StyledAside>
  );
};

export default AsideDesktop;
