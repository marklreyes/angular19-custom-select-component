import { Component, inject, OnInit } from '@angular/core';
import { OptionsService } from './services/options.service';
import { Option } from './models/option';
import { OptionsMenuComponent } from './components/options-menu/options-menu.component';
import { CustomSelectComponent } from './components/custom-select/custom-select.component';
import { SelectChrome135Component } from './components/select-chrome135/select-chrome135.component';

@Component({
  selector: 'app-root',
	standalone: true,
  imports: [OptionsMenuComponent, CustomSelectComponent, SelectChrome135Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
	optionsService = inject(OptionsService);
	optionsData: Option[] = [];
	appOptionsMenuResult: Option | null = null;
	appCustomSelectResult: Option | null = null;
	appSelectChrome135Result: Option | null = null;

	async ngOnInit(): Promise<void> {
		const data = await this.optionsService.getOptionsData();
		this.optionsData = data;
		console.log('App component initialized with this.optionsData:', this.optionsData);
	}

	onSelection(option: Option, name: string) {
		if (name === 'app-options-menu') {
			this.appOptionsMenuResult = option;
			console.log('This option was set from <app-options-menu>:', option);
		}
		if (name === 'app-custom-select') {
			this.appCustomSelectResult = option;
			console.log('This option was set from <app-custom-select>:', option);
		}
		if (name === 'app-select-chrome135') {
			this.appSelectChrome135Result = option;
			console.log('This option was set from <app-select-chrome135>:', option);
		}
	}
}
