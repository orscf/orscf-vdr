"use strict";
/* based on ORSCF VisitData Contract v1.7.0.0 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImportVisitsResponse = exports.ImportVisitsRequest = exports.ApplyVisitBatchMutationResponse = exports.ApplyVisitBatchMutationRequest = exports.ApplyVisitMutationsResponse = exports.ApplyVisitMutationsRequest = exports.UnarchiveVisitsResponse = exports.UnarchiveVisitsRequest = exports.ArchiveVisitsResponse = exports.ArchiveVisitsRequest = exports.ImportVisitFhirRessourcesResponse = exports.ImportVisitFhirRessourcesRequest = exports.ExportVisitFhirRessourcesResponse = exports.ExportVisitFhirRessourcesRequest = exports.ExportVisitsResponse = exports.ExportVisitsRequest = exports.GetVisitFieldsResponse = exports.GetVisitFieldsRequest = exports.CheckVisitExisitenceResponse = exports.CheckVisitExisitenceRequest = exports.GetCustomFieldDescriptorsForVisitResponse = exports.GetCustomFieldDescriptorsForVisitRequest = exports.SearchChangedVisitsResponse = exports.SearchChangedVisitsRequest = exports.SearchVisitsResponse = exports.SearchVisitsRequest = exports.ImportDataRecordingsResponse = exports.ImportDataRecordingsRequest = exports.GetSubsriptionsBySubscriberUrlResponse = exports.GetSubsriptionsBySubscriberUrlRequest = exports.TerminateSubscriptionResponse = exports.TerminateSubscriptionRequest = exports.ConfirmAsSubscriberResponse = exports.ConfirmAsSubscriberRequest = exports.NoticeChangedVisitsResponse = exports.NoticeChangedVisitsRequest = exports.SubscribeForChangedVisitsResponse = exports.SubscribeForChangedVisitsRequest = exports.GetOAuthTokenRequestUrlResponse = exports.GetOAuthTokenRequestUrlRequest = exports.GetPermittedAuthScopesResponse = exports.GetPermittedAuthScopesRequest = exports.GetCapabilitiesResponse = exports.GetCapabilitiesRequest = exports.GetApiVersionResponse = exports.GetApiVersionRequest = void 0;
var Models = require("./models");
/**
 * Contains arguments for calling 'GetApiVersion'.
 * Method: returns the version of the ORSCF specification which is implemented by this API,
 * (this can be used for backward compatibility within inhomogeneous infrastructures)
 */
var GetApiVersionRequest = /** @class */ (function () {
    function GetApiVersionRequest() {
    }
    return GetApiVersionRequest;
}());
exports.GetApiVersionRequest = GetApiVersionRequest;
/**
 * Contains results from calling 'GetApiVersion'.
 * Method: returns the version of the ORSCF specification which is implemented by this API,
 * (this can be used for backward compatibility within inhomogeneous infrastructures)
 */
var GetApiVersionResponse = /** @class */ (function () {
    function GetApiVersionResponse() {
        // Return-Value of 'GetApiVersion' (String)
        this.return = '';
    }
    return GetApiVersionResponse;
}());
exports.GetApiVersionResponse = GetApiVersionResponse;
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
var GetCapabilitiesRequest = /** @class */ (function () {
    function GetCapabilitiesRequest() {
    }
    return GetCapabilitiesRequest;
}());
exports.GetCapabilitiesRequest = GetCapabilitiesRequest;
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
var GetCapabilitiesResponse = /** @class */ (function () {
    function GetCapabilitiesResponse() {
        // Return-Value of 'GetCapabilities' (String[])
        this.return = [];
    }
    return GetCapabilitiesResponse;
}());
exports.GetCapabilitiesResponse = GetCapabilitiesResponse;
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
var GetPermittedAuthScopesRequest = /** @class */ (function () {
    function GetPermittedAuthScopesRequest() {
    }
    return GetPermittedAuthScopesRequest;
}());
exports.GetPermittedAuthScopesRequest = GetPermittedAuthScopesRequest;
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
var GetPermittedAuthScopesResponse = /** @class */ (function () {
    function GetPermittedAuthScopesResponse() {
        // Out-Argument of 'GetPermittedAuthScopes' (number)
        this.authState = 0;
        // Return-Value of 'GetPermittedAuthScopes' (String[])
        this.return = [];
    }
    return GetPermittedAuthScopesResponse;
}());
exports.GetPermittedAuthScopesResponse = GetPermittedAuthScopesResponse;
/**
 * Contains arguments for calling 'GetOAuthTokenRequestUrl'.
 * Method: OPTIONAL: If the authentication on the current service is mapped
 * using tokens and should provide information about the source at this point,
 * the login URL to be called up via browser (OAuth ['CIBA-Flow'](https://openid.net/specs/openid-client-initiated-backchannel-authentication-core-1_0.html)) is returned here.
 */
