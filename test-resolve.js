try {
    const firebase = require("@firecms/firebase");
    console.log("Found @firecms/firebase");
} catch (e) {
    console.log("Could not find @firecms/firebase", e.message);
}

try {
    const core = require("@firecms/core");
    console.log("Found @firecms/core");
} catch (e) {
    console.log("Could not find @firecms/core", e.message);
}

try {
    const ui = require("@firecms/ui");
    console.log("Found @firecms/ui");
} catch (e) {
    console.log("Could not find @firecms/ui", e.message);
}
