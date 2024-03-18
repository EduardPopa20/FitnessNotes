using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FitnessNotes.Common
{
    public interface IRepository<TEntity> where TEntity : class, IEntity    
    {
        IQueryable<TEntity> GetAll();
        TEntity Insert (TEntity entity);
        TEntity Update (TEntity entity);
        void Delete (TEntity entity);

    }
}
