# Angular-5--MyWebApp

## Official Documentation and API ##
https://angular.io/docs

## Development Enviroment ##
* [Node](https://nodejs.org/en/download/);
* Npm (It'll be installed with Node)
* Angular CLI [Command Line Interface for Angular](https://cli.angular.io) - Maybe we have to put on our PATH variable;
* Text Editor - [VS Code](https://code.visualstudio.com/download);

## Installing Command Lines ##
- node -v
- npm -v
- npm install -g @angular/cli;

## Creating and Running Project ##
- ng new project-name;
- cd project-name;
- ng serve;
- Open your localhost:4200;

## What is Angular ##
* It's a framework to build client side applications;
* Great for Single Pages Applications;
* Re-usable code;
* Development quicker and easier;
* Unit testing;
* Product from Google using Microsoft Typescript;

## Angular Versions ##
* 2010: Angular JS
* 2016: Angular 2
* Versions 3 was skipped;
* 2016/dec: Angular 4;
* 2017/nov: Angular 5;
* 2018/apr (expected): Angular 6;
* 2018/oct (expected): Angular 7;

## Semanthic Versioning ##
- Version 1.2.3
- Major, minor, Fix(patch)

## Building Blocks ##
* Modules: features that can be split. For example, we can have a module to a normal user and a module to an admin user;
* Components: Controls a portions of the view on the browser (There is a root component or app component);
* Services: Classes that contains the business logic of our application;

## Building Blocks Summary ##
* Angular app: one or more modules;
* Module: one or more components and services;
* Components: HTML and class;
* Services: Business logic;

## Important Files ##
- package.json: Contains the dependencies that keeps our libraries working;
- node-modules folder: Place where the packages are installed;

## src Folder ##
- main.ts: main file;
- app/app.modules.ts: root module of your application;
- app/app.components.ts: root component;

## Placing Modules ##
- On main.ts, we can see AppModules is being called;
- On the app.module.ts, we can see that is calling our .html, and our .ts files;

main.ts >> app.module.ts >> app.components.ts

## Components ##
- html = html;
- class = typescript;
- metadata = information angular needs to decide if it's a component or a regular class;

## To create a Component ##
"ng g c componentName"

## What happens when we create a Component ##
- New folder is created inside app folder;
- We can delete the test.component.spec.ts;
- app.module.ts is modified = imported new component, declarations refreshed;
- Now we have to call the tag that is defined on the new component to the main html view;
