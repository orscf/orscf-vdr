import * as Models from './models';
/**
 * Contains arguments for calling 'GetApiVersion'.
 * Method: returns the version of the ORSCF specification which is implemented by this API,
 * (this can be used for backward compatibility within inhomogeneous infrastructures)
 */
export declare class GetApiVersionRequest {
}
/**
 * Contains results from calling 'GetApiVersion'.
 * Method: returns the version of the ORSCF specification which is implemented by this API,
 * (this can be used for backward compatibility within inhomogeneous infrastructures)
 */
export declare class GetApiVersionResponse {
    fault?: string;
    return: string;
}
/**
 * Contains arguments for calling 'GetCapabilities'.
 * Method: returns a list of API-features (there are several 'services' for different use cases, described by ORSCF)
 * supported by this implementation. The following values are possible:
 * 'VdrEventSubscription',
 * 'VisitConsume',
 * 'VisitSubmission',
 * 'VisitHL7Export',
 * 'VisitHL7Import',
 * 'DataRecordingSubmission'
 */
export declare class GetCapabilitiesRequest {
}
/**
 * Contains results from calling 'GetCapabilities'.
 * Method: returns a list of API-features (there are several 'services' for different use cases, described by ORSCF)
 * supported by this implementation. The following values are possible:
 * 'VdrEventSubscription',
 * 'VisitConsume',
 * 'VisitSubmission',
 * 'VisitHL7Export',
 * 'VisitHL7Import',
 * 'DataRecordingSubmission'
 */
export declare class GetCapabilitiesResponse {
    fault?: string;
    return: string[];
}
/**
 * Contains arguments for calling 'GetPermittedAuthScopes'.
 * Method: returns a list of available capabilities ("API:VisitDataConsume") and/or
 * data-scopes ("Study:9B2C3F48-2941-2F8F-4D35-7D117D5C6F72")
 * which are permitted for the CURRENT ACCESSOR and gives information about its 'authState', which can be:
 * 0=auth needed /
 * 1=authenticated /
 * -1=auth expired /
 * -2=auth invalid/disabled
 */
export declare class GetPermittedAuthScopesRequest {
}
/**
 * Contains results from calling 'GetPermittedAuthScopes'.
 * Method: returns a list of available capabilities ("API:VisitDataConsume") and/or
 * data-scopes ("Study:9B2C3F48-2941-2F8F-4D35-7D117D5C6F72")
 * which are permitted for the CURRENT ACCESSOR and gives information about its 'authState', which can be:
 * 0=auth needed /
 * 1=authenticated /
 * -1=auth expired /
 * -2=auth invalid/disabled
 */
export declare class GetPermittedAuthScopesResponse {
    authState: number;
    fault?: string;
    return: string[];
}
/**
 * Contains arguments for calling 'GetOAuthTokenRequestUrl'.
 * Method: OPTIONAL: If the authentication on the current service is mapped
 * using tokens and should provide information about the source at this point,
 * the login URL to be called up via browser (OAuth ['CIBA-Flow'](https://openid.net/specs/openid-client-initiated-backchannel-authentication-core-1_0.html)) is returned here.
 */
export declare class GetOAuthTokenRequestUrlRequest {
}
/**
 * Contains results from calling 'GetOAuthTokenRequestUrl'.
 * Method: OPTIONAL: If the authentication on the current service is mapped
 * using tokens and should provide information about the source at this point,
 * the login URL to be called up via browser (OAuth ['CIBA-Flow'](https://openid.net/specs/openid-client-initiated-backchannel-authentication-core-1_0.html)) is returned here.
 */
export declare class GetOAuthTokenRequestUrlResponse {
    fault?: string;
    return: string;
}
/**
 * Contains arguments for calling 'SubscribeForChangedVisits'.
 * Method: Creates a subscription for changes which are affecting Visits.
 * On success, a 'SubscriptionUid' will be returned and a call will be made to the given
 * subscriberUrl + '/ConfirmAsSubscriber'. After the subscription
 * has been confirmed, the requested events will be pushed to
 * subscriberUrl + '/NoticeChangedVisits'
 * (NOTICE: the receiving methods also are documented here, because this service itself can act as subscriber)
 */
