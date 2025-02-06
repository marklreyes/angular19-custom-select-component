import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import { Option } from '../../models/option';

@Component({
  selector: 'app-options-menu',
	standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './options-menu.component.html',
  styleUrl: './options-menu.component.scss'
})
export class OptionsMenuComponent {
	@Input({
		required: true,
	}) optionsList!: Option[];

	@Output() optionSaved = new EventEmitter<Option>();

	optionsForm = new FormGroup({
		selectOption: new FormControl(''),
	});

	onChange() {
		const selectedOption = this.optionsList.find(option => option?.value === Number(this.optionsForm.value.selectOption));
		if (selectedOption) {
			this.optionSaved.emit(selectedOption);
		}
	}

	onSubmit() {
		console.warn(this.optionsForm.value);
	}
}
