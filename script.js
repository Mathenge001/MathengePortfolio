const codingCtx = document.getElementById('codingChart').getContext('2d');
new Chart(codingCtx, {
  type: 'bar',
  data: {
    labels: ['HTML', 'CSS', 'JS', 'React', 'Node.js',  'Git/Version Control', 'UI/UX Principles'],
    datasets: [{
      label: 'Proficiency (%)',
      data:[95, 90, 85, 75, 70, 80, 85],
      backgroundColor:  ['#8e44ad', '#3498db', '#f39c12', '#2ecc71', '#e67e22']
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
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
  type: 'doughnut',
  data: {
    labels: ['Photoshop', 'Premiere Pro', 'Lightroom', 'Figma', 'Canva'],
    datasets: [{
      label: 'Proficiency (%)',
      data: [90, 95, 70, 60, 85],
      backgroundColor: ['#3498db', '#8e44ad', '#ff7675', '#f39c12', '#2ecc71']
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false
  }
});
