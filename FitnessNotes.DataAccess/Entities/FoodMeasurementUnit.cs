using System;
using System.Collections.Generic;

namespace FitnessNotes.DataAccess.Entities;

public partial class FoodMeasurementUnit
{
    public int Id { get; set; }

    public string Name { get; set; } = null!;

    public virtual ICollection<DietFoodPortion> DietFoodPortions { get; set; } = new List<DietFoodPortion>();

    public virtual ICollection<FoodInfo> FoodInfos { get; set; } = new List<FoodInfo>();
}
