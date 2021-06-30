import { Component, Input, OnChanges, Output } from "@angular/core";
import { EventEmitter } from "@angular/core";


@Component({
    selector: 'pm-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})

export class StarComponent implements OnChanges{
    @Input() rating: number = 0; //hardcoded to 0
    cropWidth: number = 75; //hardcoded to including full width of all stars
    @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();
    ngOnChanges(): void {
        this.cropWidth = this.rating * 15; //as each star is just 15 px wide
    }

    onClick(): void {
        this.ratingClicked.emit(`The rating ${this.rating} was clicked!`);
    }
}

