/*********************************************

Author : Paul Woidke
URL    : http://www.paulwoidke.com

*********************************************/
(function ($) {
    $.fn.extend({
        scatter: function (options) {
            var settings = $.extend({
                height: 300,
                width: 300,
                xLabel: '&nbsp',
                yLabel: '&nbsp',
                rows: 0,
                columns: 0,
                subsections: 1,
                color: '#CCC'
            }, options);

            return this.each(function () {
                
                var chart = $(this);
                
                if(settings.width < 1) settings.width = 0;
                if(settings.height < 1) settings.height = 0;
                if(settings.rows < 1) settings.rows = 1;
                if(settings.columns < 1) settings.columns = 1;
                if(settings.subsections < 1) settings.subsections = 1;
                
                chart.append('<span class="x-Label"></span><span class="y-Label"></span>');
                
                var colWidth = settings.width / settings.columns;
                var rowHeight = settings.height / settings.rows;
                
                chart.css({ 
                    position: 'relative', 
                    height: settings.height, 
                    width: settings.width, 
                    backgroundColor: settings.color, 
                    backgroundSize: colWidth + 'px ' + rowHeight + 'px,' 
                                            + colWidth + 'px ' + rowHeight + 'px,' 
                                            + (colWidth / settings.subsections) + 'px ' + (rowHeight / settings.subsections) + 'px,'
                                            + (colWidth / settings.subsections) + 'px ' + (rowHeight / settings.subsections) + 'px',
                    margin: 40,
                    backgroundImage: 'linear-gradient(white 2px, transparent 2px), linear-gradient(90deg, white 2px, transparent 2px), linear-gradient(rgba(255,255,255,.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.4) 1px, transparent 1px)',
                    backgroundPosition: '-2px -2px, -2px -2px, -1px -1px, -1px -1px'
                });
                
                var xLabel = chart.find('.x-Label').html(settings.xLabel);
                var yLabel = chart.find('.y-Label').html(settings.yLabel);
                
                xLabel.css({ 
                    left: chart.width() / 2 - xLabel.width() / 2, 
                    bottom: -30 
                });
                yLabel.css({ 
                    left: -60, 
                    bottom: chart.height() / 2 - yLabel.height() / 2
                });
            });
        }, 
        
        plot: function (options) {
            var settings = $.extend({
                xPos: 0,
                yPos: 0,
                radius: 20,
                color: 'red'
            }, options);
            
            return this.each(function () {
                
                var point = $(this);
                
                if(settings.xPos < 1) settings.xPos = 1;
                if(settings.yPos < 1) settings.yPos = 1;
                if(settings.radius < 1) settings.radius = 0;
                
                point.addClass('point');
                point.css({ 
                    left: settings.xPos - settings.radius, 
                    bottom: settings.yPos - settings.radius, 
                    backgroundColor: settings.color, 
                    width: settings.radius * 2, 
                    height: settings.radius * 2, 
                    borderRadius: settings.radius 
                });
            });
        }
    });
})(jQuery);