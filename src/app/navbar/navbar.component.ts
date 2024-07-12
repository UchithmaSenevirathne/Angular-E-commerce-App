import { Component, Input, OnInit } from '@angular/core';
import { DataStorageService } from '../service/data-storage.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit {
  constructor(private dataStorage:DataStorageService){}
  
  @Input() cartCount:number=0;
  ngOnInit(): void {
    var getVal = this.dataStorage.getCartData();
    this.cartCount = getVal ? getVal.length : 0;
  }

}
