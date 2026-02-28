using Microsoft.EntityFrameworkCore;
using Momentum.Persistence.Interfaces;
using Momentum.Persistence.Context;
using System.Linq.Expressions;

namespace Momentum.Persistence.Repositories
{
    public class GenericRepository<T> : IGenericRepository<T> where T : class
    {
        protected readonly MomentumDbContext _context;
        private readonly DbSet<T> _dbSet;

        public GenericRepository(MomentumDbContext context)
        {
            _context = context;
            _dbSet = _context.Set<T>();
        }

        // READ
        public T? GetById(Guid id) => _dbSet.Find(id);

        public async Task<T?> GetByIdAsync(Guid id) => await _dbSet.FindAsync(id);

        public IEnumerable<T> GetAll() => _dbSet.ToList();

        public async Task<IEnumerable<T>> GetAllAsync() => await _dbSet.ToListAsync();

        public IEnumerable<T> Find(Expression<Func<T, bool>> predicate)
            => _dbSet.Where(predicate).ToList();

        public async Task<IEnumerable<T>> FindAsync(Expression<Func<T, bool>> predicate)
            => await _dbSet.Where(predicate).ToListAsync();


        // INSERT
        public void Add(T entity) => _dbSet.Add(entity);

        public async Task AddAsync(T entity) => await _dbSet.AddAsync(entity);

        public void AddMultiple(IEnumerable<T> entities) => _dbSet.AddRange(entities);

        public async Task AddMultipleAsync(IEnumerable<T> entities) => await _dbSet.AddRangeAsync(entities);


        // UPDATE
        public void Update(T entity) => _dbSet.Update(entity);

        public void UpdateMultiple(IEnumerable<T> entities) => _dbSet.UpdateRange(entities);


        // DELETE
        public void Remove(T entity) => _dbSet.Remove(entity);

        public void RemoveMultiple(IEnumerable<T> entities) => _dbSet.RemoveRange(entities);
    }
}
