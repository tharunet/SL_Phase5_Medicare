import { Medicines } from './Medicines';

export class CartItem {
  medicines: any;
  totalCount: any;
  totalPrice: string | number;
  constructor(public medicine: Medicines) {}

  quantity: number = 1;
  price: number = this.medicine.price;
}
