import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'twitter-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
})
export class SideMenuComponent implements OnInit {
  visible: boolean
  constructor() {}

  ngOnInit(): void {}
}
