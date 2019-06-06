---
title : Setup github pages with travis.
description : Setup github pages with travis CI/CD pipeline.
tags : ['travis']
---

# Setup travis

[[toc]]

!!! note Note
View on youtube: [Link](https://www.youtube.com/watch?v=SKXkC4SqtRk)

View travis-ci official deployment guide: [Link](https://docs.travis-ci.com/user/deployment/pages/)
!!!

#### 1. Add a personal access token on github.

#### 2. Make sure to have required "homepage" field in package.json.
e.g.
```json
{
    ...
    "homepage": "https://nishkalkashyap.github.io/notes",
}
```

#### 3. Enable build on travis-ci, and add personal access token in environment variables.

#### 4. Copy base .travis.yml fron [here](/config-files/travis-github-pages.md)

#### 5. Push code to repo.