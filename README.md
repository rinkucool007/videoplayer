# videoplayer

Command to start project
```
npm init -y
npm install express
node server/server.js
```
This will run in port 3001

```
http://localhost:3001
```

Host in Raspberry Pi as Server

```
pgrep -f "node server/server.js"
kill -9 <PID>
node server/server.js > /dev/null 2>&1 &
```

File System # Add Mount
```
sudo fdisk -l
sudo mount /dev/sdb1 /mnt/usb
sudo mount --bind /mnt/usb/video /home/pp/videoplayer/videos


sudo nano /etc/fstab
/dev/sda1   /mnt/usb           vfat   defaults    0   2
/mnt/usb/video   /home/pp/videoplayer/videos   none   bind   0   0


sudo umount /home/pp/videoplayer/videos
