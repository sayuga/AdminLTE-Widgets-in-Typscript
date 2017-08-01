
using Serenity.Services;
using System.Collections.Generic;

namespace FMCorpIntranet.ChartHelper
{
    //Morris Charts --------------------------------------------------------------------
    //Area Chart
    public class ALBChartRequest : ServiceRequest { }

    public class ALBChartResponse : ServiceResponse
    {
        public List<Dictionary<string, object>> Values { get; set; }
        public List<string> Keys { get; set; }
        public List<string> Labels { get; set; }
    }

    public class ALBChartItem
    {
        public string label;
        public int value;
    }

    //Donut Chart    

    public class DonutChartRequest : ServiceRequest { }

    public class DonutChartResponse : ServiceResponse
    {
        public List<DonutChartItems> Values { get; set; }
    }
    public class DonutChartItems
    {
        public string label;
        public int value;
    }

    //ChartJS--------------------------------------------------------------------
    //InlineChart--------------------------------------------------------------------
    //FlotChart--------------------------------------------------------------------
}
