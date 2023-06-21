# Local Server Setup

Back-end written in Node.js/Express

1. Change directories so that you're inside the server directory.
```bash
cd pba-health-server
```

2. Copy the contents of the example configuration file into a new file which is leveraged by the server.
```bash
cp example.config.js config.js
```

*Optional* Copy the contents of the example configuration file into a new file which is leveraged by the server.
```bash
seed database using 'data.sql' file
```

4. Install dependencies
```bash
npm install
```

5. Run the server
```bash
nodemon app.js
```

