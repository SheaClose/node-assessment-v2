const express = require("express")
      , {json} = require("body-parser")
      , port = 3000
      , app = express()
			, accounts = require('./accounts.json');
let newAcctId = accounts[accounts.length -1].id + 1
	app.use(json());

	app.get("/api/accounts", function (req, res){
		let accountsArr = [];
		if (req.query.firstname|| req.query.lastname ||req.query.balance ||req.query.cardtype) {
			if (req.query.firstname) {
				accounts.map(function (cv){
					if (cv.first_name === req.query.firstname) {
						accountsArr.push(cv)
					}
				})
			}
			if (req.query.lastname) {
				accounts.map(function(cv){
					if (cv.last_name === req.query.lastname) {
						accountsArr.push(cv)
					}
				})
			}
			if (req.query.balance) {
				accounts.map(function(cv){
					if (cv.balance === req.query.balance) {
						accountsArr.push(cv)
					}
				})
			}
			if (req.query.cardtype) {
				accounts.map(function(cv){
					if (cv.card_type === req.query.cardtype) {
						accountsArr.push(cv)
					}
				})
			}
			return res.status(200).json(accountsArr)
		}
		return res.status(200).json(accounts)
	})

	app.get("/api/accounts/:id", function(req, res){
		let thisacct = null;
		console.log(thisacct);
		accounts.map(function(cv, i , arr){
			if (cv.id.toString() === req.params.id) {
				thisacct = cv
			}
		})
		// console.log(thisacct);
		if (thisacct) {
		return res.status(200).json(thisacct)
		}
		else {
			res.status(404).send('Sorry cant find that!')
		}
	})

	app.post("/api/accounts", function( req, res ){
		let newAcct = {
			card_number: req.body.card_number,
			 card_type: req.body.card_type,
			 balance: req.body.balance,
			 first_name: req.body.first_name,
			 last_name: req.body.last_name,
			 approved_states: []
		}
		newAcct.approved_states.push(req.body.approved_states[0])
		newAcct.id = newAcctId;
		accounts.push(newAcct);
		return res.status(200).json(newAcct)
	})

	app.post("/api/accounts/cardtype/:id", function(req, res){
		let updatedAcct;
		accounts.forEach(function(cv, i, arr){
			if (cv.id.toString() === req.params.id) {
				cv.card_type = req.body.card_type;
				updatedAcct = cv;
			}
		})
		return res.status(200).json(updatedAcct);
	})

	app.post("/api/accounts/approvedstates/:id", function(req, res){
		let updatedAcct;
		accounts.forEach(function(cv, i, arr){
			if (cv.id.toString() === req.params.id) {
				cv.approved_states.push(req.body.add)
				updatedAcct = cv;
			}
		})
		res.status(200).json(updatedAcct)
	})

	app.delete("/api/accounts/approvedstates/:id", function(req, res){
		let updatedAcct;
		accounts.forEach(function(cv, i, arr){
			if (cv.id.toString() === req.params.id) {
				cv.approved_states.forEach(function(cS, sI, sArr){
					if (cS === req.query.state) {
						sArr.splice(sI, 1)
					}
				})
			}
		})
		res.status(200).json(updatedAcct)
	})

	app.delete("/api/accounts/:id", function(req, res){
		let deletedAcct;
		accounts.forEach(function(cv, i , arr){
			if (cv.id.toString() === req.params.id) {
				deletedAcct = cv;
				arr.splice(i, 1)
			}
		})
		return res.status(200).json("delete")
	})

	app.put("/api/accounts/:id", function(req, res){
		let updatedAcct;
		accounts.forEach(function(cv, i , arr){
			if (cv.id.toString() === req.params.id){
				for (var key in cv) {
					if (req.body[key]) {
						cv[key] = req.body[key];
					}
				}
				updatedAcct = cv;
			}
		})
		return res.status(200).send(updatedAcct)
	})

app.listen(port, () => {console.log(`This is Dr. Crane... I'm listening. Port:${port}`)})

module.exports = app;
