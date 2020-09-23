using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace WellnessApp.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class WellnessAppController : ControllerBase
    {
        private static readonly string[] Summaries = new[]
        {
            "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
        };

        private readonly ILogger<WellnessAppController> _logger;

        public WellnessAppController(ILogger<WellnessAppController> logger)
        {
            _logger = logger;
        }

        
    }
}
