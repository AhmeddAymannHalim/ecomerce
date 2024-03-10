import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoriesService } from 'src/app/shared/services/categories.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  categoriesContainer:any={};
  specificCategory:any={};
constructor(private _CategoriesService:CategoriesService){}
ngOnInit(): void {
    this._CategoriesService.getAllCategories().subscribe({
      next:(response)=>{
       this.categoriesContainer =response.data;
      }
    })
}
getSpecificCategory(categoryId:string):void{
this._CategoriesService.getSpecificCategory(categoryId).subscribe({
  next:(response)=>{
    this.specificCategory= response.data;


  }
})
}
}

