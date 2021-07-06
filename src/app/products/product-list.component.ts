//import { Component } from "@angular/core";
import { Component, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { IProduct } from "./product";
import { ProductService } from "./product.service";


@Component({
    selector: 'pm-products',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css'] //styleUrls takes in an array
}) 

export class ProductListComponent implements OnInit{ 
    pageTitle: string = "Product List";
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    errorMessage: string = '';
    sub!: Subscription;
    private _listFilter: string = '';
    
    get listFilter(): string {
        return this._listFilter
    }
    set listFilter(value: string)
    {
        this._listFilter=value;
        console.log('In setter:', value);
        this.filteredProducts = this.performFilter(value);
    }
    
    filteredProducts: IProduct[] = [];


    products: IProduct[] = [
      //left empty because no data is here yet, it will be retrieved
];

constructor (private productService: ProductService) {};

performFilter(filterBy: string): IProduct[]{
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product: IProduct) => 
    product.productName.toLocaleLowerCase().includes(filterBy));
}

toggleImage(): void {
    this.showImage = !this.showImage;
}

ngOnInit(): void
{
    this.sub = this.productService.getProducts().subscribe({
        next: products => {
            this.products = products;
            this.filteredProducts = this.products;
        },
        error: err => this.errorMessage = err,
    });

}

ngOnDestroy(): void{
    this.sub.unsubscribe();
}
onRatingClicked(message: string): void
{
    this.pageTitle = 'Product List: ' + message;
}
}