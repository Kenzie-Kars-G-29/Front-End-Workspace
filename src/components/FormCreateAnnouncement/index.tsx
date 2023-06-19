import { useForm } from "react-hook-form";
import { string, z } from "zod";
import api from "../../services/api";
import Button from "../Button/Button";
import Input from "../Input";
import StyledFormCreateAnnouncement from "./style";
import { useContext, useEffect, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { SellerContext } from "../../contexts/Seller";
import { iCar } from "../../contexts/Seller/interfaces";

// Schema
const announcementFormResolver = z.object({
  description: z.string().min(10),
  brand: z.string().min(3, "brand very small"),
  model: z.string().min(3, "model very small").max(50, "model very largue"),
  color: z.string().min(3, "color very small").max(20, "color very largue"),
  year: z.string().min(4, "year very small").max(4, "year very largue"),
  fuel: z.string().min(3, "fuel very small").max(9, "fuel very largue"),
  km: z.string().min(4, "km very small").nullable().default("0"),
  price: z.string(),
  fipeTablePrice: z.string(),
  // isPublic: z.boolean(),
});

// Tipagem
type announcementForm = z.infer<typeof announcementFormResolver>;

const FormCreateAnnouncement = () => {
  const { setBrand, cars } = useContext(SellerContext);
  // const [inputImage, setInputImage] = useState<number | null>(null);

  const {
    handleSubmit,
    register,
    setValue,
  } = useForm({
    mode: "onBlur",
    resolver: zodResolver(announcementFormResolver),
  });

  const selectCar = (car: string) => {
    const findCar: iCar | undefined = cars.find((c) => c.name == car);

    if (findCar) {
      setValue("year", findCar.year);
      setValue("fipeTablePrice", findCar.value);

      switch (findCar.fuel) {
        case 1:
          setValue("fuel", "flex");
          break;
        case 2:
          setValue("fuel", "hibrido");
          break;
        case 3:
          setValue("fuel", "eletrico");
          break;
      }
    }
  };

  const createAnnoucement = async (data: announcementForm): Promise<void> => {
    const token = "";

    try {
      const response = await api.post("/announcement", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      console.log(response);
      //menssagem de sucesso
    } catch (error) {
      console.log(error);
      //menssagem de erro
    }
  };

  const submit = (formData: any) => {
    console.log(formData);
    // createAnnoucement(formData)
  };

  return (
    <>
      <StyledFormCreateAnnouncement onSubmit={handleSubmit(submit)}>
        <h3>Infomações do veículo</h3>

        <div className="inputContainer first">
          <Input
            id="brand"
            type="select"
            size="largue"
            label="Marca"
            placeholder="Mercedes Benz"
            bgColor={true}
            border={true}
            register={register}
            onChange={setBrand}
          >
            <option value="" selected disabled>
              Selecione
            </option>
            <option value="chevrolet">Chevrolet</option>
            <option value="citroën">Citroën</option>
            <option value="fiat">Fiat</option>
            <option value="ford">Ford</option>
            <option value="honda">Honda</option>
            <option value="hyundai">Hyundai</option>
            <option value="nissan">Nissan</option>
            <option value="peugeot">Peugeot</option>
            <option value="renault">Renault</option>
            <option value="toyota">Toyota</option>
            <option value="volkswagen">Volkswagen</option>
          </Input>

          <Input
            id="model"
            type="select"
            size="largue"
            label="Modelo"
            placeholder="A 200 CGI ADVANCE SEDAN"
            bgColor={true}
            border={true}
            register={register}
            onChange={selectCar}
          >
            <option value="" selected disabled>
              Selecione
            </option>
            {cars
              ? cars.map((car: iCar) => {
                  return (
                    <option key={car.id} value={car.name}>
                      {car.name}
                    </option>
                  );
                })
              : null}
          </Input>
        </div>

        <div className="inputContainer second">
          <Input
            id="year"
            type="text"
            size="small"
            label="Ano"
            placeholder="2018"
            bgColor={true}
            border={true}
            register={register}
          />

          <Input
            id="fuel"
            type="text"
            size="small"
            label="Combustivel"
            placeholder="Gasolina / Etanol"
            bgColor={true}
            border={true}
            register={register}
          />
        </div>

        <div className="inputContainer third">
          <Input
            id="km"
            type="text"
            size="small"
            label="Quilometregem"
            placeholder="30.000"
            bgColor={true}
            border={true}
            register={register}
          />

          <Input
            id="color"
            type="text"
            size="small"
            label="Cor"
            placeholder="Branco"
            bgColor={true}
            border={true}
            register={register}
          />
        </div>

        <div className="inputContainer fourth">
          <Input
            id="fipeTablePrice"
            type="number"
            size="small"
            label="Preço tabela FIPE"
            placeholder="R$ 48.000,00"
            bgColor={true}
            border={true}
            register={register}
          />

          <Input
            id="price"
            type="number"
            size="small"
            label="Preço"
            placeholder="R$ 50.000,00"
            bgColor={true}
            border={true}
            register={register}
          />
        </div>

        <div className="inputContainer fifth">
          <Input
            id="description"
            type="textarea"
            size="largue"
            label="Descrição"
            placeholder="Lorem Ipsum is simply dummy text..."
            bgColor={true}
            border={true}
            register={register}
          />

          <Input
            id="coverImage"
            type="text"
            size="largue"
            label="Imagem de capa"
            placeholder="https://image.com"
            bgColor={true}
            border={true}
            register={register}
          />

          <Input
            id="firstImage"
            type="text"
            size="largue"
            label="1 Imagem da galeria"
            placeholder="https://image.com"
            bgColor={true}
            border={true}
            register={register}
          />

          <Input
            id="secondImage"
            type="text"
            size="largue"
            label="2 Imagem da galeria"
            placeholder="https://image.com"
            bgColor={true}
            border={true}
            register={register}
          />

          <div className="addImageInput">
            <Button variant="white">
              Adicionar campo para imagem da galeria
            </Button>
          </div>
        </div>

        <div className="buttonContainer">
          <Button variant="gray" type="button">
            Cancelar
          </Button>
          <Button variant="blue" type="submit">
            Criar anúncio
          </Button>
        </div>
      </StyledFormCreateAnnouncement>
    </>
  );
};

export default FormCreateAnnouncement;
