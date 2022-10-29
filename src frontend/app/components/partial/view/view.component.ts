import { Component, OnInit } from '@angular/core';
import { MedicineService } from 'src/app/services/medicine.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css'],
})
export class ViewComponent implements OnInit {
  medicines: any;
  constructor(private medicine: MedicineService) {}

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
  deleteMedicine(productId: number) {
    Swal.fire({
      icon: 'info',
      title: 'Are you sure ?',
      confirmButtonText: 'Delete',
      showCancelButton: true,
    }).then((result) => {
      if (result.isConfirmed) {
        this.medicine.deleteMedicine(productId).subscribe(
          () => {
            this.medicines = this.medicines.filter(
              (medicine: any) => medicine.productId != productId
            );
            Swal.fire('Success', 'Medicine deleted', 'success');
          },
          (error) => {
            Swal.fire('Error', 'Error is deleting', 'error');
          }
        );
      }
    });
  }
}
