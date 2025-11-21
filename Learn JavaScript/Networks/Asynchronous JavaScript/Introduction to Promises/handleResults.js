const { getResults } = require('./lab');
const { sendResults } = require('./messaging');
const { logResponse, logError } = require('./logs');

async function handleResults(patientId) {
    const result = await getResults(patientId)
    const response = await sendResults(patientId, result);
    await logResponse(response);

}

module.exports = handleResults;
