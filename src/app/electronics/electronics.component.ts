import { Component, OnInit } from '@angular/core';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-electronics',
  templateUrl: './electronics.component.html',
  styleUrls: ['./electronics.component.css']
})
export class ElectronicsComponent implements OnInit {

  constructor(private cartservice:CartService ) { }

  ngOnInit(): void {

  }
  


}
