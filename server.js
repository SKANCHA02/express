const express = require ("express");

const fs = require ("fs");

const v = require ("./verif")

const app = express ();

const PORT = 5330;


app.get("/", v, (req, res) => {
	fs.readFile("./Homepage.html", "utf8", (err, data) => {
		err ? res.end("FILE NOT FOUND") && console.error(err) : res.end(data);
	});
});

app.get("/Homepage", v, (req, res) => {
	fs.readFile("./Homepage.html", "utf8", (err, data) => {
		err ? res.end("FILE NOT FOUND") && console.error(err) : res.end(data);
	});
});

app.get("/Ourservices", v, (req, res) => {
	fs.readFile("./Ourservices.html", "utf8", (err, data) => {
		err ? res.end("FILE NOT FOUND") && console.error(err) : res.end(data);
	});
});


app.get("/Contactus", v, (req, res) => {
	fs.readFile("./Contactus.html", "utf8", (err, data) => {
		err ? res.end("FILE NOT FOUND") && console.error(err) : res.end(data);
	});
});


app.listen(PORT, (req, res) => {
	console.log(`server running : port ${PORT}...`);
});
