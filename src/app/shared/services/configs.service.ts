import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RequestUrls } from '../constants/RequestUrls';
import {GeneralConstant} from '../constants/GeneralConstant';
import {BehaviorSubject} from 'rxjs';

@Injectable()
export class ConfigsService {

  public configsObservable: BehaviorSubject<any> = new BehaviorSubject<boolean>(null);

  constructor(private http: HttpClient) { }

  saveToDb(data: any) {
    return this.http.put<any>(RequestUrls.ACCOUNT.CONFIGS.CONFIGS + '/1', data);
  }

  getConfigs() {
    return this.http.get<any>(RequestUrls.ACCOUNT.CONFIGS.CONFIGS + '/1');
  }

  saveConfigsToSubject(data: any) {
    this.configsObservable.next(data);
  }

  saveDefaultConfigs() {
    const dataToSave = '{"id":1,"about_us":"Trust Real Estate është një agjencion i cili u hap për arsye të ndërmjetësimit për patundshmëri midis palëve. Ajo filloi veprimtarinë e saj më 18 shkurt 2021 me vendndodhje në rrugën \"Rexhep Mirovica\" përballë zyrës kryesore postare.\nIdeja për hapjen e një biznesi të tillë erdhi për faktin se njerëzit po hasin vështirësi për të blerë ose marrë me qira prona për shkak të mungesës së informacionit. Njerëzit nuk dinin kujt t\'i drejtoheshin kur kishin nevojë për një pronë, dhe u duhej shumë kohë deri sa të gjenin personin e duhur, dhe siç e dimë, koha është flori. Pra, ne u kursejmë kohën klientëve tanë, e gjithë çka duhet të bëjnë ata është të adresohen tek ne në mënyrë që të gjejmë atë çfarë është më e përshtatshme për ta sipas kërkesave të tyre.\nTrust Real Estate ofron zgjidhje për të dy palët – për ata që duan të shesin ose japin me qira patundshmëri dhe gjithashtu për ata që duan të blejnë ose marrin me qira. Me moton tonë e cila thotë Lëviz Mençur, ne duam t\'u tregojmë njerëzve se ata duhet të lëvizin me zgjuarsi kur kanë të bëjnë me prona dhe se ata mund të na besojnë, që është edhe arsyeja pse ne vendosëm emrin Trust në mënyrë që njerëzit të besojnë në agjencionin tonë, për të mos ngurruar të na drejtohen për çdo lloj kërkese që ata mund të kenë në lidhje me patundshmëri.\nNe bëjmë gjithçka që duhet për t\'i mbajtur klientët tanë të kënaqur me punën tonë dhe për t\'i ofruar  atë që secilit i nevojitet posaçërisht.","image":"https://ar-prishtine.s3.eu-central-1.amazonaws.com/Ylberi_3_a5420ba23e.jpg","published_at":"2021-06-26T10:54:53.188Z","created_at":"2021-06-26T10:52:53.849Z","updated_at":"2021-06-26T16:48:21.589Z"}';
    this.configsObservable.next(dataToSave);
  }

  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}
