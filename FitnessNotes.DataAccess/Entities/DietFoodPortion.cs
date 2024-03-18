using System;
using System.Collections.Generic;

namespace FitnessNotes.DataAccess.Entities;

public partial class DietFoodPortion
{
    public int Id { get; set; }

    public int FoodMeasurementUnitId { get; set; }

    public int Quantity { get; set; }

    public int FoodInfoId { get; set; }

    public virtual FoodInfo FoodInfo { get; set; } = null!;

    public virtual FoodMeasurementUnit FoodMeasurementUnit { get; set; } = null!;
}
