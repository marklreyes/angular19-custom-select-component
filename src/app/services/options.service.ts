import { Injectable } from '@angular/core';
import { Option } from '../models/option';
import { data } from '../data/data';

@Injectable({
  providedIn: 'root'
})

export class OptionsService {
	#options: Option[] = data;

  constructor() { }

	getOptionsData(): Promise<Option[]> {
		return new Promise((resolve, reject) => {
			resolve(this.#options);
			reject('Error: Unable to fetch options data');
		});
	}
}
