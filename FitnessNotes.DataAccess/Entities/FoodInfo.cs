using System;
using System.Collections.Generic;

namespace FitnessNotes.DataAccess.Entities;

public partial class FoodInfo
{
    public int Id { get; set; }

    public string Name { get; set; } = null!;

    public int Calories { get; set; }

    public decimal? Proteins { get; set; }

    public decimal? Carbohydrates { get; set; }

    public decimal? DietaryFiber { get; set; }

    public decimal? Sugars { get; set; }

    public decimal? AddedSugars { get; set; }

    public decimal? SugarAlcohols { get; set; }

    public decimal? Fats { get; set; }

    public decimal? SaturatedFats { get; set; }

    public decimal? PolyunsaturatedFats { get; set; }

    public decimal? MonounsaturatedFats { get; set; }

    public decimal? TransFats { get; set; }

    public decimal? Cholesterol { get; set; }

    public decimal? B1 { get; set; }

    public decimal? B2 { get; set; }

    public decimal? B3 { get; set; }

    public decimal? B6 { get; set; }

    public decimal? B12 { get; set; }

    public decimal? C { get; set; }

    public decimal? Calcium { get; set; }

    public decimal? Chromium { get; set; }

    public decimal? D { get; set; }

    public decimal? E { get; set; }

    public decimal? FolicAcid { get; set; }

    public decimal? K { get; set; }

    public decimal? Iodine { get; set; }

    public decimal? Iron { get; set; }

    public decimal? Magnesium { get; set; }

    public decimal? Potassium { get; set; }

    public decimal? Selenium { get; set; }

    public double Quantity { get; set; }

    public decimal? Zinc { get; set; }

    public int FoodMeasurementUnitId { get; set; }

    public virtual ICollection<DietFoodPortion> DietFoodPortions { get; set; } = new List<DietFoodPortion>();

    public virtual FoodMeasurementUnit FoodMeasurementUnit { get; set; } = null!;
}
