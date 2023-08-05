const BASE_TIMEOUT = 10000

global.config = {
    timeouts: {
        BASE_TIMEOUT,
        SHORT_TIMEOUT: BASE_TIMEOUT / 4,
        MID_TIMEOUT: BASE_TIMEOUT * 2,
        LONG_TIMEOUT: BASE_TIMEOUT * 4,
    },
    tenantData: {},
    relatedEntities: [],
    generatedApiKey: "",
    zRequestId: "",
}
