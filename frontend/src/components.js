import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Search, 
  Menu, 
  Bell, 
  User, 
  Home, 
  TrendingUp, 
  PlayCircle, 
  History, 
  ThumbsUp, 
  ThumbsDown, 
  Share2, 
  Download, 
  MoreHorizontal,
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize,
  Settings,
  SkipBack,
  SkipForward,
  Users,
  Clock,
  Eye,
  MessageCircle,
  Heart,
  Bookmark,
  Flag,
  Music,
  Gamepad2,
  Utensils,
  Plane,
  GraduationCap,
  Zap,
  Camera,
  Mic,
  Plus,
  Check,
  X,
  ChevronDown,
  ChevronUp,
  Filter,
  Grid,
  List,
  Moon,
  Sun
} from 'lucide-react';

// Mock data
const mockVideos = [
  {
    id: 1,
    title: "Building Amazing React Apps in 2025 | Complete Tutorial",
    thumbnail: "https://images.unsplash.com/photo-1639789976408-3fd60d7896f4",
    channelName: "TechGuru",
    channelAvatar: "https://images.unsplash.com/photo-1633332755192-727a05c4013d",
    views: "2.3M",
    uploadTime: "2 days ago",
    duration: "18:45",
    category: "Technology",
    description: "Learn how to build modern React applications with the latest features and best practices in 2025."
  },
  {
    id: 2,
    title: "Epic Gaming Moments - Best Plays Compilation",
    thumbnail: "https://images.unsplash.com/photo-1611829713792-e1841cbe2cf8",
    channelName: "GameMaster",
    channelAvatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde",
    views: "5.7M",
    uploadTime: "5 hours ago",
    duration: "12:30",
    category: "Gaming",
    description: "The most incredible gaming moments from the past month. Unbelievable plays and epic wins!"
  },
  {
    id: 3,
    title: "Amazing Live Performance - Concert Highlights",
    thumbnail: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7",
    channelName: "MusicVibes",
    channelAvatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    views: "890K",
    uploadTime: "1 week ago",
    duration: "25:12",
    category: "Music",
    description: "Breathtaking live performance with incredible vocals and stage presence."
  },
  {
    id: 4,
    title: "Perfect Pasta Recipe - Italian Cooking Tutorial",
    thumbnail: "https://images.unsplash.com/photo-1640409084317-ada21bc20d14",
    channelName: "ChefLife",
    channelAvatar: "https://images.pexels.com/photos/32900867/pexels-photo-32900867.jpeg",
    views: "1.2M",
    uploadTime: "3 days ago",
    duration: "15:20",
    category: "Cooking",
    description: "Learn how to make authentic Italian pasta from scratch with traditional techniques."
  },
  {
    id: 5,
    title: "Breathtaking Travel Destinations - Hidden Gems",
    thumbnail: "https://images.unsplash.com/photo-1489395131208-596c1ecb2a39",
    channelName: "Wanderlust",
    channelAvatar: "https://images.pexels.com/photos/12499815/pexels-photo-12499815.jpeg",
    views: "3.4M",
    uploadTime: "4 days ago",
    duration: "22:18",
    category: "Travel",
    description: "Discover amazing hidden travel destinations around the world with stunning visuals."
  },
  {
    id: 6,
    title: "NBA Finals Highlights - Championship Game",
    thumbnail: "https://images.unsplash.com/photo-1700319021396-95aec8e168ac",
    channelName: "SportsCenter",
    channelAvatar: "https://images.pexels.com/photos/32929015/pexels-photo-32929015.jpeg",
    views: "12.5M",
    uploadTime: "6 hours ago",
    duration: "8:45",
    category: "Sports",
    description: "The most exciting moments from the championship game with incredible plays."
  },
  {
    id: 7,
    title: "Physics Explained Simply - Quantum Mechanics",
    thumbnail: "https://images.pexels.com/photos/4144222/pexels-photo-4144222.jpeg",
    channelName: "EduWorld",
    channelAvatar: "https://images.pexels.com/photos/7269596/pexels-photo-7269596.jpeg",
    views: "567K",
    uploadTime: "1 day ago",
    duration: "30:15",
    category: "Education",
    description: "Understanding quantum mechanics made simple with clear explanations and examples."
  },
  {
    id: 8,
    title: "Comedy Gold - Stand-up Special",
    thumbnail: "https://images.unsplash.com/photo-1734160620062-0f80386dd504",
    channelName: "LaughOut",
    channelAvatar: "https://images.pexels.com/photos/7482015/pexels-photo-7482015.jpeg",
    views: "4.1M",
    uploadTime: "2 weeks ago",
    duration: "45:30",
    category: "Entertainment",
    description: "Hilarious stand-up comedy special with the best jokes and crowd reactions."
  },
  {
    id: 9,
    title: "VR Gaming Experience - Future of Entertainment",
    thumbnail: "https://images.pexels.com/photos/7773547/pexels-photo-7773547.jpeg",
    channelName: "VRWorld",
    channelAvatar: "https://images.unsplash.com/photo-1633332755192-727a05c4013d",
    views: "2.8M",
    uploadTime: "5 days ago",
    duration: "16:40",
    category: "Gaming",
    description: "Exploring the latest VR gaming technology and immersive experiences."
  },
  {
    id: 10,
    title: "Harp Performance - Classical Music",
    thumbnail: "https://images.pexels.com/photos/32923793/pexels-photo-32923793.jpeg",
    channelName: "ClassicalVibes",
    channelAvatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    views: "345K",
    uploadTime: "1 week ago",
    duration: "12:25",
    category: "Music",
    description: "Beautiful classical harp performance with emotional melodies."
  },
  {
    id: 11,
    title: "Cooking on Phone - Mobile Food Content",
    thumbnail: "https://images.pexels.com/photos/8357262/pexels-photo-8357262.jpeg",
    channelName: "MobileCook",
    channelAvatar: "https://images.pexels.com/photos/32900867/pexels-photo-32900867.jpeg",
    views: "1.5M",
    uploadTime: "12 hours ago",
    duration: "9:15",
    category: "Cooking",
    description: "Quick and easy recipes you can follow on your mobile device."
  },
  {
    id: 12,
    title: "Behind the Scenes - Film Making Process",
    thumbnail: "https://images.pexels.com/photos/12499815/pexels-photo-12499815.jpeg",
    channelName: "FilmMakers",
    channelAvatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde",
    views: "987K",
    uploadTime: "3 days ago",
    duration: "28:50",
    category: "Entertainment",
    description: "Exclusive behind-the-scenes footage from major film production."
  }
];

