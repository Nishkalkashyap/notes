---
title : Sagar res
description : PR review - https://bitbucket.org/edfora/angular2-baseproject/pull-requests/6165
tags : []
sidebar : false
pageClass: hide-sagar
---
<!-- 
### 1. Is user B2B or B2C
```js
/**
 * Check from domain name
 * B2B users are either on fiitjee.mypat.in or some-school.mypat.in
 * Only B2C users exist on mypat.in
 */ 
const isB2CUser = Boolean(location.href.match('https?://mypat.in.+'));
```

### 2. Is user loggedIn or nonLoggedIn
```js
import { Store } from '@ngrx/store';
import { AppState } from '@project-root/src/app/store/app.reducers';

class MyAngularComponent {

    constructor(private store: Store<AppState>){ }

    //...
    isLoggedIn : boolean;
    this.store.select('auth').subscribe((res) => {
        this.isLoggedIn = res.authenticated;
    });
}
```

### 3. User details of loggedin user
```js
import { Store } from '@ngrx/store';
import { AppState } from '@project-root/src/app/store/app.reducers';

class MyAngularComponent {

    constructor(private store: Store<AppState>){ }

    //...
    userData : any;
    this.store.select('userProfile').subscribe((res) => {
        this.userData = res.data;
    });
}
```

<div class="page-break-after"></div>

### 4. Is user on free trial or not
```js
import { Store } from '@ngrx/store';
import { AppState } from '@project-root/src/app/store/app.reducers';

class MyAngularComponent {

    constructor(private store: Store<AppState>){ }

    //...
    isPaidUser : boolean;
    this.store.select('userProfile').subscribe((res) => {
        /**
         * Here we check the number of packages bought by the user
         * If there are more than 0 packages bough by the user, the user is a paid user
         */
        this.isPaidUser = Boolean(res.data.packageBought.length);
    });
}
``` -->

# PR Review

<Header />

[[toc]]

<!-- ##2 -->
### 1. Use getters for complex template conditions
Following coding style has been observed in a few places, please use a getter in the component for the same instead of complex conditions in the template, and also add relevant comments for the condition.

!!! failure Wrong
```html
<!-- src/app/courses-navigation/components/chapter-card/chapter-card.component.html -->
<span *ngIf="(freeUser && i !== 0) || (!loggedIn && pageName === 'conceptsHome')">
    {{chapter.conceptCount}} Concepts
</span>
```
!!!

!!! success Right
```html
<!-- src/app/courses-navigation/components/chapter-card/chapter-card.component.html -->
<span *ngIf="conditionResult">
    {{chapter.conceptCount}} Concepts
</span>
```

```ts
// src/app/courses-navigation/components/chapter-card/chapter-card.component.html
/**
* Populate with relevant comments
* i.e. what you're trying to do here
*/
public get conditionResult() {
    return (freeUser && i !== 0) || (!loggedIn && pageName === 'conceptsHome');
}
```
!!!

<div class="page-break-after"></div>

### 2. Add proper access modifiers in component
Any method or property that you're going to use in template should be marked a public property, everything else should be marked as a private property. Also take note of `_` in front of private properties.

!!! failure Wrong
```ts
@Component({
    // ... meta data
})
export class MyComponent {

    publicProperty: boolean;
    privateProperty: boolean;

    publicMethod = () => null;
    privateMethod = () => null;
}
```
!!!

!!! success Right
```ts
@Component({
    // ... meta data
})
export class MyComponent {

    public publicProperty: boolean;
    private _privateProperty: boolean;

    public publicMethod = () => null;
    private _privateMethod = () => null;
}
```
!!!

<div class="page-break-after"></div>

### 3. Use proper type declaration
Don’t ever use the types Number, String, Boolean, Symbol, or Object These types refer to non-primitive boxed objects that are almost never used appropriately in JavaScript code. 

Ref: [https://www.typescriptlang.org/docs/handbook/declaration-files/do-s-and-don-ts.html](https://www.typescriptlang.org/docs/handbook/declaration-files/do-s-and-don-ts.html)

!!! failure Wrong
```ts
@Component({
    // ... meta data
})
export class MyComponent {
    public property1: Boolean;
    public property1: Number;
}
```
!!!

!!! success Right
```ts
@Component({
    // ... meta data
})
export class MyComponent {
    public property1: boolean;
    public property1: number;
}
```
!!!

<div class="page-break-after"></div>

### 4. Document formatting
Please use the default document formatter of your code editor to format the document before commiting it to your repo. We are soon going to implement `prettier` in the repo, but until then use your default code formatter in all `HTML`, `CSS` and `TS` files

### 5. Wrong conditional statement used
Wrong conditional statement is used at few places in the code, please correct the same. Also, directly pass `regexp` inside of the match function instead of the `string`, or use a `regexp` constructor

```ts
// src/app/courses-navigation/components/concept-card/concept-card.component.ts
const isB2BUser = Boolean(location.href.match('https?://rohit-fiitjee.mypat.in.+'));
```

### 6. Use css variables
Following code has been observed in multiple places, please use global css variables to define the breakpoints, and use them in your media queries.

!!! failure Wrong
```css
@media only screen and (max-width: 767px)
```
!!!

!!! success Right
```css
/* define the css variable in gle global styles file (/src/styles.css in out case) */
@media only screen and (max-width: var(--breakpoing-medium))
```
!!!

<div class="page-break-after"></div>

### 7. Possibly wrong defaults/placeholder set
You've used the statement below in the file mentioned below. Appears to be a wrong default/placeholder.

```ts
// src/app/courses-navigation/components/test-card/test-card.component.ts
let newDate = new Date(5410 * 1000);
``` 

### 8. Do not use `::ng-deep`
We are trying to migrate away fron Angular 4, to angular 5. This is a breaking change, so please don't use this.

### 9. Unit tests
Do not commit test files if you are not going to write unit tests

<div class="page-break-after"></div>

### 10. Use strict type checking
Please use strict type checking in your code. We are soon going to enable `strictNullChecks` and `noImplicitAny` flag in our ts compiler.

!!! failure Wrong
```ts
// src/app/courses-navigation/components/chapter-card/chapter-card.component.ts
@Component({
    // ... meta data
})
export class ChapterCardComponent {
    chapterSelectedHandler(chapterId) {
        // ... code
    }
}
```
!!!

!!! success Right
```ts
// src/app/courses-navigation/components/chapter-card/chapter-card.component.ts
@Component({
    // ... meta data
})
export class ChapterCardComponent {
    public chapterSelectedHandler(chapterId : number): null {
        // ... code
    }
}
```
!!!

<div class="page-break-after"></div>

### 11. Use enums instead of strings
Please use enums at any place you want to add a static string value. e.g.

!!! failure Wrong
```ts
// ... some code
localStorage.getItem("selectedGoalsList");
```
!!!

!!! success Right
```ts
/**
* This could be an import or a local declaration.
* Use an import/global declaration in case the string in used in multiple files
*/
enum MY_ENUM {
    SELECTED_GOALS_LIST = 'selectedGoalsList'
}

// ... some code
localStorage.getItem(MY_ENUM.SELECTED_GOALS_LIST);
```
!!!






