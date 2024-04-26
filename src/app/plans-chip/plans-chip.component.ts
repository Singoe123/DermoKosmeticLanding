import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-plans-chip',
  standalone: true,
  imports: [NgClass],
  templateUrl: './plans-chip.component.html',
  styleUrl: './plans-chip.component.css'
})
export class PlansChipComponent {
  @Input() chipTitle!: string;
  @Input() price!: string;
  @Input() buttonName!: string;
  @Input() type!: boolean;
}
