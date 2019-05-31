---
title : Encrypting .env file
description : Encrypting .env file to use in google-cloud build environment.
author : nishkal
tags : ['google-cloud', 'firebase']
---

### Encrypting .env file to use in google-cloud build environment.

##### Use the following g-cloud command to encrypt .env file.

```sh
gcloud kms encrypt   --plaintext-file=.env   --ciphertext-file=.env.enc   --location=global   --keyring=cloud-build-keyring   --key=cloud-build-key
```