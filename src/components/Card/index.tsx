import Button from "../Button/Button"
import StyledCard from "./style"

interface cardProps {
    announcement: {
        id: string,
        description: string,
        brand: string,
        model: string,
        color: string,
        year: string,
        fuel: string,
        km: string,
        price: string,
        fipeTablePrice: string,
        isPublic: boolean,
        image: {
          id: string,
          coverImage: string,
          firstImage: string | null,
          secondImage: string | null,
          thirdImage: string | null,
          fourthImage: string | null,
          fifthImage: string | null,
          sixthImage: string | null
        },
        user: {
          id: string,
          name: string
        }  
    }
}

export const CardAd = ({announcement}: cardProps) => {
  
    const isGoodAnnouncement = (value1: string, value2: string) => {
        const difference = Math.abs(Number(value1) - Number(value2));
        const fivePerCent = 0.05 * Math.max(Number(value1), Number(value2));
      
        if (difference >= fivePerCent) {
          return <span className="goodAnnoun">$</span>;
        } else {
          return <span className="badAnnoun">"não é um bom negocio"</span>;
        }
      }

    return (
        <StyledCard key={announcement.id} id={announcement.id}>
            <div className="infoCar">
                <div className="divImgCar">
                    <img src={announcement.image.coverImage} alt="Image Not Found"/>
                    {isGoodAnnouncement(announcement.price, announcement.fipeTablePrice)}
                </div>
                    <h2>{announcement.brand} - {announcement.model}</h2>
                    <p>{announcement.description}</p>
                </div>

                <div className="infoUser">
                    <span>SL</span>
                    <p>{announcement.user.name}</p>
                </div>
                
                <div className="infoCar2">
                <div>
                    <span>{announcement.km} KM</span>
                    <span>{announcement.year}</span>
                </div>
                <p>R$ {announcement.price}</p>
                </div>
        </StyledCard>
    )
}


