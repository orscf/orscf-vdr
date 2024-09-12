"use strict";
/* based on ORSCF VisitData Contract v1.7.0.0 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.VdrConnector = exports.VisitSubmissionClient = exports.VisitHL7ImportClient = exports.VisitHL7ExportClient = exports.VisitConsumeClient = exports.DataRecordingSubmissionClient = exports.VdrEventSubscriptionClient = exports.VdrApiInfoClient = void 0;
const axios_1 = require("axios");
/**
 * Provides interoperability information for the current implementation
 */
class VdrApiInfoClient {
    constructor(rootUrlResolver, apiTokenResolver, httpPostMethod) {
        this.rootUrlResolver = rootUrlResolver;
        this.apiTokenResolver = apiTokenResolver;
        this.httpPostMethod = httpPostMethod;
    }
    getEndpointUrl() {
        let rootUrl = this.rootUrlResolver();
        if (rootUrl.endsWith('/')) {
            return rootUrl + 'vdrApiInfo/';
        }
        else {
            return rootUrl + '/vdrApiInfo/';
        }
    }
    /**
     * returns the version of the ORSCF specification which is implemented by this API, (this can be used for backward compatibility within inhomogeneous infrastructures)
     */
    getApiVersion() {
        let requestWrapper = {};
        let url = this.getEndpointUrl() + 'getApiVersion';
        return this.httpPostMethod(url, requestWrapper, this.apiTokenResolver()).then((r) => {
            let responseWrapper = r;
            if (responseWrapper.fault) {
                console.warn('Request to "' + url + '" faulted: ' + responseWrapper.fault);
                throw { message: responseWrapper.fault };
            }
            return responseWrapper.return;
        });
    }
    /**
     * returns a list of API-features (there are several 'services' for different use cases, described by ORSCF) supported by this implementation. The following values are possible: 'VdrEventSubscription', 'VisitConsume', 'VisitSubmission', 'VisitHL7Export', 'VisitHL7Import', 'DataRecordingSubmission'
     */
    getCapabilities() {
        let requestWrapper = {};
        let url = this.getEndpointUrl() + 'getCapabilities';
        return this.httpPostMethod(url, requestWrapper, this.apiTokenResolver()).then((r) => {
            let responseWrapper = r;
            if (responseWrapper.fault) {
                console.warn('Request to "' + url + '" faulted: ' + responseWrapper.fault);
                throw { message: responseWrapper.fault };
            }
            return responseWrapper.return;
        });
    }
    /**
     * returns a list of available capabilities ("API:VisitDataConsume") and/or data-scopes ("Study:9B2C3F48-2941-2F8F-4D35-7D117D5C6F72") which are permitted for the CURRENT ACCESSOR and gives information about its 'authState', which can be: 0=auth needed / 1=authenticated / -1=auth expired / -2=auth invalid/disabled
     */
    getPermittedAuthScopes() {
        let requestWrapper = {};
        let url = this.getEndpointUrl() + 'getPermittedAuthScopes';
        return this.httpPostMethod(url, requestWrapper, this.apiTokenResolver()).then((r) => {
            let responseWrapper = r;
            if (responseWrapper.fault) {
                console.warn('Request to "' + url + '" faulted: ' + responseWrapper.fault);
                throw { message: responseWrapper.fault };
            }
            return { authState: responseWrapper.authState, return: responseWrapper.return };
        });
    }
    /**
     * OPTIONAL: If the authentication on the current service is mapped using tokens and should provide information about the source at this point, the login URL to be called up via browser (OAuth ['CIBA-Flow'](https://openid.net/specs/openid-client-initiated-backchannel-authentication-core-1_0.html)) is returned here.
     */
    getOAuthTokenRequestUrl() {
        let requestWrapper = {};
        let url = this.getEndpointUrl() + 'getOAuthTokenRequestUrl';
        return this.httpPostMethod(url, requestWrapper, this.apiTokenResolver()).then((r) => {
            let responseWrapper = r;
            if (responseWrapper.fault) {
                console.warn('Request to "' + url + '" faulted: ' + responseWrapper.fault);
                throw { message: responseWrapper.fault };
            }
            return responseWrapper.return;
        });
    }
}
exports.VdrApiInfoClient = VdrApiInfoClient;
/**
 * Provides an workflow-level API for interating with a 'VisitDataRepository' (VDR)
 */
