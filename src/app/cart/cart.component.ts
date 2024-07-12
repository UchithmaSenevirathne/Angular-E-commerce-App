import { Component, OnInit } from '@angular/core';
import { DataStorageService } from '../service/data-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent implements OnInit {
  constructor(private dataStorage: DataStorageService,private router:Router) {}

  getCartData: any;
  storeCartArry: any = [];
  totalAmount: number = 0;
  totalCart: number = 0;

  ngOnInit(): void {
    this.getCartData = this.dataStorage.getCartData();
    this.totalCart =  this.getCartData ? this.getCartData.length : 0;
    if(this.getCartData)
    {
      this.getCartData.filter((ele: any) => {
        this.totalAmount = ele.pdPrice * ele.plusMinusCounter + this.totalAmount;
      });
    }

  }

  removeCart(data: any) {
    this.totalAmount = 0;
    localStorage.removeItem('cart-data');
    this.storeCartArry = [];
    this.getCartData.filter((ele: any) => {
      if (ele.pdId != data.pdId) {
        this.storeCartArry.push(ele);
        this.totalAmount = ele.pdPrice * ele.plusMinusCounter + this.totalAmount;
      }
    });
    this.dataStorage.storeCartData(this.storeCartArry);
    this.getCartData = this.dataStorage.getCartData();
    this.totalCart = this.getCartData.length;
  }


  plusMinusCount(data:any,type:any)
  {
      this.storeCartArry=[];
      var plusMinusValue = data.plusMinusCounter;
      this.totalAmount=0;
      if(type=='minus')
      {
          let minusCount = plusMinusValue - 1;
          this.getCartData.filter((ele:any)=>{
              if(data.pdId == ele.pdId)
              {
                ele['plusMinusCounter'] = minusCount;
              }
              this.totalAmount = ele.pdPrice * ele.plusMinusCounter + this.totalAmount;
          });

          this.storeCartArry = this.getCartData;
          this.dataStorage.storeCartData(this.storeCartArry);
          this.getCartData = this.dataStorage.getCartData();

      }
      if(type=='plus')
      {
          let minusCount = plusMinusValue + 1;
          this.getCartData.filter((ele:any)=>{
              if(data.pdId == ele.pdId)
              {
                ele['plusMinusCounter'] = minusCount;
              }
              this.totalAmount = ele.pdPrice * ele.plusMinusCounter + this.totalAmount;
          });

          this.storeCartArry = this.getCartData;
          this.dataStorage.storeCartData(this.storeCartArry);
          this.getCartData = this.dataStorage.getCartData();

      }

  }
  orderClick()
  {
      localStorage.removeItem('cart-data');
      this.router.navigate(['/']);
      
  }
}
