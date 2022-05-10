import { Component, OnInit } from '@angular/core';
import { ProductModel } from 'src/app/_models/Products';
import { MeiliSearch } from "meilisearch";
import { AuthService } from '../../auth.service';
import { environment } from "../../../environments/environment";
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(public authService: AuthService) { }
  //init for product models
  products: ProductModel[] = [];
  company_id: string = "d26d3690-bf54-481b-8f77-f5b0744e2fcd";
  async getRandomItemMeili() {
    //function will look for 20 items from products index in meilisearch
    //and will return a random item
    const client = new MeiliSearch(environment.meilisearch_details);
    try {
      const idx = client.index("products");
      const search = await idx.search("*", {
        filter: [`company_id=${this.company_id}`],
      });
      const data: ProductModel[] = search.hits.map(i => { return i as ProductModel; });
      this.products = data;
      console.log(data)
    } catch (err) {
      console.log(err);
    }


  }
  ngOnInit(): void {
    this.getRandomItemMeili();
  }

}
