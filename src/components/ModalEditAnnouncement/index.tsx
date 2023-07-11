import { StyledFormEditAnnouncement, StyledSucess } from "./style";
import Button from "../Button/Button";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import api from "../../services/api";
import { useContext, useState } from "react";
import Input from "../Input";
import { SellerContext } from "../../contexts/Seller";
import { iCar } from "../../contexts/User/interfaces";
import { InfoAnnoun } from "../Card";
import ModalDeleteAnnouncement from "../ModalDeleteAnnouncement";
import announcementEditForm from "./formSchema";
import { iAnnouncementWithImageOptional } from "./interfaces";
import { z } from "zod";
import Modal from "../modal";
import { UserContext } from "../../contexts/User";

type iAnnouncementEditForm = z.infer<typeof announcementEditForm>;

interface iModalEditAnnouncementProps {
  onClose: () => void;
  isInfoAnnoun: InfoAnnoun | null;
}

export const ModalEditAnnouncement = ({
  onClose,
  isInfoAnnoun,
}: iModalEditAnnouncementProps) => {
  const { infosUserLogged } = useContext(UserContext);

  const [sucess, setSucess] = useState(false);
  const [isOpenModalDelete, setIsOpenModalDelete] = useState<boolean>(false);
  const { setBrand, cars } = useContext(SellerContext);
  const [inputImageThird, setInputImageThird] = useState(false);
  const [inputImageFourth, setInputImageFourth] = useState(false);
  const [inputImageFifth, setInputImageFifth] = useState(false);
  const [inputImageSixth, setInputImageSixth] = useState(false);

  const handleOpenModalDeleteAnnouncement = () => setIsOpenModalDelete(true);
  const handleCloseModalDeleteAnnouncement = () => setIsOpenModalDelete(false);

  const {
    register,
    handleSubmit,
    setValue,
    // formState: { errors },
  } = useForm<iAnnouncementEditForm>({
    resolver: zodResolver(announcementEditForm),
    defaultValues: {
      description: isInfoAnnoun?.description,
      brand: isInfoAnnoun?.brand,
      model: isInfoAnnoun?.model,
      color: isInfoAnnoun?.color,
      year: isInfoAnnoun?.year,
      fuel: isInfoAnnoun?.fuel,
      km: isInfoAnnoun?.km,
      price: isInfoAnnoun?.price,
      fipeTablePrice: isInfoAnnoun?.fipeTablePrice,
      coverImage: isInfoAnnoun?.image?.coverImage,
      firstImage: isInfoAnnoun?.image?.firstImage,
      secondImage: isInfoAnnoun?.image?.secondImage,
      thirdImage: isInfoAnnoun?.image?.thirdImage,
      fourthImage: isInfoAnnoun?.image?.fourthImage,
      fifthImage: isInfoAnnoun?.image?.fifthImage,
      sixthImage: isInfoAnnoun?.image?.sixthImage,
      isPublic: isInfoAnnoun?.isPublic,
    },
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
    data: iAnnouncementWithImageOptional,
    id: string
  ): Promise<void> => {
    const token = localStorage.getItem("token");

    try {
      const response = await api.put(`/announcement/${id}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "Application/json",
        },
      });

      if (response.status == 200) {
        setSucess(true);
        infosUserLogged();
      }
    } catch (error) {
      console.log(error);
      toast.error("Erro do servidor! Tente novamente mais tarde!");
    }
  };

  const submit: SubmitHandler<iAnnouncementEditForm> = (formData) => {
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
    } = formData;

    const images = {
      coverImage: coverImage,
      firstImage: firstImage,
      secondImage: secondImage,
      thirdImage: thirdImage,
      fourthImage: fourthImage,
      fifthImage: fifthImage,
      sixthImage: sixthImage,
    };

    const announcement: any = {
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
    
    if (isInfoAnnoun?.id) updateAnnoucement(announcement, isInfoAnnoun.id);
  };

  return (
    <>
      <Modal
        isOpen={isOpenModalDelete}
        onClose={handleCloseModalDeleteAnnouncement}
        title="Apagar anúncio"
      >
        <ModalDeleteAnnouncement
          onCloseModalEdit={onClose}
          onClose={handleCloseModalDeleteAnnouncement}
          isInfoAnnoun={isInfoAnnoun}
        />
      </Modal>

      {sucess ? (
        <StyledSucess>
          <h3>Seu anúncio foi editado com sucesso!</h3>
          <p>Agora você poderá ver seus negócios crescendo em grande escala</p>
        </StyledSucess>
      ) : (
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
            <Button variant="gray" type="button" onClick={onClose}>
              Cancelar
            </Button>

            <Button
              variant="gray"
              type="button"
              onClick={() => {
                handleOpenModalDeleteAnnouncement();
              }}
            >
              Excluir Anuncio
            </Button>

            <Button variant="blue" type="submit">
              Salvar Alterações
            </Button>
          </div>
        </StyledFormEditAnnouncement>
      )}
    </>
  );
};
