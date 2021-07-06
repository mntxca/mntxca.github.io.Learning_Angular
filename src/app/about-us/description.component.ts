import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent implements OnInit {
  //below holds the pageTitle, changing it will change the title of the About Us page
  pageTitle: string = "About Us";
  //below holds the company image file path, changing it will change the company image used 
  companyImg: string = "./assets/images/sample_company2.jpg!d";
  constructor() { }

  ngOnInit(): void {
  }

}
