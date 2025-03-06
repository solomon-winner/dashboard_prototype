import React, { useEffect, useRef, useState } from 'react';
import Chart from 'chart.js/auto';

const FirstWindow = () => {
  // Refs for charts
  const visitorChartRef = useRef(null);
  const subscriberChartRef = useRef(null);
  const engagementChartRef = useRef(null);
  
  // State for dynamic values
  const [visitorCount, setVisitorCount] = useState('3,500');
  const [subscriberRate, setSubscriberRate] = useState('25%');
  const [engagementRate, setEngagementRate] = useState('40%');

  useEffect(() => {
    // Chart data configurations
    const chartConfigs = [
      {
        ref: visitorChartRef,
        data: {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
          datasets: [{
            label: 'Visitors',
            data: [1000, 1500, 2000, 2500, 3000, 3500],
            borderColor: '#3498db',
            tension: 0.1
          }]
        }
      },
      {
        ref: subscriberChartRef,
        data: {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
          datasets: [{
            label: 'Subscriber Growth Rate',
            data: [5, 7, 10, 15, 20, 25],
            borderColor: '#2ecc71',
            tension: 0.1
          }]
        }
      },
      {
        ref: engagementChartRef,
        data: {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
          datasets: [{
            label: 'Engagement Rate',
            data: [20, 22, 25, 30, 35, 40],
            borderColor: '#e74c3c',
            tension: 0.1
          }]
        }
      }
    ];

    // Initialize charts
    const charts = chartConfigs.map(({ ref, data }) => {
      if (!ref.current) return null;
      
      return new Chart(ref.current, {
        type: 'line',
        data,
        options: {
          responsive: true,
          plugins: { legend: { display: false } },
          scales: { y: { beginAtZero: true } }
        }
      });
    });

    // Update interval using state
    const interval = setInterval(() => {
      setVisitorCount(prev => {
        const num = parseInt(prev.replace(/,/g, '')) + Math.floor(Math.random() * 10);
        return num.toLocaleString();
      });
      
      setSubscriberRate(prev => 
        (parseFloat(prev) + Math.random() * 0.1).toFixed(1) + '%')
      
      setEngagementRate(prev => 
        (parseFloat(prev) + Math.random() * 0.1).toFixed(1) + '%');
    }, 5000);

    // Cleanup
    return () => {
      clearInterval(interval);
      charts.forEach(chart => chart?.destroy());
    };
  }, []);

  // Card data configuration
  const cards = [
    { title: "Number of Visitors", value: visitorCount, color: "green-900" },
    { title: "Number of Testimonies", value: "300", color: "green-900" },
    { title: "Total Songs", value: "300", color: "green-900" },
    { 
      title: "Visitors Growth Rate", 
      value: visitorCount, 
      color: "blue-500", 
      chart: true,
      ref: visitorChartRef 
    },
    { 
      title: "Testimonial Growth Rate", 
      value: subscriberRate, 
      color: "green-500", 
      chart: true,
      ref: subscriberChartRef 
    },
    { 
      title: "Content Engagement", 
      value: engagementRate, 
      color: "red-500", 
      chart: true,
      ref: engagementChartRef 
    }
  ];

  return (
    <div className=" md:ml-[13rem] mt-10 bg-gray-50 min-h-screen px-4 md:px-8 lg:px-12 transition-all duration-300">
      <div className="max-w-7xl mx-auto py-6 md:py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {cards.map((card, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-sm hover:shadow-lg p-4 md:p-6 transition-all duration-300 
                        border border-gray-100 hover:border-green-100 group cursor-pointer"
            >
              <h2 className="text-lg md:text-xl font-semibold text-gray-700 mb-2">
                {card.title}
              </h2>
              <div className={`text-3xl md:text-4xl font-bold text-${card.color} mb-4`}>
                {card.value}
              </div>
              {card.chart && (
                <div className="relative h-48 md:h-56">
                  <canvas 
                    className="w-full h-full"
                    aria-label={`${card.title} chart`}
                    ref={card.ref}
                  ></canvas>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FirstWindow;