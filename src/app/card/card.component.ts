import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  loading: boolean = true;
  constructor() {}

  ngOnInit() {
    setTimeout(() => {
      this.loading = false;
    }, 3500);
  }
}
