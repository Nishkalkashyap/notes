---
title : Using ffmpeg.
description : How to use ffmpeg.
tags : []
---

# Using ffmpeg.

```bash
#video scaling
ffmpeg -i 'input.mp4' -vf "scale=1920:-1" './output.mp4'

#changing bitrate
ffmpeg -i 'input.mp4' -b:v "1000K"  './output.mp4'

#video speed (take note of -an flag. Removed audio)
ffmpeg -i 'input.mp4' -vf "setpts=0.5*PTS" -an './output.mp4'

#framerate
ffmpeg -i 'input.mp4' -r 24 -an './output.mp4'
```