---
description : All docs on one page.
author : nishkal
tags : []
sidebarDepth: 4
---

# All Docs

## Config-files


### .travis.yml

```yml
sudo: required
dist: trusty

language: node_js
cache: 
  - npm

notifications:
  email:
    on_success: never
    on_failure: change

matrix:
  include:
    - os: linux
      node_js: lts/*

install:
  - npm install

script:
  - npm run build

deploy:
  local_dir: [dist-dir]### e.g. local_dir: ./.vuepress/dist
  provider: pages
  skip_cleanup: true
  github_token: $GITHUB_TOKEN
  fqdn: [subdomain].[domain].[ext] #e.g.## fqdn: notes.nishkal.in
  on:
    branch: master
```
________


### tsconfig.json

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
________


### cloudbuild.yml

```yml
steps:
### Decrypt
- name: gcr.io/cloud-builders/gcloud
  args:
  - kms
  - decrypt
  - --ciphertext-file=.env.enc
  - --plaintext-file=.env
  - --location=global
  - --keyring=cloud-build-keyring
  - --key=cloud-build-key

### install
- name: 'gcr.io/cloud-builders/npm'
  args : ['install']

### build
- name: 'gcr.io/cloud-builders/npm'
  args : ['run','cloud-build']

### deploy
- name: 'gcr.io/cloud-builders/npm'
  args : ['run','deploy-ci']
```
________


## Snippets

### Setup travis



!!! note Note
View on youtube: [Link](https://www.youtube.com/watch?v=SKXkC4SqtRk)

View travis-ci official deployment guide: [Link](https://docs.travis-ci.com/user/deployment/pages/)
!!!

###### 1. Add a personal access token on github.

###### 2. Make sure to have required "homepage" field in package.json.
e.g.
```json
{
    ...
    "homepage": "https://nishkalkashyap.github.io/notes",
}
```

###### 3. Enable build on travis-ci, and add personal access token in environment variables.

###### 4. Copy base .travis.yml fron [here](/config-files/travis-github-pages.md)

###### 5. Add A records of custom domain like so.

| Type | Name        | Value           |
| ---- | ----------- | --------------- |
| A    | [subdomain] | 185.199.108.153 |
| A    | [subdomain] | 185.199.109.153 |
| A    | [subdomain] | 185.199.110.153 |
| A    | [subdomain] | 185.199.111.153 |
________


### Setup cloud build



!!! note Note
View on fireship: [Link](https://fireship.io/lessons/ci-cd-with-google-cloud-build/)
!!!

###### 1. Goto [Build Page](https://console.cloud.google.com/cloud-build/builds)

###### 2. Go to triggers in the sidebar and select trigger.

###### 3. Setup local dev environment.

1. Add the .env file with all the environment variables.

2. Get the Keys from [google-cloud-iam.](https://console.cloud.google.com/security/kms) 

3. Run the following command.
```sh
gcloud kms encrypt   --plaintext-file=.env   --ciphertext-file=.env.enc   --location=global   --keyring=cloud-build-keyring   --key=cloud-build-key
```

3. Add the `cloudbuild.yaml` file at the root of your project. Copy the config file reference fron [here.](/config-files/cloudbuild-yaml.md) 
4. Push to the repo.
________

