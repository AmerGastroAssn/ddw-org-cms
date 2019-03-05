import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-logo-watermark',
  templateUrl: './logo-watermark.component.html',
  styleUrls: ['./logo-watermark.component.css']
})
export class LogoWatermarkComponent implements OnInit {
    @Input() favicon: string;
    @Input() sectionName: string;
    logo: string;

  constructor() {
      this.logo = 'https://s3.amazonaws.com/DDW/ddw-org/images/logos/ddw-color.png';
  }

  ngOnInit() {
  }

}
