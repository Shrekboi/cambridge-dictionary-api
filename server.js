// const cors = require('cors');
// const express = require('express');
// const puppeteer = require('puppeteer');
// const app = express();
// // Port on which your server will listen
const PORT = process.env.PORT || 3030;

// // Define a route to serve an HTML page
// app.get('/', (req, res) => {
//     res.sendFile(__dirname + '/index.html');
// });

// app.use(cors());

// // Define an API endpoint to get a definition
// app.get('/api/definition/:word', async (req, res) => {
//     const word = req.params.word;
//     const definition = await getDefinition(word);
//     res.json({ definition });
// });

// async function getDefinition(word) {
//     const browser = await puppeteer.launch({
//         headless: true, // will not show the browser
//         defaultViewport: null,
//     });

//     const page = await browser.newPage();

//     let url = "https://dictionary.cambridge.org/dictionary/english/" + word;

//     await page.goto(url, {
//         waitUntil: "domcontentloaded",
//     });

//     const definition = await page.evaluate(() => {
//         // Use a more robust selector to find the definition
//         const definitionElement = document.querySelector('.def.ddef_d.db');

//         if (definitionElement) {
//             return definitionElement.innerText;
//         } else {
//             return "Definition not found.";
//         }
//     });

//     // Close the browser
//     await browser.close();

//     console.log(definition)

//     return definition;
// }

// getDefinition("cat")


const express = require("express")
const app = express()

app.get("/", function (req, res) {
    res.send("hello my dude")
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
