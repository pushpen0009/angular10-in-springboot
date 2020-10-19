import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';
@Component({
    selector: 'app-eph',
    template: '<router-outlet></router-outlet>'
})
export class AppComponent {

    constructor(private matIconRegistry: MatIconRegistry) {
        // this.matIconRegistry.addSvgIcon(
        //     'en',
        //     this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/img/EN.svg')
        // );
        // this.matIconRegistry.addSvgIcon(
        //     'globe',
        //     this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/img/globe.svg')
        // );
        // this.matIconRegistry.addSvgIcon(
        //     'profiles',
        //     this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/img/profile.svg')
        // );
        // this.matIconRegistry.addSvgIcon(
        //     'star',
        //     this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/img/star.svg')
        // );
    }
    title = ' ';
}
