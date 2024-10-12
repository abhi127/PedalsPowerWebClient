import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-privacy-policy',
  templateUrl: './privacy-policy.component.html',
  styleUrls: ['./privacy-policy.component.scss']
})
export class PrivacyPolicyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  currentSlideIndex = 0;

  
  //Banner top
  slides = [
    {
      image: 'https://pandeyji98.github.io/iPower/static/media/MainImg.26a31d9c5765f08d8c07.png',
      title: 'What we do',
      description: `
      We are dedicated to empowering individuals to prioritize their health and well-being. 
      Our challenges motivate participants to set and achieve goals that lead to lasting wellness. 
      By fostering commitment and perseverance, we help build habits that support long-term health. 
      
      `
    },
  ];
}
