interface Time {
  open: string;
  close: string;
}
interface Social {
  facebook: string;
  instagram: string;
}
interface Address {
  geo: any;
  specific: string;
}
export interface Shop {
  id: string;
  avgRateShop: number;
  time: Time;
  name: string;
  social: Social;
  address: Address;
  price: any;
  isBookMark: boolean;
  slug: string;
  images: Array<string>;
  imagesCount: number;
  description: string;
  benefits: any;
  status: string;
}
