# WheelWise

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.2.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

# Project Structure
```
src/
├── app/
│   ├── core/                    # Core module (shared services, guards, interceptors)
│   ├── shared/                  # Shared module (shared components, pipes, directives)
│   ├── authentication/          # Authentication module (login, registration)
│   ├── events/                  # Events module (event listing, details, registration)
│   ├── admin/                   # Admin module (admin dashboard, event management)
│   ├── user-profile/            # User profile module (profile page)
│   ├── navigation/              # Navigation components (navbar, footer)
│   ├── home/                    # Home module (homepage)
│   ├── not-found/               # Not Found module (404 page)
│   ├── app-routing.module.ts    # Main routing module
│   ├── app.component.html       # Main component template
│   ├── app.component.scss       # Main component styles
│   ├── app.component.spec.ts    # Main component unit tests
│   └── app.component.ts         # Main component logic
├── assets/                      # Static assets (images, fonts)
├── environments/                # Environment configuration
├── styles.scss                  # Global styles
└── index.html                   # Main HTML file
```

# Libraries
https://github.com/angular/components/blob/main/src/google-maps/README.md
https://angular-maps.com/guides/getting-started/
