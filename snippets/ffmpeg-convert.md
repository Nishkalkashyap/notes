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

#screenshot
ffmpeg -i 'input.mp4' -ss 01:23:45 -vframes 1 './output.jpg'

#video concat
# ref: https://stackoverflow.com/questions/7333232/how-to-concatenate-two-mp4-files-using-ffmpeg#11175851
cat mylist.txt
file '/path/to/file1'
file '/path/to/file2'
file '/path/to/file3'

ffmpeg -f concat -i mylist.txt -c copy output.mp4
```