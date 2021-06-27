import { Component, OnInit } from '@angular/core';
import {FileService} from '../../../shared/services/file.service';
import {ConfigsService} from '../../../shared/services/configs.service';
import {CustomSnackbarService} from '../../../shared/services/snackbar-service.service';
import {finalize} from 'rxjs/operators';

@Component({
  selector: 'app-configs',
  templateUrl: './configs.component.html',
  styleUrls: ['./configs.component.scss']
})
export class ConfigsComponent implements OnInit {
  private fileToSave: any;
  public filePath: string;
  public fileSaved: string;
  public aboutUs: string;
  loading = false;

  constructor(private fileService: FileService,
              private configsService: ConfigsService,
              private snackBarService: CustomSnackbarService) { }

  ngOnInit(): void {
    this.getConfigs();
  }

  private getConfigs() {
    this.configsService.getConfigs().subscribe(result => {
      this.filePath = result.image;
      this.aboutUs = result.about_us;
    });
  }

  onSelectFile(event) {
    if (event.target.files[0].size > 1000000) {
      this.snackBarService.error('Nuk lejohet te upload-ohen fotot me te medha se 1MB');
      return;
    }

    this.fileToSave = event.target.files[0];

    const reader = new FileReader();
    reader.onload = () => {
      this.filePath = reader.result as string;
    };
    reader.readAsDataURL(this.fileToSave);
  }

  removeFile() {
    this.filePath = '';
  }

  uploadToS3() {
    this.loading = true;
    const formData: FormData = new FormData();

    formData.append('files', this.fileToSave);
    formData.append('fileInfo', '{ "alternativeText":"", "caption":"", "name":"" }');

    this.fileService.uploadToS3(formData).subscribe(
      result => {
        this.fileSaved = result[0].url;
        this.saveConfigs();
      }
    );
  }

  saveConfigs() {
    const configsToSave = {
      about_us: this.aboutUs,
      image: this.fileSaved
    };

    this.configsService.saveToDb(configsToSave)
      .pipe(finalize(() => this.loading = false))
      .subscribe(
        result1 => {
          this.configsService.saveConfigsToStorage(result1);
          this.snackBarService.success('Konfigurimet u ruajten');
        },
        error1 => this.snackBarService.error('Problem gjate ruajtjes se konfigurimeve')
      );
  }

  textChanged(event) {
    this.aboutUs = event.target.value;
  }

  saveData() {
    if (!this.aboutUs) {
      return;
    }

    if (!this.fileToSave) {
      this.saveConfigs();
      return;
    }

    this.uploadToS3();
  }

}
