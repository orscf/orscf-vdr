using System;

namespace MedicalResearch.VisitData {

  /// <summary>
  /// Provides convenience for bulk-registering controllers for all endpoints, for example when hosting them via asp.net core webapi
  /// </summary>
  public static class VdrEndpointRegister {

    /// <summary></summary>
    /// <param name="contractType"></param>
    /// <param name="preferredRoute"> WITHOUT the version-prefix and WITHOUT leading or trailing slash!</param>
    public delegate void GetContractsPerEndpointCallback(Type contractType, string preferredRoute);

    public static void GetContractsPerEndpoint(GetContractsPerEndpointCallback callback) {

      callback.Invoke(typeof(StoreAccess.IStudyExecutionScopeStore), "store/StudyExecutionScope");
      callback.Invoke(typeof(StoreAccess.IVisitStore), "store/Visit");
      callback.Invoke(typeof(StoreAccess.IDrugApplymentStore), "store/DrugApplyment");
      callback.Invoke(typeof(StoreAccess.ITreatmentStore), "store/Treatment");
      callback.Invoke(typeof(StoreAccess.IDataRecordingStore), "store/DataRecording");

    }

  }

}
