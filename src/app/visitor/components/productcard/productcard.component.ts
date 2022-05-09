import { Component, OnInit, Input } from '@angular/core';
import { ProductModel } from 'src/app/_models/Products';
import { NumberOptions } from "../../../_models/Number";
@Component({
  selector: 'app-productcard',
  templateUrl: './productcard.component.html',
  styleUrls: ['./productcard.component.scss']
})
export class ProductcardComponent implements OnInit {
  @Input() product: ProductModel;

  constructor() {
    this.product = {
      company_id: "",
      id: "1",
      name: "Placeholder",
      default_sales_price: 10000,
      sku: "IKLMNO1",
      default_purchase_price: 9000,
      unit: "Nos",
      available_stock: 10,
      commited_stock: 1,
      p_type: 'p'
    } as ProductModel;
  }
  spaces_url: string = `https://unk.sgp1.digitaloceanspaces.com/d26d3690-bf54-481b-8f77-f5b0744e2fcd_product`;
  str_sales_price: string = "0.00";
  str_purchase_price: string = "0.00";
  ngOnInit(): void {
    if (this.product.img_url !== null || this.product.img_url !== undefined) {
      this.spaces_url = `${this.spaces_url}/${this.product.img_url}`
      console.log(this.spaces_url)
    }
    this.str_sales_price = this.product.default_sales_price.toLocaleString("en-IN", { "style": "currency", currency: "NPR", "base": "paisa" } as NumberOptions);
    this.str_purchase_price = this.product.default_purchase_price.toLocaleString("en-IN", { "style": "currency", currency: "NPR", "base": "paisa" } as NumberOptions);
  }

}


const old = Number.prototype.toLocaleString;
Number.prototype.toLocaleString = function (locale: string, options: NumberOptions) {
  let base_val = this.valueOf();
  if (options["base"] === "paisa") {
    base_val = base_val / 100;
  }
  let result = old.call(base_val, locale, {
    style: options["style"],
    currency: options["currency"],
  });
  if (options["style"] === "currency" && options["currency"] === "NPR") {
    result = result.replace(/NPR/i, "रु‬");
    return result;
  } else {
    //pass
  }
  return result;
};