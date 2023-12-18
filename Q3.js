"use strict";
function daysintoweeks(days) {
    let weeks = Math.floor(days / 7);
    let remainingdays = days % 7;
    console.log(`weeks=${weeks}and remaining days=${remainingdays}`);
}
daysintoweeks(16);
