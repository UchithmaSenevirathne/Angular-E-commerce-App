import { Component, OnInit } from '@angular/core';
import { GetDataService } from '../service/get-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  bannerImgs = [
    {
      id: 1,
      img: '../../assets/images/banner/ef637eb93bf1a887.webp',
    },
    {
      id: 2,
      img: '../../assets/images/banner/9021283f0be266c1.webp',
    },
    {
      id: 3,
      img: '../../assets/images/banner/7dcc28ed89760319.webp',
    },
  ];

  getCategorisData:any;
  getApplianceProductData:any=[];
  getFashionProductData:any=[];


  constructor(private getData:GetDataService){}

  ngOnInit(): void {
    this.getCategorisData = this.getData.categoriesData;

    this.getData.productData.filter((ele:any)=>{

      if(ele.pdCategory == 'appliances')
      {
          this.getApplianceProductData.push(ele);
      }
      if(ele.pdCategory=='fashion')
      {
          this.getFashionProductData.push(ele);
      }
  
      
    });
  }


}
