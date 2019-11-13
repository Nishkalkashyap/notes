---
title : Dashboard review
description : Review dashboard view in myPAT product
tags : []
---

# Dashboard review

[[toc]]

### Problems that can be solved
1. Code refactoring - we can go for core refactoring if and only if we intend to develope upon current code base
2. Collect metrics, usage data and raise events from google analytics on UI
3. Prod vs dev (79.9mb 	84.5mb) ships with compiler. Improve build system
4. no strict type checking
5. Use enums instead of strings in store 
6. Prettier/Formatting
7. Start script does not works
8. Problem with build system (ng-prod does not works)
9. Not responsive, overflow-x but no scroll bar
10. "Go To Onboarding" close button does not works
11. Tests are only truthy

### Problems that can be solved(, but should they be solved ?)
### Problems that cannot be solved
1. **Using JQuery** - Used in components beyond the scope of `dashboard`.

### Problem Solutions
1. **Code refactoring**
   1. Create a separate directory `dashboard-v3`, with its own module and replicate the functionality of the current `dashboard-v2`.
   2. Simplify the directory structure
        ```
        .
        ├─ component1
        ├─ component2
        ├─ service
        ├─ folder1
        |    ├─ component1
        |    └─ service
        └─ dashboard.module.ts
        ```
        ```
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
2. **Implement strict type checking**