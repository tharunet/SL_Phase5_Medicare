import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { MedicineService } from 'src/app/services/medicine.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  medicines: any;
  productId: number;
  constructor(
    private medicine: MedicineService,
    private cartService: CartService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.medicine.medicines().subscribe(
      (data: any) => {
        this.medicines = data;
        console.log(this.medicines);
      },
      (error) => {
        console.log(error);
        Swal.fire('Error', 'Server Error', 'error');
      }
    );
  }
  addToCart() {
    this.medicine.getMedicine(this.productId).subscribe((data: any) => {
      this.medicines = data;
      console.log(this.medicines);
    });
    this.router.navigateByUrl('/cart-page');
  }
}