var GetOAuthTokenRequestUrlRequest = /** @class */ (function () {
    function GetOAuthTokenRequestUrlRequest() {
    }
    return GetOAuthTokenRequestUrlRequest;
}());
exports.GetOAuthTokenRequestUrlRequest = GetOAuthTokenRequestUrlRequest;
/**
 * Contains results from calling 'GetOAuthTokenRequestUrl'.
 * Method: OPTIONAL: If the authentication on the current service is mapped
 * using tokens and should provide information about the source at this point,
 * the login URL to be called up via browser (OAuth ['CIBA-Flow'](https://openid.net/specs/openid-client-initiated-backchannel-authentication-core-1_0.html)) is returned here.
 */
var GetOAuthTokenRequestUrlResponse = /** @class */ (function () {
    function GetOAuthTokenRequestUrlResponse() {
        // Return-Value of 'GetOAuthTokenRequestUrl' (String)
        this.return = '';
    }
    return GetOAuthTokenRequestUrlResponse;
}());
exports.GetOAuthTokenRequestUrlResponse = GetOAuthTokenRequestUrlResponse;
/**
 * Contains arguments for calling 'SubscribeForChangedVisits'.
 * Method: Creates a subscription for changes which are affecting Visits.
 * On success, a 'SubscriptionUid' will be returned and a call will be made to the given
 * subscriberUrl + '/ConfirmAsSubscriber'. After the subscription
 * has been confirmed, the requested events will be pushed to
 * subscriberUrl + '/NoticeChangedVisits'
 * (NOTICE: the receiving methods also are documented here, because this service itself can act as subscriber)
 */
var SubscribeForChangedVisitsRequest = /** @class */ (function () {
    function SubscribeForChangedVisitsRequest() {
        // Required Argument for 'SubscribeForChangedVisits' (string): the root-url of the subscriber which needs to provide at least the methods '/ConfirmAsSubscriber' and '/NoticeChangedVisits'
        this.subscriberUrl = '';
    }
    return SubscribeForChangedVisitsRequest;
}());
exports.SubscribeForChangedVisitsRequest = SubscribeForChangedVisitsRequest;
/**
 * Contains results from calling 'SubscribeForChangedVisits'.
 * Method: Creates a subscription for changes which are affecting Visits.
 * On success, a 'SubscriptionUid' will be returned and a call will be made to the given
 * subscriberUrl + '/ConfirmAsSubscriber'. After the subscription
 * has been confirmed, the requested events will be pushed to
 * subscriberUrl + '/NoticeChangedVisits'
 * (NOTICE: the receiving methods also are documented here, because this service itself can act as subscriber)
 */
