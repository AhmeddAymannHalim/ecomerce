import { Component, OnInit } from '@angular/core';
import { BrandsService } from 'src/app/shared/services/brands.service';


@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.css']
})
export class BrandsComponent implements OnInit {
  brandsContainer:any={};
  brandSpecificBrand:any={};
constructor(private _BrandsService:BrandsService){}

ngOnInit(): void {
    this._BrandsService.getBrands().subscribe({
      next:(response)=>{
       this.brandsContainer =response.data;
      }
    })
}
getSpecificBrand(brandId:string):void{
 this._BrandsService.getspecificBrand(brandId).subscribe({
  next:(response)=>{
    this.brandSpecificBrand =response.data;
  }
})
}
}
