import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-social-network',
  templateUrl: './social-network.component.html',
  styleUrls: ['./social-network.component.sass']
})
export class SocialNetworkComponent implements OnInit {

  constructor() {
    console.log('social');
  }

  ngOnInit(): void {
  }

}
