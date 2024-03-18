using AutoMapper;
using FitnessNotes.BusinessLogic.Implementation.AdminNomenclators.DefaultExercises.Models;
using FitnessNotes.DataAccess.Entities;
using Microsoft.EntityFrameworkCore;

namespace FitnessNotes.BusinessLogic.Implementation.AdminNomenclators.DefaultExercises;

public class DefaultExerciseService : BaseService
{
    public DefaultExerciseService(ServiceDependencies dependencies)
        : base(dependencies)
    {
    }

    public async Task<List<DefaultExerciseModel>>? GetAllDefaultExercises()
    {
        var defaultExercises = await UnitOfWork.DefaultExercises
            .GetAll()
            .ToListAsync();

        if (defaultExercises == null)
        {
            return null;
        }

        var result = Mapper.Map<List<DefaultExercise>, List<DefaultExerciseModel>>(defaultExercises);

        return result;
    }

    public async Task<DefaultExerciseModel>? GetDefaultExerciseById(int defaultExerciseId)
    {
        var defaultExercise = await UnitOfWork.DefaultExercises
            .GetAll()
            .FirstOrDefaultAsync(defaultExercise => defaultExercise.Id == defaultExerciseId);

        if (defaultExercise == null)
        {
            return null;
        }

        var result = Mapper.Map<DefaultExerciseModel>(defaultExercise);

        return result;
    }

    public DefaultExerciseModel? CreateDefaultExercise(DefaultExerciseModel defaultExerciseModel)
    {
        var newDefaultExercise = Mapper.Map<DefaultExercise>(defaultExerciseModel);

        try
        {
            var result = UnitOfWork.DefaultExercises
                .Insert(newDefaultExercise);

            UnitOfWork.SaveChanges();
            return defaultExerciseModel;
        }
        catch (Exception ex)
        {
            return null;
        }
    }

    public async Task<DefaultExerciseModel>? UpdateDefaultExercise(int id, DefaultExerciseModel defaultExerciseModel)
    {
        var defaultExerciseEntity = await UnitOfWork.DefaultExercises
            .GetAll()
            .FirstOrDefaultAsync(r => r.Id == id);

        if (defaultExerciseEntity == null)
        {
            return null;
        }

        Mapper.Map(defaultExerciseModel, defaultExerciseEntity);

        try
        {
            UnitOfWork.SaveChanges();
        }
        catch
        {
            return null;
        }

        return defaultExerciseModel;
    }

    public async void DeleteDefaultExerciseById(int id)
    {
        var defaultExerciseEntity = await UnitOfWork.DefaultExercises
            .GetAll()
            .FirstOrDefaultAsync(r => r.Id == id);

        try
        {
            UnitOfWork.DefaultExercises.Delete(defaultExerciseEntity);
            UnitOfWork.SaveChanges();
        }
        catch (Exception ex)
        {
            throw;
        }
    }
}
