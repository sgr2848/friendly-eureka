import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../auth.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(public authService: AuthService) {
    console.log(authService.userData);
  }

  ngOnInit(): void {
  }

}
