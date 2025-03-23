# Angular 19 Custom Select Components Demo

A demonstration of two select menu components built with Angular 19, showcasing both a standard dropdown and a custom select implementation with accessibility features.

![Reactive Form and Custom Component to illustrate a select menu with options](https://github.com/marklreyes/angular19-custom-select-component/blob/main/Angular19_ReactiveFormOptions_CustomSelectOptions.gif?raw=true)


## Features
- Standard dropdown menu with Angular Reactive Forms
- Custom select component with Material Design-like styling
- Accessibility support (ARIA attributes, keyboard navigation)
- Responsive design
- Animations for dropdown interactions

## Behind The Screen
- `AppComponent`
	- Deferrable views with `@defer`, `@loading`, `@error` and `@placeholder` blocks.
	- `OptionsService` to **fake** a backend call with the newer DI method with `inject()`. No need for instantiation inside of a class constructor, wow!
- `OptionsMenuComponent`
	- Reactive Form including Material-like Design *without* the actual use of Angular Material UI.
	- `@Input`, `@Output` decorators to establish parent-to-child relationship and project selected data back to `AppComponent`.
	- FYI - select > option HTML elements are limited on custim styling, thus the creation of `CustomSelectComponent`.
- `CustomSelectComponent`
	- Custom Select Form including Material-like Design *without* the actual use of Angular Material UI.
	- `@Input`, `@Output` decorators to establish parent-to-child relationship and project selected data back to `AppComponent`.
	- `ControlValueAccessor` interface to allow custom component to be used as a Form Control.
	- `NG_VALUE_ACCESSOR` token to provide aforementioned interface for form controls.

## Prerequisites
- Node.js (v18.x or higher)
- npm (v9.x or higher)
- Angular CLI (v19.x)

## Getting Started

1. Clone the repository
	```bash
	git clone https://github.com/marklreyes/angular19-custom-select-component
	cd angular19-custom-select-component
2. Install dependencies
	```bash
	npm install
3. Serve locally to http://localhost:4200/
	```bash
	ng serve
## Contact

For questions, feedback, or collaboration opportunities:

- GitHub: [@marklreyes](https://github.com/marklreyes)
- LinkedIn: [Mark Reyes](https://linkedin.com/in/marklreyes)
- Email: [mr@marklreyes.com](mailto:mark@marklreyes.com)
- Website: [marklreyes.com](https://marklreyes.com)