var SubscribeForChangedVisitsResponse = /** @class */ (function () {
    function SubscribeForChangedVisitsResponse() {
        // Return-Value of 'SubscribeForChangedVisits' (Guid)
        this.return = '';
    }
    return SubscribeForChangedVisitsResponse;
}());
exports.SubscribeForChangedVisitsResponse = SubscribeForChangedVisitsResponse;
/**
 * Contains arguments for calling 'NoticeChangedVisits'.
 * Method: Receives notifications about changes which are affecting Visits.
 * IMPORTANT: this method is dedicated to the usecase, when this service itself acts as a subscriber!
 * So this can be called by an foreign service during the setup of a subscription, which was previously
 * requested from here.
 * The opposite case: any client subscribing to events from here,
 * must provide its own http endpoint that has such a method!
 */
var NoticeChangedVisitsRequest = /** @class */ (function () {
    function NoticeChangedVisitsRequest() {
        // Required Argument for 'NoticeChangedVisits' (string): a UUID which identifies the current event message
        this.eventUid = '';
        // Required Argument for 'NoticeChangedVisits' (string): a SHA256 Hash of SubscriptionSecret + EventUid (in lower string representation, without '-' characters!) Sample: SHA256('ThEs3Cr3T'+'c997dfb1c445fea84afe995307713b59') = 'a320ef5b0f563e8dcb16d759961739977afc98b90628d9dc3be519fb20701490'
        this.eventSignature = '';
        // Required Argument for 'NoticeChangedVisits' (string): a UUID which identifies the subscription for which this event is published
        this.subscriptionUid = '';
        // Required Argument for 'NoticeChangedVisits' (string): root-URL of the VDR-Service which is publishing this event
        this.publisherUrl = '';
        // Required Argument for 'NoticeChangedVisits' (Models.VisitMetaRecord[])
        this.createdRecords = [];
        // Required Argument for 'NoticeChangedVisits' (Models.VisitMetaRecord[])
        this.modifiedRecords = [];
        // Required Argument for 'NoticeChangedVisits' (Models.VisitMetaRecord[])
        this.archivedRecords = [];
    }
    return NoticeChangedVisitsRequest;
}());
exports.NoticeChangedVisitsRequest = NoticeChangedVisitsRequest;
/**
 * Contains results from calling 'NoticeChangedVisits'.
 * Method: Receives notifications about changes which are affecting Visits.
 * IMPORTANT: this method is dedicated to the usecase, when this service itself acts as a subscriber!
 * So this can be called by an foreign service during the setup of a subscription, which was previously
 * requested from here.
 * The opposite case: any client subscribing to events from here,
 * must provide its own http endpoint that has such a method!
 */
var NoticeChangedVisitsResponse = /** @class */ (function () {
    function NoticeChangedVisitsResponse() {
        // Out-Argument of 'NoticeChangedVisits' (boolean): an array, which contains one element per changed visit
        this.terminateSubscription = false;
    }
    return NoticeChangedVisitsResponse;
}());
exports.NoticeChangedVisitsResponse = NoticeChangedVisitsResponse;
/**
 * Contains arguments for calling 'ConfirmAsSubscriber'.
 * Method: Confirms a Subscription.
 * IMPORTANT: this method is dedicated to the usecase, when this service itself acts as a subscriber!
 * So this can be called by an foreign service during the setup of a subscription, which was previously
 * requested from here.
 * The opposite case: any client subscribing to events from here,
 * must provide its own http endpoint that has such a method!
 */
var ConfirmAsSubscriberRequest = /** @class */ (function () {
    function ConfirmAsSubscriberRequest() {
        // Required Argument for 'ConfirmAsSubscriber' (string): root-URL of the VDR-Service on which the subscription was requested
        this.publisherUrl = '';
        // Required Argument for 'ConfirmAsSubscriber' (string): the Uid of the subscription which should be confirmed
        this.subscriptionUid = '';
    }
    return ConfirmAsSubscriberRequest;
}());
exports.ConfirmAsSubscriberRequest = ConfirmAsSubscriberRequest;
/**
 * Contains results from calling 'ConfirmAsSubscriber'.
 * Method: Confirms a Subscription.
 * IMPORTANT: this method is dedicated to the usecase, when this service itself acts as a subscriber!
 * So this can be called by an foreign service during the setup of a subscription, which was previously
 * requested from here.
 * The opposite case: any client subscribing to events from here,
 * must provide its own http endpoint that has such a method!
 */