class VdrEventSubscriptionClient {
    constructor(rootUrlResolver, apiTokenResolver, httpPostMethod) {
        this.rootUrlResolver = rootUrlResolver;
        this.apiTokenResolver = apiTokenResolver;
        this.httpPostMethod = httpPostMethod;
    }
    getEndpointUrl() {
        let rootUrl = this.rootUrlResolver();
        if (rootUrl.endsWith('/')) {
            return rootUrl + 'vdrEventSubscription/';
        }
        else {
            return rootUrl + '/vdrEventSubscription/';
        }
    }
    /**
     * Creates a subscription for changes which are affecting Visits. On success, a 'SubscriptionUid' will be returned and a call will be made to the given subscriberUrl + '/ConfirmAsSubscriber'. After the subscription has been confirmed, the requested events will be pushed to subscriberUrl + '/NoticeChangedVisits' (NOTICE: the receiving methods also are documented here, because this service itself can act as subscriber)
     */
    subscribeForChangedVisits(subscriberUrl, filter) {
        let requestWrapper = {
            subscriberUrl: subscriberUrl,
            filter: filter
        };
        let url = this.getEndpointUrl() + 'subscribeForChangedVisits';
        return this.httpPostMethod(url, requestWrapper, this.apiTokenResolver()).then((r) => {
            let responseWrapper = r;
            if (responseWrapper.fault) {
                console.warn('Request to "' + url + '" faulted: ' + responseWrapper.fault);
                throw { message: responseWrapper.fault };
            }
            return responseWrapper.return;
        });
    }
    /**
     * Receives notifications about changes which are affecting Visits. IMPORTANT: this method is dedicated to the usecase, when this service itself acts as a subscriber! So this can be called by an foreign service during the setup of a subscription, which was previously requested from here. The opposite case: any client subscribing to events from here, must provide its own http endpoint that has such a method!
     */
    noticeChangedVisits(eventUid, eventSignature, subscriptionUid, publisherUrl, createdRecords, modifiedRecords, archivedRecords) {
        let requestWrapper = {
            eventUid: eventUid,
            eventSignature: eventSignature,
            subscriptionUid: subscriptionUid,
            publisherUrl: publisherUrl,
            createdRecords: createdRecords,
            modifiedRecords: modifiedRecords,
            archivedRecords: archivedRecords,
        };
        let url = this.getEndpointUrl() + 'noticeChangedVisits';
        return this.httpPostMethod(url, requestWrapper, this.apiTokenResolver()).then((r) => {
            let responseWrapper = r;
            if (responseWrapper.fault) {
                console.warn('Request to "' + url + '" faulted: ' + responseWrapper.fault);
                throw { message: responseWrapper.fault };
            }
            return { terminateSubscription: responseWrapper.terminateSubscription };
        });
    }
    /**
     * Confirms a Subscription. IMPORTANT: this method is dedicated to the usecase, when this service itself acts as a subscriber! So this can be called by an foreign service during the setup of a subscription, which was previously requested from here. The opposite case: any client subscribing to events from here, must provide its own http endpoint that has such a method!
     */
    confirmAsSubscriber(publisherUrl, subscriptionUid) {
        let requestWrapper = {
            publisherUrl: publisherUrl,
            subscriptionUid: subscriptionUid,
        };
        let url = this.getEndpointUrl() + 'confirmAsSubscriber';
        return this.httpPostMethod(url, requestWrapper, this.apiTokenResolver()).then((r) => {
            let responseWrapper = r;
            if (responseWrapper.fault) {
                console.warn('Request to "' + url + '" faulted: ' + responseWrapper.fault);
                throw { message: responseWrapper.fault };
            }
            return { secret: responseWrapper.secret };
        });
    }
    /**
     * Terminates a subscription (on publisher side) and returns a boolean, which indicates success.
     */
    terminateSubscription(subscriptionUid, secret) {
        let requestWrapper = {
            subscriptionUid: subscriptionUid,
            secret: secret
        };
        let url = this.getEndpointUrl() + 'terminateSubscription';
        return this.httpPostMethod(url, requestWrapper, this.apiTokenResolver()).then((r) => {
            let responseWrapper = r;
            if (responseWrapper.fault) {
                console.warn('Request to "' + url + '" faulted: ' + responseWrapper.fault);
                throw { message: responseWrapper.fault };
            }
            return responseWrapper.return;
        });
    }
    /**
     * Returns an array of subscriptionUid's. This method helps subscribers to evaluate whether current subscriptions are still active.
     */
    getSubsriptionsBySubscriberUrl(subscriberUrl, secret) {
        let requestWrapper = {
            subscriberUrl: subscriberUrl,
            secret: secret
        };
        let url = this.getEndpointUrl() + 'getSubsriptionsBySubscriberUrl';
        return this.httpPostMethod(url, requestWrapper, this.apiTokenResolver()).then((r) => {
            let responseWrapper = r;
            if (responseWrapper.fault) {
                console.warn('Request to "' + url + '" faulted: ' + responseWrapper.fault);
                throw { message: responseWrapper.fault };
            }
            return responseWrapper.return;
        });
    }
}
exports.VdrEventSubscriptionClient = VdrEventSubscriptionClient;
/**
 * Provides an workflow-level API for interating with a 'VisitDataRepository' (VDR)
 */
