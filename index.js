// Code your solution in this file!
// const block = 42
function distanceFromHqInBlocks(block) {
    return Math.abs(block - 42);
}
// //
// function distanceFromHqInFeet(distanceFromHqInBlocks) {
//     const feetPerBlock = 264;
//     return (distanceFromHqInBlocks * feetPerBlock)
// }


function distanceFromHqInFeet(block) {
    const blocks = distanceFromHqInBlocks(block);
    const feetPerBlock = 264;
    return (blocks * feetPerBlock);
}  

function distanceTravelledInFeet(start, destination){
    return (Math.abs(start - destination)) * 264
}

function calculatesFarePrice(start, destination) {
    const travelDistance = distanceTravelledInFeet(start, destination)
    if (travelDistance <= 400){
        return 0;
    }
    else if (travelDistance > 400  && travelDistance <= 2000){
        return ((travelDistance - 400) * 0.02)
    }
    else if (travelDistance > 2000 && travelDistance < 2500){
        return 25;
    }
    else {
        return ("cannot travel that far")

    }
}