var ConfirmAsSubscriberResponse = /** @class */ (function () {
    function ConfirmAsSubscriberResponse() {
        // Out-Argument of 'ConfirmAsSubscriber' (string): A secret which is generated by the subscriber and used to provide additional security. It will be required for the 'TerminateSubscription' method and it is used to generate SHA256 hashes for signing the delivered event messages. The secret should: have a minimum length of 32 characters. A null or empty string has the semantics that the subscriber refuses to confirm and cancels the subscription setup.
        this.secret = '';
    }
    return ConfirmAsSubscriberResponse;
}());
exports.ConfirmAsSubscriberResponse = ConfirmAsSubscriberResponse;
/**
 * Contains arguments for calling 'TerminateSubscription'.
 * Method: Terminates a subscription (on publisher side) and returns a boolean,
 * which indicates success.
 */
var TerminateSubscriptionRequest = /** @class */ (function () {
    function TerminateSubscriptionRequest() {
        // Required Argument for 'TerminateSubscription' (string): the Uid of the subscription which should be terminated
        this.subscriptionUid = '';
        // Required Argument for 'TerminateSubscription' (string): the (same) secret, which was given by the subscriber during the subscription setup
        this.secret = '';
    }
    return TerminateSubscriptionRequest;
}());
exports.TerminateSubscriptionRequest = TerminateSubscriptionRequest;
/**
 * Contains results from calling 'TerminateSubscription'.
 * Method: Terminates a subscription (on publisher side) and returns a boolean,
 * which indicates success.
 */
var TerminateSubscriptionResponse = /** @class */ (function () {
    function TerminateSubscriptionResponse() {
        // Return-Value of 'TerminateSubscription' (Boolean)
        this.return = false;
    }
    return TerminateSubscriptionResponse;
}());
exports.TerminateSubscriptionResponse = TerminateSubscriptionResponse;
/**
 * Contains arguments for calling 'GetSubsriptionsBySubscriberUrl'.
 * Method: Returns an array of subscriptionUid's.
 * This method helps subscribers to evaluate whether current subscriptions are still active.
 */
var GetSubsriptionsBySubscriberUrlRequest = /** @class */ (function () {
    function GetSubsriptionsBySubscriberUrlRequest() {
        // Required Argument for 'GetSubsriptionsBySubscriberUrl' (string)
        this.subscriberUrl = '';
        // Required Argument for 'GetSubsriptionsBySubscriberUrl' (string): the (same) secret, which was given by the subscriber during the subscription setup
        this.secret = '';
    }
    return GetSubsriptionsBySubscriberUrlRequest;
}());
exports.GetSubsriptionsBySubscriberUrlRequest = GetSubsriptionsBySubscriberUrlRequest;
/**
 * Contains results from calling 'GetSubsriptionsBySubscriberUrl'.
 * Method: Returns an array of subscriptionUid's.
 * This method helps subscribers to evaluate whether current subscriptions are still active.
 */
var GetSubsriptionsBySubscriberUrlResponse = /** @class */ (function () {
    function GetSubsriptionsBySubscriberUrlResponse() {
        // Return-Value of 'GetSubsriptionsBySubscriberUrl' (Guid[])
        this.return = [];
    }
    return GetSubsriptionsBySubscriberUrlResponse;
}());
exports.GetSubsriptionsBySubscriberUrlResponse = GetSubsriptionsBySubscriberUrlResponse;
/**
 * Contains arguments for calling 'ImportDataRecordings'.
 */
