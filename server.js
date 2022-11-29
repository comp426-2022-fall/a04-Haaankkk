#!/usr/bin/env node

import { roll } from "./lib/roll.js";
import express from "express";
import minimist from "minimist";

//Setup variables
const args = minimist(process.argv.slice(2));
const app = express();
const port = args.port || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Endpoint /app/
app.get('/app/', (req, res) => {
    res.status(200).send('200 OK');
})

//Endpoint /app/roll  1
app.get('/app/roll', (req, res) => {
    res.status(200).send(roll(6, 2, 1));
})

//Endpoint /app/roll  2
app.post('/app/roll', (req, res) => {
    var sides = parseInt(req.body.sides) || 6;
    var dice = parseInt(req.body.dice) || 2;
    var rolls = parseInt(req.body.rolls) || 1;
    res.status(200).send(roll(sides, dice, rolls));
})

//Endpoint /app/roll/:sides
app.get('/app/roll/:sides/', (req, res) => {
    res.status(200).send(roll(parseInt(req.params.sides), 2, 1));
})

//Endpoint /app/roll/:sides/:dice
app.get('/app/roll/:sides/:dice/', (req, res) => {
    res.status(200).send(roll(parseInt(req.params.sides), parseInt(req.params.dice), 1));
})

//Endpoint /app/roll/:sides/:dice/:roll
app.get('/app/roll/:sides/:dice/:rolls/', (req, res) => {
    res.status(200).send(roll(parseInt(req.params.sides), parseInt(req.params.dice), parseInt(req.params.rolls)));
})

app.get('*', (req, res) => {
    res.status(404).send('404 NOT FOUND');
})

app.listen(port, () => {})