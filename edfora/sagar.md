---
title : Sagar res
description : Sagar res
tags : []
sidebar : false
pageClass: hide-sagar
---

<!-- user.userData.partner.partnerGoal && user.userData.partner.partnerGoal.length -->

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

//...
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

//...
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

//...
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
```