var ImportDataRecordingsRequest = /** @class */ (function () {
    function ImportDataRecordingsRequest() {
        // Required Argument for 'ImportDataRecordings' (Models.DataRecordingStructure[])
        this.dataRecordings = [];
    }
    return ImportDataRecordingsRequest;
}());
exports.ImportDataRecordingsRequest = ImportDataRecordingsRequest;
/**
 * Contains results from calling 'ImportDataRecordings'.
 */
var ImportDataRecordingsResponse = /** @class */ (function () {
    function ImportDataRecordingsResponse() {
        // Out-Argument of 'ImportDataRecordings' (string[])
        this.createdDataRecordingUids = [];
        // Out-Argument of 'ImportDataRecordings' (string[])
        this.updatedDataRecordingUids = [];
    }
    return ImportDataRecordingsResponse;
}());
exports.ImportDataRecordingsResponse = ImportDataRecordingsResponse;
/**
 * Contains arguments for calling 'SearchVisits'.
 * Method: Searches Visits by a given 'filter' (if provided),
 * sorts the results by the given 'sortingField' (if provided) and
 * returns an array of VisitUids for the matching records.
 */
var SearchVisitsRequest = /** @class */ (function () {
    function SearchVisitsRequest() {
    }
    return SearchVisitsRequest;
}());
exports.SearchVisitsRequest = SearchVisitsRequest;
/**
 * Contains results from calling 'SearchVisits'.
 * Method: Searches Visits by a given 'filter' (if provided),
 * sorts the results by the given 'sortingField' (if provided) and
 * returns an array of VisitUids for the matching records.
 */
var SearchVisitsResponse = /** @class */ (function () {
    function SearchVisitsResponse() {
        // Out-Argument of 'SearchVisits' (Models.VisitMetaRecord[])
        this.result = [];
    }
    return SearchVisitsResponse;
}());
exports.SearchVisitsResponse = SearchVisitsResponse;
/**
 * Contains arguments for calling 'SearchChangedVisits'.
 * Method: Searches Visits which have been modified after(or at) the given 'minTimestampUtc',
 * matching to the given 'filter' (if provided).
 * The result is sorted descenting by the timestamp of the modification (latest first) and will
 * include archived records.
 */
var SearchChangedVisitsRequest = /** @class */ (function () {
    function SearchChangedVisitsRequest() {
        // Required Argument for 'SearchChangedVisits' (number): start of the timespan to search (as UNIX-Timestamp)
        this.minTimestampUtc = 0;
    }
    return SearchChangedVisitsRequest;
}());
exports.SearchChangedVisitsRequest = SearchChangedVisitsRequest;
/**
 * Contains results from calling 'SearchChangedVisits'.
 * Method: Searches Visits which have been modified after(or at) the given 'minTimestampUtc',
 * matching to the given 'filter' (if provided).
 * The result is sorted descenting by the timestamp of the modification (latest first) and will
 * include archived records.
 */
var SearchChangedVisitsResponse = /** @class */ (function () {
    function SearchChangedVisitsResponse() {
        // Out-Argument of 'SearchChangedVisits' (number): the exact timestamp of the search (as UNIX-Timestamp)
        this.latestTimestampUtc = 0;
        // Out-Argument of 'SearchChangedVisits' (Models.VisitMetaRecord[])
        this.createdRecords = [];
        // Out-Argument of 'SearchChangedVisits' (Models.VisitMetaRecord[])
        this.modifiedRecords = [];
        // Out-Argument of 'SearchChangedVisits' (Models.VisitMetaRecord[])
        this.archivedRecords = [];
    }
    return SearchChangedVisitsResponse;
}());
exports.SearchChangedVisitsResponse = SearchChangedVisitsResponse;
/**
 * Contains arguments for calling 'GetCustomFieldDescriptorsForVisit'.
 */
var GetCustomFieldDescriptorsForVisitRequest = /** @class */ (function () {
    function GetCustomFieldDescriptorsForVisitRequest() {
    }
    return GetCustomFieldDescriptorsForVisitRequest;
}());
exports.GetCustomFieldDescriptorsForVisitRequest = GetCustomFieldDescriptorsForVisitRequest;
/**
 * Contains results from calling 'GetCustomFieldDescriptorsForVisit'.
 */
