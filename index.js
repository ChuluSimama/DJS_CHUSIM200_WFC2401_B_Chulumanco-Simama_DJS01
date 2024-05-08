/**
 * Debugging Guide
 * 1. Make the code more readable
 * 2. Pick up calculation errors
 * 3. Make these calculations robust such that the calculation does not give an incorrect result, it throws an error to the user if something has gone wrong (parameter used with an incorrect unit of measurement, etc)
 */

// Given Parameters
const velocity = 10000; // velocity (km/h)
const acceleration = 3; // acceleration (m/s^2)
const time = 3600; // seconds (1 hour)
const distance = 0; // distance (km)
const fuel = 5000; // remaining fuel (kg)
const fuelBurnRate = 0.5; // fuel burn rate (kg/s)

// Calculate new distance
const newDistance = calculateNewDistance(velocity, time, distance);

// Calculate remaining fuel
const remainingFuel = calculateRemainingFuel(fuelBurnRate, time);

// Calculate new velocity
const newVelocity = calculateNewVelocity(acceleration, velocity, time);

console.log(`Corrected New Velocity: ${newVelocity} km/h`);
console.log(`Corrected New Distance: ${newDistance} km`);
console.log(`Corrected Remaining Fuel: ${remainingFuel} kg`);

// Calculates the new distance based on the given parameters.
function calculateNewDistance(velocity, time, distance) {
  if (typeof velocity !== "number" || velocity <= 0) {
    throw new Error("Invalid velocity parameter");
  }
  if (typeof time !== "number" || time <= 0) {
    throw new Error("Invalid time parameter");
  }
  if (typeof distance !== "number" || distance < 0) {
    throw new Error("Invalid distance parameter");
  }

  return distance + velocity * (time / 3600); // Convert time from seconds to hours
}

//Calculates the remaining fuel based on the given parameters.
 
function calculateRemainingFuel(fuelBurnRate, time) {
  if (typeof fuelBurnRate !== "number" || fuelBurnRate <= 0) {
    throw new Error("Invalid fuel burn rate parameter");
  }
  if (typeof time !== "number" || time <= 0) {
    throw new Error("Invalid time parameter");
  }

  return fuel - fuelBurnRate * time;
}

//Calculates the new velocity based on the given parameters.

function calculateNewVelocity(acceleration, velocity, time) {
  if (typeof acceleration !== "number" || acceleration <= 0) {
    throw new Error("Invalid acceleration parameter");
  }
  if (typeof velocity !== "number" || velocity <= 0) {
    throw new Error("Invalid velocity parameter");
  }
  if (typeof time !== "number" || time <= 0) {
    throw new Error("Invalid time parameter");
  }

  return velocity + acceleration * (time / 3600); // Convert time from seconds to hours
}
