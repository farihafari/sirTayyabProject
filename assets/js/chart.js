// Your revenue data for each month
var revenueData = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
  datasets: [{
    label: 'Revenue',
    data: [],
  }],
  borderColor:'rgba(75, 192, 192, 1)',
  borderWidth: 1,
        borderDash: [5, 5], // Set the border dash pattern
};

var chartConfig = {
  type: 'bar', // Use 'bar' type for a category scale
  data: revenueData,
  options: {
    responsive: true,
    scales: {
      x: {
        type: 'category', // Use 'category' scale type
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        display: true, // Hide x-axis labels
        grid: {
          display: false, // Hide grid lines
        },
      },
      y: {
        display: false, // Hide y-axis labels and grid lines
      }
    },
    plugins: {
      legend: {
        display: false, // Hide the default legend
      }
    },
    layout: {
      padding: {
        left: 10, // Adjust the left padding to make space for the labels
        right: 10, // Adjust the right padding to make space for the labels
      }
    }
  }
};

// Create the chart
var ctx = document.getElementById('revenueChart').getContext('2d');
var myChart = new Chart(ctx, chartConfig);
// Add custom labels
ctx.textAlign = 'left';
// ctx.textBaseline = 'middle';
ctx.font = 'bold 14px Arial';
ctx.fillStyle = 'black';
ctx.fillText('Revenue', 0, 0); // Adjust the coordinates as needed

ctx.textAlign = 'right';
ctx.fillText('This Year', ctx.canvas.width - 10, 75); // Adjust the coordinates as needed