import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Option } from '../../models/option';

@Component({
  selector: 'app-custom-select',
	standalone: true,
  templateUrl: './custom-select.component.html',
  styleUrls: ['./custom-select.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: CustomSelectComponent,
      multi: true
    }
  ]
})
export class CustomSelectComponent implements OnInit, ControlValueAccessor {

  imagePathArrowUp = 'assets/images/arrow_up.jpg';
  imagePathArrowDown = 'assets/images/arrow_down.jpg';

	@Input({
		required: true,
	}) options!: Option[];

	@Output() optionSaved = new EventEmitter<Option>();

	selectedValue: Option | null = null;

	isOpen = false;

  onChange: (value: Option) => void = () => {};
  onTouched: () => void = () => {};

  constructor() {}

  ngOnInit(): void {}

  writeValue(value: Option): void {
    this.selectedValue = value;
  }

  registerOnChange(fn: (value: Option) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  selectOption(option: Option): void {
    this.selectedValue = option;
    this.onChange(option);
		this.optionSaved.emit(option);
		this.isOpen = false;
  }

}
