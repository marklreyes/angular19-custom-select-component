import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import { Option } from '../../models/option';

@Component({
  selector: 'app-select-chrome135',
	standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './select-chrome135.component.html',
  styleUrl: './select-chrome135.component.scss'
})
export class SelectChrome135Component {
	@Input({
		required: true,
	}) optionsList!: Option[];

	@Output() optionSaved = new EventEmitter<Option>();

	optionsForm = new FormGroup({
		selectOption135: new FormControl(''),
	});

	onChange() {
		const selectedOption = this.optionsList.find(option => option?.value === Number(this.optionsForm.value.selectOption135));
		if (selectedOption) {
			this.optionSaved.emit(selectedOption);
		}
	}

	onSubmit() {
		console.warn(this.optionsForm.value);
	}
}
