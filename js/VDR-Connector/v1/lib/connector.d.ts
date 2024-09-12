import * as Models from 'orscf-visitdata-contract/models';
/**
 * Provides interoperability information for the current implementation
 */
export declare class VdrApiInfoClient {
    private rootUrlResolver;
    private apiTokenResolver;
    private httpPostMethod;
    constructor(rootUrlResolver: () => string, apiTokenResolver: () => string, httpPostMethod: (url: string, requestObject: any, apiToken: string) => Promise<any>);
    private getEndpointUrl;
    /**
     * returns the version of the ORSCF specification which is implemented by this API, (this can be used for backward compatibility within inhomogeneous infrastructures)
     */
    getApiVersion(): Promise<string>;
    /**
     * returns a list of API-features (there are several 'services' for different use cases, described by ORSCF) supported by this implementation. The following values are possible: 'VdrEventSubscription', 'VisitConsume', 'VisitSubmission', 'VisitHL7Export', 'VisitHL7Import', 'DataRecordingSubmission'
     */
    getCapabilities(): Promise<string[]>;
    /**
     * returns a list of available capabilities ("API:VisitDataConsume") and/or data-scopes ("Study:9B2C3F48-2941-2F8F-4D35-7D117D5C6F72") which are permitted for the CURRENT ACCESSOR and gives information about its 'authState', which can be: 0=auth needed / 1=authenticated / -1=auth expired / -2=auth invalid/disabled
     */
    getPermittedAuthScopes(): Promise<{
        authState: number;
        return: string[];
    }>;
    /**
     * OPTIONAL: If the authentication on the current service is mapped using tokens and should provide information about the source at this point, the login URL to be called up via browser (OAuth ['CIBA-Flow'](https://openid.net/specs/openid-client-initiated-backchannel-authentication-core-1_0.html)) is returned here.
     */
    getOAuthTokenRequestUrl(): Promise<string>;
}
/**
 * Provides an workflow-level API for interating with a 'VisitDataRepository' (VDR)
 */
export declare class VdrEventSubscriptionClient {
    private rootUrlResolver;
    private apiTokenResolver;
    private httpPostMethod;
    constructor(rootUrlResolver: () => string, apiTokenResolver: () => string, httpPostMethod: (url: string, requestObject: any, apiToken: string) => Promise<any>);
    private getEndpointUrl;
    /**
     * Creates a subscription for changes which are affecting Visits. On success, a 'SubscriptionUid' will be returned and a call will be made to the given subscriberUrl + '/ConfirmAsSubscriber'. After the subscription has been confirmed, the requested events will be pushed to subscriberUrl + '/NoticeChangedVisits' (NOTICE: the receiving methods also are documented here, because this service itself can act as subscriber)
     */
    subscribeForChangedVisits(subscriberUrl: string, filter: Models.VisitFilter): Promise<string>;
    /**
     * Receives notifications about changes which are affecting Visits. IMPORTANT: this method is dedicated to the usecase, when this service itself acts as a subscriber! So this can be called by an foreign service during the setup of a subscription, which was previously requested from here. The opposite case: any client subscribing to events from here, must provide its own http endpoint that has such a method!
     */
    noticeChangedVisits(eventUid: string, eventSignature: string, subscriptionUid: string, publisherUrl: string, createdRecords: Models.VisitMetaRecord[], modifiedRecords: Models.VisitMetaRecord[], archivedRecords: Models.VisitMetaRecord[]): Promise<{
        terminateSubscription: boolean;
    }>;
    /**
     * Confirms a Subscription. IMPORTANT: this method is dedicated to the usecase, when this service itself acts as a subscriber! So this can be called by an foreign service during the setup of a subscription, which was previously requested from here. The opposite case: any client subscribing to events from here, must provide its own http endpoint that has such a method!
     */
    confirmAsSubscriber(publisherUrl: string, subscriptionUid: string): Promise<{
        secret: string;
    }>;
    /**
     * Terminates a subscription (on publisher side) and returns a boolean, which indicates success.
     */
    terminateSubscription(subscriptionUid: string, secret: string): Promise<boolean>;
    /**
     * Returns an array of subscriptionUid's. This method helps subscribers to evaluate whether current subscriptions are still active.
     */
    getSubsriptionsBySubscriberUrl(subscriberUrl: string, secret: string): Promise<string[]>;
}
/**
 * Provides an workflow-level API for interating with a 'VisitDataRepository' (VDR)
 */