class DataRecordingSubmissionClient {
    constructor(rootUrlResolver, apiTokenResolver, httpPostMethod) {
        this.rootUrlResolver = rootUrlResolver;
        this.apiTokenResolver = apiTokenResolver;
        this.httpPostMethod = httpPostMethod;
    }
    getEndpointUrl() {
        let rootUrl = this.rootUrlResolver();
        if (rootUrl.endsWith('/')) {
            return rootUrl + 'dataRecordingSubmission/';
        }
        else {
            return rootUrl + '/dataRecordingSubmission/';
        }
    }
    /**
     * ImportDataRecordings
     */
    importDataRecordings(dataRecordings) {
        let requestWrapper = {
            dataRecordings: dataRecordings,
        };
        let url = this.getEndpointUrl() + 'importDataRecordings';
        return this.httpPostMethod(url, requestWrapper, this.apiTokenResolver()).then((r) => {
            let responseWrapper = r;
            if (responseWrapper.fault) {
                console.warn('Request to "' + url + '" faulted: ' + responseWrapper.fault);
                throw { message: responseWrapper.fault };
            }
            return { createdDataRecordingUids: responseWrapper.createdDataRecordingUids, updatedDataRecordingUids: responseWrapper.updatedDataRecordingUids };
        });
    }
}
exports.DataRecordingSubmissionClient = DataRecordingSubmissionClient;
/**
 * Provides an workflow-level API for interating with a 'VisitDataRepository' (VDR)
 */
