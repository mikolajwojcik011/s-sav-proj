const express = require('express')
const router = express.Router()
const videos = require('../assets/viedoList')
const fs = require('fs')

// get list of videos
router.get('/', (req,res) => {
    res.json(videos)
})

//get list of avilable resolutions
router.get('/resoltuionTable/:uid', (req,res) => { 
    const resTable = require(`../assets/${req.params.uid}/${req.params.uid}.js`)
    res.json(resTable)
})

//streaming route
router.get('/video/:path', (req, res) => {
    let resolution = req.params.path.slice(-3)
    let uid = req.params.path.slice(0, -4)
    const videoPath = `assets/${uid}/${resolution}.mp4`;
    const videoStat = fs.statSync(videoPath);
    const fileSize = videoStat.size;
    const videoRange = req.headers.range;
    if (videoRange) {
        const parts = videoRange.replace(/bytes=/, "").split("-");
        const start = parseInt(parts[0], 10);
        const end = parts[1]
            ? parseInt(parts[1], 10)
            : fileSize-1;
        const chunksize = (end-start) + 1;
        const file = fs.createReadStream(videoPath, {start, end});
        const head = {
            'Content-Range': `bytes ${start}-${end}/${fileSize}`,
            'Accept-Ranges': 'bytes',
            'Content-Length': chunksize,
            'Content-Type': 'video/mp4',
        };
        res.writeHead(206, head);
        file.pipe(res);
    } else {
        const head = {
            'Content-Length': fileSize,
            'Content-Type': 'video/mp4',
        };
        res.writeHead(200, head);
        fs.createReadStream(videoPath).pipe(res);
    }
});

module.exports = router;