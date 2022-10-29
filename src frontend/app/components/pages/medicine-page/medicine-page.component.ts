import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MedicineService } from 'src/app/services/medicine.service';

@Component({
  selector: 'app-medicine-page',
  templateUrl: './medicine-page.component.html',
  styleUrls: ['./medicine-page.component.css'],
})
export class MedicinePageComponent implements OnInit {
  productId;
  medicines: any;
  constructor(
    private activateRoute: ActivatedRoute,
    private medicineService: MedicineService
  ) {
    activateRoute.params.subscribe((params) => {
      if (params.productId)
        medicineService
          .getMedicine(params.productId)
          .subscribe((serveMedicine) => {
            this.medicines = serveMedicine;
          });
    });
  }

  ngOnInit(): void {
    // this.activateRoute.params.subscribe((params) => {
    //   this.productId = params.productId;
    // });
  }
}
