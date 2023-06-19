import StyledCard from "./style"
import Carro from "../../assets/car.png"



export const CardAd = () => {

    
    return (
        <StyledCard>
            <div className="infoCar">
            <div className="divImgCar">
                <img src={Carro} alt="Image Not Found" />
            </div>
                <h2>Maserati - Ghibli Product title stays</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem...</p>
            </div>
    
            <div className="infoUser">
                <span>SL</span>
                <p>Samuel Leao</p>
            </div>
              
            <div className="infoCar2">
            <div>
                <span>0 KM</span>
                <span>2019</span>
            </div>
            <p>R$ 2000.000,00</p>
            </div>
        </StyledCard>
    )
}


