using System.Linq.Expressions;

namespace Momentum.Persistence.Interfaces
{
    public interface IGenericRepository<T> where T : class
    {
        // READ
        T? GetById(Guid id);
        Task<T?> GetByIdAsync(Guid id);
        IEnumerable<T> GetAll();
        Task<IEnumerable<T>> GetAllAsync();
        IEnumerable<T> Find(Expression<Func<T, bool>> predicate);
        Task<IEnumerable<T>> FindAsync(Expression<Func<T, bool>> predicate);

        // INSERT
        void Add(T entity);
        Task AddAsync(T entity);
        void AddMultiple(IEnumerable<T> entities);
        Task AddMultipleAsync(IEnumerable<T> entities);

        // UPDATE
        void Update(T entity);
        void UpdateMultiple(IEnumerable<T> entities);

        // DELETE
        void Remove(T entity);
        void RemoveMultiple(IEnumerable<T> entities);
    }
}
