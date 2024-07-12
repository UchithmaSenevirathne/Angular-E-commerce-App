import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {

   // category data 
   categoriesData = [
    {
      id: 1,
      name: 'Fashion',
      img: '../../assets/images/categoriesimg/fashion.webp',
      code: 'fashion',
    },
    {
      id: 2,
      name: 'Home & Furniture',
      img: '../../assets/images/categoriesimg/home.webp',
      code: 'homeandfurniture',
    },
    {
      id: 3,
      name: 'Appliance',
      img: '../../assets/images/categoriesimg/appliance.webp',
      code: 'appliances',
    },
    {
      id: 4,
      name: 'Toys',
      img: '../../assets/images/categoriesimg/toys.webp',
      code: 'toys',
    },
  ];


  constructor() { }

}
