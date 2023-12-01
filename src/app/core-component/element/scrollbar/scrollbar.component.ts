import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { routes } from 'src/app/core/helpers/routes';

@Component({
  selector: 'app-scrollbar',
  templateUrl: './scrollbar.component.html',
  styleUrls: ['./scrollbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScrollbarComponent implements OnInit {
  public routes = routes;

  constructor() { }
  horizontalScroll = Array.from({length: 100}).map((_, i) => 
  `'Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
  Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, 
  when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
  It has survived not only five centuries, but also the leap into electronic typesetting, 
  remaining essentially unchanged.${i}`);
  verticalScroll = Array.from({length: 10}).map((_, i) => `'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.${i}`);
  ngOnInit(): void {
  }

}