var GetCustomFieldDescriptorsForVisitResponse = /** @class */ (function () {
    function GetCustomFieldDescriptorsForVisitResponse() {
        // Return-Value of 'GetCustomFieldDescriptorsForVisit' (CustomFieldDescriptor[])
        this.return = [];
    }
    return GetCustomFieldDescriptorsForVisitResponse;
}());
exports.GetCustomFieldDescriptorsForVisitResponse = GetCustomFieldDescriptorsForVisitResponse;
/**
 * Contains arguments for calling 'CheckVisitExisitence'.
 * Method: Checks the existence of 'Visits' for a given list of visitUids
 */
var CheckVisitExisitenceRequest = /** @class */ (function () {
    function CheckVisitExisitenceRequest() {
        // Required Argument for 'CheckVisitExisitence' (string[])
        this.visitUids = [];
    }
    return CheckVisitExisitenceRequest;
}());
exports.CheckVisitExisitenceRequest = CheckVisitExisitenceRequest;
/**
 * Contains results from calling 'CheckVisitExisitence'.
 * Method: Checks the existence of 'Visits' for a given list of visitUids
 */
var CheckVisitExisitenceResponse = /** @class */ (function () {
    function CheckVisitExisitenceResponse() {
        // Out-Argument of 'CheckVisitExisitence' (string[])
        this.unavailableVisitUids = [];
        // Out-Argument of 'CheckVisitExisitence' (string[])
        this.availableVisitUids = [];
    }
    return CheckVisitExisitenceResponse;
}());
exports.CheckVisitExisitenceResponse = CheckVisitExisitenceResponse;
/**
 * Contains arguments for calling 'GetVisitFields'.
 * Method: loads the requested visits and returns lightweight json objects (without childs),
 * which are optimized to be displayed as table (the most common UI use case).
 * This models containig a combination of:
 * essential fieds from the record,
 * calculated fields (numbers of child records),
 * custom fields (choosen by the service)
 */
var GetVisitFieldsRequest = /** @class */ (function () {
    function GetVisitFieldsRequest() {
        // Required Argument for 'GetVisitFields' (string[])
        this.visitUids = [];
    }
    return GetVisitFieldsRequest;
}());
exports.GetVisitFieldsRequest = GetVisitFieldsRequest;
/**
 * Contains results from calling 'GetVisitFields'.
 * Method: loads the requested visits and returns lightweight json objects (without childs),
 * which are optimized to be displayed as table (the most common UI use case).
 * This models containig a combination of:
 * essential fieds from the record,
 * calculated fields (numbers of child records),
 * custom fields (choosen by the service)
 */
var GetVisitFieldsResponse = /** @class */ (function () {
    function GetVisitFieldsResponse() {
        // Out-Argument of 'GetVisitFields' (string[])
        this.unavailableVisitUids = [];
        // Out-Argument of 'GetVisitFields' (Models.VisitFields[])
        this.result = [];
    }
    return GetVisitFieldsResponse;
}());
exports.GetVisitFieldsResponse = GetVisitFieldsResponse;
/**
 * Contains arguments for calling 'ExportVisits'.
 * Method: exports full 'VisitStructures'
 */
var ExportVisitsRequest = /** @class */ (function () {
    function ExportVisitsRequest() {
        // Required Argument for 'ExportVisits' (string[])
        this.visitUids = [];
    }
    return ExportVisitsRequest;
}());
exports.ExportVisitsRequest = ExportVisitsRequest;
/**
 * Contains results from calling 'ExportVisits'.
 * Method: exports full 'VisitStructures'
 */
