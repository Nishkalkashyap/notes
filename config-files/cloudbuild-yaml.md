---
title : cloudbuild.yaml
description : Cloud build config file.
tags : ['config-files']
---

```yml
steps:
# Decrypt
- name: gcr.io/cloud-builders/gcloud
  args:
  - kms
  - decrypt
  - --ciphertext-file=.env.enc
  - --plaintext-file=.env
  - --location=global
  - --keyring=cloud-build
  - --key=cloud_build_docs-env

# install
- name: 'gcr.io/cloud-builders/npm'
  args : ['install']

# build
- name: 'gcr.io/cloud-builders/npm'
  args : ['run','cloud-build']
```