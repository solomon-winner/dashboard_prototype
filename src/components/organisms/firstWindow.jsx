import React, { useEffect } from 'react';
import Chart from 'chart.js/auto';

const firstWindow = () => {
  useEffect(() => {
    // Simulated data
    const visitorData = {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      datasets: [{
        label: 'Visitors',
        data: [1000, 1500, 2000, 2500, 3000, 3500],
        borderColor: '#3498db',
        tension: 0.1
      }]
    };

    const subscriberData = {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      datasets: [{
        label: 'Subscriber Growth Rate',
        data: [5, 7, 10, 15, 20, 25],
        borderColor: '#2ecc71',
        tension: 0.1
      }]
    };

    const engagementData = {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      datasets: [{
        label: 'Engagement Rate',
        data: [20, 22, 25, 30, 35, 40],
        borderColor: '#e74c3c',
        tension: 0.1
      }]
    };

    // Create charts
    function createChart(id, data) {
      const ctx = document.getElementById(id).getContext('2d');
      return new Chart(ctx, {
        type: 'line',
        data: data,
        options: {
          responsive: true,
          plugins: {
            legend: {
              display: false
            }
          },
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });
    }

    createChart('visitorChart', visitorData);
    createChart('subscriberChart', subscriberData);
    createChart('engagementChart', engagementData);

    // Update numbers
    document.getElementById('visitorCount').textContent = '3,500';
    document.getElementById('subscriberRate').textContent = '25%';
    document.getElementById('engagementRate').textContent = '40%';

    // Simulated real-time updates
    const interval = setInterval(() => {
      const visitorCount = document.getElementById('visitorCount');
      const subscriberRate = document.getElementById('subscriberRate');
      const engagementRate = document.getElementById('engagementRate');

      visitorCount.textContent = (parseInt(visitorCount.textContent.replace(',', '')) + Math.floor(Math.random() * 10)).toLocaleString();
      subscriberRate.textContent = (parseFloat(subscriberRate.textContent) + Math.random() * 0.1).toFixed(1) + '%';
      engagementRate.textContent = (parseFloat(engagementRate.textContent) + Math.random() * 0.1).toFixed(1) + '%';
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto p-6">
        <header className="text-center mb-8">
          <h1 className="text-3xl font-bold">Analytics Dashboard</h1>
        </header>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow p-6 transition-transform transform hover:-translate-y-1">
            <h2 className="text-xl font-semibold text-gray-800">Number of Visitors</h2>
            <div className="text-4xl font-bold text-blue-500 my-4" id="visitorCount">Loading...</div>
            <div className="chart">
              <canvas id="visitorChart"></canvas>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow p-6 transition-transform transform hover:-translate-y-1">
            <h2 className="text-xl font-semibold text-gray-800">Subscriber Growth Rate</h2>
            <div className="text-4xl font-bold text-green-500 my-4" id="subscriberRate">Loading...</div>
            <div className="chart">
              <canvas id="subscriberChart"></canvas>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow p-6 transition-transform transform hover:-translate-y-1">
            <h2 className="text-xl font-semibold text-gray-800">Content Engagement</h2>
            <div className="text-4xl font-bold text-red-500 my-4" id="engagementRate">Loading...</div>
            <div className="chart">
              <canvas id="engagementChart"></canvas>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default firstWindow;