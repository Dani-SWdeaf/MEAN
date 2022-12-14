import { Component, OnInit, NgZone } from '@angular/core';
const MAX_WIDTH_BREAKPONIT = 720;
@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {

  links = [ {
    name : 'Invoices',
    url : 'invoices'
  },{
    name : 'Clients',
    url : 'clients'
  }]

  mediaMatcher : MediaQueryList = matchMedia(`(max-width : ${MAX_WIDTH_BREAKPONIT}px)`)

  constructor(zone: NgZone) {
    this.mediaMatcher.addListener(() => {
      zone.run(() => this.mediaMatcher = matchMedia(`(max-width: ${MAX_WIDTH_BREAKPONIT}px)`))
    })
  }

  ngOnInit() {}

  isScreenSmall(){
    return this.mediaMatcher.matches;
  }

}
