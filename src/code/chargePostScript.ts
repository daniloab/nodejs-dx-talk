import open from 'open';
import { v4 as uuidv4 } from 'uuid';

import { apiWithLog,jsonOrText } from '@woovi/apiWithLog';
import { getApiBaseUrl, isMainScript } from '@woovi/shared';

import { appID } from '../apiID';

const run = async () => {
    const url = `${getApiBaseUrl()}/api/v1/charge`;

    const payload = {
        correlationID: uuidv4().toString(),
        value: 1500,
        comment: 'from-script-api',
    };

    const options = {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: appID,
        },
        body: JSON.stringify(payload),
    };

    const response = await apiWithLog(url, options);
    const data = await jsonOrText(response);

    if (data.error) {
        return;
    }

    // await open(data.charge.paymentLinkUrl);
    await open(`http://localhost:8103/home/charge/${data.charge.globalID}`)

    return data;
};

(async () => {
    if (!isMainScript(require, module, __filename)) {
        return;
    }

    try {
        await run();
    } catch (err) {
        // eslint-disable-next-line
        console.log('err: ', err);
        process.exit(1);
    }

    process.exit(0);
})();
