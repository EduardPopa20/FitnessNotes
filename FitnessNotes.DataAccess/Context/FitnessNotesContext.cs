using System;
using System.Collections.Generic;
using FitnessNotes.DataAccess.Entities;
using Microsoft.EntityFrameworkCore;

namespace FitnessNotes.DataAccess.Context;

public partial class FitnessNotesContext : DbContext
{
    public FitnessNotesContext()
    {
    }

    public FitnessNotesContext(DbContextOptions<FitnessNotesContext> options)
        : base(options)
    {
    }

    public virtual DbSet<CustomExercise> CustomExercises { get; set; }

    public virtual DbSet<DefaultExercise> DefaultExercises { get; set; }

    public virtual DbSet<DietFoodPortion> DietFoodPortions { get; set; }

    public virtual DbSet<FoodInfo> FoodInfos { get; set; }

    public virtual DbSet<FoodMeasurementUnit> FoodMeasurementUnits { get; set; }

    public virtual DbSet<Role> Roles { get; set; }

    public virtual DbSet<User> Users { get; set; }

    public virtual DbSet<Workout> Workouts { get; set; }

    public virtual DbSet<WorkoutExercise> WorkoutExercises { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see https://go.microsoft.com/fwlink/?LinkId=723263.
        => optionsBuilder.UseSqlServer("Server=EPOPA\\MSSQLSERVER2;Database=FitnessNotes;Trusted_Connection=True;TrustServerCertificate=True");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<CustomExercise>(entity =>
        {
            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.Description)
                .HasMaxLength(500)
                .HasColumnName("description");
            entity.Property(e => e.Name)
                .HasMaxLength(50)
                .HasColumnName("name");
            entity.Property(e => e.UserId).HasColumnName("user_id");

            entity.HasOne(d => d.User).WithMany(p => p.CustomExercises)
                .HasForeignKey(d => d.UserId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_CustomExercises_Users");
        });

        modelBuilder.Entity<DefaultExercise>(entity =>
        {
            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.Name)
                .HasMaxLength(50)
                .HasColumnName("name");

            entity.HasMany(d => d.Workouts).WithMany(p => p.DefaultExercises)
                .UsingEntity<Dictionary<string, object>>(
                    "DefaultExercisesWorkout",
                    r => r.HasOne<Workout>().WithMany()
                        .HasForeignKey("WorkoutId")
                        .OnDelete(DeleteBehavior.ClientSetNull)
                        .HasConstraintName("FK_DefaultExercisesWorkouts_Workouts"),
                    l => l.HasOne<DefaultExercise>().WithMany()
                        .HasForeignKey("DefaultExerciseId")
                        .OnDelete(DeleteBehavior.ClientSetNull)
                        .HasConstraintName("FK_DefaultExercisesWorkouts_DefaultExercises"),
                    j =>
                    {
                        j.HasKey("DefaultExerciseId", "WorkoutId");
                        j.ToTable("DefaultExercisesWorkouts");
                        j.IndexerProperty<int>("DefaultExerciseId").HasColumnName("default_exercise_id");
                        j.IndexerProperty<int>("WorkoutId").HasColumnName("workout_id");
                    });
        });