export declare class DataRecordingSubmissionClient {
    private rootUrlResolver;
    private apiTokenResolver;
    private httpPostMethod;
    constructor(rootUrlResolver: () => string, apiTokenResolver: () => string, httpPostMethod: (url: string, requestObject: any, apiToken: string) => Promise<any>);
    private getEndpointUrl;
    /**
     * ImportDataRecordings
     */
    importDataRecordings(dataRecordings: Models.DataRecordingStructure[]): Promise<{
        createdDataRecordingUids: string[];
        updatedDataRecordingUids: string[];
    }>;
}
/**
 * Provides an workflow-level API for interating with a 'VisitDataRepository' (VDR)
 */
export declare class VisitConsumeClient {
    private rootUrlResolver;
    private apiTokenResolver;
    private httpPostMethod;
    constructor(rootUrlResolver: () => string, apiTokenResolver: () => string, httpPostMethod: (url: string, requestObject: any, apiToken: string) => Promise<any>);
    private getEndpointUrl;
    /**
     * Searches Visits by a given 'filter' (if provided), sorts the results by the given 'sortingField' (if provided) and returns an array of VisitUids for the matching records.
     */
    searchVisits(sortingField: string, sortDescending: boolean | undefined, filter: Models.VisitFilter, includeArchivedRecords?: boolean, limitResults?: number): Promise<{
        result: Models.VisitMetaRecord[];
    }>;
    /**
     * Searches Visits which have been modified after(or at) the given 'minTimestampUtc', matching to the given 'filter' (if provided). The result is sorted descenting by the timestamp of the modification (latest first) and will include archived records.
     */
    searchChangedVisits(minTimestampUtc: number, filter: Models.VisitFilter): Promise<{
        latestTimestampUtc: number;
        createdRecords: Models.VisitMetaRecord[];
        modifiedRecords: Models.VisitMetaRecord[];
        archivedRecords: Models.VisitMetaRecord[];
    }>;
    /**
     * GetCustomFieldDescriptorsForVisit
     */
    getCustomFieldDescriptorsForVisit(languagePref?: string): Promise<Models.CustomFieldDescriptor[]>;
    /**
     * Checks the existence of 'Visits' for a given list of visitUids
     */
    checkVisitExisitence(visitUids: string[]): Promise<{
        unavailableVisitUids: string[];
        availableVisitUids: string[];
    }>;
    /**
     * loads the requested visits and returns lightweight json objects (without childs), which are optimized to be displayed as table (the most common UI use case). This models containig a combination of: essential fieds from the record, calculated fields (numbers of child records), custom fields (choosen by the service)
     */
    getVisitFields(visitUids: string[]): Promise<{
        unavailableVisitUids: string[];
        result: Models.VisitFields[];
    }>;
    /**
     * exports full 'VisitStructures'
     */
    exportVisits(visitUids: string[]): Promise<{
        unavailableVisitUids: string[];
        result: Models.VisitStructure[];
    }>;
}
/**
 * Provides an workflow-level API for interating with a 'VisitDataRepository' (VDR)
 */
export declare class VisitHL7ExportClient {
    private rootUrlResolver;
    private apiTokenResolver;
    private httpPostMethod;
    constructor(rootUrlResolver: () => string, apiTokenResolver: () => string, httpPostMethod: (url: string, requestObject: any, apiToken: string) => Promise<any>);
    private getEndpointUrl;
    /**
     * Exports a structure containing HL7/FHIR-Ressources (JSON only) and the essential fields which are required to qualify a ORSCF record.
     */
    exportVisitFhirRessources(visitUid: string): Promise<{
        visitFhirRessources: Models.VisitFhirRessourceContainer[];
        return: boolean;
    }>;
}
/**
 * Provides an workflow-level API for interating with a 'VisitDataRepository' (VDR)
 */
