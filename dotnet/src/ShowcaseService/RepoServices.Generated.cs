using MedicalResearch.VisitData.Model;
using System;
using System.Data.Fuse;
using System.Data.Fuse.Convenience;
using System.Data.Fuse.Ef;
using System.Data.Fuse.Ef.InstanceManagement;

namespace MedicalResearch.VisitData.StoreAccess {

  /// <summary> Provides CRUD access to stored DataRecordings (based on schema version '1.5.0') </summary>
  public class DataRecordingStore : ModelVsEntityRepository<DataRecording, MedicalResearch.VisitData.Persistence.DataRecordingEntity, Guid>, IDataRecordingStore {

    private static EfRepository<MedicalResearch.VisitData.Persistence.DataRecordingEntity, Guid> CreateInnerEfRepo() {
      IDbContextInstanceProvider dbContextInstanceProvider = new ShortLivingDbContextInstanceProvider<
        MedicalResearch.VisitData.Persistence.EF.VisitDataDbContext
      >();
      return new EfRepository<MedicalResearch.VisitData.Persistence.DataRecordingEntity, Guid>(dbContextInstanceProvider);
    }

    public DataRecordingStore() : base(
      CreateInnerEfRepo(), new ModelVsEntityParams<DataRecording, MedicalResearch.VisitData.Persistence.DataRecordingEntity>()
    ) {
    }

  }

  /// <summary> Provides CRUD access to stored Visits (based on schema version '1.5.0') </summary>
  public class VisitStore : ModelVsEntityRepository<Visit, MedicalResearch.VisitData.Persistence.VisitEntity, Guid>, IVisitStore {

    private static EfRepository<MedicalResearch.VisitData.Persistence.VisitEntity, Guid> CreateInnerEfRepo() {
      IDbContextInstanceProvider dbContextInstanceProvider = new ShortLivingDbContextInstanceProvider<
        MedicalResearch.VisitData.Persistence.EF.VisitDataDbContext
      >();
      return new EfRepository<MedicalResearch.VisitData.Persistence.VisitEntity, Guid>(dbContextInstanceProvider);
    }

    public VisitStore() : base(
      CreateInnerEfRepo(), new ModelVsEntityParams<Visit, MedicalResearch.VisitData.Persistence.VisitEntity>()
    ) {
    }

  }

  /// <summary> Provides CRUD access to stored DrugApplyments (based on schema version '1.5.0') </summary>
  public class DrugApplymentStore : ModelVsEntityRepository<DrugApplyment, MedicalResearch.VisitData.Persistence.DrugApplymentEntity, Guid>, IDrugApplymentStore {

    private static EfRepository<MedicalResearch.VisitData.Persistence.DrugApplymentEntity, Guid> CreateInnerEfRepo() {
      IDbContextInstanceProvider dbContextInstanceProvider = new ShortLivingDbContextInstanceProvider<
        MedicalResearch.VisitData.Persistence.EF.VisitDataDbContext
      >();
      return new EfRepository<MedicalResearch.VisitData.Persistence.DrugApplymentEntity, Guid>(dbContextInstanceProvider);
    }

    public DrugApplymentStore() : base(
      CreateInnerEfRepo(), new ModelVsEntityParams<DrugApplyment, MedicalResearch.VisitData.Persistence.DrugApplymentEntity>()
    ) {
    }

  }

  /// <summary> Provides CRUD access to stored StudyEvents (based on schema version '1.5.0') </summary>
  public class StudyEventStore : ModelVsEntityRepository<StudyEvent, MedicalResearch.VisitData.Persistence.StudyEventEntity, Guid>, IStudyEventStore {

    private static EfRepository<MedicalResearch.VisitData.Persistence.StudyEventEntity, Guid> CreateInnerEfRepo() {
      IDbContextInstanceProvider dbContextInstanceProvider = new ShortLivingDbContextInstanceProvider<
        MedicalResearch.VisitData.Persistence.EF.VisitDataDbContext
      >();
      return new EfRepository<MedicalResearch.VisitData.Persistence.StudyEventEntity, Guid>(dbContextInstanceProvider);
    }

    public StudyEventStore() : base(
      CreateInnerEfRepo(), new ModelVsEntityParams<StudyEvent, MedicalResearch.VisitData.Persistence.StudyEventEntity>()
    ) {
    }

  }

  /// <summary> Provides CRUD access to stored StudyExecutionScopes (based on schema version '1.5.0') </summary>
  public class StudyExecutionScopeStore : ModelVsEntityRepository<StudyExecutionScope, MedicalResearch.VisitData.Persistence.StudyExecutionScopeEntity, Guid>, IStudyExecutionScopeStore {

    private static EfRepository<MedicalResearch.VisitData.Persistence.StudyExecutionScopeEntity, Guid> CreateInnerEfRepo() {
      IDbContextInstanceProvider dbContextInstanceProvider = new ShortLivingDbContextInstanceProvider<
        MedicalResearch.VisitData.Persistence.EF.VisitDataDbContext
      >();
      return new EfRepository<MedicalResearch.VisitData.Persistence.StudyExecutionScopeEntity, Guid>(dbContextInstanceProvider);
    }

    public StudyExecutionScopeStore() : base(
      CreateInnerEfRepo(), new ModelVsEntityParams<StudyExecutionScope, MedicalResearch.VisitData.Persistence.StudyExecutionScopeEntity>()
    ) {
    }

  }

  /// <summary> Provides CRUD access to stored Treatments (based on schema version '1.5.0') </summary>
  public class TreatmentStore : ModelVsEntityRepository<Treatment, MedicalResearch.VisitData.Persistence.TreatmentEntity, Guid>, ITreatmentStore {

    private static EfRepository<MedicalResearch.VisitData.Persistence.TreatmentEntity, Guid> CreateInnerEfRepo() {
      IDbContextInstanceProvider dbContextInstanceProvider = new ShortLivingDbContextInstanceProvider<
        MedicalResearch.VisitData.Persistence.EF.VisitDataDbContext
      >();
      return new EfRepository<MedicalResearch.VisitData.Persistence.TreatmentEntity, Guid>(dbContextInstanceProvider);
    }

    public TreatmentStore() : base(
      CreateInnerEfRepo(), new ModelVsEntityParams<Treatment, MedicalResearch.VisitData.Persistence.TreatmentEntity>()
    ) {
    }

  }

}
