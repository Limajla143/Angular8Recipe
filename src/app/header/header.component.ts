import { Component, Output, EventEmitter, OnInit, OnDestroy } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';
import { AuthServiceService } from '../auth/auth-service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})

export class HeaderComponent implements OnInit, OnDestroy{
  isAuthenticated = false;
  private userSub: Subscription;

  constructor(private dataService: DataStorageService, private authService: AuthServiceService){}

  onSaveData(){
    this.dataService.onRecipeStores();
  }

  onFetchData(){
    this.dataService.onFetchRecipes().subscribe();
  }

  onLogOut(){
    this.authService.logout();
  }

  ngOnInit(){
    this.userSub = this.authService.user.subscribe(user => {
      this.isAuthenticated = !!user;
    });
  }

  ngOnDestroy(){
    this.userSub.unsubscribe();
  }

}
