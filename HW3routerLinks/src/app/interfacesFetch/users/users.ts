import {Adres} from './adres';
import {Kompany} from './kompany';

export interface Users {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Adres;
  phone: string;
  website: string;
  company: Kompany;
}
