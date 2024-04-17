using Microsoft.EntityFrameworkCore;
using AutoMapper;
using FitnessNotes.DataAccess.Context;
using FitnessNotes.BusinessLogic;
using Microsoft.AspNetCore.Hosting;
using FitnessNotes.DataAccess;
using FitnessNotes.WebApp.Code.ExtensionMethods;
using Microsoft.AspNetCore.Authentication;
using Microsoft.IdentityModel.Tokens;
using System.Text;


var builder = WebApplication.CreateBuilder(args);

var configuration = new ConfigurationBuilder()
                .SetBasePath(Directory.GetCurrentDirectory())
                .AddJsonFile("appsettings.json")
                .Build();
builder.Services.AddSingleton<IConfiguration>(configuration);

var connectionString = configuration.GetConnectionString("DefaultConnection");

// Mappings
builder.Services.AddAutoMapperConfigs();

// UOF
builder.Services.AddScoped<UnitOfWork>();

// Services
builder.Services.AddScoped<ServiceDependencies>();

builder.Services.AddFitnessNotesBusinessLogic();
builder.Services.AddFitnessNotesCurrentUser();

builder.Services.AddDbContext<FitnessNotesContext>(
        options => options.UseSqlServer(connectionString, builder =>
        {
            builder.EnableRetryOnFailure(5, TimeSpan.FromSeconds(10), null);
        })
    );

builder.Services.AddAuthentication("my-token")
    .AddJwtBearer("my-token", o =>
    {
        o.TokenValidationParameters = new TokenValidationParameters()
        {
            ValidateIssuer = true,
            ValidateAudience = true,
            ValidIssuer = configuration.GetConnectionString("Jwt:Issuer"),
            ValidAudience = configuration.GetConnectionString("Jwt:Audience"),
            ValidateIssuerSigningKey = true,

            IssuerSigningKeys = new List<SecurityKey>
            {
                new SymmetricSecurityKey(Encoding.UTF8.GetBytes(configuration.GetSection("Jwt").GetSection("SecretKey").Value))
            }
        };
    }); ;
builder.Services.AddControllers();

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddCors();

var app = builder.Build();

app.UseDefaultFiles();
app.UseStaticFiles();

app.UseCors(x => x.AllowAnyHeader().AllowAnyMethod().WithOrigins("https://localhost:5173"));

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();



app.UseAuthentication();
app.UseRouting();

app.UseAuthorization();

app.UseEndpoints(endpoints => {
    endpoints.MapControllers();
});

app.MapFallbackToFile("/index.html");

app.Run();