export declare class SubscribeForChangedVisitsRequest {
    subscriberUrl: string;
    filter?: Models.VisitFilter;
}
/**
 * Contains results from calling 'SubscribeForChangedVisits'.
 * Method: Creates a subscription for changes which are affecting Visits.
 * On success, a 'SubscriptionUid' will be returned and a call will be made to the given
 * subscriberUrl + '/ConfirmAsSubscriber'. After the subscription
 * has been confirmed, the requested events will be pushed to
 * subscriberUrl + '/NoticeChangedVisits'
 * (NOTICE: the receiving methods also are documented here, because this service itself can act as subscriber)
 */
export declare class SubscribeForChangedVisitsResponse {
    fault?: string;
    return: string;
}
/**
 * Contains arguments for calling 'NoticeChangedVisits'.
 * Method: Receives notifications about changes which are affecting Visits.
 * IMPORTANT: this method is dedicated to the usecase, when this service itself acts as a subscriber!
 * So this can be called by an foreign service during the setup of a subscription, which was previously
 * requested from here.
 * The opposite case: any client subscribing to events from here,
 * must provide its own http endpoint that has such a method!
 */
export declare class NoticeChangedVisitsRequest {
    eventUid: string;
    eventSignature: string;
    subscriptionUid: string;
    publisherUrl: string;
    createdRecords: Models.VisitMetaRecord[];
    modifiedRecords: Models.VisitMetaRecord[];
    archivedRecords: Models.VisitMetaRecord[];
}
/**
 * Contains results from calling 'NoticeChangedVisits'.
 * Method: Receives notifications about changes which are affecting Visits.
 * IMPORTANT: this method is dedicated to the usecase, when this service itself acts as a subscriber!
 * So this can be called by an foreign service during the setup of a subscription, which was previously
 * requested from here.
 * The opposite case: any client subscribing to events from here,
 * must provide its own http endpoint that has such a method!
 */
export declare class NoticeChangedVisitsResponse {
    terminateSubscription: boolean;
    fault?: string;
}
/**
 * Contains arguments for calling 'ConfirmAsSubscriber'.
 * Method: Confirms a Subscription.
 * IMPORTANT: this method is dedicated to the usecase, when this service itself acts as a subscriber!
 * So this can be called by an foreign service during the setup of a subscription, which was previously
 * requested from here.
 * The opposite case: any client subscribing to events from here,
 * must provide its own http endpoint that has such a method!
 */
export declare class ConfirmAsSubscriberRequest {
    publisherUrl: string;
    subscriptionUid: string;
}
/**
 * Contains results from calling 'ConfirmAsSubscriber'.
 * Method: Confirms a Subscription.
 * IMPORTANT: this method is dedicated to the usecase, when this service itself acts as a subscriber!
 * So this can be called by an foreign service during the setup of a subscription, which was previously
 * requested from here.
 * The opposite case: any client subscribing to events from here,
 * must provide its own http endpoint that has such a method!
 */
export declare class ConfirmAsSubscriberResponse {
    secret: string;
    fault?: string;
}
/**
 * Contains arguments for calling 'TerminateSubscription'.
 * Method: Terminates a subscription (on publisher side) and returns a boolean,
 * which indicates success.
 */
export declare class TerminateSubscriptionRequest {
    subscriptionUid: string;
    secret: string;
}
/**
 * Contains results from calling 'TerminateSubscription'.
 * Method: Terminates a subscription (on publisher side) and returns a boolean,
 * which indicates success.
 */
export declare class TerminateSubscriptionResponse {
    fault?: string;
    return: boolean;
}
/**
 * Contains arguments for calling 'GetSubsriptionsBySubscriberUrl'.
 * Method: Returns an array of subscriptionUid's.
 * This method helps subscribers to evaluate whether current subscriptions are still active.
 */
