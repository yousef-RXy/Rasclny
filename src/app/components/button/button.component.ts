import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent {
  @Input() text?: string;
  @Input() type: 'button' | 'submit' | 'reset' = 'button';
  @Input() color?: string;
  @Input() backGroundColor?: string;
  @Input() disabled?: boolean = false;
}
