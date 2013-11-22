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
                rows: 1,
                columns: 1,
                subsections: 1,
                color: '#CCC',
                responsive: false
            }, options);

            return this.each(function () {

                var chart = $(this),
                    colWidth, rowHeight,
                    xLabel, yLabel;

                if (settings.width < 1) {
                    settings.width = 0;
                }
                if (settings.height < 1) {
                    settings.height = 0;
                }
                if (settings.rows < 1) {
                    settings.rows = 1;
                }
                if (settings.columns < 1) {
                    settings.columns = 1;
                }
                if (settings.subsections < 1) {
                    settings.subsections = 1;
                }

                chart.append('<span class="x-Label"></span><span class="y-Label"></span>');

                if (settings.responsive) {
                    chart.addClass('responsive');
                    colWidth = (1 / settings.columns) * 100;
                    rowHeight = (1 / settings.rows) * 100;
                } else {
                    colWidth = settings.width / settings.columns;
                    rowHeight = settings.height / settings.rows;
                }

                chart.css({
                    position: 'relative',
                    height: settings.height,
                    width: settings.width,
                    backgroundColor: settings.color,
                    margin: 40,
                    backgroundImage: 'linear-gradient(white 2px, transparent 2px), linear-gradient(90deg, white 2px, transparent 2px), linear-gradient(rgba(255,255,255,.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.4) 1px, transparent 1px)',
                    backgroundPosition: '-2px -2px, -2px -2px, -1px -1px, -1px -1px'
                });

                if (settings.responsive) {
                    chart.css({
                        backgroundSize: colWidth + '% ' + rowHeight + '%,' + colWidth + '% ' + rowHeight + '%,' + (colWidth / settings.subsections) + '% ' + (rowHeight / settings.subsections) + '%,' + (colWidth / settings.subsections) + '% ' + (rowHeight / settings.subsections) + '%'
                    });
                } else {
                    chart.css({
                        backgroundSize: colWidth + 'px ' + rowHeight + 'px,' + colWidth + 'px ' + rowHeight + 'px,' + (colWidth / settings.subsections) + 'px ' + (rowHeight / settings.subsections) + 'px,' + (colWidth / settings.subsections) + 'px ' + (rowHeight / settings.subsections) + 'px'
                    });
                }

                xLabel = chart.find('.x-Label').html(settings.xLabel);
                yLabel = chart.find('.y-Label').html(settings.yLabel);

                xLabel.css({
                    left: chart.width() / 2 - xLabel.width() / 2,
                    bottom: -30
                });
                yLabel.css({
                    left: -60,
                    bottom: chart.height() / 2 - yLabel.height() / 2
                });

                if (settings.responsive) {
                    xLabel.css({
                        left: (chart.width() / 2 - xLabel.width() / 2) / chart.width() * 100 + '%'
                    });
                    yLabel.css({
                        bottom: (chart.height() / 2 - yLabel.height() / 2) / chart.height() * 100 + '%'
                    });
                }
            });
        },

        plot: function (options) {
            var settings = $.extend({
                xPos: 0,
                yPos: 0,
                radius: 20,
                color: 'red',
                responsive: false
            }, options);

            return this.each(function () {

                var point = $(this);
                settings.responsive = point.parent().hasClass('responsive');

                if (settings.xPos < 1) {
                    settings.xPos = 1;
                }
                if (settings.yPos < 1) {
                    settings.yPos = 1;
                }
                if (settings.radius < 1) {
                    settings.radius = 0;
                }

                point.addClass('point');
                point.css({
                    backgroundColor: settings.color,
                    width: settings.radius * 2,
                    height: settings.radius * 2,
                    borderRadius: settings.radius
                });

                if (settings.responsive) {
                    point.css({
                        left: settings.xPos,
                        bottom: settings.yPos
                    });
                    if (typeof settings.xPos === 'string' || settings.xPos instanceof String) {
                        point.css({
                            left: ((parseFloat(settings.xPos) / 100) - (settings.radius / point.parent().width())) * 100 + '%'
                        });
                    }
                    if (typeof settings.yPos === 'string' || settings.yPos instanceof String) {
                        point.css({
                            bottom: ((parseFloat(settings.yPos) / 100) - (settings.radius / point.parent().height())) * 100 + '%'
                        });
                    }
                } else {
                    point.css({
                        left: settings.xPos - settings.radius,
                        bottom: settings.yPos - settings.radius
                    });
                }
            });
        }
    });
})(jQuery);