import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MedicineService } from 'src/app/services/medicine.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-medicine',
  templateUrl: './add-medicine.component.html',
  styleUrls: ['./add-medicine.component.css'],
})
export class AddMedicineComponent implements OnInit {
  medicine = {
    name: '',
    price: '',
    sellerName: '',
    description: '',
    offer: '',
    image: '',
    active: '',
  };
  constructor(private _medicine: MedicineService, private snack: MatSnackBar) {}

  ngOnInit(): void {}
  formSubmit() {
    if (
      this.medicine.name.trim() == '' ||
      this.medicine.price == '' ||
      this.medicine.sellerName == '' ||
      this.medicine.description == '' ||
      this.medicine.offer == '' ||
      this.medicine.image == ''
    ) {
      this.snack.open('Blank field is required', '', {
        duration: 3000,
      });
      return;
    }
    this._medicine.addMedicine(this.medicine).subscribe(
      (data: any) => {
        (this.medicine.name = ''),
          (this.medicine.price = ''),
          (this.medicine.sellerName = ''),
          (this.medicine.description = ''),
          (this.medicine.offer = ''),
          (this.medicine.image = ''),
          Swal.fire('Success', 'Medicine is added successfully', 'success');
      },
      (error) => {
        console.log(error);
        Swal.fire('Error', 'Server error', 'error');
      }
    );
  }
}
