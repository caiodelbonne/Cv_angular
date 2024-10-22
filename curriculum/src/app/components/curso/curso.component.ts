import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.scss']
})
export class CursoComponent {
  @Input() curso: string = '';
  @Input() href!: string;
  @Input() descricao: string = '';
  @Input() data: string = '';
}
