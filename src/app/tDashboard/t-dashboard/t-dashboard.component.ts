import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LangServiceService } from 'src/app/service/lang-service.service';

@Component({
  selector: 'app-t-dashboard',
  templateUrl: './t-dashboard.component.html',
  styleUrls: ['./t-dashboard.component.css']
})
export class TDashboardComponent implements OnInit {

  defaultLang:any;
  browserLang:any;

  constructor( private langSer: LangServiceService,
    public translate: TranslateService
    ) {

    this.langSer.selectedLang.subscribe(res=>{
      // alert(res)
      this.defaultLang = res;
    })

    translate.addLangs(['hn','en']);
    translate.setDefaultLang('en');
    translate.use('en');
    this.browserLang = translate.getDefaultLang();
    this.languageChanged();    
    this.langSer.selectedLang.next(this.browserLang);
    // const browserLang = translate.getBrowserLang();
    // translate.use(browserLang.match(/en|hn/)? browserLang:'en');

   }

  ngOnInit(): void {
  }

  selectedLang(lang){
    this.langSer.selectedLang.next(lang)
    this.translate.use(lang);
    // this.defaultLang = lang;
    console.log(lang)

  }

  languageChanged(){
    this.translate.use(this.browserLang.match(/en|hn/)? this.browserLang :'en')
  }

}
