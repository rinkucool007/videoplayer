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
