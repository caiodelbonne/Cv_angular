import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-line-menu',
  templateUrl: './line-menu.component.html',
  styleUrls: ['./line-menu.component.scss']
})
export class LineMenuComponent {
  @Input() subtitulo: string = '' // titulo das divs

}
