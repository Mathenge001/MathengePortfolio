const codingCtx = document.getElementById('codingChart').getContext('2d');
new Chart(codingCtx, {
  type: 'bar',
  data: {
    labels: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js'],
    datasets: [{
      label: 'Proficiency (%)',
      data: [95, 90, 85, 80, 75],
      backgroundColor: '#8e44ad'
    }]
  },
  options: {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
        max: 100
      }
    }
  }
});

const creativeCtx = document.getElementById('creativeChart').getContext('2d');
new Chart(creativeCtx, {
  type: 'bar',
  data: {
    labels: ['Photoshop', 'Premiere Pro', 'Lightroom'],
    datasets: [{
      label: 'Proficiency (%)',
      data: [88, 85, 80],
      backgroundColor: '#3498db'
    }]
  },
  options: {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
        max: 100
      }
    }
  }
});
