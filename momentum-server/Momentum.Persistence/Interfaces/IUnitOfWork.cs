namespace Momentum.Persistence.Interfaces
{
    public interface IUnitOfWork : IDisposable
    {
        IGenericRepository<T> GetRepository<T>() where T : class;

        int Commit();
        Task<int> CommitAsync();
    }
}