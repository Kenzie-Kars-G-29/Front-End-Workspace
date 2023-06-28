interface iAnnouncementWithImageOptional {
    description?: string;
    brand?: string;
    model?: string;
    color?: string;
    year?: string;
    fuel?: string;
    km?: string;
    price?: string;
    fipeTablePrice?: string;
    isPublic?: boolean;
    images?: {
      coverImage: string;
      firstImage: string;
      secondImage: string;
      thirdImage: string | null;
      fourthImage: string | null;
      fifthImage: string | null;
      sixthImage: string | null;
    };
}

export {
    iAnnouncementWithImageOptional
}