        modelBuilder.Entity<DietFoodPortion>(entity =>
        {
            entity.ToTable("DietFoodPortion");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.FoodInfoId).HasColumnName("food_info_id");
            entity.Property(e => e.FoodMeasurementUnitId).HasColumnName("food_measurement_unit_id");
            entity.Property(e => e.Quantity).HasColumnName("quantity");

            entity.HasOne(d => d.FoodInfo).WithMany(p => p.DietFoodPortions)
                .HasForeignKey(d => d.FoodInfoId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_DietFoodPortion_FoodInfo");

            entity.HasOne(d => d.FoodMeasurementUnit).WithMany(p => p.DietFoodPortions)
                .HasForeignKey(d => d.FoodMeasurementUnitId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_DietFoodPortion_FoodMeasurementUnit");
        });

        modelBuilder.Entity<FoodInfo>(entity =>
        {
            entity.ToTable("FoodInfo");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.AddedSugars)
                .HasColumnType("decimal(10, 2)")
                .HasColumnName("addedSugars");
            entity.Property(e => e.B1).HasColumnType("decimal(10, 2)");
            entity.Property(e => e.B12).HasColumnType("decimal(10, 2)");
            entity.Property(e => e.B2).HasColumnType("decimal(10, 2)");
            entity.Property(e => e.B3).HasColumnType("decimal(10, 2)");
            entity.Property(e => e.B6).HasColumnType("decimal(10, 2)");
            entity.Property(e => e.C)
                .HasColumnType("decimal(10, 2)")
                .HasColumnName("c");
            entity.Property(e => e.Calcium)
                .HasColumnType("decimal(10, 2)")
                .HasColumnName("calcium");
            entity.Property(e => e.Calories).HasColumnName("calories");
            entity.Property(e => e.Carbohydrates)
                .HasColumnType("decimal(10, 2)")
                .HasColumnName("carbohydrates");
            entity.Property(e => e.Cholesterol)
                .HasColumnType("decimal(10, 2)")
                .HasColumnName("cholesterol");
            entity.Property(e => e.Chromium)
                .HasColumnType("decimal(10, 2)")
                .HasColumnName("chromium");
            entity.Property(e => e.D).HasColumnType("decimal(10, 2)");
            entity.Property(e => e.DietaryFiber)
                .HasColumnType("decimal(10, 2)")
                .HasColumnName("dietaryFiber");
            entity.Property(e => e.E).HasColumnType("decimal(10, 2)");
            entity.Property(e => e.Fats)
                .HasColumnType("decimal(10, 2)")
                .HasColumnName("fats");
            entity.Property(e => e.FolicAcid)
                .HasColumnType("decimal(10, 2)")
                .HasColumnName("folicAcid");
            entity.Property(e => e.FoodMeasurementUnitId).HasColumnName("food_measurement_unit_id");
            entity.Property(e => e.Iodine)
                .HasColumnType("decimal(10, 2)")
                .HasColumnName("iodine");
            entity.Property(e => e.Iron)
                .HasColumnType("decimal(10, 2)")
                .HasColumnName("iron");
            entity.Property(e => e.K).HasColumnType("decimal(10, 2)");
            entity.Property(e => e.Magnesium)
                .HasColumnType("decimal(10, 2)")
                .HasColumnName("magnesium");
            entity.Property(e => e.MonounsaturatedFats)
                .HasColumnType("decimal(10, 2)")
                .HasColumnName("monounsaturatedFats");
            entity.Property(e => e.Name)
                .HasMaxLength(255)
                .IsUnicode(false)
                .HasColumnName("name");
            entity.Property(e => e.PolyunsaturatedFats)
                .HasColumnType("decimal(10, 2)")
                .HasColumnName("polyunsaturatedFats");
            entity.Property(e => e.Potassium)
                .HasColumnType("decimal(10, 2)")
                .HasColumnName("potassium");
            entity.Property(e => e.Proteins)
                .HasColumnType("decimal(10, 2)")
                .HasColumnName("proteins");
            entity.Property(e => e.Quantity).HasColumnName("quantity");
            entity.Property(e => e.SaturatedFats)
                .HasColumnType("decimal(10, 2)")
                .HasColumnName("saturatedFats");
            entity.Property(e => e.Selenium)
                .HasColumnType("decimal(10, 2)")
                .HasColumnName("selenium");
            entity.Property(e => e.SugarAlcohols)
                .HasColumnType("decimal(10, 2)")
                .HasColumnName("sugarAlcohols");
            entity.Property(e => e.Sugars)
                .HasColumnType("decimal(10, 2)")
                .HasColumnName("sugars");
            entity.Property(e => e.TransFats)
                .HasColumnType("decimal(10, 2)")
                .HasColumnName("transFats");
            entity.Property(e => e.Zinc)
                .HasColumnType("decimal(10, 2)")
                .HasColumnName("zinc");

            entity.HasOne(d => d.FoodMeasurementUnit).WithMany(p => p.FoodInfos)
                .HasForeignKey(d => d.FoodMeasurementUnitId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_FoodInfo_FoodMeasurementUnit");
        });

        modelBuilder.Entity<FoodMeasurementUnit>(entity =>
        {
            entity.ToTable("FoodMeasurementUnit");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.Name)
                .HasMaxLength(50)
                .HasColumnName("name");
        });

        modelBuilder.Entity<Role>(entity =>
        {
            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.Name)
                .HasMaxLength(20)
                .HasColumnName("name");
        });

        modelBuilder.Entity<User>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__Users__3213E83F6CD525DC");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.Birthday).HasColumnName("birthday");
            entity.Property(e => e.City)
                .HasMaxLength(50)
                .HasColumnName("city");
            entity.Property(e => e.Country)
                .HasMaxLength(50)
                .HasColumnName("country");
            entity.Property(e => e.Email)
                .HasMaxLength(50)
                .HasColumnName("email");
            entity.Property(e => e.HashedPassword)
                .HasMaxLength(500)
                .HasColumnName("hashed_password");
            entity.Property(e => e.Height).HasColumnName("height");
            entity.Property(e => e.Phone)
                .HasMaxLength(20)
                .HasColumnName("phone");
            entity.Property(e => e.RoleId).HasColumnName("role_id");
            entity.Property(e => e.Username)
                .HasMaxLength(20)
                .HasColumnName("username");
            entity.Property(e => e.Weight).HasColumnName("weight");

            entity.HasOne(d => d.Role).WithMany(p => p.Users)
                .HasForeignKey(d => d.RoleId)
                .HasConstraintName("FK_Users_Roles1");
        });

        modelBuilder.Entity<Workout>(entity =>
        {
            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.Name)
                .HasMaxLength(50)
                .HasColumnName("name");
        });

        modelBuilder.Entity<WorkoutExercise>(entity =>
        {
            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.ExerciseId).HasColumnName("exercise_id");
            entity.Property(e => e.Repetitions).HasColumnName("repetitions");
            entity.Property(e => e.Sets).HasColumnName("sets");
            entity.Property(e => e.WorkoutId).HasColumnName("workout_id");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
