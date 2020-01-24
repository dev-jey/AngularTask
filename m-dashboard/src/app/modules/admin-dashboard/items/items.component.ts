import { Component, OnInit } from '@angular/core';
import { JsonService } from 'src/app/_services/json.service';
import { Product } from '../../../_models/product';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {
  products: Array<Product> = [];
  constructor(private jsonService: JsonService) { 
  }

  /**
   * Read from my Json File
   */
  ngOnInit() {
    this.jsonService.getJSON().subscribe(data => {
      this.products = data;
    })
  }

}
