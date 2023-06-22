import { useForm } from "react-hook-form";
import { z } from "zod";
import api from "../../services/api";
import Button from "../Button/Button";
import Input from "../Input";
import StyledFormCreateAnnouncement from "./style";
import { useContext, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { SellerContext } from "../../contexts/Seller";
import { iCar } from "../../contexts/Seller/interfaces";
import announcementFormResolver from "./formSchema";

// Tipagem
type announcementForm = z.infer<typeof announcementFormResolver>;

const FormCreateAnnouncement = () => {
  const { setBrand, cars } = useContext(SellerContext);
  const [inputImageThird, setInputImageThird] = useState(false);
  const [inputImageFourth, setInputImageFourth] = useState(false);
  const [inputImageFifth, setInputImageFifth] = useState(false);
  const [inputImageSixth, setInputImageSixth] = useState(false);

  const { handleSubmit, register, reset, setValue } = useForm({
    mode: "onBlur",
    resolver: zodResolver(announcementFormResolver),
  });

  const handleInputImages = () => {
    if (!inputImageThird) {
      return setInputImageThird(true);
    }
    if (!inputImageFourth) {
      return setInputImageFourth(true);
    }
    if (!inputImageFifth) {
      return setInputImageFifth(true);
    }
    if (!inputImageSixth) {
      return setInputImageSixth(true);
    }
  };

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
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc1NlbGxlciI6dHJ1ZSwiaWQiOiI4MjI4ZGZjNS01ZjFkLTRmMWMtYjFhYS0yZTEzNTZjM2MyYjUiLCJpYXQiOjE2ODc0NDc0OTEsImV4cCI6MTY4NzUzMzg5MSwic3ViIjoiODIyOGRmYzUtNWYxZC00ZjFjLWIxYWEtMmUxMzU2YzNjMmI1In0.BdzW20ug8TSU-d_3w6agzfP96ZCXklbBmPk6Z7YawCA";

    try {
      const response = await api.post("/announcement", data, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "Application/json",
        },
      });

      if (response.status == 200) {
        reset();
        //menssagem de sucesso
      }
    } catch (error) {
      console.log(error);
      //menssagem de erro
    }
  };

  const submit = (formData: any) => {
    const data: announcementForm = formData;

    const {
      coverImage,
      firstImage,
      secondImage,
      thirdImage,
      fourthImage,
      fifthImage,
      sixthImage,
      description,
      year,
      price,
      fuel,
      fipeTablePrice,
      brand,
      model,
      color,
      km,
      isPublic,
    } = data;

    const images = {
      coverImage: coverImage,
      firstImage: firstImage,
      secondImage: secondImage,
      thirdImage: thirdImage,
      fourthImage: fourthImage,
      fifthImage: fifthImage,
      sixthImage: sixthImage,
    };

    const newAnnouncement = {
      description: description,
      year: year,
      price: price,
      fuel: fuel,
      fipeTablePrice: fipeTablePrice,
      brand: brand,
      model: model,
      color: color,
      km: km,
      isPublic: isPublic,
      images: {
        ...images,
      },
    };

    createAnnoucement(newAnnouncement);
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

          {inputImageThird ? (
            <Input
              id="thirdImage"
              type="text"
              size="largue"
              label="3 Imagem da galeria (*opcional)"
              placeholder="https://image.com"
              bgColor={true}
              border={true}
              register={register}
            />
          ) : null}

          {inputImageFourth ? (
            <Input
              id="fourthImage"
              type="text"
              size="largue"
              label="4 Imagem da galeria (*opcional)"
              placeholder="https://image.com"
              bgColor={true}
              border={true}
              register={register}
            />
          ) : null}

          {inputImageFifth ? (
            <Input
              id="fifthImage"
              type="text"
              size="largue"
              label="5 Imagem da galeria (*opcional)"
              placeholder="https://image.com"
              bgColor={true}
              border={true}
              register={register}
            />
          ) : null}

          {inputImageSixth ? (
            <Input
              id="fifthImage"
              type="text"
              size="largue"
              label="6 Imagem da galeria (*opcional)"
              placeholder="https://image.com"
              bgColor={true}
              border={true}
              register={register}
            />
          ) : null}

          <div className="addImageInput">
            <Button variant="brand" onClick={() => handleInputImages()}>
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
