import { ModalContent, ModalWrapper, StyledFormEditAnnouncement } from "./style";
import Button from "../Button/Button";
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import api from "../../services/api";
import { useContext, useState } from "react";
import Input from "../Input";
import { SellerContext } from "../../contexts/Seller";
import { iCar } from "../../contexts/Seller/interfaces";
import { InfoAnnoun } from "../Card";
import ModalDeleteAnnoun from "../../components/ModalDeleteAnnoun"
import announcementEditForm from "./formSchema";
import { iAnnouncementWithImageOptional } from "./interfaces";

interface ModalProps {
    toggleModal: () => void,
    isInfoAnnoun: InfoAnnoun | null
}


export const ModalEditAnnoun = ({ toggleModal, isInfoAnnoun }: ModalProps) => {
  console.log(isInfoAnnoun)
    const [isModalOpen, setIsModalOpen] = useState(false) 
    const [sucess, setSucess] = useState(false);
    const { setBrand, cars } = useContext(SellerContext);
    const [inputImageThird, setInputImageThird] = useState(false);
    const [inputImageFourth, setInputImageFourth] = useState(false);
    const [inputImageFifth, setInputImageFifth] = useState(false);
    const [inputImageSixth, setInputImageSixth] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const { register, handleSubmit, reset, formState: {errors}} = useForm({
      mode: "onBlur",  
      resolver: zodResolver(announcementEditForm),
      defaultValues: {
        description: `${isInfoAnnoun?.description}`,
        brand: `${isInfoAnnoun?.brand}`,
        model: `${isInfoAnnoun?.model}`,
        color: `${isInfoAnnoun?.color}`,
        year: `${isInfoAnnoun?.year}`,
        fuel: `${isInfoAnnoun?.fuel}`,
        km: `${isInfoAnnoun?.km}`,
        price: `${isInfoAnnoun?.price}`,
        fipeTablePrice: `${isInfoAnnoun?.fipeTablePrice}`,
        coverImage: `${isInfoAnnoun?.image?.coverImage}`,
        firstImage: `${isInfoAnnoun?.image?.fifthImage}`,
        secondImage: `${isInfoAnnoun?.image?.secondImage}`,
        thirdImage: `${isInfoAnnoun?.image?.thirdImage}`,
        fourthImage: `${isInfoAnnoun?.image?.fourthImage}`,
        fifthImage: `${isInfoAnnoun?.image?.fifthImage}`,
        sixthImage: `${isInfoAnnoun?.image?.sixthImage}`,
        isPublic: `${isInfoAnnoun?.isPublic}`
      }
        
    })

    const toggleModalDelete = () => setIsModalOpen(!isModalOpen);

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
          setValue("fipeTablePrice", findCar.value.toString());
    
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

      const updateAnnoucement = async (
        data: iAnnouncementWithImageOptional, id: any
      ): Promise<void> => {
        const token = localStorage.getItem("token");
    
        try {
          const response = await api.put(`/announcement/${id}`, data, {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "Application/json",
            },
          });
    
          if (response.status == 201) {
            setSucess(true);
          }
        } catch (error) {
          console.log(error);
          toast.error("Erro do servidor! Tente novamente mais tarde!");
        }
      };


    const submit = (data: any, id: any) => {
      console.log(data)
      console.log(id)
      // updateAnnoucement(data, id)
      // toggleModal()
    }

  return (
    <ModalWrapper>
      <ModalContent>
        <div className="modalHeader">
            <h3>Editar Anuncio</h3>
            <button onClick={() => toggleModal()}>X</button>
        </div>
        <form>
        <StyledFormEditAnnouncement onSubmit={handleSubmit(submit)}>
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
            <Button variant="gray" type="button" onClick={toggleModalDelete}>
                Excluir Anuncio
            </Button>
            <Button variant="blue" type="submit">
                Salvar Alterações
            </Button>
            </div>
        </StyledFormEditAnnouncement>
      
        </form>
      </ModalContent>
      {isModalOpen && (<ModalDeleteAnnoun toggleModal={toggleModal} isInfoAnnoun={isInfoAnnoun}/>)}
    </ModalWrapper>
  );
};