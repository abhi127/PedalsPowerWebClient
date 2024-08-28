import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-run-distance',
  templateUrl: './run-distance.component.html',
  styleUrls: ['./run-distance.component.scss']
})
export class RunDistanceComponent implements OnInit {
  lastScrollTop = 0;
  selectedIndex: number | null = null;
  public partnerLogosCarousel = [];
  public partnerReviewsCarousel = [];
  currentSection = 'home';

  public medals = [
    { url: 'assets/images/crypto/features-img/challenges/t1.jpg', caption: 'White - Round Neck' },
    { url: 'assets/images/crypto/features-img/challenges/t1.jpg', caption: 'White - Round Neck' },
  ];

  currentSlideIndex = 0;
  autoplayInterval: any;
  autoplayDuration = 5000; // Duration in milliseconds
  isTransitioning = false; // To prevent button spamming

  constructor(
    private renderer: Renderer2,
    private el: ElementRef,
  ) { }

  ngOnInit(): void {
  }
  

  //Banner top
  slides = [
    {
      image: 'https://pandeyji98.github.io/iPower/static/media/MainImg.26a31d9c5765f08d8c07.png',
      title: 'Running Challenge',
      description: `
      A Running Challenge is a fitness event designed to motivate participants to achieve a set 
      running goal within a specific timeframe. Whether you’re aiming for distance or consistency, 
      these challenges push you to stay active, track your progress, and experience the joy of 
      reaching your fitness milestones. Completing the challenge often brings a sense of 
      accomplishment and can be rewarded with medals or other recognition.
      `
    },
  ];

  ////..........................tshirt preview.....................///


  accordionData = [
    { title: 'How many run/walk are acceptable in a day?', content: 'A maximum of 2 run/walk are acceptable in a day. More than 2 won\'t be counted.' },
    { title: 'Is it necessary to perform the activity daily?', content: 'No, it is not necessary to perform the activity every day. You can complete the challenge at your own pace. You just need to finish your chosen distance in the given duration of the event.' },
    {
      title: 'How to Upload the Activity Data?',
      content: `
      (1) Data of STRAVA users will be taken automatically from STRAVA app once they join the challenge STRAVA group. (Link to join the group will be shared before the challenge starts). <br>
      (2) For those who are not using Strava, they can send the activities screenshot via email at "support@pedalspower.com" once every 5 days.` },
    { title: 'When will I receive the medal and T-shirt ?', content: 'Medal and t-shirt will be sent via courier at the address given at the time of the registration. It will be delivered in 15-20 days after the event ends.' },
    { title: 'Is there any minimum distance criterion?', content: 'Yes, You need to run/walk at least 1 KM for that activity to be considered. Less than 1 KM won\'t be counted towards the challenge distance.' },
    {
      title: 'Can I change my distance category once the challenge has started?',
      content: `Yes, category change is allowed according to the below instructions:<br><br>
      <ul>
        <li>Change requested from 1st-10th: No charges</li>
        <li>Change requested from 11th-20th: Rs 99</li>
        <li>Change requested from 21st-30th: Rs 149</li>
      </ul><br>
      Process to follow:<br>
      1 - Send the change request via email at support@pedalspower.com<br>
      2 - Follow the instructions received on the email.
    `
    },
  ];

  toggleAccordion(index: number): void {
    this.selectedIndex = this.selectedIndex === index ? null : index;
  }


}
