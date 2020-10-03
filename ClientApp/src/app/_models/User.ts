import {Role} from '../_models/Role'

export interface User {
    id: number;
    name: string;
    role: Role; 
    token: string;
  }