export declare class GetSubsriptionsBySubscriberUrlRequest {
    subscriberUrl: string;
    secret: string;
}
/**
 * Contains results from calling 'GetSubsriptionsBySubscriberUrl'.
 * Method: Returns an array of subscriptionUid's.
 * This method helps subscribers to evaluate whether current subscriptions are still active.
 */
export declare class GetSubsriptionsBySubscriberUrlResponse {
    fault?: string;
    return: string[];
}
/**
 * Contains arguments for calling 'ImportDataRecordings'.
 */
export declare class ImportDataRecordingsRequest {
    dataRecordings: Models.DataRecordingStructure[];
}
/**
 * Contains results from calling 'ImportDataRecordings'.
 */
export declare class ImportDataRecordingsResponse {
    createdDataRecordingUids: string[];
    updatedDataRecordingUids: string[];
    fault?: string;
}
/**
 * Contains arguments for calling 'SearchVisits'.
 * Method: Searches Visits by a given 'filter' (if provided),
 * sorts the results by the given 'sortingField' (if provided) and
 * returns an array of VisitUids for the matching records.
 */
export declare class SearchVisitsRequest {
    sortingField?: string;
    sortDescending?: boolean;
    filter?: Models.VisitFilter;
    includeArchivedRecords?: boolean;
    limitResults?: number;
}
/**
 * Contains results from calling 'SearchVisits'.
 * Method: Searches Visits by a given 'filter' (if provided),
 * sorts the results by the given 'sortingField' (if provided) and
 * returns an array of VisitUids for the matching records.
 */
export declare class SearchVisitsResponse {
    result: Models.VisitMetaRecord[];
    fault?: string;
}
/**
 * Contains arguments for calling 'SearchChangedVisits'.
 * Method: Searches Visits which have been modified after(or at) the given 'minTimestampUtc',
 * matching to the given 'filter' (if provided).
 * The result is sorted descenting by the timestamp of the modification (latest first) and will
 * include archived records.
 */
export declare class SearchChangedVisitsRequest {
    minTimestampUtc: number;
    filter?: Models.VisitFilter;
}
/**
 * Contains results from calling 'SearchChangedVisits'.
 * Method: Searches Visits which have been modified after(or at) the given 'minTimestampUtc',
 * matching to the given 'filter' (if provided).
 * The result is sorted descenting by the timestamp of the modification (latest first) and will
 * include archived records.
 */
export declare class SearchChangedVisitsResponse {
    latestTimestampUtc: number;
    createdRecords: Models.VisitMetaRecord[];
    modifiedRecords: Models.VisitMetaRecord[];
    archivedRecords: Models.VisitMetaRecord[];
    fault?: string;
}
/**
 * Contains arguments for calling 'GetCustomFieldDescriptorsForVisit'.
 */
export declare class GetCustomFieldDescriptorsForVisitRequest {
    languagePref?: string;
}
/**
 * Contains results from calling 'GetCustomFieldDescriptorsForVisit'.
 */
export declare class GetCustomFieldDescriptorsForVisitResponse {
    fault?: string;
    return: Models.CustomFieldDescriptor[];
}
/**
 * Contains arguments for calling 'CheckVisitExisitence'.
 * Method: Checks the existence of 'Visits' for a given list of visitUids
 */
export declare class CheckVisitExisitenceRequest {
    visitUids: string[];
}
/**
 * Contains results from calling 'CheckVisitExisitence'.
 * Method: Checks the existence of 'Visits' for a given list of visitUids
 */
export declare class CheckVisitExisitenceResponse {
    unavailableVisitUids: string[];
    availableVisitUids: string[];
    fault?: string;
}
/**
 * Contains arguments for calling 'GetVisitFields'.
 * Method: loads the requested visits and returns lightweight json objects (without childs),
 * which are optimized to be displayed as table (the most common UI use case).
 * This models containig a combination of:
 * essential fieds from the record,
 * calculated fields (numbers of child records),
 * custom fields (choosen by the service)
 */
export declare class GetVisitFieldsRequest {
    visitUids: string[];
}
/**
 * Contains results from calling 'GetVisitFields'.
 * Method: loads the requested visits and returns lightweight json objects (without childs),
 * which are optimized to be displayed as table (the most common UI use case).
 * This models containig a combination of:
 * essential fieds from the record,
 * calculated fields (numbers of child records),
 * custom fields (choosen by the service)
 */
