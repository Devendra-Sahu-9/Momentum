using Momentum.Persistence.Context;
using Momentum.Persistence.Interfaces;

namespace Momentum.Persistence.Repositories
{
    public class UnitOfWork : IUnitOfWork
    {
        private readonly MomentumDbContext _context;

        public UnitOfWork(MomentumDbContext context)
        {
            _context = context;
        }

        public IGenericRepository<T> GetRepository<T>() where T : class
        {
            return new GenericRepository<T>(_context);
        }

        public int Commit() => _context.SaveChanges();

        public async Task<int> CommitAsync() => await _context.SaveChangesAsync();

        public void Dispose() => _context.Dispose();
    }
}
