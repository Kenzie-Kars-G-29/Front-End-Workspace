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

interface ModalProps {
    toggleModal: () => void,
    isInfoAnnoun: InfoAnnoun | null
}


export const ModalEditAnnoun = ({ toggleModal, isInfoAnnoun }: ModalProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false)  
  const { setBrand, cars } = useContext(SellerContext);
    const [inputImageThird, setInputImageThird] = useState(false);
    const [inputImageFourth, setInputImageFourth] = useState(false);
    const [inputImageFifth, setInputImageFifth] = useState(false);
    const [inputImageSixth, setInputImageSixth] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const { register, handleSubmit, reset, setValue} = useForm({
        // resolver: zodResolver(resetPassSchema)
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



    // const submit = (data) => {
    //     solicityEmail(data)
    //     reset()
    //     toggleModal()
    // }

  return (
    <ModalWrapper>
      <ModalContent>
        <div className="modalHeader">
            <h3>Editar Anuncio</h3>
            <button onClick={() => toggleModal()}>X</button>
        </div>
        <form>
        <StyledFormEditAnnouncement>
            <h3>Infomações do veículo</h3>
            

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
