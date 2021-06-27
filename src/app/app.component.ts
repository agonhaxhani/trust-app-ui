import {Component, OnInit} from '@angular/core';
import {BookModel} from './shared/models/book/book.model';
import {ConfigsService} from './shared/services/configs.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  daysLeft: number;
  bookToReturn: BookModel;

  constructor(private configsService: ConfigsService) {
  }

  ngOnInit() {
    this.getConfigs();
  }

  getConfigs() {
    this.configsService.getConfigs().subscribe(
      result => {
        this.configsService.saveConfigsToSubject(result);
      },
      error => {
        this.configsService.saveDefaultConfigs();
      }
    );
  }
}
