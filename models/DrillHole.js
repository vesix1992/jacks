const mongoose = require('mongoose');
const { Schema } = mongoose;
const data = require('./data');

const drillHoleSchema = new Schema({
	id: Number,
	latitude: String,
	longitude: String,
	dip: Number,
	azimuth: Number,
	data: [data]
});

mongoose.model('drillholes', drillHoleSchema);