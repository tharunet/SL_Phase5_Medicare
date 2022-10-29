import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MedicineService } from 'src/app/services/medicine.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-medicine',
  templateUrl: './update-medicine.component.html',
  styleUrls: ['./update-medicine.component.css'],
})
export class UpdateMedicineComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private medicine: MedicineService,
    private router: Router
  ) {}
  productId = 0;
  _medicine: any;
  ngOnInit(): void {
    this.productId = this.route.snapshot.params['productId'];
    this.medicine.getMedicine(this.productId).subscribe(
      (data: any) => {
        this._medicine = data;
        console.log(this._medicine);
      },
      (error) => {
        console.log(error);
      }
    );
  }
  public updateMed() {
    this.medicine.updateMedicine(this._medicine).subscribe(
      (data: any) => {
        Swal.fire('Updated', 'Medicine Update', 'success').then((e) => {
          this.router.navigate(['admin/view']);
        });
      },
      (error) => {
        Swal.fire('Error', 'Error in updating', 'error');
      }
    );
  }
}
