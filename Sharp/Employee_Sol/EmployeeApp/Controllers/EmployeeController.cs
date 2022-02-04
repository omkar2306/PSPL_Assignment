using Microsoft.AspNetCore.Mvc;
using System.Data;
using System.Data.SqlClient;
using Microsoft.Extensions.Configuration;
using EmployeeApp.Model;
using Serilog;
namespace EmployeeApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeeController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        public EmployeeController(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        [HttpGet]
        public JsonResult Get()
        {
            Log.Information("Show Process");
            string query = @"SELECT * from Emp1";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("EmployeeAppCon");
            SqlDataReader myReader;
            Log.Warning("Showing Record Successfully");
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myCon.Close();
                }
            }
            return new JsonResult(table);
        }

        [HttpPost]
        public JsonResult Post(Emp dep)
        {
            Log.Information("Inserting Information");
            string query = @"insert into Emp1 (Id,Name,Age,City)values(@EmployeeId,@EmployeeName,@EmployeeAge,@EmployeeCity)";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("EmployeeAppCon");
            SqlDataReader myReader;
            Log.Warning("Inserted Record Successfully");
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using SqlCommand myCommand = new SqlCommand(query, myCon);
                {
                    myCommand.Parameters.AddWithValue("@EmployeeId", dep.Id);
                    myCommand.Parameters.AddWithValue("@EmployeeName", dep.Name);
                    myCommand.Parameters.AddWithValue("@EmployeeAge", dep.Age);
                    myCommand.Parameters.AddWithValue("@EmployeeCity", dep.City);
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myCon.Close();
                }
            }
            return new JsonResult("Inserted Successfull");
        }

        [HttpPut]
        public JsonResult Put(Emp dep)
        {
            Log.Information("Updating Information");
            string query = @"update Emp1 set Name=@EmployeeName,
                            Age=@EmployeeAge,City=@EmployeeCity 
                            where Id=@EmployeeId";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("EmployeeAppCon");
            SqlDataReader myReader;
            Log.Warning("Updated Record Successfully");
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using SqlCommand myCommand = new SqlCommand(query, myCon);
                {
                    myCommand.Parameters.AddWithValue("@EmployeeId", dep.Id);
                    myCommand.Parameters.AddWithValue("@EmployeeName", dep.Name);
                    myCommand.Parameters.AddWithValue("@EmployeeAge", dep.Age);
                    myCommand.Parameters.AddWithValue("@EmployeeCity", dep.City);
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myCon.Close();
                }
            }
            return new JsonResult("Updated Successfully");
        }

        [HttpDelete("{id}")]
        public JsonResult Delete(int id)
        {
            Log.Information("Deleting Information");
            string query = @"delete from Emp1 where Id=@EmployeeId";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("EmployeeAppCon");
            SqlDataReader myReader;
            Log.Warning("Deleted Record Successfully");
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using SqlCommand myCommand = new SqlCommand(query, myCon);
                {
                    myCommand.Parameters.AddWithValue("@EmployeeId",id);
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myCon.Close();
                }
            }
            return new JsonResult("Deleted Successfully");
        }
    }
}
