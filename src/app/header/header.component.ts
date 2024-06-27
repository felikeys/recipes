import { Component } from '@angular/core';
import { DatastorageServiceService } from '../datastorage-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  constructor(private dataStorageService: DatastorageServiceService) {}

  onSaveData() {
    this.dataStorageService.recipeStorge();
  }

  onFetchData() {
    this.dataStorageService.fetchRecipes();
  }
}
