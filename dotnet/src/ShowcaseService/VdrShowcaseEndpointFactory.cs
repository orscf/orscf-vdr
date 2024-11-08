using System;

namespace MedicalResearch.VisitData {

  /// <summary>
  /// Provides convenience for bulk-registering factories for all endpoints, for example when hosting them via asp.net core webapi
  /// </summary>
  public static class VdrShowcaseEndpointFactory {

    public delegate void GetFactoryMethodsPerEndpointCallback(Type contractType, Func<object> endpointFactory);

    public static void GetFactoryMethodsPerEndpoint(GetFactoryMethodsPerEndpointCallback callback) {

      callback.Invoke(typeof(StoreAccess.IStudyExecutionScopeStore), () => new MedicalResearch.VisitData.StoreAccess.StudyExecutionScopeStore());
      callback.Invoke(typeof(StoreAccess.IVisitStore), () => new StoreAccess.VisitStore());
      callback.Invoke(typeof(StoreAccess.IDrugApplymentStore), () => new StoreAccess.DrugApplymentStore());
      callback.Invoke(typeof(StoreAccess.ITreatmentStore), () => new StoreAccess.TreatmentStore());
      callback.Invoke(typeof(StoreAccess.IDataRecordingStore), () => new StoreAccess.DataRecordingStore());

    }

  }

}
