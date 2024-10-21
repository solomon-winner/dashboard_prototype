import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import { IoIosNotificationsOutline } from "react-icons/io";
import { IoLogOutOutline } from "react-icons/io5";

const FirstWindow = () => {
  const visitorChartRef = useRef(null);
  const subscriberChartRef = useRef(null);
  const engagementChartRef = useRef(null);

  useEffect(() => {

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

    function createChart(ref, data) {
      if (ref.current) {
        ref.current.destroy();
      }
      const ctx = ref.canvas.getContext('2d');
      ref.current = new Chart(ctx, {
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

    createChart(visitorChartRef, visitorData);
    createChart(subscriberChartRef, subscriberData);
    createChart(engagementChartRef, engagementData);

    document.getElementById('visitorCount').textContent = '3,500';
    document.getElementById('subscriberRate').textContent = '25%';
    document.getElementById('engagementRate').textContent = '40%';

    const interval = setInterval(() => {
      const visitorCount = document.getElementById('visitorCount');
      const subscriberRate = document.getElementById('subscriberRate');
      const engagementRate = document.getElementById('engagementRate');

      visitorCount.textContent = (parseInt(visitorCount.textContent.replace(',', '')) + Math.floor(Math.random() * 10)).toLocaleString();
      subscriberRate.textContent = (parseFloat(subscriberRate.textContent) + Math.random() * 0.1).toFixed(1) + '%';
      engagementRate.textContent = (parseFloat(engagementRate.textContent) + Math.random() * 0.1).toFixed(1) + '%';
    }, 5000);

    return () => {
      clearInterval(interval);
      if (visitorChartRef.current) visitorChartRef.current.destroy();
      if (subscriberChartRef.current) subscriberChartRef.current.destroy();
      if (engagementChartRef.current) engagementChartRef.current.destroy();
    };
  }, []);

  return (
    <div className="ml-[13rem] bg-white-100 min-h-screen">
      <div className=" max-w-5xl mx-auto p-6 ">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6  mt-10">
        <div className="bg-white rounded-lg shadow p-6 transition-transform transform hover:-translate-y-1">
            <h2 className="text-xl font-semibold text-gray-800">Number of Subscribers</h2>
            <div className="text-4xl font-bold text-blue-500 my-4" id="subscribersCount">300</div>
          </div>
          <div className="bg-white rounded-lg shadow p-6 transition-transform transform hover:-translate-y-1">
            <h2 className="text-xl font-semibold text-gray-800">Number of Testimonies</h2>
            <div className="text-4xl font-bold text-blue-500 my-4" id="testimoiesCount">300</div>
          </div>
          <div className="bg-white rounded-lg shadow p-6 transition-transform transform hover:-translate-y-1">
            <h2 className="text-xl font-semibold text-gray-800">Total Songs</h2>
            <div className="text-4xl font-bold text-blue-500 my-4" id="songCount">300</div>
          </div>
          <div className="bg-white rounded-lg shadow p-6 transition-transform transform hover:-translate-y-1">
            <h2 className="text-xl font-semibold text-gray-800">Number of Visitors</h2>
            <div className="text-4xl font-bold text-blue-500 my-4" id="visitorCount">Loading...</div>
            <div className="chart">
              <canvas id="visitorChart" ref={el => visitorChartRef.canvas = el}></canvas>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow p-6 transition-transform transform hover:-translate-y-1">
            <h2 className="text-xl font-semibold text-gray-800">Subscriber Growth Rate</h2>
            <div className="text-4xl font-bold text-green-500 my-4" id="subscriberRate">Loading...</div>
            <div className="chart">
              <canvas id="subscriberChart" ref={el => subscriberChartRef.canvas = el}></canvas>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow p-6 transition-transform transform hover:-translate-y-1">
            <h2 className="text-xl font-semibold text-gray-800">Content Engagement</h2>
            <div className="text-4xl font-bold text-red-500 my-4" id="engagementRate">Loading...</div>
            <div className="chart">
              <canvas id="engagementChart" ref={el => engagementChartRef.canvas = el}></canvas>
            </div>
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default FirstWindow;