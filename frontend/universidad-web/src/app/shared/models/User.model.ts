export interface User {
    id?: number;
    nombre: string;
    email: string;
    password?: string;
    role: 'admin' | 'estudiante' | 'profesor';
    access_token?: string;
    [key: string]: any;

  }
  