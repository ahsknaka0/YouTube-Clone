import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header, Sidebar, CategoryFilter, VideoGrid, VideoPlayer, mockVideos, categories } from './components';
import './App.css';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [filteredVideos, setFilteredVideos] = useState(mockVideos);
  const [darkMode, setDarkMode] = useState(false);

  // Filter videos based on category and search query
  useEffect(() => {
    let filtered = mockVideos;

    // Filter by category
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(video => video.category === selectedCategory);
    }

    // Filter by search query
    if (searchQuery.trim()) {
      filtered = filtered.filter(video =>
        video.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        video.channelName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        video.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFilteredVideos(filtered);
  }, [selectedCategory, searchQuery]);

  // Close sidebar when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarOpen && !event.target.closest('aside') && !event.target.closest('button')) {
        setSidebarOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [sidebarOpen]);

  // Apply dark mode to document
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const handleMenuClick = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleVideoClick = (video) => {
    setSelectedVideo(video);
  };

  const handleCloseVideo = () => {
    setSelectedVideo(null);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <BrowserRouter>
      <div className={`App min-h-screen ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
        <Header
          onMenuClick={handleMenuClick}
          onSearch={handleSearch}
          searchQuery={searchQuery}
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        />
        
        <Sidebar isOpen={sidebarOpen} darkMode={darkMode} />
        
        {/* Main content overlay to close sidebar */}
        {sidebarOpen && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        <main className={`pt-16 transition-all duration-300 ${sidebarOpen ? 'lg:ml-64' : ''}`}>
          <CategoryFilter
            categories={categories}
            selectedCategory={selectedCategory}
            onCategoryChange={handleCategoryChange}
            darkMode={darkMode}
          />
          
          <div className="p-6">
            {filteredVideos.length === 0 ? (
              <div className={`text-center py-12 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                <div className="text-6xl mb-4">🔍</div>
                <h2 className="text-2xl font-bold mb-2">No videos found</h2>
                <p>Try adjusting your search or selected category</p>
              </div>
            ) : (
              <VideoGrid
                videos={filteredVideos}
                onVideoClick={handleVideoClick}
                darkMode={darkMode}
              />
            )}
          </div>
        </main>

        {selectedVideo && (
          <VideoPlayer
            video={selectedVideo}
            onClose={handleCloseVideo}
            darkMode={darkMode}
          />
        )}
      </div>
    </BrowserRouter>
  );
}

export default App;