class VisitConsumeClient {
    constructor(rootUrlResolver, apiTokenResolver, httpPostMethod) {
        this.rootUrlResolver = rootUrlResolver;
        this.apiTokenResolver = apiTokenResolver;
        this.httpPostMethod = httpPostMethod;
    }
    getEndpointUrl() {
        let rootUrl = this.rootUrlResolver();
        if (rootUrl.endsWith('/')) {
            return rootUrl + 'visitConsume/';
        }
        else {
            return rootUrl + '/visitConsume/';
        }
    }
    /**
     * Searches Visits by a given 'filter' (if provided), sorts the results by the given 'sortingField' (if provided) and returns an array of VisitUids for the matching records.
     */
    searchVisits(sortingField, sortDescending = false, filter, includeArchivedRecords = false, limitResults = 0) {
        let requestWrapper = {
            sortingField: sortingField,
            sortDescending: sortDescending,
            filter: filter,
            includeArchivedRecords: includeArchivedRecords,
            limitResults: limitResults,
        };
        let url = this.getEndpointUrl() + 'searchVisits';
        return this.httpPostMethod(url, requestWrapper, this.apiTokenResolver()).then((r) => {
            let responseWrapper = r;
            if (responseWrapper.fault) {
                console.warn('Request to "' + url + '" faulted: ' + responseWrapper.fault);
                throw { message: responseWrapper.fault };
            }
            return { result: responseWrapper.result };
        });
    }
    /**
     * Searches Visits which have been modified after(or at) the given 'minTimestampUtc', matching to the given 'filter' (if provided). The result is sorted descenting by the timestamp of the modification (latest first) and will include archived records.
     */
    searchChangedVisits(minTimestampUtc, filter) {
        let requestWrapper = {
            minTimestampUtc: minTimestampUtc,
            filter: filter,
        };
        let url = this.getEndpointUrl() + 'searchChangedVisits';
        return this.httpPostMethod(url, requestWrapper, this.apiTokenResolver()).then((r) => {
            let responseWrapper = r;
            if (responseWrapper.fault) {
                console.warn('Request to "' + url + '" faulted: ' + responseWrapper.fault);
                throw { message: responseWrapper.fault };
            }
            return { latestTimestampUtc: responseWrapper.latestTimestampUtc, createdRecords: responseWrapper.createdRecords, modifiedRecords: responseWrapper.modifiedRecords, archivedRecords: responseWrapper.archivedRecords };
        });
    }
    /**
     * GetCustomFieldDescriptorsForVisit
     */
    getCustomFieldDescriptorsForVisit(languagePref = 'EN') {
        let requestWrapper = {
            languagePref: languagePref
        };
        let url = this.getEndpointUrl() + 'getCustomFieldDescriptorsForVisit';
        return this.httpPostMethod(url, requestWrapper, this.apiTokenResolver()).then((r) => {
            let responseWrapper = r;
            if (responseWrapper.fault) {
                console.warn('Request to "' + url + '" faulted: ' + responseWrapper.fault);
                throw { message: responseWrapper.fault };
            }
            return responseWrapper.return;
        });
    }
    /**
     * Checks the existence of 'Visits' for a given list of visitUids
     */
    checkVisitExisitence(visitUids) {
        let requestWrapper = {
            visitUids: visitUids,
        };
        let url = this.getEndpointUrl() + 'checkVisitExisitence';
        return this.httpPostMethod(url, requestWrapper, this.apiTokenResolver()).then((r) => {
            let responseWrapper = r;
            if (responseWrapper.fault) {
                console.warn('Request to "' + url + '" faulted: ' + responseWrapper.fault);
                throw { message: responseWrapper.fault };
            }
            return { unavailableVisitUids: responseWrapper.unavailableVisitUids, availableVisitUids: responseWrapper.availableVisitUids };
        });
    }
    /**
     * loads the requested visits and returns lightweight json objects (without childs), which are optimized to be displayed as table (the most common UI use case). This models containig a combination of: essential fieds from the record, calculated fields (numbers of child records), custom fields (choosen by the service)
     */
    getVisitFields(visitUids) {
        let requestWrapper = {
            visitUids: visitUids,
        };
        let url = this.getEndpointUrl() + 'getVisitFields';
        return this.httpPostMethod(url, requestWrapper, this.apiTokenResolver()).then((r) => {
            let responseWrapper = r;
            if (responseWrapper.fault) {
                console.warn('Request to "' + url + '" faulted: ' + responseWrapper.fault);
                throw { message: responseWrapper.fault };
            }
            return { unavailableVisitUids: responseWrapper.unavailableVisitUids, result: responseWrapper.result };
        });
    }
    /**
     * exports full 'VisitStructures'
     */
    exportVisits(visitUids) {
        let requestWrapper = {
            visitUids: visitUids,
        };
        let url = this.getEndpointUrl() + 'exportVisits';
        return this.httpPostMethod(url, requestWrapper, this.apiTokenResolver()).then((r) => {
            let responseWrapper = r;
            if (responseWrapper.fault) {
                console.warn('Request to "' + url + '" faulted: ' + responseWrapper.fault);
                throw { message: responseWrapper.fault };
            }
            return { unavailableVisitUids: responseWrapper.unavailableVisitUids, result: responseWrapper.result };
        });
    }
}
exports.VisitConsumeClient = VisitConsumeClient;
/**
 * Provides an workflow-level API for interating with a 'VisitDataRepository' (VDR)
 */
class VisitHL7ExportClient {
    constructor(rootUrlResolver, apiTokenResolver, httpPostMethod) {
        this.rootUrlResolver = rootUrlResolver;
        this.apiTokenResolver = apiTokenResolver;
        this.httpPostMethod = httpPostMethod;
    }
    getEndpointUrl() {
        let rootUrl = this.rootUrlResolver();
        if (rootUrl.endsWith('/')) {
            return rootUrl + 'visitHL7Export/';
        }
        else {
            return rootUrl + '/visitHL7Export/';
        }
    }
    /**
     * Exports a structure containing HL7/FHIR-Ressources (JSON only) and the essential fields which are required to qualify a ORSCF record.
     */
    exportVisitFhirRessources(visitUid) {
        let requestWrapper = {
            visitUid: visitUid,
        };
        let url = this.getEndpointUrl() + 'exportVisitFhirRessources';
        return this.httpPostMethod(url, requestWrapper, this.apiTokenResolver()).then((r) => {
            let responseWrapper = r;
            if (responseWrapper.fault) {
                console.warn('Request to "' + url + '" faulted: ' + responseWrapper.fault);
                throw { message: responseWrapper.fault };
            }
            return { visitFhirRessources: responseWrapper.visitFhirRessources, return: responseWrapper.return };
        });
    }
}
exports.VisitHL7ExportClient = VisitHL7ExportClient;
/**
 * Provides an workflow-level API for interating with a 'VisitDataRepository' (VDR)
 */
