import { useEffect, useState } from "react";
import StyledCard from "./style";
import { ModalEditAnnouncement } from "../ModalEditAnnouncement";
import api from "../../services/api";
import { useNavigate } from "react-router";
import Modal from "../modal";

interface cardProps {
  isSeller?: boolean;
  announcement: {
    id: string;
    description: string;
    brand: string;
    model: string;
    color: string;
    year: string;
    fuel: string;
    km: string;
    price: string;
    fipeTablePrice: string;
    isPublic: boolean;
    image: {
      id: string;
      coverImage: string;
      firstImage: string | null;
      secondImage: string | null;
      thirdImage: string | null;
      fourthImage: string | null;
      fifthImage: string | null;
      sixthImage: string | null;
    };
    user: {
      id: string;
      name: string;
    };
  };
}
export interface InfoAnnoun {
  id: string;
  description: string;
  brand: string;
  model: string;
  color: string;
  year: string;
  fuel: string;
  km: string;
  price: string;
  fipeTablePrice: string;
  isPublic: boolean;
  image: {
    id: string;
    coverImage?: string;
    firstImage?: string;
    secondImage?: string;
    thirdImage?: string | null;
    fourthImage?: string | null;
    fifthImage?: string | null;
    sixthImage?: string | null;
  };
  user: {
    id: string;
    name: string;
  };
}

const CardAd = ({ announcement, isSeller }: cardProps) => {
  const [isOpenModalUpdate, setIsOpenModalUpdate] = useState<boolean>(false);
  const [isInfoAnnoun, setIsInfoAnnoun] = useState<InfoAnnoun | null>(null);
  // const { isUserInfo } = useContext(UserContext); //info do usuario logado
  const navigate = useNavigate();
  const firstLetter = isInfoAnnoun?.user.name.charAt(0).toUpperCase();

  const handleOpenModalUpdateAnnouncement = () => setIsOpenModalUpdate(true);
  const handleCloseModalUpdateAnnouncement = () => setIsOpenModalUpdate(false);

  const isGoodAnnouncement = (valueFipe: string, valueVenda: string) => {
    const descontoPercentual = ((Number(valueFipe) - Number(valueVenda)) / Number(valueFipe)) * 100;

    if (descontoPercentual >= 5) {
      return <span className="goodAnnoun">$</span>;
    } else {
      return <span className="badAnnoun">"não é um bom negocio"</span>;
    }
  };


  const infoAnnouncement = async (id: string) => {
    try {
      const response = await api.get(`/announcement/${id}`);
      setIsInfoAnnoun(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    infoAnnouncement(announcement.id);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Modal
        isOpen={isOpenModalUpdate}
        onClose={handleCloseModalUpdateAnnouncement}
        title="Atualizar anúncio"
      >
        <ModalEditAnnouncement
          isInfoAnnoun={isInfoAnnoun}
          onClose={handleCloseModalUpdateAnnouncement}
        />
      </Modal>

      <StyledCard id={announcement.id}>
        <div className="infoCar">
          <div className="divImgCar">
            <img src={announcement.image.coverImage} alt="Image Not Found" />
            {isGoodAnnouncement(
              announcement.price,
              announcement.fipeTablePrice
            )}
          </div>

          <h2 onClick={() => navigate(`/announcement/${announcement.id}`)}>
            {announcement.brand} - {announcement.model}
          </h2>

          <p>{announcement.description}</p>
        </div>

        <div className="infoUser">
          <span>{firstLetter}</span>

          <p onClick={() => navigate(`/announcement/${announcement.id}`)}>
            {announcement.user?.name
              ? announcement.user.name
              : isInfoAnnoun?.user.name}
          </p>
        </div>

        <div className="infoCar2">
          <div>
            <span>{announcement.km} KM</span>
            <span>{announcement.year}</span>
          </div>

          <p>R$ {announcement.price}</p>
        </div>

        {isSeller ? (
          <div className="divBtns">
            <button className="btnDetails" onClick={handleOpenModalUpdateAnnouncement}>Editar</button>

            <button
              onClick={() => navigate(`/announcement/${announcement.id}`)}
              className="btnDetails"
            >
              Ver Detalhes
            </button>
          </div>
        ) : (
          <></>
        )}
      </StyledCard>
    </>
  );
};

export default CardAd;
