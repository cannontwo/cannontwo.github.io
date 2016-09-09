google.charts.load('current', {packages: ['line']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  var data = new google.visualization.DataTable();
  data.addColumn('number', 'Month (MMYYYY)');
  data.addColumn('number', 'Books bought');
  data.addColumn('number', 'Books read');
  data.addColumn({type: 'string', role: 'annotation'})
  data.addColumn({type: 'string', role: 'annotationText'})

  // Add book reading data here.
  data.addRows([
    [082016, 19, 1, '', 'Read: The Three Stigmata of Palmer Eldritch']
  ]);

  var options = {
    chart: {
      title: 'Reading Burndown Chart',
      subtitle: 'Sometimes I buy too many books'
    },
    height: 300
  };

  var chart = new google.charts.Line(document.getElementById('chart_div'));
  chart.draw(data, options);
}
