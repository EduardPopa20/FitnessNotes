using AutoMapper;
using FitnessNotes.Common;
using FitnessNotes.DataAccess;
using System;
using System.Transactions;

namespace FitnessNotes.BusinessLogic
{
    public class BaseService
    {
        protected readonly UnitOfWork UnitOfWork;
        protected readonly IMapper Mapper;

        public BaseService(ServiceDependencies serviceDependencies)
        {
            UnitOfWork = serviceDependencies.UnitOfWork;
            Mapper = serviceDependencies.Mapper;
        }

        protected TResult ExecuteInTransaction<TResult>(Func<UnitOfWork, TResult> func)
        {
            if (func == null)
            {
                throw new ArgumentNullException(nameof(func));
            }

            using (var transactionScope = new TransactionScope())
            {
                var result = func(UnitOfWork);

                transactionScope.Complete();

                return result;
            }
        }

        protected void ExecuteInTransaction(Action<UnitOfWork> action)
        {
            if (action == null)
            {
                throw new ArgumentNullException(nameof(action));
            }

            using (var transactionScope = new TransactionScope())
            {
                action(UnitOfWork);

                transactionScope.Complete();
            }
        }
    }
}
