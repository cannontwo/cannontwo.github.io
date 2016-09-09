google.charts.load('current', {packages: ['line']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  var data = new google.visualization.DataTable();
  data.addColumn('date', 'Month (MMYYYY)');
  data.addColumn('number', 'Books bought');
  data.addColumn('number', 'Books read');
  data.addColumn({type: 'string', role: 'annotation'})
  data.addColumn({type: 'string', role: 'annotationText'})

  // Add book reading data here.
  data.addRows([
    [new Date(2016, 7), 0, 0, '0', 'Start!'],
    [new Date(2016, 8), 19, 1, '1', 'Read: The Three Stigmata of Palmer Eldritch']
  ]);

  var options = {
    chart: {
      subtitle: 'Sometimes I buy too many books'
    },
    hAxis: {
      format: 'MMYYYY'
    },
    height: 300
  };

  var chart = new google.charts.Line(document.getElementById('chart_div'));
  chart.draw(data, options);
}
