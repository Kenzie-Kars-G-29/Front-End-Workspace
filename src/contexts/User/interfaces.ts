interface InfoUserLogged {
    id: string,
    name: string,
    email: string,
    cpf: string,
    phone: string,
    birthday: string,
    description: string,
    cep: string,
    state: string,
    city: string,
    street: string,
    number: string,
    complement: string,
    isSeller: boolean,
    announcement: AnnouncementInfo[]
  }

  interface InfoUser {
    id: string,
    name: string,
    email: string,
    cpf: string,
    phone: string,
    birthday: string,
    description: string,
    cep: string,
    state: string,
    city: string,
    street: string,
    number: string,
    complement: string,
    isSeller: boolean,
    announcement: AnnouncementInfo[]
  }

  interface AnnouncementInfo {
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
  }


export {
InfoUserLogged,
AnnouncementInfo,
InfoUser
}