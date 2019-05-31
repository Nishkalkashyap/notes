---
title : Setup cloud build
description : Setup cloud-build gor google-cloud platform.
tags : ['google-cloud', 'firebase']
---

# Setup cloud build

[[toc]]

### 1. Goto [Build Page](https://console.cloud.google.com/cloud-build/builds)

### 2. Go to triggers in the sidebar and select trigger.

```sh
gcloud kms encrypt   --plaintext-file=.env   --ciphertext-file=.env.enc   --location=global   --keyring=cloud-build-keyring   --key=cloud-build-key
```