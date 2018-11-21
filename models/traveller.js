const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  const startLocations = [];
  this.journeys.map((journey) => startLocations.push(journey.startLocation));
  return startLocations;
};

Traveller.prototype.getJourneyEndLocations = function () {
  const startLocations = [];
  this.journeys.map((journey) => startLocations.push(journey.endLocation));
  return startLocations;
};

Traveller.prototype.getJourneysByTransport = function (transport) {

};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {

};

Traveller.prototype.calculateTotalDistanceTravelled = function () {

};

Traveller.prototype.getUniqueModesOfTransport = function () {

};


module.exports = Traveller;
