export interface CustomerProps{
   id: string;
   name: string;
   phone: string;
   email: string;
   addres?: string;
   createdAt?: Date;
   updatedAt?: Date;
   userId: string | null;
}
