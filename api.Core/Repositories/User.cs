using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Text;

namespace api.Core.Repositories
{
    public class User
    {
        public int Id { get; set; }
        public string Username { get; set; }

        [JsonIgnore]
        public string Password { get; set; }
    }
}