class VisitHL7ImportClient {
    constructor(rootUrlResolver, apiTokenResolver, httpPostMethod) {
        this.rootUrlResolver = rootUrlResolver;
        this.apiTokenResolver = apiTokenResolver;
        this.httpPostMethod = httpPostMethod;
    }
    getEndpointUrl() {
        let rootUrl = this.rootUrlResolver();
        if (rootUrl.endsWith('/')) {
            return rootUrl + 'visitHL7Import/';
        }
        else {
            return rootUrl + '/visitHL7Import/';
        }
    }
    /**
     * Exports a structure containing HL7/FHIR-Ressources (JSON only) and the essential fields which are required to qualify a ORSCF record.
     */
    importVisitFhirRessources(visitFhirRessources) {
        let requestWrapper = {
            visitFhirRessources: visitFhirRessources,
        };
        let url = this.getEndpointUrl() + 'importVisitFhirRessources';
        return this.httpPostMethod(url, requestWrapper, this.apiTokenResolver()).then((r) => {
            let responseWrapper = r;
            if (responseWrapper.fault) {
                console.warn('Request to "' + url + '" faulted: ' + responseWrapper.fault);
                throw { message: responseWrapper.fault };
            }
            return { createdVisitUids: responseWrapper.createdVisitUids, updatedVisitUids: responseWrapper.updatedVisitUids };
        });
    }
}
exports.VisitHL7ImportClient = VisitHL7ImportClient;
/**
 * Provides an workflow-level API for interating with a 'VisitDataRepository' (VDR)
 */
