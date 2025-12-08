# Prerequisites

1. NodeJS Installer
2. VS Code
3. Browser (Chrome)
4. Permission to install NPM libraries

# JavaScript

- Scripting Language
- Client-side (Browser) as well as Server-side (NodeJS Platform)
- Light-weight and fast
- Single Thread
- Asynchronous JavaScript / Non-blocking

  > IO
  > Read/Write
  > XHR Calls
  > Timers
  > Obtaining Socket

- Functional, Imperative, Declarative, Reactive

- Session : Web Storage (local and session), JWT, InMemory
- React way -> Context API, useState, Redux

- V8 Engine, Chakra, SpiderMonkey : Compile and interpret JS
- ExpressJS, Koa, Sails, Kraken, Hapi etc

- AST : Abstract Syntax Tree

## Full Stack App (JavaScript)

- MEAN Stack : MongoDB, Express, Angular, Node
- MERN Stack : MongoDB, Express, React, Node

### NoSQL Databases

1. Document : Mongo (JSON Format)
2. Graph : NeoDB
3. Column : Cassendra
4. Key-value : Redis

## JavaScript Libraries / Frameworks

- Angular: Framework; latest version; DOM Manipulation, Template, XHR Call, State Management, Form Validation, SPA etc
- AngularJS: library; v1.x
- ReactJS: Small library; 35-40kb; fast, VDOM, Props, State
  > form validation : formik, react-hook-form, yup etc
  > State Management : Redux
  > SPA : React Router
- Next: Server Side framework for React, SSR, SEO, Routing, API etc
- React Native : for native apps (mobile apps)
- Vue : Emerging and Progressive Framework
- JQuery: Library; DOM Manipulation, AJAX, Animation etc
- Backbone : client side MVC Pattern
- Knockout : MVVM Pattern; 2 way data binding
- Polymer : Rich Web component
- Stencil : Web Component, VDOM, Components etc
- ExpressJS : Web app framework for NodeJS Platform

### React

- Quickly and efficiently rendering the UI

### Atomic Design Principle

- Atom : single unit. one button, one text field
- Molecule : combo of atoms. eg. Serach bar -> one text filed with one button
- Organism : combo of molecules. eg. Main Navigation Bar -> Links -> An icon + Text
- Template : combo of organism. eg. Form -> Personal Details and professional details section
- Page : a complete page

Component : reusable piece of code

#### Thinking in React way

# DOM : Document Object Model

- Hierarchical representation of HTML Elements

html
head
title
link
script
body
header
nav
ul
li  
 a
main
section
...
footer
p

### Browser can understand 3 languages

- HTML : content presentation (Nouns) <p></p>
- CSS : layout and appearence (Adjectives) h1 { color : 'red'}
- JavaScript : dynamic behaviour (Actions)

# Creating React Project using Vite

> npm create vite@latest
> cd first-app
> npm run dev

# Semantic Versioning (semver.org)

X.Y.Z

X = Major; New features are not backward compatible
Y = Minor; New features are backward compatible
Z = Patch; bug fixes

~ : all minor version are compatible
^ : all patch version are compatible
