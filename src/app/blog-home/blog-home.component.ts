import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-home',
  templateUrl: './blog-home.component.html',
  styleUrls: ['./blog-home.component.css']
})
export class BlogHomeComponent implements OnInit {
  path: string='assets/0_8X-LhY0W2PMgPzsj.jpeg';

  pathone: string='assets/0_4tkqVWVOl0dGjbO9.png';

  pathtwo: string='assets/1_QnezsZgTyTAp_EDOY4xAbQ.png';
  
  paththree: string='assets/1_Ic7kUV1ZufRtCwqsrbBS_g.png';

  pathfour: string='assets/1__QSvxuDwVTbzZcXjU-cPDA.png';

  pathfive: string='assets/0_YmACHzhcWOUpJl2w.jpeg';

  pathsix: string='assets/0_10Nt13mb6tG_vze2.png';

  pathseven: string='assets/1_8GMZlW-M3VqAqt5RuIoQsg.png';

  patheight: string='assets/1_sd2ofSRrvZss_EAVnulyhQ.png';

  constructor() { }

  ngOnInit(): void {
  }

}
