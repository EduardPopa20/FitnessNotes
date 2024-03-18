using FitnessNotes.Common;
using FitnessNotes.DataAccess.Context;
using FitnessNotes.DataAccess.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FitnessNotes.DataAccess
{
    public class UnitOfWork
    {
        private readonly FitnessNotesContext _context;

        public UnitOfWork(FitnessNotesContext context)
        {
            _context = context;
        }

        private IRepository<User> users;
        public IRepository<User> Users =>
            users ??= new BaseRepository<User>(_context);

        private IRepository<FoodInfo> foodInfos;
        public IRepository<FoodInfo> FoodInfos => 
            foodInfos ??= new BaseRepository<FoodInfo>(_context);

        private IRepository<Workout> workouts;
        public IRepository<Workout> Workouts => 
            workouts ??= new BaseRepository<Workout>(_context);

        private IRepository<Role> roles;
        public IRepository<Role> Roles => 
            roles ??= new BaseRepository<Role>(_context);

        private IRepository<DefaultExercise> defaultExercises;
        public IRepository<DefaultExercise> DefaultExercises =>
            defaultExercises ??= new BaseRepository<DefaultExercise>(_context);

        private IRepository<FoodMeasurementUnit> foodMeasurementUnits;
        public IRepository<FoodMeasurementUnit> FoodMeasurementUnits => 
            foodMeasurementUnits ??= new BaseRepository<FoodMeasurementUnit>(_context);

        private IRepository<WorkoutExercise> workoutExercises;
        public IRepository<WorkoutExercise> WorkoutExercises => 
            workoutExercises ??= new BaseRepository<WorkoutExercise>(_context);


        public void SaveChanges()
        {
            _context.SaveChanges();
        }
    }
}