var ExportVisitsResponse = /** @class */ (function () {
    function ExportVisitsResponse() {
        // Out-Argument of 'ExportVisits' (string[])
        this.unavailableVisitUids = [];
        // Out-Argument of 'ExportVisits' (Models.VisitStructure[])
        this.result = [];
    }
    return ExportVisitsResponse;
}());
exports.ExportVisitsResponse = ExportVisitsResponse;
/**
 * Contains arguments for calling 'ExportVisitFhirRessources'.
 * Method: Exports a structure containing HL7/FHIR-Ressources (JSON only) and
 * the essential fields which are required to qualify a ORSCF record.
 */
var ExportVisitFhirRessourcesRequest = /** @class */ (function () {
    function ExportVisitFhirRessourcesRequest() {
        // Required Argument for 'ExportVisitFhirRessources' (string)
        this.visitUid = '';
    }
    return ExportVisitFhirRessourcesRequest;
}());
exports.ExportVisitFhirRessourcesRequest = ExportVisitFhirRessourcesRequest;
/**
 * Contains results from calling 'ExportVisitFhirRessources'.
 * Method: Exports a structure containing HL7/FHIR-Ressources (JSON only) and
 * the essential fields which are required to qualify a ORSCF record.
 */
var ExportVisitFhirRessourcesResponse = /** @class */ (function () {
    function ExportVisitFhirRessourcesResponse() {
        // Out-Argument of 'ExportVisitFhirRessources' (Models.VisitFhirRessourceContainer[])
        this.visitFhirRessources = [];
        // Return-Value of 'ExportVisitFhirRessources' (Boolean)
        this.return = false;
    }
    return ExportVisitFhirRessourcesResponse;
}());
exports.ExportVisitFhirRessourcesResponse = ExportVisitFhirRessourcesResponse;
/**
 * Contains arguments for calling 'ImportVisitFhirRessources'.
 * Method: Exports a structure containing HL7/FHIR-Ressources (JSON only) and
 * the essential fields which are required to qualify a ORSCF record.
 */
var ImportVisitFhirRessourcesRequest = /** @class */ (function () {
    function ImportVisitFhirRessourcesRequest() {
        // Required Argument for 'ImportVisitFhirRessources' (Models.VisitFhirRessourceContainer[]): A structure containing HL7/FHIR-Ressources (JSON only) and the essential fields which are required to qualify a ORSCF record.
        this.visitFhirRessources = [];
    }
    return ImportVisitFhirRessourcesRequest;
}());
exports.ImportVisitFhirRessourcesRequest = ImportVisitFhirRessourcesRequest;
/**
 * Contains results from calling 'ImportVisitFhirRessources'.
 * Method: Exports a structure containing HL7/FHIR-Ressources (JSON only) and
 * the essential fields which are required to qualify a ORSCF record.
 */
var ImportVisitFhirRessourcesResponse = /** @class */ (function () {
    function ImportVisitFhirRessourcesResponse() {
        // Out-Argument of 'ImportVisitFhirRessources' (string[])
        this.createdVisitUids = [];
        // Out-Argument of 'ImportVisitFhirRessources' (string[])
        this.updatedVisitUids = [];
    }
    return ImportVisitFhirRessourcesResponse;
}());
exports.ImportVisitFhirRessourcesResponse = ImportVisitFhirRessourcesResponse;
/**
 * Contains arguments for calling 'ArchiveVisits'.
 */
var ArchiveVisitsRequest = /** @class */ (function () {
    function ArchiveVisitsRequest() {
        // Required Argument for 'ArchiveVisits' (string[])
        this.visitUids = [];
    }
    return ArchiveVisitsRequest;
}());
exports.ArchiveVisitsRequest = ArchiveVisitsRequest;
/**
 * Contains results from calling 'ArchiveVisits'.
 */
var ArchiveVisitsResponse = /** @class */ (function () {
    function ArchiveVisitsResponse() {
        // Out-Argument of 'ArchiveVisits' (string[]): also including the Uids of already archived records
        this.archivedVisitUids = [];
    }
    return ArchiveVisitsResponse;
}());
exports.ArchiveVisitsResponse = ArchiveVisitsResponse;
/**
 * Contains arguments for calling 'UnarchiveVisits'.
 */
