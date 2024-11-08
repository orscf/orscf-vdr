using MedicalResearch.VisitData.Model;
using System;
using System.ComponentModel.DataAnnotations;
using System.Collections.ObjectModel;

namespace MedicalResearch.VisitData.StoreAccess {

  public static class ApiVersion {
    public const string SemanticVersion = "1.5.0";
  }

  /// <summary> Provides CRUD access to stored DataRecordings (based on schema version '1.5.0') </summary>
  public partial interface IDataRecordingStore : System.Data.Fuse.IRepository<DataRecording, Guid> {
  }

  /// <summary> Provides CRUD access to stored Visits (based on schema version '1.5.0') </summary>
  public partial interface IVisitStore : System.Data.Fuse.IRepository<Visit, Guid> {
  }

  /// <summary> Provides CRUD access to stored DrugApplyments (based on schema version '1.5.0') </summary>
  public partial interface IDrugApplymentStore : System.Data.Fuse.IRepository<DrugApplyment, Guid> {
  }

  /// <summary> Provides CRUD access to stored StudyEvents (based on schema version '1.5.0') </summary>
  public partial interface IStudyEventStore : System.Data.Fuse.IRepository<StudyEvent, Guid> {
  }

  /// <summary> Provides CRUD access to stored StudyExecutionScopes (based on schema version '1.5.0') </summary>
  public partial interface IStudyExecutionScopeStore : System.Data.Fuse.IRepository<StudyExecutionScope, Guid> {
  }

  /// <summary> Provides CRUD access to stored Treatments (based on schema version '1.5.0') </summary>
  public partial interface ITreatmentStore : System.Data.Fuse.IRepository<Treatment, Guid> {
  }

}
