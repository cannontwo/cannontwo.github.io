google.charts.load('current', {packages: ['line']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  var data = new google.visualization.DataTable();
  data.addColumn('date', 'Month (MMYYYY)');
  data.addColumn('number', 'Books bought');
  data.addColumn('number', 'Books read');
  data.addColumn({type: 'string', role: 'annotation'});
  data.addColumn({type: 'string', role: 'annotationText'});

  // Add book reading data here.
  data.addRows([
    [new Date(2016, 7), 0, 0, 'A', 'Start!'],
    [new Date(2016, 8), 19, 1, 'B', 'Read: The Three Stigmata of Palmer Eldritch']
  ]);

  var options = {
    chart: {
      subtitle: 'Sometimes I buy too many books'
    },
    hAxis: {
      format: 'MMYYYY'
    },
    height: 300,
    color: ['#4CAF50', '#F44336']
  };

  var chart = new google.charts.Line(document.getElementById('chart_div'));
  chart.draw(data, options);
}
