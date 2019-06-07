---
title : appveyor.yaml
description : Appveyor config file.
tags : ['config-files', 'appveyor']
---

[AppVeyor Config template](https://www.appveyor.com/docs/appveyor-yml/)

# appveyor.yml

```yml
# https://github.com/sindresorhus/appveyor-node/blob/master/appveyor.yml
os: unstable

max_jobs: 5
environment:
  matrix:
    - platform: x64

cache:
  - node_modules
  - '%USERPROFILE%\.electron-gyp'
  - '%USERPROFILE%\.node-gyp'

install:
  - ps: Install-Product node 10.15.3 x64
  - set CI=true
  - npm install -g npm@latest
  - npm install

build: off

matrix:
  fast_finish: true

test_script:
  - node --version
  - npm --version
  - npm run build-quick
  - npm run test-build

artifacts:
  - path: ./build/*.exe
    name: executables
  - path: ./test/__testResults__
    name: results

deploy:
  release: myproduct-v$(appveyor_build_version)
  description: 'Release description'
  provider: GitHub
  auth_token:
    secure: w086h7SsN4ZengkZWbBcX3yNc9lM9vS0d7KD7ED0OSblaBlaBla # your encrypted token from GitHub
  artifact: executables, results
  draft: true
  prerelease: true
  on:
    branch: master
    # APPVEYOR_REPO_TAG: true 
```