using AutoMapper;
using FitnessNotes.DataAccess;

namespace FitnessNotes.BusinessLogic
{
    public class ServiceDependencies
    {
        public UnitOfWork UnitOfWork { get; set; }
        public IMapper Mapper { get; set; }

        public ServiceDependencies(IMapper mapper, UnitOfWork unitOfWork)
        {
            UnitOfWork = unitOfWork;
            Mapper = mapper;
        }
    }
}
