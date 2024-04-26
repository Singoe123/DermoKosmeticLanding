import { Component } from '@angular/core';
import { InfoChipComponent } from '../info-chip/info-chip.component';

@Component({
  selector: 'app-info',
  standalone: true,
  imports: [InfoChipComponent],
  templateUrl: './info.component.html',
  styleUrl: './info.component.css'
})
export class InfoComponent {

}
