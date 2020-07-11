import {UserAdresInterface} from './UserAdresInterface';
import {UserCompanyInterface} from './UserCompanyInterface';

export interface UsersInterface {
  id: number;
  name: string;
  username: string;
  email: string;
  address: UserAdresInterface;
  phone: string;
  website: string;
  company: UserCompanyInterface;
}