export declare class GetVisitFieldsResponse {
    unavailableVisitUids: string[];
    result: Models.VisitFields[];
    fault?: string;
}
/**
 * Contains arguments for calling 'ExportVisits'.
 * Method: exports full 'VisitStructures'
 */
export declare class ExportVisitsRequest {
    visitUids: string[];
}
/**
 * Contains results from calling 'ExportVisits'.
 * Method: exports full 'VisitStructures'
 */
export declare class ExportVisitsResponse {
    unavailableVisitUids: string[];
    result: Models.VisitStructure[];
    fault?: string;
}
/**
 * Contains arguments for calling 'ExportVisitFhirRessources'.
 * Method: Exports a structure containing HL7/FHIR-Ressources (JSON only) and
 * the essential fields which are required to qualify a ORSCF record.
 */
export declare class ExportVisitFhirRessourcesRequest {
    visitUid: string;
}
/**
 * Contains results from calling 'ExportVisitFhirRessources'.
 * Method: Exports a structure containing HL7/FHIR-Ressources (JSON only) and
 * the essential fields which are required to qualify a ORSCF record.
 */
export declare class ExportVisitFhirRessourcesResponse {
    visitFhirRessources: Models.VisitFhirRessourceContainer[];
    fault?: string;
    return: boolean;
}
/**
 * Contains arguments for calling 'ImportVisitFhirRessources'.
 * Method: Exports a structure containing HL7/FHIR-Ressources (JSON only) and
 * the essential fields which are required to qualify a ORSCF record.
 */
export declare class ImportVisitFhirRessourcesRequest {
    visitFhirRessources: Models.VisitFhirRessourceContainer[];
}
/**
 * Contains results from calling 'ImportVisitFhirRessources'.
 * Method: Exports a structure containing HL7/FHIR-Ressources (JSON only) and
 * the essential fields which are required to qualify a ORSCF record.
 */
export declare class ImportVisitFhirRessourcesResponse {
    createdVisitUids: string[];
    updatedVisitUids: string[];
    fault?: string;
}
/**
 * Contains arguments for calling 'ArchiveVisits'.
 */
export declare class ArchiveVisitsRequest {
    visitUids: string[];
}
/**
 * Contains results from calling 'ArchiveVisits'.
 */
export declare class ArchiveVisitsResponse {
    archivedVisitUids: string[];
    fault?: string;
}
/**
 * Contains arguments for calling 'UnarchiveVisits'.
 */
export declare class UnarchiveVisitsRequest {
    visitUids: string[];
}
/**
 * Contains results from calling 'UnarchiveVisits'.
 */
export declare class UnarchiveVisitsResponse {
    unarchivedVisitUids: string[];
    fault?: string;
}
/**
 * Contains arguments for calling 'ApplyVisitMutations'.
 */
export declare class ApplyVisitMutationsRequest {
    mutationsByVisitUid: Object;
}
/**
 * Contains results from calling 'ApplyVisitMutations'.
 */
export declare class ApplyVisitMutationsResponse {
    updatedVisitUids: string[];
    fault?: string;
}
/**
 * Contains arguments for calling 'ApplyVisitBatchMutation'.
 */
export declare class ApplyVisitBatchMutationRequest {
    visitUids: string[];
    mutation: Models.BatchableVisitMutation;
}
/**
 * Contains results from calling 'ApplyVisitBatchMutation'.
 */
export declare class ApplyVisitBatchMutationResponse {
    updatedVisitUids: string[];
    fault?: string;
}
/**
 * Contains arguments for calling 'ImportVisits'.
 */
export declare class ImportVisitsRequest {
    visits: Models.VisitStructure[];
}
/**
 * Contains results from calling 'ImportVisits'.
 */
export declare class ImportVisitsResponse {
    createdVisitUids: string[];
    updatedVisitUids: string[];
    fault?: string;
}
//# sourceMappingURL=dtos.d.ts.map