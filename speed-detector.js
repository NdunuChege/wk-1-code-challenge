// Function to calculate demerit points based on car speed
function checkSpeed(speed) {
    // Define the speed limit
    const speedLimit = 70;

    // Check if the speed is below the speed limit
    if (speed < speedLimit) {
        console.log("Ok"); // Print "Ok" if speed is less than 70
    } else {
        // Calculate the excess speed above the limit
        const excessSpeed = speed - speedLimit;

        // Calculate the number of demerit points
        // Every 5 km/h over the limit results in 1 demerit point
        const points = Math.floor(excessSpeed / 5);

        // Print the total number of demerit points
        console.log("Points:", points);

        // Check if the points exceed 12 for license suspension
        if (points > 12) {
            console.log("License suspended"); // Print warning if more than 12 points
        }
    }
}

// Example usage
checkSpeed(80); // Call the function with speed 80 as an example