const categories = [
  { name: "All", icon: Grid },
  { name: "Technology", icon: Zap },
  { name: "Gaming", icon: Gamepad2 },
  { name: "Music", icon: Music },
  { name: "Cooking", icon: Utensils },
  { name: "Travel", icon: Plane },
  { name: "Sports", icon: PlayCircle },
  { name: "Education", icon: GraduationCap },
  { name: "Entertainment", icon: Camera }
];

const sidebarItems = [
  { name: "Home", icon: Home },
  { name: "Trending", icon: TrendingUp },
  { name: "Subscriptions", icon: Users },
  { name: "Library", icon: PlayCircle },
  { name: "History", icon: History },
  { name: "Liked videos", icon: ThumbsUp },
  { name: "Watch later", icon: Clock }
];

const comments = [
  {
    id: 1,
    user: "TechEnthusiast",
    avatar: "https://images.unsplash.com/photo-1633332755192-727a05c4013d",
    text: "This is exactly what I needed! Great tutorial, very well explained.",
    likes: 245,
    replies: 12,
    time: "2 hours ago"
  },
  {
    id: 2,
    user: "CodeNinja",
    avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde",
    text: "Amazing content! Could you make a follow-up video about advanced concepts?",
    likes: 89,
    replies: 5,
    time: "4 hours ago"
  },
  {
    id: 3,
    user: "WebDeveloper",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    text: "Thanks for sharing this! Really helpful for my current project.",
    likes: 156,
    replies: 8,
    time: "6 hours ago"
  }
];

