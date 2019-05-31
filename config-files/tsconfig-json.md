---
title : tsconfig.json
description : tsconfig file.
tags : ['config-files']
---

# tsconfig.json

```json
{
  "compileOnSave": false,
  "compilerOptions": {
    "allowSyntheticDefaultImports": true,
    "importHelpers": true,
    "outDir": "./dist/out-tsc",
    "sourceMap": false,
    "declaration": false,
    "moduleResolution": "node",
    "emitDecoratorMetadata": true,
    "experimentalDecorators": true,
    "target": "es5",
    "lib": [
      "es2018",
      "dom"
    ],
    "baseUrl": "./",
    "module": "esnext",
    "types": [
      "node"
    ],
    "typeRoots": [
      "node_modules/@types"
    ],
    "strict": false,
    "skipLibCheck": true,
    "allowJs": true
  },
  "include": [
    "src/*",
    "worker/*"
  ],
  "exclude": [
    "**/node_modules/**/*",
    "scripts",
  ]
}
```