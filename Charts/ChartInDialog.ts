declare var Morris: any;

namespace Serene.BasicSamples {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.resizable()
    @Serenity.Decorators.maximizable()
    export class ChartInDialog extends Serenity.TemplatedDialog<any> {

        private areaChart: any;
        private lineChart: any;
        private barChart: any;
        private donutChart: any;

        static initializePage() {
            $(function () {
                $('#LaunchDialogButton').click(function (e) {
                    (new ChartInDialog()).dialogOpen();
                });
            });
        }

        protected onDialogOpen() {                        
            super.onDialogOpen();
            BasicSamplesService.ALBChart({}, response => {                
                this.areaChart = new Morris.Area({
                    element: this.idPrefix + 'AreaChart',
                    resize: true, parseTime: false,
                    data: response.Values,
                    xkey: 'Month',
                    ykeys: response.Keys,
                    labels: response.Labels,
                    hideHover: 'auto',                    
                    lineColors: ['#a0d0e0', '#3c8dbc']
                });
            });
            BasicSamplesService.ALBChart({}, response => {
                this.areaChart = new Morris.Line({
                    element: this.idPrefix + 'LineChart',
                    resize: true,
                    parseTime: false,
                    data: response.Values,
                    xkey: 'Month',
                    ykeys: response.Keys,
                    labels: response.Labels,
                    hideHover: 'auto',
                    lineColors: ['#a0d0e0', '#3c8dbc']
                });
            });
            BasicSamplesService.ALBChart({}, response => {
                this.areaChart = new Morris.Bar({
                    element: this.idPrefix + 'BarChart',
                    resize: true,
                    parseTime: false,
                    data: response.Values,
                    xkey: 'Month',
                    ykeys: response.Keys,
                    labels: response.Labels,
                    hideHover: 'auto',
                    lineColors: ['#a0d0e0', '#3c8dbc']
                });
            });
            BasicSamplesService.DonutChart({}, response => {
                this.donutChart = new Morris.Donut({
                    element: this.idPrefix+ 'DonutChart',
                    resize: true,
                    parseTime: false,
                    colors: ["#3c8dbc", "#f56954", "#00a65a"],
                    data: response.Values,                    
                    hideHover: 'auto'                    
                });
            });
        }

        protected arrange() {
            super.arrange();
            this.areaChart && this.areaChart.redraw();
            this.lineChart && this.lineChart.redraw();            
            this.barChart && this.barChart.redraw();      
            this.donutChart && this.donutChart.redraw();      
        }

        protected getTemplate() {
            // you could also put this in a ChartInDialog.Template.html file. it's here for simplicity.
            var container = "<div id='~_AreaChart'></div>";
            container += "<div id='~_LineChart'></div>";
            container += "<div id='~_BarChart'></div>";
            container += "<div id='~_DonutChart'></div>";
            return container;
        }

        protected getDialogOptions() {
            var opt = super.getDialogOptions();
            opt.title = 'Orders by Shipper';
            return opt;
        }
    }
}