export declare class VisitHL7ImportClient {
    private rootUrlResolver;
    private apiTokenResolver;
    private httpPostMethod;
    constructor(rootUrlResolver: () => string, apiTokenResolver: () => string, httpPostMethod: (url: string, requestObject: any, apiToken: string) => Promise<any>);
    private getEndpointUrl;
    /**
     * Exports a structure containing HL7/FHIR-Ressources (JSON only) and the essential fields which are required to qualify a ORSCF record.
     */
    importVisitFhirRessources(visitFhirRessources: Models.VisitFhirRessourceContainer[]): Promise<{
        createdVisitUids: string[];
        updatedVisitUids: string[];
    }>;
}
/**
 * Provides an workflow-level API for interating with a 'VisitDataRepository' (VDR)
 */
export declare class VisitSubmissionClient {
    private rootUrlResolver;
    private apiTokenResolver;
    private httpPostMethod;
    constructor(rootUrlResolver: () => string, apiTokenResolver: () => string, httpPostMethod: (url: string, requestObject: any, apiToken: string) => Promise<any>);
    private getEndpointUrl;
    /**
     * ArchiveVisits
     */
    archiveVisits(visitUids: string[]): Promise<{
        archivedVisitUids: string[];
    }>;
    /**
     * UnarchiveVisits
     */
    unarchiveVisits(visitUids: string[]): Promise<{
        unarchivedVisitUids: string[];
    }>;
    /**
     * ApplyVisitMutations
     */
    applyVisitMutations(mutationsByVisitUid: Object): Promise<{
        updatedVisitUids: string[];
    }>;
    /**
     * ApplyVisitBatchMutation
     */
    applyVisitBatchMutation(visitUids: string[], mutation: Models.BatchableVisitMutation): Promise<{
        updatedVisitUids: string[];
    }>;
    /**
     * ImportVisits
     */
    importVisits(visits: Models.VisitStructure[]): Promise<{
        createdVisitUids: string[];
        updatedVisitUids: string[];
    }>;
}
export declare class VdrConnector {
    private rootUrlResolver;
    private apiTokenResolver;
    private httpPostMethod;
    private vdrApiInfoClient;
    private vdrEventSubscriptionClient;
    private dataRecordingSubmissionClient;
    private visitConsumeClient;
    private visitHL7ExportClient;
    private visitHL7ImportClient;
    private visitSubmissionClient;
    private axiosHttpApi?;
    constructor(rootUrlResolver: () => string, apiTokenResolver: () => string, httpPostMethod: (url: string, requestObject: any, apiToken: string) => Promise<any>);
    private getRootUrl;
    /**
     * Provides interoperability information for the current implementation
     */
    get vdrApiInfo(): VdrApiInfoClient;
    /**
     * Provides an workflow-level API for interating with a 'VisitDataRepository' (VDR)
     */
    get vdrEventSubscription(): VdrEventSubscriptionClient;
    /**
     * Provides an workflow-level API for interating with a 'VisitDataRepository' (VDR)
     */
    get dataRecordingSubmission(): DataRecordingSubmissionClient;
    /**
     * Provides an workflow-level API for interating with a 'VisitDataRepository' (VDR)
     */
    get visitConsume(): VisitConsumeClient;
    /**
     * Provides an workflow-level API for interating with a 'VisitDataRepository' (VDR)
     */
    get visitHL7Export(): VisitHL7ExportClient;
    /**
     * Provides an workflow-level API for interating with a 'VisitDataRepository' (VDR)
     */
    get visitHL7Import(): VisitHL7ImportClient;
    /**
     * Provides an workflow-level API for interating with a 'VisitDataRepository' (VDR)
     */
    get visitSubmission(): VisitSubmissionClient;
}
//# sourceMappingURL=connector.d.ts.map