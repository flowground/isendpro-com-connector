/**
 * Auto-generated action file for "API iSendPro" API.
 *
 * Generated at: 2019-05-07T14:42:29.992Z
 * Mass generator version: 1.1.0
 *
 * flowground :- Telekom iPaaS / isendpro-com-connector
 * Copyright © 2019, Deutsche Telekom AG
 * contact: flowground@telekom.de
 *
 * All files of this connector are licensed under the Apache 2.0 License. For details
 * see the file LICENSE on the toplevel directory.
 *
 *
 * Operation: 'repertoire'
 * Endpoint Path: '/repertoire'
 * Method: 'put'
 *
 */

const Swagger = require('swagger-client');
const processWrapper = require('../services/process-wrapper');
const spec = require('../spec.json');

// this wrapers offers a simplified emitData(data) function
module.exports.process = processWrapper(processAction);

// parameter names for this call
const PARAMETERS = [];

// mappings from connector field names to API field names
const FIELD_MAP = {
    "champ1": "champ1",
    "champ10": "champ10",
    "champ11": "champ11",
    "champ12": "champ12",
    "champ13": "champ13",
    "champ14": "champ14",
    "champ15": "champ15",
    "champ16": "champ16",
    "champ17": "champ17",
    "champ18": "champ18",
    "champ19": "champ19",
    "champ2": "champ2",
    "champ20": "champ20",
    "champ21": "champ21",
    "champ22": "champ22",
    "champ23": "champ23",
    "champ24": "champ24",
    "champ25": "champ25",
    "champ26": "champ26",
    "champ27": "champ27",
    "champ3": "champ3",
    "champ4": "champ4",
    "champ5": "champ5",
    "champ6": "champ6",
    "champ7": "champ7",
    "champ8": "champ8",
    "champ9": "champ9",
    "keyid": "keyid",
    "num": "num",
    "repertoireEdit": "repertoireEdit",
    "repertoireId": "repertoireId",
    "requestBody": "requestBody"
};

function processAction(msg, cfg) {
    var isVerbose = process.env.debug || cfg.verbose;

    if (isVerbose) {
        console.log(`---MSG: ${JSON.stringify(msg)}`);
        console.log(`---CFG: ${JSON.stringify(cfg)}`);
        console.log(`---ENV: ${JSON.stringify(process.env)}`);
    }

    const contentType = 'application/json';

    const body = msg.body;
    mapFieldNames(body);

    let parameters = {};
    for(let param of PARAMETERS) {
        parameters[param] = body[param];
    }

    // credentials for this operation
    let securities = {};

    let callParams = {
        spec: spec,
        operationId: 'repertoire',
        pathName: '/repertoire',
        method: 'put',
        parameters: parameters,
        requestContentType: contentType,
        requestBody: body.requestBody,
        securities: {authorized: securities},
        server: spec.servers[cfg.server] || cfg.otherServer,
    };

    if (isVerbose) {
        let out = Object.assign({}, callParams);
        out.spec = '[omitted]';
        console.log(`--SWAGGER CALL: ${JSON.stringify(out)}`);
    }

    // Call operation via Swagger client
    return Swagger.execute(callParams).then(data => {
        // emit a single message with data
        this.emitData(data);

        // if the response contains an array of entities, you can emit them one by one:

        // data.obj.someItems.forEach((item) => {
        //     this.emitData(item);
        // }
    });
}

function mapFieldNames(obj) {
    if(Array.isArray(obj)) {
        obj.forEach(mapFieldNames);
    }
    else if(typeof obj === 'object' && obj) {
        Object.keys(obj).forEach(key => {
            mapFieldNames(obj[key]);

            let goodKey = FIELD_MAP[key];
            if(goodKey && goodKey !== key) {
                obj[goodKey] = obj[key];
                delete obj[key];
            }
        });
    }
}