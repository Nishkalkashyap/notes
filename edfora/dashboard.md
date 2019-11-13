---
title : Dashboard review
description : Review dashboard view in myPAT product
tags : []
---

# Dashboard review

[[toc]]

<!-- 
### Problems that can be solved
2. Collect metrics, usage data and raise events from google analytics on UI
8. Problem with build system (ng-prod does not works)
9.  Tests are only truthy
10. **Using JQuery** - Used in components beyond the scope of `dashboard`. 
11. -->

### Performance
   1. Use angulars AOT compiled build instead of JIT build. 
      1. Size difference observed `(79.9mb v/s 84.5mb)`
      2. Uglifies the code
   2. Use separate module for individual cards _(will reduce network requests)_
   3. Add Cache-control headers <Badge text="server-side" type="warn"/>
### Code maintainability
   1. Pretty format code, (use prettier/ editor default formatter).
   2. Add `strict-type-checking`
   3. Add a working `README.md` file, with clear instructions on how to run/build the project
   4. Use `enums` instead of `string` in store
   5. Create a separate directory `dashboard-v3`, with its own module and replicate the functionality of the current `dashboard-v2`.
   6. Simplify the directory structure
        ```
        /** dashboard-v2 **/
        .
        ├─ component-1
        ├─ component-2
        ├─ folder-1
        |    ├─ component-1
        |    └─ service
        └─ dashboard.module.ts
        ```
        ```
        /** dashboard-v3 **/
        .
        ├─ components
        |    ├─ component-1
        |    └─ component-2
        |        ├─ sub-component-1
        |        └─ sub-component-2
        ├─ services
        |    ├─ service-1
        |    └─ service-2
        └─ dashboard.module.ts
        ```
### UI/UX bugs identified
   1. "Go To Onboarding" close button does not works.
   2. Non-responsive, overflow-x allowed but scroll bar is not shown