import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss'
})
export class BannerComponent implements OnInit {

  slideConfig = {
    autoplay:true,
    arrows: true,
    infinite: true,
    autoplaySpeed: 10000,
    dots: false,
    fade:true
  }


  ngOnInit(): void {

  };
}
