const {
    BeforeAll, Before,
} = require("@cucumber/cucumber")

BeforeAll(async () => {
    global.config.driverRestarted = false
    global.config.cookiesForUsers = {}
})

Before((options) => {
    global.config.stepNumber = 0
    global.config.zRequestId = "unknown"
    const currentTC = options.pickle.tags.find((tag) => tag.name.match(/@C[0-9]+/))
    if (currentTC) {
        global.config.testRail_ID = currentTC.name
        global.config.zRequestId = currentTC.name.replace("@", "")
    }
})
