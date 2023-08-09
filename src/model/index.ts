export interface ContactModel {
  _id?: string;
  name?: string;
  email?: string;
  phone?: string;
  label?: string;
  instagram?: string;
  linkedIn?: string;
  twitter?: string;
  createdAt: string;
  updatedAt: string;
}

export interface User {
  username: string;
  email: string;
}