class VisitSubmissionClient {
    constructor(rootUrlResolver, apiTokenResolver, httpPostMethod) {
        this.rootUrlResolver = rootUrlResolver;
        this.apiTokenResolver = apiTokenResolver;
        this.httpPostMethod = httpPostMethod;
    }
    getEndpointUrl() {
        let rootUrl = this.rootUrlResolver();
        if (rootUrl.endsWith('/')) {
            return rootUrl + 'visitSubmission/';
        }
        else {
            return rootUrl + '/visitSubmission/';
        }
    }
    /**
     * ArchiveVisits
     */
    archiveVisits(visitUids) {
        let requestWrapper = {
            visitUids: visitUids,
        };
        let url = this.getEndpointUrl() + 'archiveVisits';
        return this.httpPostMethod(url, requestWrapper, this.apiTokenResolver()).then((r) => {
            let responseWrapper = r;
            if (responseWrapper.fault) {
                console.warn('Request to "' + url + '" faulted: ' + responseWrapper.fault);
                throw { message: responseWrapper.fault };
            }
            return { archivedVisitUids: responseWrapper.archivedVisitUids };
        });
    }
    /**
     * UnarchiveVisits
     */
    unarchiveVisits(visitUids) {
        let requestWrapper = {
            visitUids: visitUids,
        };
        let url = this.getEndpointUrl() + 'unarchiveVisits';
        return this.httpPostMethod(url, requestWrapper, this.apiTokenResolver()).then((r) => {
            let responseWrapper = r;
            if (responseWrapper.fault) {
                console.warn('Request to "' + url + '" faulted: ' + responseWrapper.fault);
                throw { message: responseWrapper.fault };
            }
            return { unarchivedVisitUids: responseWrapper.unarchivedVisitUids };
        });
    }
    /**
     * ApplyVisitMutations
     */
    applyVisitMutations(mutationsByVisitUid) {
        let requestWrapper = {
            mutationsByVisitUid: mutationsByVisitUid,
        };
        let url = this.getEndpointUrl() + 'applyVisitMutations';
        return this.httpPostMethod(url, requestWrapper, this.apiTokenResolver()).then((r) => {
            let responseWrapper = r;
            if (responseWrapper.fault) {
                console.warn('Request to "' + url + '" faulted: ' + responseWrapper.fault);
                throw { message: responseWrapper.fault };
            }
            return { updatedVisitUids: responseWrapper.updatedVisitUids };
        });
    }
    /**
     * ApplyVisitBatchMutation
     */
    applyVisitBatchMutation(visitUids, mutation) {
        let requestWrapper = {
            visitUids: visitUids,
            mutation: mutation,
        };
        let url = this.getEndpointUrl() + 'applyVisitBatchMutation';
        return this.httpPostMethod(url, requestWrapper, this.apiTokenResolver()).then((r) => {
            let responseWrapper = r;
            if (responseWrapper.fault) {
                console.warn('Request to "' + url + '" faulted: ' + responseWrapper.fault);
                throw { message: responseWrapper.fault };
            }
            return { updatedVisitUids: responseWrapper.updatedVisitUids };
        });
    }
    /**
     * ImportVisits
     */
    importVisits(visits) {
        let requestWrapper = {
            visits: visits,
        };
        let url = this.getEndpointUrl() + 'importVisits';
        return this.httpPostMethod(url, requestWrapper, this.apiTokenResolver()).then((r) => {
            let responseWrapper = r;
            if (responseWrapper.fault) {
                console.warn('Request to "' + url + '" faulted: ' + responseWrapper.fault);
                throw { message: responseWrapper.fault };
            }
            return { createdVisitUids: responseWrapper.createdVisitUids, updatedVisitUids: responseWrapper.updatedVisitUids };
        });
    }
}
exports.VisitSubmissionClient = VisitSubmissionClient;
class VdrConnector {
    constructor(rootUrlResolver, apiTokenResolver, httpPostMethod) {
        this.rootUrlResolver = rootUrlResolver;
        this.apiTokenResolver = apiTokenResolver;
        this.httpPostMethod = httpPostMethod;
        if (this.httpPostMethod == null) {
            this.axiosHttpApi = axios_1.default.create({ baseURL: this.rootUrlResolver() });
            this.httpPostMethod = (url, requestObject, apiToken) => {
                if (!this.axiosHttpApi) {
                    this.axiosHttpApi = axios_1.default.create({ baseURL: this.rootUrlResolver() });
                }
                return this.axiosHttpApi.post(url, requestObject, {
                    headers: {
                        Authorization: apiToken
                    }
                });
            };
        }
        this.vdrApiInfoClient = new VdrApiInfoClient(this.rootUrlResolver, this.apiTokenResolver, this.httpPostMethod);
        this.vdrEventSubscriptionClient = new VdrEventSubscriptionClient(this.rootUrlResolver, this.apiTokenResolver, this.httpPostMethod);
        this.dataRecordingSubmissionClient = new DataRecordingSubmissionClient(this.rootUrlResolver, this.apiTokenResolver, this.httpPostMethod);
        this.visitConsumeClient = new VisitConsumeClient(this.rootUrlResolver, this.apiTokenResolver, this.httpPostMethod);
        this.visitHL7ExportClient = new VisitHL7ExportClient(this.rootUrlResolver, this.apiTokenResolver, this.httpPostMethod);
        this.visitHL7ImportClient = new VisitHL7ImportClient(this.rootUrlResolver, this.apiTokenResolver, this.httpPostMethod);
        this.visitSubmissionClient = new VisitSubmissionClient(this.rootUrlResolver, this.apiTokenResolver, this.httpPostMethod);
    }
    getRootUrl() {
        let rootUrl = this.rootUrlResolver();
        if (rootUrl.endsWith('/')) {
            return rootUrl;
        }
        else {
            return rootUrl + '/';
        }
    }
    /**
     * Provides interoperability information for the current implementation
     */
    get vdrApiInfo() { return this.vdrApiInfoClient; }
    /**
     * Provides an workflow-level API for interating with a 'VisitDataRepository' (VDR)
     */
    get vdrEventSubscription() { return this.vdrEventSubscriptionClient; }
    /**
     * Provides an workflow-level API for interating with a 'VisitDataRepository' (VDR)
     */
    get dataRecordingSubmission() { return this.dataRecordingSubmissionClient; }
    /**
     * Provides an workflow-level API for interating with a 'VisitDataRepository' (VDR)
     */
    get visitConsume() { return this.visitConsumeClient; }
    /**
     * Provides an workflow-level API for interating with a 'VisitDataRepository' (VDR)
     */
    get visitHL7Export() { return this.visitHL7ExportClient; }
    /**
     * Provides an workflow-level API for interating with a 'VisitDataRepository' (VDR)
     */
    get visitHL7Import() { return this.visitHL7ImportClient; }
    /**
     * Provides an workflow-level API for interating with a 'VisitDataRepository' (VDR)
     */
    get visitSubmission() { return this.visitSubmissionClient; }
}
exports.VdrConnector = VdrConnector;
//# sourceMappingURL=connector.js.map