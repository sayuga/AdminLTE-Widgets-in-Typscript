
namespace Serene.BasicSamples.Endpoints
{
    using Northwind.Entities;
    using Serenity.Data;
    using Serenity.Services;
    using System;
    using System.Collections.Generic;
    using System.Data;
    using System.Linq;
    using System.Threading;
    using System.Web.Mvc;
    using Serene.ChartHelper;

    [ServiceAuthorize, RoutePrefix("Services/BasicSamples/BasicSamples"), Route("{action}")]
    [ConnectionKey(typeof(OrderRow))]
    public class BasicSamplesController : ServiceEndpoint
    {
        public ALBChartResponse ALBChart(IDbConnection connection, ALBChartRequest request)
        {
            var fld = OrderRow.Fields;
            var year = DateTime.Today.Year;
            var startOfMonth = new DateTime(year, DateTime.Today.Month, 1);
            var startingFrom = startOfMonth.AddMonths(-11);

            var response = new ALBChartResponse();
            var shippers = connection.List<ShipperRow>(q => q.SelectTableFields().OrderBy(ShipperRow.Fields.CompanyName));
            response.Keys = shippers.Select(x => "s" + x.ShipperID.Value).ToList();
            response.Labels = shippers.Select(x => x.CompanyName).ToList();

            var monthExpr = "DATEPART(MONTH, " + fld.OrderDate.Expression + ")";

            var byMonth = connection.Query(
                new SqlQuery()
                    .From(fld)
                    .Select(monthExpr, "Month")
                    .Select(Sql.Count(), "Count")
                    .Select(fld.ShipVia, "ShipVia")
                    .GroupBy(monthExpr)
                    .GroupBy(fld.ShipVia)
                    .Where(
                        fld.OrderDate.IsNotNull() &
                        fld.ShipVia.IsNotNull() &
                        fld.OrderDate < startOfMonth.AddMonths(1) &
                        fld.OrderDate >= startingFrom))
                    .ToDictionary(x => new Tuple<int, int>((int)x.Month, (int)x.ShipVia), x => (int)x.Count);

            response.Values = new List<Dictionary<string, object>>();
            var month = startingFrom.Month;
            int mc;
            for (var i = 0; i < 12; i++)
            {
                var d = new Dictionary<string, object>();
                d["Month"] = new DateTime(1999, month, 1)
                    .ToString("MMM");

                foreach (var p in shippers)
                    d["s" + p.ShipperID] = byMonth.TryGetValue(
                        new Tuple<int, int>(month, p.ShipperID.Value), out mc) ? mc : 0;

                response.Values.Add(d);

                if (++month > 12)
                    month = 1;
            }

            return response;
        }
        
        public DonutChartResponse DonutChart(IDbConnection connection, DonutChartRequest request)
        {
            var fld = ProductRow.Fields;                        
            var response = new DonutChartResponse();
            var shippers = connection.List<ProductRow>(q => q.SelectTableFields().OrderBy(fld.ProductName));

            response.Values = new List<DonutChartItems>();
                        

            foreach (var p in shippers) {
                DonutChartItems entry = new DonutChartItems() { label = p.ProductName, value= (int)p.ReorderLevel};
                response.Values.Add(entry);
            }
            
            return response;
        }        
    }
}
