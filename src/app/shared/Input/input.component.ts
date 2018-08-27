import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
    selector: 'input-component',
    templateUrl: 'input.component.html'
})

export class InputComponent {
    @Input() inputType: string;
    @Input() inputName: string;
    @Input() labelContent: string;
    @Input() inputPlaceholder: string;
    @Input() controlName: string;
    @Input() groupName: FormGroup;
    @Input() iconClass: string;
}