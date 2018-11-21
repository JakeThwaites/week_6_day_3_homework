const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  const startLocations = [];
  this.journeys.map((journey) => startLocations.push(journey.startLocation));
  return startLocations;
};

Traveller.prototype.getJourneyEndLocations = function () {
  const endLocations = [];
  this.journeys.map((journey) => endLocations.push(journey.endLocation));
  return endLocations;
};

Traveller.prototype.getJourneysByTransport = function (transport) {
  const journeys = this.journeys.filter((journey) => {
    return journey.transport === transport;
  });
  return journeys;
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {

};

Traveller.prototype.calculateTotalDistanceTravelled = function () {

};

Traveller.prototype.getUniqueModesOfTransport = function () {

};


module.exports = Traveller;
