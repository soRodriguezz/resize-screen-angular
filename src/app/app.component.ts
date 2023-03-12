import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'resize-screen-angular';

  screenWidth: number = 0;
  screenHeight: number = 0;

  ngOnInit() {
    this.onResize();
  }

  calculateStyles() {
    let styles: any = {};
    if (this.screenWidth < 768) {
      styles['background-color'] = 'red';
    } else {
      styles['background-color'] = 'green';
    }
    return styles;
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.screenWidth = window.innerWidth;
    this.screenHeight = window.innerHeight;
  }

  ngOnDestroy() {
    window.removeEventListener('resize', this.onResize);
  }
}
