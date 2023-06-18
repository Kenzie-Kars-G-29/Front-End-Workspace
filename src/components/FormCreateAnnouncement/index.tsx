import { useForm } from "react-hook-form";
import { z } from "zod";
import api from "../../services/api";
import Button from "../Button/Button";
import Input from "../Input";
import StyledFormCreateAnnouncement from "./style";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";

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
type announcement = z.infer<typeof announcementFormResolver>;

const FormCreateAnnouncement = () => {  
  const [inputImage, setInputImage] = useState<number | null>(null)

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    resolver: zodResolver(announcementFormResolver),
  });

  const createAnnoucement = async (data: announcement): Promise<void> => {
    try {
      const response = await api.post("/announcement", data, {
      
      });

      console.log(response);
      //menssagem de sucesso
    } catch (error) {
      console.log(error);
      //menssagem de erro
    }
  }//Adicionar token

  const submit = (formData: any) => {
    createAnnoucement(formData)
    console.log(formData);
    // createAnnoucement(formData);
  };

  console.log(errors ? errors : null);

  return (
    <>
      <StyledFormCreateAnnouncement onSubmit={handleSubmit(submit)}>
        <h3>Infomações do veículo</h3>

        <div className="inputContainer first">
          <Input
            id="brand"
            type="text"
            size="largue"
            label="Marca"
            placeholder="Mercedes Benz"
            bgColor={true}
            border={true}
            register={register}
          />

          <Input
            id="model"
            type="text"
            size="largue"
            label="Modelo"
            placeholder="A 200 CGI ADVANCE SEDAN"
            bgColor={true}
            border={true}
            register={register}
          />
        </div>

        <div className="inputContainer second">
          <Input
            id="year"
            type="number"
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

          {
          // inputImage.map(element => {
          //   return (
          //     <Input
          //       key={element}
          //       // id="secondImage"
          //       type="text"
          //       size="largue"
          //       label="2 Imagem da galeria"
          //       placeholder="https://image.com"
          //       bgColor={true}
          //       border={true}
          //       register={register}
          //     />
          //   );
          // })

          }

          <div className="addImageInput">
            <Button variant="white" onClick={() => setInputImage(3)}>
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
