import React, { useState, useEffect } from 'react';
import { Activity, Download, Terminal, RefreshCw, Copy } from 'lucide-react';

const ReviewScraperUI = () => {
  const [commandInput, setCommandInput] = useState('');
  const [company, setCompany] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [sources, setSources] = useState({
    g2: false,
    capterra: false,
    trustradius: false
  });
  const [isScrapingActive, setIsScrapingActive] = useState(false);
  const [logs, setLogs] = useState([]);
  const [reviewCount, setReviewCount] = useState(0);
  const [pulseData, setPulseData] = useState([]);
  const [showResults, setShowResults] = useState(false);

  const sampleReviews = [
  {
    author: "Rahul Mehta",
    date: "Oct 1, 2024",
    title: "Smooth onboarding experience and responsive customer support",
    rating: "positive"
  },
  {
    author: "Ananya Sharma",
    date: "Sep 28, 2024",
    title: "The interface is clean but performance can be improved",
    rating: "negative"
  },
  {
    author: "Vikram Singh",
    date: "Oct 1, 2024",
    title: "Good features overall, especially the analytics dashboard",
    rating: null
  },
  {
    author: "Priya Nair",
    date: "Oct 1, 2024",
    title: "Had issues initially but the support team resolved them quickly",
    rating: "positive"
  },
  {
    author: "Arjun Patel",
    date: null,
    title: "Frequent loading delays make it difficult to use during peak hours",
    rating: "negative"
  },
  {
    author: "Sneha Kapoor",
    date: null,
    title: "Easy to use and well-designed, even for beginners",
    rating: "positive"
  },
  {
    author: "Rohit Verma",
    date: "Oct 12, 2024",
    title: "The pricing feels a bit high compared to similar platforms",
    rating: "negative"
  },
  {
    author: "Kavya Iyer",
    date: "Oct 12, 2024",
    title: "App works fine but lacks some advanced customization options",
    rating: "negative"
  },
  {
    author: "Aman Gupta",
    date: "Oct 12, 2024",
    title: "Reliable performance and consistent updates over time",
    rating: null
  },
  {
    author: "Neha Malhotra",
    date: "Oct 12, 2024",
    title: "Excellent user experience with minimal learning curve",
    rating: "positive"
  },
  {
    author: "Saurabh Kulkarni",
    date: null,
    title: "Customer service response time needs significant improvement",
    rating: "negative"
  },
  {
    author: "Pooja Choudhary",
    date: null,
    title: "Met my expectations for day-to-day usage",
    rating: "negative"
  },
  {
    author: "Aditya Rao",
    date: null,
    title: "Feature-rich platform that delivers consistent value",
    rating: "positive"
  },
  {
    author: "Ishita Banerjee",
    date: "Oct 12, 2024",
    title: "Very satisfied with the overall experience and reliability",
    rating: "positive"
  }
];


  useEffect(() => {
    if (isScrapingActive) {
      const interval = setInterval(() => {
        setPulseData(prev => {
          const newData = [...prev.slice(-40), 30 + Math.random() * 70];
          return newData;
        });
      }, 100);
      return () => clearInterval(interval);
    }
  }, [isScrapingActive]);

  const addLog = (message, type = 'info') => {
    setLogs(prev => [...prev, { message, type }]);
  };

  const handleSourceToggle = (source) => {
    setSources(prev => ({
      ...prev,
      [source]: !prev[source]
    }));
  };

  const handleInitializeScrape = () => {
    if (!company && !startDate && !endDate) {
      const selectedSources = Object.keys(sources).filter(key => sources[key]);
      if (selectedSources.length === 0) {
        addLog('Error: Please select at least one source', 'error');
        return;
      }
    }

    setIsScrapingActive(true);
    setLogs([]);
    setReviewCount(0);
    setShowResults(false);
    setPulseData([]);

    setTimeout(() => {
      addLog('Connecting to G2 Gateway... Success.', 'success');
      addLog('Bytes: 04', 'info');
    }, 500);

    setTimeout(() => {
      addLog('Navigating Sing page 2 of 7 10..', 'info');
      addLog('Processing URLs: 846', 'info');
    }, 1500);

    setTimeout(() => {
      addLog('Processing les 10 bas roaw nodes Parsing.', 'info');
      addLog('Poor 300 BRs', 'info');
    }, 2500);

    setTimeout(() => {
      addLog('Processing 900 review nodes. Parsing.', 'info');
      addLog('Fuxdsi $: 5qqrbh', 'info');
    }, 3500);

    setTimeout(() => {
      addLog('Fouund 15 rmxizo $ los oart Page. Parsing..', 'info');
      addLog('Ingpix $: 5qoobix kmasl.0b3dz $1823lb.', 'info');
      addLog('Ingpld 10.1 Sizma 4 E.1B', 'info');
      setReviewCount(452);
    }, 4500);

    setTimeout(() => {
      addLog('Prl.', 'info');
      addLog('Curaralassias is ionin for. $ aio" o$ £ iedon, lalal', 'info');
      addLog('$ G-o-i-iriilbs $2°zl $88irs', 'info');
      addLog('pari.3b..', 'info');
    }, 5500);

    setTimeout(() => {
      addLog('0 sae solasy lata Imara.', 'info');
      addLog('Moure rigs #Is $130 -an lor 19 Bo.', 'info');
      setReviewCount(802);
    }, 6500);

    setTimeout(() => {
      setShowResults(true);
      setIsScrapingActive(false);
      setReviewCount(1240);
    }, 7500);
  };

  return (
    <div style={{ 
      minHeight: '100vh', 
      background: 'linear-gradient(180deg, #2a2a2a 0%, #1f1f1f 100%)',
      padding: '2rem',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif'
    }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ 
          background: '#2d2d2d',
          padding: '1.5rem 2rem',
          borderRadius: '16px 16px 0 0',
          border: '1px solid #3a3a3a',
          borderBottom: 'none'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <Activity size={28} color="#00D9FF" strokeWidth={2.5} />
              <div>
                <h1 style={{ 
                  color: '#FFFFFF', 
                  margin: 0,
                  fontSize: '1.3rem',
                  fontWeight: '600',
                  letterSpacing: '1px'
                }}>
                  PULSE
                </h1>
                <div style={{ color: '#00D9FF', fontSize: '0.7rem', letterSpacing: '2px', marginTop: '2px' }}>
                  INSIGHT
                </div>
              </div>
            </div>
            
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flex: 1, marginLeft: '3rem' }}>
              <input
                type="text"
                value={commandInput}
                onChange={(e) => setCommandInput(e.target.value)}
                placeholder="Type command... eg. Scrape Notion from Feb Frab 2024 to May 2024"
                style={{
                  flex: 1,
                  background: '#1f1f1f',
                  border: '1px solid #3a3a3a',
                  borderRadius: '8px',
                  padding: '0.75rem 1rem',
                  color: '#ffffff',
                  fontSize: '0.9rem',
                  outline: 'none'
                }}
              />
              <button
                onClick={handleInitializeScrape}
                disabled={isScrapingActive}
                style={{
                  background: '#00D9FF',
                  border: 'none',
                  borderRadius: '8px',
                  padding: '0.75rem 1.75rem',
                  color: '#1a1a1a',
                  fontSize: '0.8rem',
                  fontWeight: '700',
                  cursor: isScrapingActive ? 'not-allowed' : 'pointer',
                  opacity: isScrapingActive ? 0.6 : 1,
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                  whiteSpace: 'nowrap'
                }}
              >
                Initialize Scrape Sequence
              </button>
            </div>
          </div>
        </div>

        {/* Source Toggles Section */}
        <div style={{
          background: '#2d2d2d',
          padding: '2rem',
          borderRadius: '0 0 16px 16px',
          border: '1px solid #3a3a3a',
          borderTop: '1px solid #00D9FF',
          display: 'flex',
          justifyContent: 'center',
          gap: '3rem',
          marginBottom: '2rem'
        }}>
          {[
            { key: 'g2', label: 'G2', color: '#FF3366' },
            { key: 'capterra', label: 'Capterra', color: '#00D9FF' },
            { key: 'trustradius', label: 'TrustRadius', color: '#FF9500' }
          ].map(source => (
            <button
              key={source.key}
              onClick={() => handleSourceToggle(source.key)}
              style={{
                width: '110px',
                height: '110px',
                borderRadius: '50%',
                background: sources[source.key] ? `linear-gradient(135deg, ${source.color}dd, ${source.color})` : '#1f1f1f',
                border: `3px solid ${source.color}`,
                color: '#ffffff',
                cursor: 'pointer',
                fontSize: '0.9rem',
                fontWeight: '600',
                transition: 'all 0.3s ease',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: sources[source.key] ? `0 0 30px ${source.color}66` : 'none',
                position: 'relative'
              }}
            >
              <div style={{ 
                position: 'absolute', 
                top: '15px', 
                left: '15px',
                fontSize: '1.1rem',
                fontWeight: '700'
              }}>
                {source.key === 'g2' ? '⚡' : source.key === 'capterra' ? '○' : '🎁'}
              </div>
              {source.label}
            </button>
          ))}
        </div>

        {/* Live Terminal and Visualizer */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginBottom: '2rem' }}>
          {/* Live Terminal */}
          <div style={{ 
            background: '#1f1f1f',
            padding: '1.5rem',
            borderRadius: '12px',
            border: '1px solid #3a3a3a',
            height: '400px',
            display: 'flex',
            flexDirection: 'column'
          }}>
            <h3 style={{ color: '#ffffff', marginTop: 0, marginBottom: '1rem', fontSize: '1.1rem', fontWeight: '600' }}>
              Live Terminal
            </h3>
            <div style={{ 
              flex: 1,
              overflowY: 'auto',
              fontFamily: '"Courier New", monospace',
              fontSize: '0.75rem',
              lineHeight: '1.7'
            }}>
              {logs.map((log, i) => (
                <div key={i} style={{ 
                  color: log.type === 'error' ? '#FF3366' : log.type === 'success' ? '#00FF88' : '#00D9FF',
                  marginBottom: '0.2rem'
                }}>
                  <span style={{ color: '#00FF88' }}>{'>'}</span> {log.message}
                </div>
              ))}
            </div>
          </div>

          {/* Data Pulse Visualizer */}
          <div style={{ 
            background: '#1f1f1f',
            padding: '1.5rem',
            borderRadius: '12px',
            border: '1px solid #3a3a3a',
            height: '400px',
            display: 'flex',
            flexDirection: 'column'
          }}>
            <h3 style={{ color: '#ffffff', marginTop: 0, marginBottom: '1rem', fontSize: '1.1rem', fontWeight: '600' }}>
              Data Pulse Visualizar
            </h3>
            <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
              <svg width="100%" height="180" viewBox="0 0 700 180" preserveAspectRatio="none">
                <polyline
                  points={pulseData.length > 0 ? pulseData.map((val, i) => `${i * 17.5},${180 - val * 1.5}`).join(' ') : '0,90 700,90'}
                  fill="none"
                  stroke="#00D9FF"
                  strokeWidth="2.5"
                />
                {pulseData.length > 15 && (
                  <circle cx={pulseData.length * 17.5 - 350} cy={180 - pulseData[Math.floor(pulseData.length * 0.6)] * 1.5} r="6" fill="#00D9FF" opacity="0.8" />
                )}
              </svg>
              <div style={{ 
                position: 'absolute',
                bottom: '1.5rem',
                textAlign: 'center',
                width: '100%'
              }}>
                <div style={{ fontSize: '4.5rem', fontWeight: '700', color: '#ffffff', lineHeight: 1, letterSpacing: '-2px' }}>
                  {reviewCount}
                </div>
                <div style={{ color: '#999', fontSize: '1rem', marginTop: '0.5rem', fontWeight: '500' }}>
                  Reviews Harvested
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Results Section */}
        {showResults && (
          <div style={{ marginBottom: '2rem' }}>
            {/* Mission Complete Header */}
            <div style={{
              background: '#1f1f1f',
              padding: '2rem',
              borderRadius: '12px',
              border: '1px solid #3a3a3a',
              marginBottom: '2rem'
            }}>
              <h2 style={{ color: '#ffffff', margin: 0, fontSize: '2rem', fontWeight: '700', marginBottom: '0.5rem' }}>
                Mission Complete. 1,240 Reviews Acquired.
              </h2>
              <p style={{ color: '#888', margin: 0, fontSize: '0.95rem', marginBottom: '1.5rem' }}>
                Source: G2, Capters, Trusta1/24 - 12/31/24
              </p>
              
              {/* Heatmap */}
              <div style={{ marginBottom: '1rem' }}>
                <div style={{ display: 'flex', gap: '3px', marginBottom: '0.5rem' }}>
                  {[...Array(28)].map((_, i) => (
                    <div
                      key={i}
                      style={{
                        width: '28px',
                        height: '18px',
                        background: i < 4 ? '#2196F3' : i < 8 ? '#4CAF50' : i < 18 ? '#FFEB3B' : i < 23 ? '#FFC107' : '#FF9800',
                        borderRadius: '2px'
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Two Column Layout */}
            <div style={{ display: 'grid', gridTemplateColumns: '380px 1fr', gap: '2rem' }}>
              {/* Left Panel - Live Operations */}
              <div style={{
                background: '#1f1f1f',
                padding: '1.5rem',
                borderRadius: '12px',
                border: '1px solid #3a3a3a'
              }}>
                <h3 style={{ color: '#ffffff', fontSize: '1.2rem', marginTop: 0, marginBottom: '1.5rem', fontWeight: '600' }}>
                  Live Operations
                </h3>
                
                <input
                  placeholder="Live command..."
                  style={{
                    width: '100%',
                    background: '#2d2d2d',
                    border: '1px solid #3a3a3a',
                    borderRadius: '8px',
                    padding: '0.75rem',
                    color: '#ffffff',
                    fontSize: '0.85rem',
                    marginBottom: '1.5rem',
                    outline: 'none'
                  }}
                />

                {/* G2 Capterra Toggle */}
                <div style={{
                  background: '#FF3366',
                  borderRadius: '50px',
                  padding: '0.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  marginBottom: '1rem'
                }}>
                  <div style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    background: '#ffffff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: '700',
                    fontSize: '0.9rem',
                    color: '#FF3366'
                  }}>
                    G2
                  </div>
                  <span style={{ color: '#ffffff', fontWeight: '600', flex: 1 }}>Capterra</span>
                  <div style={{
                    width: '50px',
                    height: '28px',
                    background: '#ffffff',
                    borderRadius: '20px',
                    position: 'relative'
                  }}>
                    <div style={{
                      width: '24px',
                      height: '24px',
                      background: '#FF3366',
                      borderRadius: '50%',
                      position: 'absolute',
                      right: '2px',
                      top: '2px'
                    }} />
                  </div>
                </div>

                {/* TrustRadius Toggle */}
                <div style={{
                  background: '#FF9500',
                  borderRadius: '50px',
                  padding: '0.75rem 1.25rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  marginBottom: '1.5rem'
                }}>
                  <div style={{ fontSize: '1.2rem' }}>🎁</div>
                  <span style={{ color: '#ffffff', fontWeight: '600', flex: 1 }}>TrustRadius</span>
                  <div style={{
                    width: '50px',
                    height: '28px',
                    background: '#ffffff',
                    borderRadius: '20px',
                    position: 'relative'
                  }}>
                    <div style={{
                      width: '24px',
                      height: '24px',
                      background: '#FF9500',
                      borderRadius: '50%',
                      position: 'absolute',
                      right: '2px',
                      top: '2px'
                    }} />
                  </div>
                </div>

                <input
                  placeholder="Company Name"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  style={{
                    width: '100%',
                    background: '#2d2d2d',
                    border: '1px solid #3a3a3a',
                    borderRadius: '8px',
                    padding: '0.75rem',
                    color: '#ffffff',
                    fontSize: '0.85rem',
                    marginBottom: '1rem',
                    outline: 'none'
                  }}
                />

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.5rem' }}>
                  <input
                    placeholder="Start Date (Reviews Initiate)"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                    style={{
                      background: '#2d2d2d',
                      border: '1px solid #3a3a3a',
                      borderRadius: '8px',
                      padding: '0.75rem',
                      color: '#666',
                      fontSize: '0.75rem',
                      outline: 'none'
                    }}
                  />
                  <input
                    placeholder="End Date (Terminus Harvested)"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                    style={{
                      background: '#2d2d2d',
                      border: '1px solid #3a3a3a',
                      borderRadius: '8px',
                      padding: '0.75rem',
                      color: '#666',
                      fontSize: '0.75rem',
                      outline: 'none'
                    }}
                  />
                </div>

                <input
                  placeholder="Optics Operations"
                  style={{
                    width: '100%',
                    background: '#2d2d2d',
                    border: '1px solid #3a3a3a',
                    borderRadius: '8px',
                    padding: '0.75rem',
                    color: '#666',
                    fontSize: '0.85rem',
                    outline: 'none'
                  }}
                />
              </div>

              {/* Right Panel - Reviews Grid */}
              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(3, 1fr)', 
                gap: '1rem',
                alignContent: 'start'
              }}>
                {sampleReviews.map((review, i) => (
                  <div
                    key={i}
                    style={{
                      background: '#1f1f1f',
                      padding: '1rem',
                      borderRadius: '8px',
                      border: '1px solid #3a3a3a',
                      minHeight: '100px'
                    }}
                  >
                    <div style={{ 
                      display: 'flex', 
                      justifyContent: 'space-between',
                      alignItems: 'flex-start',
                      marginBottom: '0.75rem',
                      gap: '0.5rem'
                    }}>
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        fontSize: '0.7rem',
                        color: '#888',
                        flex: 1,
                        minWidth: 0
                      }}>
                        <div style={{
                          width: '20px',
                          height: '20px',
                          borderRadius: '50%',
                          background: i % 3 === 0 ? '#FF3366' : i % 3 === 1 ? '#00D9FF' : '#FF9500',
                          flexShrink: 0
                        }} />
                        <span style={{ 
                          overflow: 'hidden', 
                          textOverflow: 'ellipsis', 
                          whiteSpace: 'nowrap' 
                        }}>
                          {review.author}
                        </span>
                      </div>
                      {review.date && (
                        <div style={{ 
                          fontSize: '0.65rem', 
                          color: '#666',
                          whiteSpace: 'nowrap',
                          flexShrink: 0
                        }}>
                          {review.date}
                        </div>
                      )}
                    </div>
                    <p style={{ 
                      color: '#ccc', 
                      fontSize: '0.75rem', 
                      margin: 0,
                      lineHeight: 1.5,
                      marginBottom: '0.75rem'
                    }}>
                      {review.title}
                    </p>
                    {review.rating && (
                      <div style={{
                        padding: '0.3rem 0.6rem',
                        background: review.rating === 'positive' ? '#00FF8820' : '#FF336620',
                        border: `1px solid ${review.rating === 'positive' ? '#00FF88' : '#FF3366'}`,
                        borderRadius: '4px',
                        color: review.rating === 'positive' ? '#00FF88' : '#FF3366',
                        fontSize: '0.65rem',
                        fontWeight: '700',
                        display: 'inline-block',
                        textTransform: 'uppercase'
                      }}>
                        {review.rating}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div style={{ 
          display: 'flex', 
          gap: '1.5rem',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <button
              style={{
                background: 'transparent',
                border: '2px solid #00D9FF',
                borderRadius: '8px',
                padding: '0.85rem 1.5rem',
                color: '#00D9FF',
                fontSize: '0.8rem',
                fontWeight: '700',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                textTransform: 'uppercase',
                letterSpacing: '0.5px'
              }}
            >
              <Download size={16} />
              Download JSON Package
            </button>
            <button
              style={{
                background: 'transparent',
                border: '2px solid #666',
                borderRadius: '8px',
                padding: '0.85rem 1.5rem',
                color: '#999',
                fontSize: '0.8rem',
                fontWeight: '700',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                textTransform: 'uppercase',
                letterSpacing: '0.5px'
              }}
            >
              <Copy size={16} />
              Copy Raw Data to Cilbarad
            </button>
          </div>
          <button
            onClick={() => window.location.reload()}
            style={{
              background: 'transparent',
              border: '2px solid #00D9FF',
              borderRadius: '8px',
              padding: '0.85rem 1.5rem',
              color: '#00D9FF',
              fontSize: '0.8rem',
              fontWeight: '700',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              textTransform: 'uppercase',
              letterSpacing: '0.5px'
            }}
          >
            <RefreshCw size={16} /          >
            New Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewScraperUI;
