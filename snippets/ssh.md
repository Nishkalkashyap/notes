---
title : SSH
description : How to use ssh
tags : []
---

# SSH

!!! note Note
Digital ocean tutorial: [Link](https://www.digitalocean.com/docs/droplets/how-to/add-ssh-keys/to-existing-droplet/)
!!!

#### 1. Generate ssh key
```bash
ssh-keygen

// variation
ssh-keygen -t ras
```

#### 2. Copy to server
```bash
// login to server

nano ~/.ssh/authorized_keys
```

#### 2. Change SSH config
```bash
// edit config here
sudo nano /etc/shell/sshd_config

// after editing
sudo systemctl reload sshd
```


