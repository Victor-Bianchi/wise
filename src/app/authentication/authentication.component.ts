import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
})
export class AuthenticationComponent implements OnInit {
  constructor(private router: Router) { }

  ngOnInit(): void {
    const currentUrl = this.router.url;
    if (currentUrl === '/authentication') {
      this.router.navigateByUrl('/authentication/login');
    }
  }
}
