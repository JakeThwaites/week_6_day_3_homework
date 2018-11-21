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
  const journeysOverDistance = this.journeys.filter((journey) => {
    return journey.distance > minDistance;
  })

  return journeysOverDistance;
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  const totalDistance = this.journeys.reduce((accum, journey) => {
    return accum + journey.distance;
  }, 0);
  return totalDistance;
};


Traveller.prototype.allTransportMethods = function () {
  allMethods = [];

  for (journey of this.journeys) {
    allMethods.push(journey.transport);
  }

  return allMethods;
};

Traveller.prototype.getUniqueModesOfTransport = function () {
  const allTransports = this.allTransportMethods();
  const uniqueTransports = [];

  allTransports.forEach((transportMethod) => {
    if ( !uniqueTransports.includes(transportMethod) ) {
      uniqueTransports.push(transportMethod)
    };
  });
  return uniqueTransports;
};


module.exports = Traveller;
