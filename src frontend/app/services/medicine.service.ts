import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root',
})
export class MedicineService {
  getAll: any;
  constructor(private http: HttpClient) {}
  //load all the medicine
  public medicines() {
    return this.http.get(`${baseUrl}/medicine/`);
  }
  //add medicine from website
  public addMedicine(medicine: any) {
    return this.http.post(`${baseUrl}/medicine/`, medicine);
  }
  //delete medicine
  public deleteMedicine(productId: number) {
    return this.http.delete(`${baseUrl}/medicine/${productId}`);
  }
  // get medicine by id
  public getMedicine(productId: number) {
    return this.http.get(`${baseUrl}/medicine/${productId}`);
  }
  //update medicine
  public updateMedicine(medicine: any) {
    return this.http.put(`${baseUrl}/medicine/`, medicine);
  }

  public getMedicineById(productId: number) {
    return this.http.get(`${baseUrl}/medicine/${productId}`);
  }
}