var UnarchiveVisitsRequest = /** @class */ (function () {
    function UnarchiveVisitsRequest() {
        // Required Argument for 'UnarchiveVisits' (string[])
        this.visitUids = [];
    }
    return UnarchiveVisitsRequest;
}());
exports.UnarchiveVisitsRequest = UnarchiveVisitsRequest;
/**
 * Contains results from calling 'UnarchiveVisits'.
 */
var UnarchiveVisitsResponse = /** @class */ (function () {
    function UnarchiveVisitsResponse() {
        // Out-Argument of 'UnarchiveVisits' (string[])
        this.unarchivedVisitUids = [];
    }
    return UnarchiveVisitsResponse;
}());
exports.UnarchiveVisitsResponse = UnarchiveVisitsResponse;
/**
 * Contains arguments for calling 'ApplyVisitMutations'.
 */
var ApplyVisitMutationsRequest = /** @class */ (function () {
    function ApplyVisitMutationsRequest() {
        // Required Argument for 'ApplyVisitMutations' (Object)
        this.mutationsByVisitUid = new Object();
    }
    return ApplyVisitMutationsRequest;
}());
exports.ApplyVisitMutationsRequest = ApplyVisitMutationsRequest;
/**
 * Contains results from calling 'ApplyVisitMutations'.
 */
var ApplyVisitMutationsResponse = /** @class */ (function () {
    function ApplyVisitMutationsResponse() {
        // Out-Argument of 'ApplyVisitMutations' (string[])
        this.updatedVisitUids = [];
    }
    return ApplyVisitMutationsResponse;
}());
exports.ApplyVisitMutationsResponse = ApplyVisitMutationsResponse;
/**
 * Contains arguments for calling 'ApplyVisitBatchMutation'.
 */
var ApplyVisitBatchMutationRequest = /** @class */ (function () {
    function ApplyVisitBatchMutationRequest() {
        // Required Argument for 'ApplyVisitBatchMutation' (string[])
        this.visitUids = [];
        // Required Argument for 'ApplyVisitBatchMutation' (Models.BatchableVisitMutation)
        this.mutation = new Models.BatchableVisitMutation();
    }
    return ApplyVisitBatchMutationRequest;
}());
exports.ApplyVisitBatchMutationRequest = ApplyVisitBatchMutationRequest;
/**
 * Contains results from calling 'ApplyVisitBatchMutation'.
 */
var ApplyVisitBatchMutationResponse = /** @class */ (function () {
    function ApplyVisitBatchMutationResponse() {
        // Out-Argument of 'ApplyVisitBatchMutation' (string[])
        this.updatedVisitUids = [];
    }
    return ApplyVisitBatchMutationResponse;
}());
exports.ApplyVisitBatchMutationResponse = ApplyVisitBatchMutationResponse;
/**
 * Contains arguments for calling 'ImportVisits'.
 */
var ImportVisitsRequest = /** @class */ (function () {
    function ImportVisitsRequest() {
        // Required Argument for 'ImportVisits' (Models.VisitStructure[])
        this.visits = [];
    }
    return ImportVisitsRequest;
}());
exports.ImportVisitsRequest = ImportVisitsRequest;
/**
 * Contains results from calling 'ImportVisits'.
 */
var ImportVisitsResponse = /** @class */ (function () {
    function ImportVisitsResponse() {
        // Out-Argument of 'ImportVisits' (string[])
        this.createdVisitUids = [];
        // Out-Argument of 'ImportVisits' (string[])
        this.updatedVisitUids = [];
    }
    return ImportVisitsResponse;
}());
exports.ImportVisitsResponse = ImportVisitsResponse;
//# sourceMappingURL=dtos.js.map