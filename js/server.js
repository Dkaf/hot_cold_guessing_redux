const express = require('express');
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

let storage = {
	let bestGuesser = '';
	update: function(numOfGuesses) {
		this.bestGuesser = numOfGuesses
	}
};

const app = express();
app.use(express.static());

app.get('/fewest-guesses', function(request, response) {
	response.json(storage.bestGuesser);
});

app.post('/fewest-guesses', jsonParser, function(request, response) {
	var fewestGuesses = storage.update(request.body.numOfGuesses);
)};

app.listen(process.env.PORT || 8080, process.env.IP);
