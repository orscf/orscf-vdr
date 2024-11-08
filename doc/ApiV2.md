# DataRecordingStore
Provides CRUD access to stored DataRecordings (based on schema version '1.5.0')

### Methods:



## .GetOriginIdentity
Returns an string, representing the "Identity" of the current origin.
This can be used to discriminate multiple source repos.
(usually it should be related to a SCOPE like {DbServer}+{DbName/Schema}+{EntityName})
NOTE: This is an technical disciminator and it is not required, that it is an human-readable
"frieldly-name". It can just be an Hash or Uid, so its NOT RECOMMENDED to use it as display label!
no parameters
**return value:** String



## .GetCapabilities
Returns an property bag which holds information about the implemented/supported capabilities of this IRepository.
no parameters
**return value:** [RepositoryCapabilities](#RepositoryCapabilities)



## .GetEntityRefs
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|filter|[ExpressionTree](#ExpressionTree)|**IN**-Param (required): (from 'FUSE-fx.RepositoryContract')|
|sortedBy|String[] *(array)*|**IN**-Param (required): An array of field names to be used for sorting the results (before 'limit' and 'skip' is processed). Use the character "^" as prefix for DESC sorting. Sample: ['^Age','Lastname']|
|limit|Int32?|**IN**-Param (optional)|
|skip|Int32?|**IN**-Param (optional)|
**return value:** Guid[] *(array)*



## .GetEntityRefsBySearchExpression
NOTE: this method can only be used, if the 'SupportsStringBaseSearchExpressions'-Capability is given for this repository!
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|searchExpression|String|**IN**-Param (required)|
|sortedBy|String[] *(array)*|**IN**-Param (required): An array of field names to be used for sorting the results (before 'limit' and 'skip' is processed). Use the character "^" as prefix for DESC sorting. Sample: ['^Age','Lastname']|
|limit|Int32?|**IN**-Param (optional)|
|skip|Int32?|**IN**-Param (optional)|
**return value:** Guid[] *(array)*



## .GetEntityRefsByKey
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|keysToLoad|Guid[] *(array)*|**IN**-Param (required)|
**return value:** Guid[] *(array)*



## .GetEntities
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|filter|[ExpressionTree](#ExpressionTree)|**IN**-Param (required): (from 'FUSE-fx.RepositoryContract')|
|sortedBy|String[] *(array)*|**IN**-Param (required): An array of field names to be used for sorting the results (before 'limit' and 'skip' is processed). Use the character "^" as prefix for DESC sorting. Sample: ['^Age','Lastname']|
|limit|Int32?|**IN**-Param (optional)|
|skip|Int32?|**IN**-Param (optional)|
**return value:** [DataRecording](#DataRecording)[] *(array)*



## .GetEntitiesBySearchExpression
NOTE: this method can only be used, if the 'SupportsStringBaseSearchExpressions'-Capability is given for this repository!
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|searchExpression|String|**IN**-Param (required)|
|sortedBy|String[] *(array)*|**IN**-Param (required): An array of field names to be used for sorting the results (before 'limit' and 'skip' is processed). Use the character "^" as prefix for DESC sorting. Sample: ['^Age','Lastname']|
|limit|Int32?|**IN**-Param (optional)|
|skip|Int32?|**IN**-Param (optional)|
**return value:** [DataRecording](#DataRecording)[] *(array)*



## .GetEntitiesByKey
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|keysToLoad|Guid[] *(array)*|**IN**-Param (required)|
**return value:** [DataRecording](#DataRecording)[] *(array)*



## .GetEntityFields
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|filter|[ExpressionTree](#ExpressionTree)|**IN**-Param (required): (from 'FUSE-fx.RepositoryContract')|
|includedFieldNames|String[] *(array)*|**IN**-Param (required): An array of field names to be loaded|
|sortedBy|String[] *(array)*|**IN**-Param (required): An array of field names to be used for sorting the results (before 'limit' and 'skip' is processed). Use the character "^" as prefix for DESC sorting. Sample: ['^Age','Lastname']|
|limit|Int32?|**IN**-Param (optional)|
|skip|Int32?|**IN**-Param (optional)|
**return value:** String[] *(array)*



## .GetEntityFieldsBySearchExpression
NOTE: this method can only be used, if the 'SupportsStringBaseSearchExpressions'-Capability is given for this repository!
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|searchExpression|String|**IN**-Param (required)|
|includedFieldNames|String[] *(array)*|**IN**-Param (required): An array of field names to be loaded|
|sortedBy|String[] *(array)*|**IN**-Param (required): An array of field names to be used for sorting the results (before 'limit' and 'skip' is processed). Use the character "^" as prefix for DESC sorting. Sample: ['^Age','Lastname']|
|limit|Int32?|**IN**-Param (optional)|
|skip|Int32?|**IN**-Param (optional)|
**return value:** String[] *(array)*



## .GetEntityFieldsByKey
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|keysToLoad|Guid[] *(array)*|**IN**-Param (required)|
|includedFieldNames|String[] *(array)*|**IN**-Param (required)|
**return value:** String[] *(array)*



## .CountAll
no parameters
**return value:** Int32



## .Count
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|filter|[ExpressionTree](#ExpressionTree)|**IN**-Param (required): (from 'FUSE-fx.RepositoryContract')|
**return value:** Int32



## .CountBySearchExpression
NOTE: this method can only be used, if the 'SupportsStringBaseSearchExpressions'-Capability is given for this repository!
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|searchExpression|String|**IN**-Param (required)|
**return value:** Int32



## .ContainsKey
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|key|Guid|**IN**-Param (required)|
**return value:** Boolean



## .AddOrUpdateEntityFields
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|fields|*Dict*<String,Object>|**IN**-Param (required)|
**return value:** *Dict*<String,Object>



## .AddOrUpdateEntity
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|entity|[DataRecording](#DataRecording)|**IN**-Param (required)|
**return value:** [DataRecording](#DataRecording)



## .TryUpdateEntityFields
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|fields|*Dict*<String,Object>|**IN**-Param (required)|
**return value:** *Dict*<String,Object>



## .TryUpdateEntity
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|entity|[DataRecording](#DataRecording)|**IN**-Param (required)|
**return value:** [DataRecording](#DataRecording)



## .TryAddEntity
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|entity|[DataRecording](#DataRecording)|**IN**-Param (required)|
**return value:** Guid



## .MassupdateByKeys
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|keysToUpdate|Guid[] *(array)*|**IN**-Param (required)|
|fields|*Dict*<String,Object>|**IN**-Param (required)|
**return value:** Guid[] *(array)*



## .Massupdate
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|filter|[ExpressionTree](#ExpressionTree)|**IN**-Param (required): (from 'FUSE-fx.RepositoryContract')|
|fields|*Dict*<String,Object>|**IN**-Param (required)|
**return value:** Guid[] *(array)*



## .MassupdateBySearchExpression
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|searchExpression|String|**IN**-Param (required)|
|fields|*Dict*<String,Object>|**IN**-Param (required)|
**return value:** Guid[] *(array)*



## .TryDeleteEntities
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|keysToDelete|Guid[] *(array)*|**IN**-Param (required)|
**return value:** Guid[] *(array)*



## .TryUpdateKey
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|currentKey|Guid|**IN**-Param (required)|
|newKey|Guid|**IN**-Param (required)|
**return value:** Boolean
# VisitStore
Provides CRUD access to stored Visits (based on schema version '1.5.0')

### Methods:



## .GetOriginIdentity
Returns an string, representing the "Identity" of the current origin.
This can be used to discriminate multiple source repos.
(usually it should be related to a SCOPE like {DbServer}+{DbName/Schema}+{EntityName})
NOTE: This is an technical disciminator and it is not required, that it is an human-readable
"frieldly-name". It can just be an Hash or Uid, so its NOT RECOMMENDED to use it as display label!
no parameters
**return value:** String



## .GetCapabilities
Returns an property bag which holds information about the implemented/supported capabilities of this IRepository.
no parameters
**return value:** [RepositoryCapabilities](#RepositoryCapabilities)



## .GetEntityRefs
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|filter|[ExpressionTree](#ExpressionTree)|**IN**-Param (required): (from 'FUSE-fx.RepositoryContract')|
|sortedBy|String[] *(array)*|**IN**-Param (required): An array of field names to be used for sorting the results (before 'limit' and 'skip' is processed). Use the character "^" as prefix for DESC sorting. Sample: ['^Age','Lastname']|
|limit|Int32?|**IN**-Param (optional)|
|skip|Int32?|**IN**-Param (optional)|
**return value:** Guid[] *(array)*



## .GetEntityRefsBySearchExpression
NOTE: this method can only be used, if the 'SupportsStringBaseSearchExpressions'-Capability is given for this repository!
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|searchExpression|String|**IN**-Param (required)|
|sortedBy|String[] *(array)*|**IN**-Param (required): An array of field names to be used for sorting the results (before 'limit' and 'skip' is processed). Use the character "^" as prefix for DESC sorting. Sample: ['^Age','Lastname']|
|limit|Int32?|**IN**-Param (optional)|
|skip|Int32?|**IN**-Param (optional)|
**return value:** Guid[] *(array)*



## .GetEntityRefsByKey
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|keysToLoad|Guid[] *(array)*|**IN**-Param (required)|
**return value:** Guid[] *(array)*



## .GetEntities
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|filter|[ExpressionTree](#ExpressionTree)|**IN**-Param (required): (from 'FUSE-fx.RepositoryContract')|
|sortedBy|String[] *(array)*|**IN**-Param (required): An array of field names to be used for sorting the results (before 'limit' and 'skip' is processed). Use the character "^" as prefix for DESC sorting. Sample: ['^Age','Lastname']|
|limit|Int32?|**IN**-Param (optional)|
|skip|Int32?|**IN**-Param (optional)|
**return value:** [Visit](#Visit)[] *(array)*



## .GetEntitiesBySearchExpression
NOTE: this method can only be used, if the 'SupportsStringBaseSearchExpressions'-Capability is given for this repository!
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|searchExpression|String|**IN**-Param (required)|
|sortedBy|String[] *(array)*|**IN**-Param (required): An array of field names to be used for sorting the results (before 'limit' and 'skip' is processed). Use the character "^" as prefix for DESC sorting. Sample: ['^Age','Lastname']|
|limit|Int32?|**IN**-Param (optional)|
|skip|Int32?|**IN**-Param (optional)|
**return value:** [Visit](#Visit)[] *(array)*



## .GetEntitiesByKey
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|keysToLoad|Guid[] *(array)*|**IN**-Param (required)|
**return value:** [Visit](#Visit)[] *(array)*



## .GetEntityFields
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|filter|[ExpressionTree](#ExpressionTree)|**IN**-Param (required): (from 'FUSE-fx.RepositoryContract')|
|includedFieldNames|String[] *(array)*|**IN**-Param (required): An array of field names to be loaded|
|sortedBy|String[] *(array)*|**IN**-Param (required): An array of field names to be used for sorting the results (before 'limit' and 'skip' is processed). Use the character "^" as prefix for DESC sorting. Sample: ['^Age','Lastname']|
|limit|Int32?|**IN**-Param (optional)|
|skip|Int32?|**IN**-Param (optional)|
**return value:** String[] *(array)*



## .GetEntityFieldsBySearchExpression
NOTE: this method can only be used, if the 'SupportsStringBaseSearchExpressions'-Capability is given for this repository!
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|searchExpression|String|**IN**-Param (required)|
|includedFieldNames|String[] *(array)*|**IN**-Param (required): An array of field names to be loaded|
|sortedBy|String[] *(array)*|**IN**-Param (required): An array of field names to be used for sorting the results (before 'limit' and 'skip' is processed). Use the character "^" as prefix for DESC sorting. Sample: ['^Age','Lastname']|
|limit|Int32?|**IN**-Param (optional)|
|skip|Int32?|**IN**-Param (optional)|
**return value:** String[] *(array)*



## .GetEntityFieldsByKey
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|keysToLoad|Guid[] *(array)*|**IN**-Param (required)|
|includedFieldNames|String[] *(array)*|**IN**-Param (required)|
**return value:** String[] *(array)*



## .CountAll
no parameters
**return value:** Int32



## .Count
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|filter|[ExpressionTree](#ExpressionTree)|**IN**-Param (required): (from 'FUSE-fx.RepositoryContract')|
**return value:** Int32



## .CountBySearchExpression
NOTE: this method can only be used, if the 'SupportsStringBaseSearchExpressions'-Capability is given for this repository!
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|searchExpression|String|**IN**-Param (required)|
**return value:** Int32



## .ContainsKey
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|key|Guid|**IN**-Param (required)|
**return value:** Boolean



## .AddOrUpdateEntityFields
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|fields|*Dict*<String,Object>|**IN**-Param (required)|
**return value:** *Dict*<String,Object>



## .AddOrUpdateEntity
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|entity|[Visit](#Visit)|**IN**-Param (required)|
**return value:** [Visit](#Visit)



## .TryUpdateEntityFields
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|fields|*Dict*<String,Object>|**IN**-Param (required)|
**return value:** *Dict*<String,Object>



## .TryUpdateEntity
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|entity|[Visit](#Visit)|**IN**-Param (required)|
**return value:** [Visit](#Visit)



## .TryAddEntity
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|entity|[Visit](#Visit)|**IN**-Param (required)|
**return value:** Guid



## .MassupdateByKeys
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|keysToUpdate|Guid[] *(array)*|**IN**-Param (required)|
|fields|*Dict*<String,Object>|**IN**-Param (required)|
**return value:** Guid[] *(array)*



## .Massupdate
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|filter|[ExpressionTree](#ExpressionTree)|**IN**-Param (required): (from 'FUSE-fx.RepositoryContract')|
|fields|*Dict*<String,Object>|**IN**-Param (required)|
**return value:** Guid[] *(array)*



## .MassupdateBySearchExpression
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|searchExpression|String|**IN**-Param (required)|
|fields|*Dict*<String,Object>|**IN**-Param (required)|
**return value:** Guid[] *(array)*



## .TryDeleteEntities
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|keysToDelete|Guid[] *(array)*|**IN**-Param (required)|
**return value:** Guid[] *(array)*



## .TryUpdateKey
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|currentKey|Guid|**IN**-Param (required)|
|newKey|Guid|**IN**-Param (required)|
**return value:** Boolean
# DrugApplymentStore
Provides CRUD access to stored DrugApplyments (based on schema version '1.5.0')

### Methods:



## .GetOriginIdentity
Returns an string, representing the "Identity" of the current origin.
This can be used to discriminate multiple source repos.
(usually it should be related to a SCOPE like {DbServer}+{DbName/Schema}+{EntityName})
NOTE: This is an technical disciminator and it is not required, that it is an human-readable
"frieldly-name". It can just be an Hash or Uid, so its NOT RECOMMENDED to use it as display label!
no parameters
**return value:** String



## .GetCapabilities
Returns an property bag which holds information about the implemented/supported capabilities of this IRepository.
no parameters
**return value:** [RepositoryCapabilities](#RepositoryCapabilities)



## .GetEntityRefs
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|filter|[ExpressionTree](#ExpressionTree)|**IN**-Param (required): (from 'FUSE-fx.RepositoryContract')|
|sortedBy|String[] *(array)*|**IN**-Param (required): An array of field names to be used for sorting the results (before 'limit' and 'skip' is processed). Use the character "^" as prefix for DESC sorting. Sample: ['^Age','Lastname']|
|limit|Int32?|**IN**-Param (optional)|
|skip|Int32?|**IN**-Param (optional)|
**return value:** Guid[] *(array)*



## .GetEntityRefsBySearchExpression
NOTE: this method can only be used, if the 'SupportsStringBaseSearchExpressions'-Capability is given for this repository!
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|searchExpression|String|**IN**-Param (required)|
|sortedBy|String[] *(array)*|**IN**-Param (required): An array of field names to be used for sorting the results (before 'limit' and 'skip' is processed). Use the character "^" as prefix for DESC sorting. Sample: ['^Age','Lastname']|
|limit|Int32?|**IN**-Param (optional)|
|skip|Int32?|**IN**-Param (optional)|
**return value:** Guid[] *(array)*



## .GetEntityRefsByKey
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|keysToLoad|Guid[] *(array)*|**IN**-Param (required)|
**return value:** Guid[] *(array)*



## .GetEntities
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|filter|[ExpressionTree](#ExpressionTree)|**IN**-Param (required): (from 'FUSE-fx.RepositoryContract')|
|sortedBy|String[] *(array)*|**IN**-Param (required): An array of field names to be used for sorting the results (before 'limit' and 'skip' is processed). Use the character "^" as prefix for DESC sorting. Sample: ['^Age','Lastname']|
|limit|Int32?|**IN**-Param (optional)|
|skip|Int32?|**IN**-Param (optional)|
**return value:** [DrugApplyment](#DrugApplyment)[] *(array)*



## .GetEntitiesBySearchExpression
NOTE: this method can only be used, if the 'SupportsStringBaseSearchExpressions'-Capability is given for this repository!
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|searchExpression|String|**IN**-Param (required)|
|sortedBy|String[] *(array)*|**IN**-Param (required): An array of field names to be used for sorting the results (before 'limit' and 'skip' is processed). Use the character "^" as prefix for DESC sorting. Sample: ['^Age','Lastname']|
|limit|Int32?|**IN**-Param (optional)|
|skip|Int32?|**IN**-Param (optional)|
**return value:** [DrugApplyment](#DrugApplyment)[] *(array)*



## .GetEntitiesByKey
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|keysToLoad|Guid[] *(array)*|**IN**-Param (required)|
**return value:** [DrugApplyment](#DrugApplyment)[] *(array)*



## .GetEntityFields
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|filter|[ExpressionTree](#ExpressionTree)|**IN**-Param (required): (from 'FUSE-fx.RepositoryContract')|
|includedFieldNames|String[] *(array)*|**IN**-Param (required): An array of field names to be loaded|
|sortedBy|String[] *(array)*|**IN**-Param (required): An array of field names to be used for sorting the results (before 'limit' and 'skip' is processed). Use the character "^" as prefix for DESC sorting. Sample: ['^Age','Lastname']|
|limit|Int32?|**IN**-Param (optional)|
|skip|Int32?|**IN**-Param (optional)|
**return value:** String[] *(array)*



## .GetEntityFieldsBySearchExpression
NOTE: this method can only be used, if the 'SupportsStringBaseSearchExpressions'-Capability is given for this repository!
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|searchExpression|String|**IN**-Param (required)|
|includedFieldNames|String[] *(array)*|**IN**-Param (required): An array of field names to be loaded|
|sortedBy|String[] *(array)*|**IN**-Param (required): An array of field names to be used for sorting the results (before 'limit' and 'skip' is processed). Use the character "^" as prefix for DESC sorting. Sample: ['^Age','Lastname']|
|limit|Int32?|**IN**-Param (optional)|
|skip|Int32?|**IN**-Param (optional)|
**return value:** String[] *(array)*



## .GetEntityFieldsByKey
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|keysToLoad|Guid[] *(array)*|**IN**-Param (required)|
|includedFieldNames|String[] *(array)*|**IN**-Param (required)|
**return value:** String[] *(array)*



## .CountAll
no parameters
**return value:** Int32



## .Count
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|filter|[ExpressionTree](#ExpressionTree)|**IN**-Param (required): (from 'FUSE-fx.RepositoryContract')|
**return value:** Int32



## .CountBySearchExpression
NOTE: this method can only be used, if the 'SupportsStringBaseSearchExpressions'-Capability is given for this repository!
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|searchExpression|String|**IN**-Param (required)|
**return value:** Int32



## .ContainsKey
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|key|Guid|**IN**-Param (required)|
**return value:** Boolean



## .AddOrUpdateEntityFields
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|fields|*Dict*<String,Object>|**IN**-Param (required)|
**return value:** *Dict*<String,Object>



## .AddOrUpdateEntity
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|entity|[DrugApplyment](#DrugApplyment)|**IN**-Param (required)|
**return value:** [DrugApplyment](#DrugApplyment)



## .TryUpdateEntityFields
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|fields|*Dict*<String,Object>|**IN**-Param (required)|
**return value:** *Dict*<String,Object>



## .TryUpdateEntity
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|entity|[DrugApplyment](#DrugApplyment)|**IN**-Param (required)|
**return value:** [DrugApplyment](#DrugApplyment)



## .TryAddEntity
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|entity|[DrugApplyment](#DrugApplyment)|**IN**-Param (required)|
**return value:** Guid



## .MassupdateByKeys
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|keysToUpdate|Guid[] *(array)*|**IN**-Param (required)|
|fields|*Dict*<String,Object>|**IN**-Param (required)|
**return value:** Guid[] *(array)*



## .Massupdate
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|filter|[ExpressionTree](#ExpressionTree)|**IN**-Param (required): (from 'FUSE-fx.RepositoryContract')|
|fields|*Dict*<String,Object>|**IN**-Param (required)|
**return value:** Guid[] *(array)*



## .MassupdateBySearchExpression
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|searchExpression|String|**IN**-Param (required)|
|fields|*Dict*<String,Object>|**IN**-Param (required)|
**return value:** Guid[] *(array)*



## .TryDeleteEntities
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|keysToDelete|Guid[] *(array)*|**IN**-Param (required)|
**return value:** Guid[] *(array)*



## .TryUpdateKey
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|currentKey|Guid|**IN**-Param (required)|
|newKey|Guid|**IN**-Param (required)|
**return value:** Boolean
# StudyEventStore
Provides CRUD access to stored StudyEvents (based on schema version '1.5.0')

### Methods:



## .GetOriginIdentity
Returns an string, representing the "Identity" of the current origin.
This can be used to discriminate multiple source repos.
(usually it should be related to a SCOPE like {DbServer}+{DbName/Schema}+{EntityName})
NOTE: This is an technical disciminator and it is not required, that it is an human-readable
"frieldly-name". It can just be an Hash or Uid, so its NOT RECOMMENDED to use it as display label!
no parameters
**return value:** String



## .GetCapabilities
Returns an property bag which holds information about the implemented/supported capabilities of this IRepository.
no parameters
**return value:** [RepositoryCapabilities](#RepositoryCapabilities)



## .GetEntityRefs
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|filter|[ExpressionTree](#ExpressionTree)|**IN**-Param (required): (from 'FUSE-fx.RepositoryContract')|
|sortedBy|String[] *(array)*|**IN**-Param (required): An array of field names to be used for sorting the results (before 'limit' and 'skip' is processed). Use the character "^" as prefix for DESC sorting. Sample: ['^Age','Lastname']|
|limit|Int32?|**IN**-Param (optional)|
|skip|Int32?|**IN**-Param (optional)|
**return value:** Guid[] *(array)*



## .GetEntityRefsBySearchExpression
NOTE: this method can only be used, if the 'SupportsStringBaseSearchExpressions'-Capability is given for this repository!
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|searchExpression|String|**IN**-Param (required)|
|sortedBy|String[] *(array)*|**IN**-Param (required): An array of field names to be used for sorting the results (before 'limit' and 'skip' is processed). Use the character "^" as prefix for DESC sorting. Sample: ['^Age','Lastname']|
|limit|Int32?|**IN**-Param (optional)|
|skip|Int32?|**IN**-Param (optional)|
**return value:** Guid[] *(array)*



## .GetEntityRefsByKey
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|keysToLoad|Guid[] *(array)*|**IN**-Param (required)|
**return value:** Guid[] *(array)*



## .GetEntities
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|filter|[ExpressionTree](#ExpressionTree)|**IN**-Param (required): (from 'FUSE-fx.RepositoryContract')|
|sortedBy|String[] *(array)*|**IN**-Param (required): An array of field names to be used for sorting the results (before 'limit' and 'skip' is processed). Use the character "^" as prefix for DESC sorting. Sample: ['^Age','Lastname']|
|limit|Int32?|**IN**-Param (optional)|
|skip|Int32?|**IN**-Param (optional)|
**return value:** [StudyEvent](#StudyEvent)[] *(array)*



## .GetEntitiesBySearchExpression
NOTE: this method can only be used, if the 'SupportsStringBaseSearchExpressions'-Capability is given for this repository!
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|searchExpression|String|**IN**-Param (required)|
|sortedBy|String[] *(array)*|**IN**-Param (required): An array of field names to be used for sorting the results (before 'limit' and 'skip' is processed). Use the character "^" as prefix for DESC sorting. Sample: ['^Age','Lastname']|
|limit|Int32?|**IN**-Param (optional)|
|skip|Int32?|**IN**-Param (optional)|
**return value:** [StudyEvent](#StudyEvent)[] *(array)*



## .GetEntitiesByKey
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|keysToLoad|Guid[] *(array)*|**IN**-Param (required)|
**return value:** [StudyEvent](#StudyEvent)[] *(array)*



## .GetEntityFields
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|filter|[ExpressionTree](#ExpressionTree)|**IN**-Param (required): (from 'FUSE-fx.RepositoryContract')|
|includedFieldNames|String[] *(array)*|**IN**-Param (required): An array of field names to be loaded|
|sortedBy|String[] *(array)*|**IN**-Param (required): An array of field names to be used for sorting the results (before 'limit' and 'skip' is processed). Use the character "^" as prefix for DESC sorting. Sample: ['^Age','Lastname']|
|limit|Int32?|**IN**-Param (optional)|
|skip|Int32?|**IN**-Param (optional)|
**return value:** String[] *(array)*



## .GetEntityFieldsBySearchExpression
NOTE: this method can only be used, if the 'SupportsStringBaseSearchExpressions'-Capability is given for this repository!
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|searchExpression|String|**IN**-Param (required)|
|includedFieldNames|String[] *(array)*|**IN**-Param (required): An array of field names to be loaded|
|sortedBy|String[] *(array)*|**IN**-Param (required): An array of field names to be used for sorting the results (before 'limit' and 'skip' is processed). Use the character "^" as prefix for DESC sorting. Sample: ['^Age','Lastname']|
|limit|Int32?|**IN**-Param (optional)|
|skip|Int32?|**IN**-Param (optional)|
**return value:** String[] *(array)*



## .GetEntityFieldsByKey
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|keysToLoad|Guid[] *(array)*|**IN**-Param (required)|
|includedFieldNames|String[] *(array)*|**IN**-Param (required)|
**return value:** String[] *(array)*



## .CountAll
no parameters
**return value:** Int32



## .Count
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|filter|[ExpressionTree](#ExpressionTree)|**IN**-Param (required): (from 'FUSE-fx.RepositoryContract')|
**return value:** Int32



## .CountBySearchExpression
NOTE: this method can only be used, if the 'SupportsStringBaseSearchExpressions'-Capability is given for this repository!
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|searchExpression|String|**IN**-Param (required)|
**return value:** Int32



## .ContainsKey
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|key|Guid|**IN**-Param (required)|
**return value:** Boolean



## .AddOrUpdateEntityFields
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|fields|*Dict*<String,Object>|**IN**-Param (required)|
**return value:** *Dict*<String,Object>



## .AddOrUpdateEntity
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|entity|[StudyEvent](#StudyEvent)|**IN**-Param (required)|
**return value:** [StudyEvent](#StudyEvent)



## .TryUpdateEntityFields
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|fields|*Dict*<String,Object>|**IN**-Param (required)|
**return value:** *Dict*<String,Object>



## .TryUpdateEntity
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|entity|[StudyEvent](#StudyEvent)|**IN**-Param (required)|
**return value:** [StudyEvent](#StudyEvent)



## .TryAddEntity
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|entity|[StudyEvent](#StudyEvent)|**IN**-Param (required)|
**return value:** Guid



## .MassupdateByKeys
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|keysToUpdate|Guid[] *(array)*|**IN**-Param (required)|
|fields|*Dict*<String,Object>|**IN**-Param (required)|
**return value:** Guid[] *(array)*



## .Massupdate
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|filter|[ExpressionTree](#ExpressionTree)|**IN**-Param (required): (from 'FUSE-fx.RepositoryContract')|
|fields|*Dict*<String,Object>|**IN**-Param (required)|
**return value:** Guid[] *(array)*



## .MassupdateBySearchExpression
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|searchExpression|String|**IN**-Param (required)|
|fields|*Dict*<String,Object>|**IN**-Param (required)|
**return value:** Guid[] *(array)*



## .TryDeleteEntities
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|keysToDelete|Guid[] *(array)*|**IN**-Param (required)|
**return value:** Guid[] *(array)*



## .TryUpdateKey
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|currentKey|Guid|**IN**-Param (required)|
|newKey|Guid|**IN**-Param (required)|
**return value:** Boolean
# StudyExecutionScopeStore
Provides CRUD access to stored StudyExecutionScopes (based on schema version '1.5.0')

### Methods:



## .GetOriginIdentity
Returns an string, representing the "Identity" of the current origin.
This can be used to discriminate multiple source repos.
(usually it should be related to a SCOPE like {DbServer}+{DbName/Schema}+{EntityName})
NOTE: This is an technical disciminator and it is not required, that it is an human-readable
"frieldly-name". It can just be an Hash or Uid, so its NOT RECOMMENDED to use it as display label!
no parameters
**return value:** String



## .GetCapabilities
Returns an property bag which holds information about the implemented/supported capabilities of this IRepository.
no parameters
**return value:** [RepositoryCapabilities](#RepositoryCapabilities)



## .GetEntityRefs
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|filter|[ExpressionTree](#ExpressionTree)|**IN**-Param (required): (from 'FUSE-fx.RepositoryContract')|
|sortedBy|String[] *(array)*|**IN**-Param (required): An array of field names to be used for sorting the results (before 'limit' and 'skip' is processed). Use the character "^" as prefix for DESC sorting. Sample: ['^Age','Lastname']|
|limit|Int32?|**IN**-Param (optional)|
|skip|Int32?|**IN**-Param (optional)|
**return value:** Guid[] *(array)*



## .GetEntityRefsBySearchExpression
NOTE: this method can only be used, if the 'SupportsStringBaseSearchExpressions'-Capability is given for this repository!
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|searchExpression|String|**IN**-Param (required)|
|sortedBy|String[] *(array)*|**IN**-Param (required): An array of field names to be used for sorting the results (before 'limit' and 'skip' is processed). Use the character "^" as prefix for DESC sorting. Sample: ['^Age','Lastname']|
|limit|Int32?|**IN**-Param (optional)|
|skip|Int32?|**IN**-Param (optional)|
**return value:** Guid[] *(array)*



## .GetEntityRefsByKey
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|keysToLoad|Guid[] *(array)*|**IN**-Param (required)|
**return value:** Guid[] *(array)*



## .GetEntities
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|filter|[ExpressionTree](#ExpressionTree)|**IN**-Param (required): (from 'FUSE-fx.RepositoryContract')|
|sortedBy|String[] *(array)*|**IN**-Param (required): An array of field names to be used for sorting the results (before 'limit' and 'skip' is processed). Use the character "^" as prefix for DESC sorting. Sample: ['^Age','Lastname']|
|limit|Int32?|**IN**-Param (optional)|
|skip|Int32?|**IN**-Param (optional)|
**return value:** [StudyExecutionScope](#StudyExecutionScope)[] *(array)*



## .GetEntitiesBySearchExpression
NOTE: this method can only be used, if the 'SupportsStringBaseSearchExpressions'-Capability is given for this repository!
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|searchExpression|String|**IN**-Param (required)|
|sortedBy|String[] *(array)*|**IN**-Param (required): An array of field names to be used for sorting the results (before 'limit' and 'skip' is processed). Use the character "^" as prefix for DESC sorting. Sample: ['^Age','Lastname']|
|limit|Int32?|**IN**-Param (optional)|
|skip|Int32?|**IN**-Param (optional)|
**return value:** [StudyExecutionScope](#StudyExecutionScope)[] *(array)*



## .GetEntitiesByKey
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|keysToLoad|Guid[] *(array)*|**IN**-Param (required)|
**return value:** [StudyExecutionScope](#StudyExecutionScope)[] *(array)*



## .GetEntityFields
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|filter|[ExpressionTree](#ExpressionTree)|**IN**-Param (required): (from 'FUSE-fx.RepositoryContract')|
|includedFieldNames|String[] *(array)*|**IN**-Param (required): An array of field names to be loaded|
|sortedBy|String[] *(array)*|**IN**-Param (required): An array of field names to be used for sorting the results (before 'limit' and 'skip' is processed). Use the character "^" as prefix for DESC sorting. Sample: ['^Age','Lastname']|
|limit|Int32?|**IN**-Param (optional)|
|skip|Int32?|**IN**-Param (optional)|
**return value:** String[] *(array)*



## .GetEntityFieldsBySearchExpression
NOTE: this method can only be used, if the 'SupportsStringBaseSearchExpressions'-Capability is given for this repository!
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|searchExpression|String|**IN**-Param (required)|
|includedFieldNames|String[] *(array)*|**IN**-Param (required): An array of field names to be loaded|
|sortedBy|String[] *(array)*|**IN**-Param (required): An array of field names to be used for sorting the results (before 'limit' and 'skip' is processed). Use the character "^" as prefix for DESC sorting. Sample: ['^Age','Lastname']|
|limit|Int32?|**IN**-Param (optional)|
|skip|Int32?|**IN**-Param (optional)|
**return value:** String[] *(array)*



## .GetEntityFieldsByKey
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|keysToLoad|Guid[] *(array)*|**IN**-Param (required)|
|includedFieldNames|String[] *(array)*|**IN**-Param (required)|
**return value:** String[] *(array)*



## .CountAll
no parameters
**return value:** Int32



## .Count
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|filter|[ExpressionTree](#ExpressionTree)|**IN**-Param (required): (from 'FUSE-fx.RepositoryContract')|
**return value:** Int32



## .CountBySearchExpression
NOTE: this method can only be used, if the 'SupportsStringBaseSearchExpressions'-Capability is given for this repository!
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|searchExpression|String|**IN**-Param (required)|
**return value:** Int32



## .ContainsKey
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|key|Guid|**IN**-Param (required)|
**return value:** Boolean



## .AddOrUpdateEntityFields
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|fields|*Dict*<String,Object>|**IN**-Param (required)|
**return value:** *Dict*<String,Object>



## .AddOrUpdateEntity
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|entity|[StudyExecutionScope](#StudyExecutionScope)|**IN**-Param (required)|
**return value:** [StudyExecutionScope](#StudyExecutionScope)



## .TryUpdateEntityFields
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|fields|*Dict*<String,Object>|**IN**-Param (required)|
**return value:** *Dict*<String,Object>



## .TryUpdateEntity
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|entity|[StudyExecutionScope](#StudyExecutionScope)|**IN**-Param (required)|
**return value:** [StudyExecutionScope](#StudyExecutionScope)



## .TryAddEntity
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|entity|[StudyExecutionScope](#StudyExecutionScope)|**IN**-Param (required)|
**return value:** Guid



## .MassupdateByKeys
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|keysToUpdate|Guid[] *(array)*|**IN**-Param (required)|
|fields|*Dict*<String,Object>|**IN**-Param (required)|
**return value:** Guid[] *(array)*



## .Massupdate
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|filter|[ExpressionTree](#ExpressionTree)|**IN**-Param (required): (from 'FUSE-fx.RepositoryContract')|
|fields|*Dict*<String,Object>|**IN**-Param (required)|
**return value:** Guid[] *(array)*



## .MassupdateBySearchExpression
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|searchExpression|String|**IN**-Param (required)|
|fields|*Dict*<String,Object>|**IN**-Param (required)|
**return value:** Guid[] *(array)*



## .TryDeleteEntities
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|keysToDelete|Guid[] *(array)*|**IN**-Param (required)|
**return value:** Guid[] *(array)*



## .TryUpdateKey
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|currentKey|Guid|**IN**-Param (required)|
|newKey|Guid|**IN**-Param (required)|
**return value:** Boolean
# TreatmentStore
Provides CRUD access to stored Treatments (based on schema version '1.5.0')

### Methods:



## .GetOriginIdentity
Returns an string, representing the "Identity" of the current origin.
This can be used to discriminate multiple source repos.
(usually it should be related to a SCOPE like {DbServer}+{DbName/Schema}+{EntityName})
NOTE: This is an technical disciminator and it is not required, that it is an human-readable
"frieldly-name". It can just be an Hash or Uid, so its NOT RECOMMENDED to use it as display label!
no parameters
**return value:** String



## .GetCapabilities
Returns an property bag which holds information about the implemented/supported capabilities of this IRepository.
no parameters
**return value:** [RepositoryCapabilities](#RepositoryCapabilities)



## .GetEntityRefs
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|filter|[ExpressionTree](#ExpressionTree)|**IN**-Param (required): (from 'FUSE-fx.RepositoryContract')|
|sortedBy|String[] *(array)*|**IN**-Param (required): An array of field names to be used for sorting the results (before 'limit' and 'skip' is processed). Use the character "^" as prefix for DESC sorting. Sample: ['^Age','Lastname']|
|limit|Int32?|**IN**-Param (optional)|
|skip|Int32?|**IN**-Param (optional)|
**return value:** Guid[] *(array)*



## .GetEntityRefsBySearchExpression
NOTE: this method can only be used, if the 'SupportsStringBaseSearchExpressions'-Capability is given for this repository!
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|searchExpression|String|**IN**-Param (required)|
|sortedBy|String[] *(array)*|**IN**-Param (required): An array of field names to be used for sorting the results (before 'limit' and 'skip' is processed). Use the character "^" as prefix for DESC sorting. Sample: ['^Age','Lastname']|
|limit|Int32?|**IN**-Param (optional)|
|skip|Int32?|**IN**-Param (optional)|
**return value:** Guid[] *(array)*



## .GetEntityRefsByKey
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|keysToLoad|Guid[] *(array)*|**IN**-Param (required)|
**return value:** Guid[] *(array)*



## .GetEntities
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|filter|[ExpressionTree](#ExpressionTree)|**IN**-Param (required): (from 'FUSE-fx.RepositoryContract')|
|sortedBy|String[] *(array)*|**IN**-Param (required): An array of field names to be used for sorting the results (before 'limit' and 'skip' is processed). Use the character "^" as prefix for DESC sorting. Sample: ['^Age','Lastname']|
|limit|Int32?|**IN**-Param (optional)|
|skip|Int32?|**IN**-Param (optional)|
**return value:** [Treatment](#Treatment)[] *(array)*



## .GetEntitiesBySearchExpression
NOTE: this method can only be used, if the 'SupportsStringBaseSearchExpressions'-Capability is given for this repository!
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|searchExpression|String|**IN**-Param (required)|
|sortedBy|String[] *(array)*|**IN**-Param (required): An array of field names to be used for sorting the results (before 'limit' and 'skip' is processed). Use the character "^" as prefix for DESC sorting. Sample: ['^Age','Lastname']|
|limit|Int32?|**IN**-Param (optional)|
|skip|Int32?|**IN**-Param (optional)|
**return value:** [Treatment](#Treatment)[] *(array)*



## .GetEntitiesByKey
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|keysToLoad|Guid[] *(array)*|**IN**-Param (required)|
**return value:** [Treatment](#Treatment)[] *(array)*



## .GetEntityFields
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|filter|[ExpressionTree](#ExpressionTree)|**IN**-Param (required): (from 'FUSE-fx.RepositoryContract')|
|includedFieldNames|String[] *(array)*|**IN**-Param (required): An array of field names to be loaded|
|sortedBy|String[] *(array)*|**IN**-Param (required): An array of field names to be used for sorting the results (before 'limit' and 'skip' is processed). Use the character "^" as prefix for DESC sorting. Sample: ['^Age','Lastname']|
|limit|Int32?|**IN**-Param (optional)|
|skip|Int32?|**IN**-Param (optional)|
**return value:** String[] *(array)*



## .GetEntityFieldsBySearchExpression
NOTE: this method can only be used, if the 'SupportsStringBaseSearchExpressions'-Capability is given for this repository!
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|searchExpression|String|**IN**-Param (required)|
|includedFieldNames|String[] *(array)*|**IN**-Param (required): An array of field names to be loaded|
|sortedBy|String[] *(array)*|**IN**-Param (required): An array of field names to be used for sorting the results (before 'limit' and 'skip' is processed). Use the character "^" as prefix for DESC sorting. Sample: ['^Age','Lastname']|
|limit|Int32?|**IN**-Param (optional)|
|skip|Int32?|**IN**-Param (optional)|
**return value:** String[] *(array)*



## .GetEntityFieldsByKey
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|keysToLoad|Guid[] *(array)*|**IN**-Param (required)|
|includedFieldNames|String[] *(array)*|**IN**-Param (required)|
**return value:** String[] *(array)*



## .CountAll
no parameters
**return value:** Int32



## .Count
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|filter|[ExpressionTree](#ExpressionTree)|**IN**-Param (required): (from 'FUSE-fx.RepositoryContract')|
**return value:** Int32



## .CountBySearchExpression
NOTE: this method can only be used, if the 'SupportsStringBaseSearchExpressions'-Capability is given for this repository!
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|searchExpression|String|**IN**-Param (required)|
**return value:** Int32



## .ContainsKey
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|key|Guid|**IN**-Param (required)|
**return value:** Boolean



## .AddOrUpdateEntityFields
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|fields|*Dict*<String,Object>|**IN**-Param (required)|
**return value:** *Dict*<String,Object>



## .AddOrUpdateEntity
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|entity|[Treatment](#Treatment)|**IN**-Param (required)|
**return value:** [Treatment](#Treatment)



## .TryUpdateEntityFields
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|fields|*Dict*<String,Object>|**IN**-Param (required)|
**return value:** *Dict*<String,Object>



## .TryUpdateEntity
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|entity|[Treatment](#Treatment)|**IN**-Param (required)|
**return value:** [Treatment](#Treatment)



## .TryAddEntity
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|entity|[Treatment](#Treatment)|**IN**-Param (required)|
**return value:** Guid



## .MassupdateByKeys
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|keysToUpdate|Guid[] *(array)*|**IN**-Param (required)|
|fields|*Dict*<String,Object>|**IN**-Param (required)|
**return value:** Guid[] *(array)*



## .Massupdate
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|filter|[ExpressionTree](#ExpressionTree)|**IN**-Param (required): (from 'FUSE-fx.RepositoryContract')|
|fields|*Dict*<String,Object>|**IN**-Param (required)|
**return value:** Guid[] *(array)*



## .MassupdateBySearchExpression
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|searchExpression|String|**IN**-Param (required)|
|fields|*Dict*<String,Object>|**IN**-Param (required)|
**return value:** Guid[] *(array)*



## .TryDeleteEntities
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|keysToDelete|Guid[] *(array)*|**IN**-Param (required)|
**return value:** Guid[] *(array)*



## .TryUpdateKey
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|currentKey|Guid|**IN**-Param (required)|
|newKey|Guid|**IN**-Param (required)|
**return value:** Boolean



# Models:



## DataRecording
#### Fields:
|Name|Type|Description|
|----|----|-----------|
|TaskGuid|Guid|(required): a global unique id of a concrete study-task execution which is usually originated at the primary CRF or study management system ('SMS')|
|VisitGuid|Guid|(required): the guid of the visit in which this task was executed|
|DataRecordingName|String|(required): unique invariant name of ths task-procedure as defined in the 'StudyWorkflowDefinition' (originated from the sponsor)|
|UniqueExecutionName|String|(required): title of the task execution as defined in the 'StudyWorkflowDefinition' (originated from the sponsor)|
|ScheduledDateTimeUtc|DateTime|(optional): the estimated date when the visit is scheduled *this field is optional|
|ExecutionDateTimeUtc|DateTime|(optional): the real time, when the data was recorded *this field is optional|
|ExecutionState|Int32|(required): 0=Unscheduled / 1=Sheduled / 2=Executed / 3=AbortDuringExecution / 4=Skipped / 5=Removed|
|DataSchemaUrl|String|(required): schema-url of the data which were stored inside of the 'RecordedData' field|
|RecordedData|String|(required): RAW data, in the schema as defined at the 'DataSchemaUrl'|
|NotesRegardingOutcome|String|(optional): additional notes regarding this dedcated execution (supplied by the execution person) *this field is optional (use null as value)|
|ExtendedMetaData|String|(required): optional structure (in JSON-format) containing additional metadata regarding this record, which can be used by 'StudyExecutionSystems' to extend the schema|
|ExecutingPerson|String|(optional): *this field is optional (use null as value)|



## DrugApplyment
#### Fields:
|Name|Type|Description|
|----|----|-----------|
|TaskGuid|Guid|(required): a global unique id of a concrete study-task execution which is usually originated at the primary CRF or study management system ('SMS')|
|VisitGuid|Guid|(required): the guid of the visit in which this task was executed|
|DrugApplymentName|String|(required): unique invariant name of the study itself as defined in the 'StudyWorkflowDefinition' (originated from the sponsor)|
|UniqueExecutionName|String|(required): title of the task execution as defined in the 'StudyWorkflowDefinition' (originated from the sponsor)|
|ScheduledDateTimeUtc|DateTime|(optional): the estimated time when the drug applyment is scheduled *this field is optional|
|ExecutionDateTimeUtc|DateTime|(optional): the real date, when the visits was executed *this field is optional|
|ExecutionState|Int32|(required): 0=Unscheduled / 1=Sheduled / 2=Executed / 3=AbortDuringExecution / 4=Skipped / 5=Removed|
|DrugName|String|(required): name of the drug|
|DrugDoseMgPerUnitMg|Decimal|(required): dose (mg) which is inside of one unit|
|AppliedUnits|Decimal|(required): amount of applied units|
|NotesRegardingOutcome|String|(optional): additional notes regarding this dedcated execution (supplied by the execution person) *this field is optional (use null as value)|
|ExtendedMetaData|String|(required): optional structure (in JSON-format) containing additional metadata regarding this record, which can be used by 'StudyExecutionSystems' to extend the schema|
|ExecutingPerson|String|(optional): *this field is optional (use null as value)|



## StudyEvent
#### Fields:
|Name|Type|Description|
|----|----|-----------|
|EventGuid|Guid|(required): a global unique id of a concrete study-event occurrence which is usually originated at the primary CRF or study management system ('SMS')|
|ParticipantIdentifier|String|(required): identity of the patient which can be a randomization or screening number (the exact semantic is defined per study)|
|StudyExecutionIdentifier|Guid|(required): a global unique id of a concrete study execution (dedicated to a concrete institute) which is usually originated at the primary CRF or study management system ('SMS')|
|StudyEventName|String|(required): unique invariant name of the event as defined in the 'StudyWorkflowDefinition' (originated from the sponsor)|
|ExtendedMetaData|String|(optional): optional structure (in JSON-format) containing additional metadata regarding this record, which can be used by 'StudyExecutionSystems' to extend the schema *this field is optional (use null as value)|
|OccourrenceDateTimeUtc|DateTime|(required)|
|CauseInfo|String|(required)|
|AdditionalNotes|String|(optional): additional notes (supplied by the execution person) *this field is optional (use null as value)|



## StudyExecutionScope
#### Fields:
|Name|Type|Description|
|----|----|-----------|
|StudyUid|Guid|(required): a global unique id of a concrete study execution (dedicated to a concrete institute) which is usually originated at the primary CRF or study management system ('SMS')|
|ExecutingInstituteIdentifier|String|(required): the institute which is executing the study (this should be an invariant technical representation of the company name or a guid)|
|StudyWorkflowName|String|(required): the official invariant name of the study as given by the sponsor *this field has a max length of 100|
|StudyWorkflowVersion|String|(required): version of the workflow *this field has a max length of 20|
|ExtendedMetaData|String|(optional): optional structure (in JSON-format) containing additional metadata regarding this record, which can be used by 'StudyExecutionSystems' to extend the schema *this field is optional (use null as value)|



## Treatment
#### Fields:
|Name|Type|Description|
|----|----|-----------|
|TaskGuid|Guid|(required): a global unique id of a concrete study-task execution which is usually originated at the primary CRF or study management system ('SMS')|
|VisitGuid|Guid|(required): the guid of the visit in which this task was executed|
|TreatmentName|String|(required): unique invariant name of ths task-procedure as defined in the 'StudyWorkflowDefinition' (originated from the sponsor)|
|UniqueExecutionName|String|(required): title of the task execution as defined in the 'StudyWorkflowDefinition' (originated from the sponsor)|
|ScheduledDateTimeUtc|DateTime|(optional): the estimated time when the treatment is scheduled *this field is optional|
|ExecutionDateTimeUtc|DateTime|(optional): the real time, when the treatment was executed *this field is optional|
|ExecutionState|Int32|(required): 0=Unscheduled / 1=Sheduled / 2=Executed / 3=AbortDuringExecution / 4=Skipped / 5=Removed|
|NotesRegardingOutcome|String|(optional): additional notes regarding this dedcated execution (supplied by the execution person) *this field is optional (use null as value)|
|ExtendedMetaData|String|(required): optional structure of additional metadata regarding this record in JSON-format, which can be used by study execution systems to extend the schema|
|ExecutingPerson|String|(optional): *this field is optional (use null as value)|



## Visit
#### Fields:
|Name|Type|Description|
|----|----|-----------|
|VisitGuid|Guid|(required): a global unique id of a concrete study-visit execution which is usually originated at the primary CRF or study management system ('SMS')|
|ParticipantIdentifier|String|(required): identity of the patient which can be a randomization or screening number (the exact semantic is defined per study) *this field has a max length of 50|
|StudyUid|Guid|(required): a global unique id of a concrete study execution (dedicated to a concrete institute) which is usually originated at the primary CRF or study management system ('SMS')|
|VisitProcedureName|String|(required): unique invariant name of the visit-procedure as defined in the 'StudyWorkflowDefinition' (originated from the sponsor)|
|UniqueExecutionName|String|(required): unique title of the visit execution as defined in the 'StudyWorkflowDefinition' (originated from the sponsor)|
|ScheduledDateUtc|DateTime|(optional): the estimated date when the visit is scheduled for execution *this field is optional|
|ExecutionDateUtc|DateTime|(optional): the real date, when the visits was executed *this field is optional|
|ExecutionState|Int32|(required): 0=Unscheduled / 1=Sheduled / 2=Executed / 3=AbortDuringExecution / 4=Skipped / 5=Removed|
|ExtendedMetaData|String|(optional): optional structure (in JSON-format) containing additional metadata regarding this record, which can be used by 'StudyExecutionSystems' to extend the schema *this field is optional (use null as value)|
|ExecutingPerson|String|(optional): *this field is optional (use null as value)|



## ExpressionTree
(from 'FUSE-fx.RepositoryContract')
#### Fields:
|Name|Type|Description|
|----|----|-----------|
|MatchAll|Boolean|(optional): true: AND-Relation | false: OR-Relation|
|Negate|Boolean|(optional): Negates the result|
|Predicates|*List*<[FieldPredicate](#FieldPredicate)>|(optional): Can contain ATOMIC predicates (FieldName~Value). NOTE: If there is more than one predicate with the same FieldName in combination with MatchAll=true, then this will lead to an subordinated OR-Expression dedicated to this field.|
|SubTree|*List*<[ExpressionTree](#ExpressionTree)>|(optional)|



## FieldPredicate
(from 'FUSE-fx.RepositoryContract')
#### Fields:
|Name|Type|Description|
|----|----|-----------|
|FieldName|String|(optional)|
|Operator|String|(optional): Wellknown operators like '==' '!=' (see 'FieldOperators'-Contants).|
|Value|Object|(optional): The value to match! (NOTE: in th special case of using the 'in' operator, the given 'value' to match must NOT be scalar! Instead it must be an ARRAY. A match is given if a field equals to at least one value within that array.)|



## RepositoryCapabilities
(from 'FUSE-fx.RepositoryContract')
An property bag which holds information about the implemented/supported
capabilities of an IRepository.
#### Fields:
|Name|Type|Description|
|----|----|-----------|
|CanReadContent|Boolean|(optional): Indicates, that this repository offers access to load entities(classes) or some their entity fields (if this is false, then only EntityRefs are accessable)|
|CanUpdateContent|Boolean|(optional)|
|CanAddNewEntities|Boolean|(optional)|
|CanDeleteEntities|Boolean|(optional)|
|SupportsMassupdate|Boolean|(optional)|
|SupportsKeyUpdate|Boolean|(optional)|
|SupportsStringBasedSearchExpressions|Boolean|(optional)|
|RequiresExternalKeys|Boolean|(optional): Indicates, that entities can only be added to this repository, if ther key fields are pre-initialized by the caller. If false, then the persistence-technology behind the repository implementation will auto-generate a new key by its own.|
