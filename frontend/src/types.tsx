export type Place = {
  id: number;
  name: string;
  location: string;
  address: string;
  description: string;
  amenities: string[];
  rating: number;
  price_per_night: number;
  availability: boolean;
  image_url: string;
};

export type PlaceData = {
  name: string;
  location: string;
  address: string;
  description: string;
  amenities: string | string[];
  rating: string;
  price_per_night: string;
  availability: boolean;
};

// parametrelerin tipi
export type Params = {
  location?: string;
  sort?: string;
  title: string;
};