// Header Component
export const Header = ({ onMenuClick, onSearch, searchQuery, darkMode, setDarkMode }) => {
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 ${darkMode ? 'bg-gray-900' : 'bg-white'} shadow-sm`}>
      <div className="flex items-center justify-between px-4 py-3">
        {/* Left section */}
        <div className="flex items-center space-x-4">
          <button
            onClick={onMenuClick}
            className={`p-2 rounded-full hover:bg-gray-100 ${darkMode ? 'hover:bg-gray-800 text-white' : 'text-gray-700'}`}
          >
            <Menu size={20} />
          </button>
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
              <Play size={16} className="text-white ml-1" />
            </div>
            <span className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              YouTube
            </span>
          </div>
        </div>

        {/* Center section - Search */}
        <div className="flex-1 max-w-2xl mx-4">
          <div className="flex items-center">
            <div className={`flex items-center flex-1 border rounded-full ${
              isSearchFocused 
                ? 'border-blue-500 shadow-md' 
                : darkMode 
                  ? 'border-gray-600 bg-gray-800' 
                  : 'border-gray-300 bg-white'
            }`}>
              <input
                type="text"
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => onSearch(e.target.value)}
                onFocus={() => setIsSearchFocused(true)}
                onBlur={() => setIsSearchFocused(false)}
                className={`flex-1 px-4 py-2 rounded-l-full focus:outline-none ${
                  darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'
                }`}
              />
              <button className={`px-6 py-2 border-l rounded-r-full ${
                darkMode ? 'border-gray-600 bg-gray-700 hover:bg-gray-600' : 'border-gray-300 bg-gray-50 hover:bg-gray-100'
              }`}>
                <Search size={20} className={darkMode ? 'text-gray-300' : 'text-gray-600'} />
              </button>
            </div>
            <button className={`ml-2 p-2 rounded-full ${
              darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-100 hover:bg-gray-200'
            }`}>
              <Mic size={20} className={darkMode ? 'text-gray-300' : 'text-gray-600'} />
            </button>
          </div>
        </div>

        {/* Right section */}
        <div className="flex items-center space-x-2">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`p-2 rounded-full hover:bg-gray-100 ${darkMode ? 'hover:bg-gray-800 text-white' : 'text-gray-700'}`}
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button className={`p-2 rounded-full hover:bg-gray-100 ${darkMode ? 'hover:bg-gray-800 text-white' : 'text-gray-700'}`}>
            <Camera size={20} />
          </button>
          <button className={`p-2 rounded-full hover:bg-gray-100 ${darkMode ? 'hover:bg-gray-800 text-white' : 'text-gray-700'}`}>
            <Bell size={20} />
          </button>
          <button className={`p-2 rounded-full hover:bg-gray-100 ${darkMode ? 'hover:bg-gray-800 text-white' : 'text-gray-700'}`}>
            <User size={20} />
          </button>
        </div>
      </div>
    </header>
  );
};

// Sidebar Component
export const Sidebar = ({ isOpen, darkMode }) => {
  return (
    <aside className={`fixed left-0 top-16 h-full transition-transform duration-300 z-40 ${
      isOpen ? 'translate-x-0' : '-translate-x-full'
    } ${darkMode ? 'bg-gray-900' : 'bg-white'} w-64 shadow-lg`}>
      <div className="p-4">
        <nav className="space-y-2">
          {sidebarItems.map((item, index) => (
            <motion.button
              key={item.name}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-gray-100 ${
                darkMode ? 'hover:bg-gray-800 text-gray-300' : 'text-gray-700'
              } ${index === 0 ? 'bg-gray-100' : ''} ${
                darkMode && index === 0 ? 'bg-gray-800' : ''
              }`}
            >
              <item.icon size={20} />
              <span>{item.name}</span>
            </motion.button>
          ))}
        </nav>
        
        <div className={`mt-6 pt-4 border-t ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
          <h3 className={`text-sm font-medium mb-3 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            Subscriptions
          </h3>
          <div className="space-y-2">
            {mockVideos.slice(0, 5).map((video, index) => (
              <div key={video.id} className="flex items-center space-x-3">
                <img 
                  src={video.channelAvatar} 
                  alt={video.channelName}
                  className="w-6 h-6 rounded-full"
                />
                <span className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  {video.channelName}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
};

// Category Filter Component
export const CategoryFilter = ({ categories, selectedCategory, onCategoryChange, darkMode }) => {
  return (
    <div className={`sticky top-16 ${darkMode ? 'bg-gray-900' : 'bg-white'} border-b ${
      darkMode ? 'border-gray-700' : 'border-gray-200'
    } z-30`}>
      <div className="flex items-center space-x-3 px-4 py-3 overflow-x-auto">
        {categories.map((category) => (
          <button
            key={category.name}
            onClick={() => onCategoryChange(category.name)}
            className={`flex items-center space-x-2 px-4 py-2 rounded-full whitespace-nowrap transition-colors ${
              selectedCategory === category.name
                ? 'bg-gray-900 text-white'
                : darkMode
                  ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            <category.icon size={16} />
            <span>{category.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

// Video Card Component
export const VideoCard = ({ video, onVideoClick, darkMode }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      className="cursor-pointer"
      onClick={() => onVideoClick(video)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative">
        <img
          src={video.thumbnail}
          alt={video.title}
          className="w-full h-48 object-cover rounded-lg"
        />
        <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded">
          {video.duration}
        </div>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0 bg-black bg-opacity-50 rounded-lg flex items-center justify-center"
          >
            <Play size={48} className="text-white" />
          </motion.div>
        )}
      </div>
      <div className="mt-3 flex space-x-3">
        <img
          src={video.channelAvatar}
          alt={video.channelName}
          className="w-10 h-10 rounded-full"
        />
        <div className="flex-1">
          <h3 className={`font-medium line-clamp-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            {video.title}
          </h3>
          <p className={`text-sm mt-1 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            {video.channelName}
          </p>
          <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            {video.views} views • {video.uploadTime}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

// Video Grid Component
export const VideoGrid = ({ videos, onVideoClick, darkMode }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {videos.map((video) => (
        <VideoCard
          key={video.id}
          video={video}
          onVideoClick={onVideoClick}
          darkMode={darkMode}
        />
      ))}
    </div>
  );
};

// Video Player Component
export const VideoPlayer = ({ video, onClose, darkMode }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);
  const [subscribed, setSubscribed] = useState(false);
  const [showComments, setShowComments] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (isPlaying) setShowControls(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, [isPlaying, showControls]);

  const handleLike = () => {
    setLiked(!liked);
    if (disliked) setDisliked(false);
  };

  const handleDislike = () => {
    setDisliked(!disliked);
    if (liked) setLiked(false);
  };

  return (
    <div className={`fixed inset-0 z-50 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
      <div className="flex h-full">
        {/* Video Player Section */}
        <div className="flex-1 flex flex-col">
          {/* Video Player */}
          <div className="relative bg-black flex-1 flex items-center justify-center">
            <img
              src={video.thumbnail}
              alt={video.title}
              className="max-w-full max-h-full object-contain"
            />
            
            {/* Video Controls Overlay */}
            <div
              className={`absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center transition-opacity ${
                showControls ? 'opacity-100' : 'opacity-0'
              }`}
              onMouseMove={() => setShowControls(true)}
            >
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="text-white hover:scale-110 transition-transform"
              >
                {isPlaying ? <Pause size={64} /> : <Play size={64} />}
              </button>
            </div>

            {/* Bottom Controls */}
            <div className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4 transition-opacity ${
              showControls ? 'opacity-100' : 'opacity-0'
            }`}>
              <div className="flex items-center justify-between text-white">
                <div className="flex items-center space-x-4">
                  <button onClick={() => setIsPlaying(!isPlaying)}>
                    {isPlaying ? <Pause size={24} /> : <Play size={24} />}
                  </button>
                  <button onClick={() => setIsMuted(!isMuted)}>
                    {isMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
                  </button>
                  <span className="text-sm">0:00 / {video.duration}</span>
                </div>
                <div className="flex items-center space-x-4">
                  <button>
                    <Settings size={24} />
                  </button>
                  <button>
                    <Maximize size={24} />
                  </button>
                  <button onClick={onClose}>
                    <X size={24} />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Video Info */}
          <div className="p-6">
            <h1 className={`text-2xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              {video.title}
            </h1>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-4">
                <img
                  src={video.channelAvatar}
                  alt={video.channelName}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <h3 className={`font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    {video.channelName}
                  </h3>
                  <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    {video.views} views • {video.uploadTime}
                  </p>
                </div>
                <button
                  onClick={() => setSubscribed(!subscribed)}
                  className={`px-4 py-2 rounded-full font-medium transition-colors ${
                    subscribed
                      ? darkMode
                        ? 'bg-gray-700 text-white'
                        : 'bg-gray-200 text-gray-700'
                      : 'bg-red-600 text-white hover:bg-red-700'
                  }`}
                >
                  {subscribed ? 'Subscribed' : 'Subscribe'}
                </button>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={handleLike}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-colors ${
                    liked
                      ? 'bg-blue-600 text-white'
                      : darkMode
                        ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <ThumbsUp size={20} />
                  <span>Like</span>
                </button>
                <button
                  onClick={handleDislike}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-colors ${
                    disliked
                      ? 'bg-red-600 text-white'
                      : darkMode
                        ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <ThumbsDown size={20} />
                  <span>Dislike</span>
                </button>
                <button className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-colors ${
                  darkMode
                    ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}>
                  <Share2 size={20} />
                  <span>Share</span>
                </button>
                <button className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-colors ${
                  darkMode
                    ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}>
                  <Download size={20} />
                  <span>Download</span>
                </button>
              </div>
            </div>
            <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
              <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                {video.description}
              </p>
            </div>
          </div>

          {/* Comments Section */}
          <div className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className={`text-lg font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Comments
              </h3>
              <button
                onClick={() => setShowComments(!showComments)}
                className={`flex items-center space-x-2 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}
              >
                {showComments ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                <span>{comments.length}</span>
              </button>
            </div>
            {showComments && (
              <div className="space-y-4">
                {comments.map((comment) => (
                  <div key={comment.id} className="flex space-x-3">
                    <img
                      src={comment.avatar}
                      alt={comment.user}
                      className="w-10 h-10 rounded-full"
                    />
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-1">
                        <h4 className={`font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                          {comment.user}
                        </h4>
                        <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                          {comment.time}
                        </span>
                      </div>
                      <p className={`mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                        {comment.text}
                      </p>
                      <div className="flex items-center space-x-4">
                        <button className={`flex items-center space-x-1 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                          <ThumbsUp size={16} />
                          <span className="text-sm">{comment.likes}</span>
                        </button>
                        <button className={`flex items-center space-x-1 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                          <ThumbsDown size={16} />
                        </button>
                        <button className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                          Reply
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Recommendations Sidebar */}
        <div className={`w-96 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'} p-4 overflow-y-auto`}>
          <h3 className={`text-lg font-medium mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Up next
          </h3>
          <div className="space-y-4">
            {mockVideos.filter(v => v.id !== video.id).slice(0, 10).map((recommendedVideo) => (
              <div
                key={recommendedVideo.id}
                className="flex space-x-3 cursor-pointer hover:bg-gray-100 p-2 rounded-lg"
                onClick={() => onVideoClick(recommendedVideo)}
              >
                <img
                  src={recommendedVideo.thumbnail}
                  alt={recommendedVideo.title}
                  className="w-32 h-20 object-cover rounded"
                />
                <div className="flex-1">
                  <h4 className={`font-medium text-sm line-clamp-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    {recommendedVideo.title}
                  </h4>
                  <p className={`text-xs mt-1 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    {recommendedVideo.channelName}
                  </p>
                  <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    {recommendedVideo.views} views
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export { mockVideos, categories, sidebarItems, comments };