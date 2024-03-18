using AutoMapper;
using FitnessNotes.BusinessLogic;
using FitnessNotes.BusinessLogic.Implementation.Workouts.Models;
using FitnessNotes.DataAccess.Entities;
using System.Data.Entity;

namespace FitnessNotes.BusinessLogic.Implementation.Workouts
{
    public class WorkoutService : BaseService
    {
        public WorkoutService(ServiceDependencies dependencies)
            : base(dependencies)
        {
        }

        public WorkoutModel GetWorkoutById(int id)
        {
            var workout = UnitOfWork.Workouts
                .GetAll()
                .SingleOrDefault(workout => workout.Id == id);

            if (workout != null)
            {
                return null;
            }

            var result = Mapper.Map<Workout, WorkoutModel> (workout);
            return result;
        }

        //public async Task<WorkoutModel>? UpdateWorkout(int id, WorkoutModel workout)
        //{
        //    var workoutEntity = await UnitOfWork.Workouts
        //        .GetAll()
        //        .FirstOrDefaultAsync(workout => workout.Id == id);
            
        //    if (workoutEntity == null)
        //    {
        //        return null;
        //    }

        //    var workoutModel = Mapper.Map<WorkoutModel, Workout>(workoutEntity);

        //    UnitOfWork.Workouts
        //        .Update(workoutToBeUpdated);
        //}
    }
}