using MedicalResearch.VisitData.Model;
using System;
using System.Data.Fuse;
using System.Data.Fuse.Convenience;
using System.Data.Fuse.Ef;

namespace MedicalResearch.VisitData.StoreAccess {

  /// <summary> Provides CRUD access to stored DataRecordings (based on schema version '1.5.0') </summary>
  public class DataRecordingStore : ModelVsEntityRepository<DataRecording, MedicalResearch.VisitData.Persistence.DataRecordingEntity, Guid>, IDataRecordingStore {

    private static EfRepository<MedicalResearch.VisitData.Persistence.DataRecordingEntity, Guid> CreateInnerEfRepo() {
      var context = new MedicalResearch.VisitData.Persistence.EF.VisitDataDbContext();
      return new EfRepository<MedicalResearch.VisitData.Persistence.DataRecordingEntity, Guid>(context);
    }

    public DataRecordingStore() : base(
      CreateInnerEfRepo(), new ModelVsEntityParams<DataRecording, MedicalResearch.VisitData.Persistence.DataRecordingEntity>()
    ) {
    }

  }

  /// <summary> Provides CRUD access to stored Visits (based on schema version '1.5.0') </summary>
  public class VisitStore : ModelVsEntityRepository<Visit, MedicalResearch.VisitData.Persistence.VisitEntity, Guid>, IVisitStore {

    private static EfRepository<MedicalResearch.VisitData.Persistence.VisitEntity, Guid> CreateInnerEfRepo() {
      var context = new MedicalResearch.VisitData.Persistence.EF.VisitDataDbContext();
      return new EfRepository<MedicalResearch.VisitData.Persistence.VisitEntity, Guid>(context);
    }

    public VisitStore() : base(
      CreateInnerEfRepo(), new ModelVsEntityParams<Visit, MedicalResearch.VisitData.Persistence.VisitEntity>()
    ) {
    }

  }

  /// <summary> Provides CRUD access to stored DrugApplyments (based on schema version '1.5.0') </summary>
  public class DrugApplymentStore : ModelVsEntityRepository<DrugApplyment, MedicalResearch.VisitData.Persistence.DrugApplymentEntity, Guid>, IDrugApplymentStore {

    private static EfRepository<MedicalResearch.VisitData.Persistence.DrugApplymentEntity, Guid> CreateInnerEfRepo() {
      var context = new MedicalResearch.VisitData.Persistence.EF.VisitDataDbContext();
      return new EfRepository<MedicalResearch.VisitData.Persistence.DrugApplymentEntity, Guid>(context);
    }

    public DrugApplymentStore() : base(
      CreateInnerEfRepo(), new ModelVsEntityParams<DrugApplyment, MedicalResearch.VisitData.Persistence.DrugApplymentEntity>()
    ) {
    }

  }

  /// <summary> Provides CRUD access to stored StudyEvents (based on schema version '1.5.0') </summary>
  public class StudyEventStore : ModelVsEntityRepository<StudyEvent, MedicalResearch.VisitData.Persistence.StudyEventEntity, Guid>, IStudyEventStore {

    private static EfRepository<MedicalResearch.VisitData.Persistence.StudyEventEntity, Guid> CreateInnerEfRepo() {
      var context = new MedicalResearch.VisitData.Persistence.EF.VisitDataDbContext();
      return new EfRepository<MedicalResearch.VisitData.Persistence.StudyEventEntity, Guid>(context);
    }

    public StudyEventStore() : base(
      CreateInnerEfRepo(), new ModelVsEntityParams<StudyEvent, MedicalResearch.VisitData.Persistence.StudyEventEntity>()
    ) {
    }

  }

  /// <summary> Provides CRUD access to stored StudyExecutionScopes (based on schema version '1.5.0') </summary>
  public class StudyExecutionScopeStore : ModelVsEntityRepository<StudyExecutionScope, MedicalResearch.VisitData.Persistence.StudyExecutionScopeEntity, Guid>, IStudyExecutionScopeStore {

    private static EfRepository<MedicalResearch.VisitData.Persistence.StudyExecutionScopeEntity, Guid> CreateInnerEfRepo() {
      var context = new MedicalResearch.VisitData.Persistence.EF.VisitDataDbContext();
      return new EfRepository<MedicalResearch.VisitData.Persistence.StudyExecutionScopeEntity, Guid>(context);
    }

    public StudyExecutionScopeStore() : base(
      CreateInnerEfRepo(), new ModelVsEntityParams<StudyExecutionScope, MedicalResearch.VisitData.Persistence.StudyExecutionScopeEntity>()
    ) {
    }

  }

  /// <summary> Provides CRUD access to stored Treatments (based on schema version '1.5.0') </summary>
  public class TreatmentStore : ModelVsEntityRepository<Treatment, MedicalResearch.VisitData.Persistence.TreatmentEntity, Guid>, ITreatmentStore {

    private static EfRepository<MedicalResearch.VisitData.Persistence.TreatmentEntity, Guid> CreateInnerEfRepo() {
      var context = new MedicalResearch.VisitData.Persistence.EF.VisitDataDbContext();
      return new EfRepository<MedicalResearch.VisitData.Persistence.TreatmentEntity, Guid>(context);
    }

    public TreatmentStore() : base(
      CreateInnerEfRepo(), new ModelVsEntityParams<Treatment, MedicalResearch.VisitData.Persistence.TreatmentEntity>()
    ) {
    }

  }

}
