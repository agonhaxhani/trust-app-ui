import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {} from 'googlemaps';
import {SwiperOptions} from 'swiper';
import {ConfigsService} from '../../../shared/services/configs.service';
import {ConfigsModel} from '../../../shared/models/shared/Configs.model';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent {
  configs: ConfigsModel;

  config: SwiperOptions = {
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    spaceBetween: 30
  };

  constructor(private configsService: ConfigsService) {
    this.getConfigs();
  }

  getConfigs() {
    this.configs = this.configsService.getConfigFromLocalStorage();
  }
}
