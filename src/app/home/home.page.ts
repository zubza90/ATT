import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  user : any
  constructor(private router: Router, public authService:AuthenticationService) {
    this.user = authService.getProfile();
  }
  
  GoToTareas(){
    this.router.navigate(['/tareas'])
  }

  async logOut(){
    this.authService.signOut().then(()=>{
      this.router.navigate(['/landing'])
    }).catch((error)=>{
      console.log(error);
    })
  }
}
