//index.js

const express = require('express');
const puppeteer = require('puppeteer');
const ua = require('useragent');
const app = express();
var path = require("path");

const directory = 'dist';
const dist = path.join(__dirname, directory)

const port = process.env.PORT || 3000;

//you can put your puppeteer middleware here later

function isBot (useragent) {
    const agent = ua.is(useragent);
    return !agent.webkit && !agent.opera && !agent.ie &&
        !agent.chrome && !agent.safari && !agent.mobile_safari &&
        !agent.firefox && !agent.mozilla && !agent.android;
}

const uAgentMiddleware = async (req, res, next) => {
    const local_url = 'BASE_URL'

    if (!isBot(req.headers['user-agent'])) {
        next ()
    } else {

        try {
            const browser = await puppeteer.launch({
              'args' : [
                '--no-sandbox',
                '--disable-setuid-sandbox'
              ]
            })
            const page = await browser.newPage();
            await page.setUserAgent('Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2228.0 Safari/537.36');
            await page.goto(local_url, {
                waitUntil: "networkidle0",
            });
            const html = await page.evaluate(() => {
                return document.documentElement.innerHTML;
            });
            await browser.close();

            res.send(html);
        } catch (err) {
            res.send(err)
        }
    }
}

app.use(uAgentMiddleware)




app.use('*', (req, res) => {
    res.sendFile(path.join(dist, 'index.html'));
})

app.listen(port, () => {
    console.log(`Web server is running at port ${port}`);
});