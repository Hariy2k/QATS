import { Component, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { CognitoService } from './services/cognito.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'qats_application';
  isUserLoggedIN = false

  constructor(
    public _router: Router,
    private elementRef: ElementRef,
    private cognitoService: CognitoService,
  ) { }

  async ngOnInit() {
    this.isUserLoggedIN = await this.cognitoService.isAuthenticated() ? true : false
    var s = document.createElement("script");
    s.type = "text/javascript";
    s.src = "../assets/js/main.js";
    this.elementRef.nativeElement.appendChild(s);
  }
}
