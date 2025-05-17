import { useState, useEffect } from 'react'
import './App.css'

interface Quote {
  text: string;
  author: string;
}

const quotes: Quote[] = [
  {
    text: "The only way to do great work is to love what you do.",
    author: "Steve Jobs"
  },
  {
    text: "Innovation distinguishes between a leader and a follower.",
    author: "Steve Jobs"
  },
  {
    text: "Stay hungry, stay foolish.",
    author: "Steve Jobs"
  },
  {
    text: "Your time is limited, don't waste it living someone else's life.",
    author: "Steve Jobs"
  },
  {
    text: "The future belongs to those who believe in the beauty of their dreams.",
    author: "Eleanor Roosevelt"
  },
  {
    text: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    author: "Winston Churchill"
  },
  {
    text: "The only limit to our realization of tomorrow is our doubts of today.",
    author: "Franklin D. Roosevelt"
  },
  {
    text: "Design is not just what it looks like and feels like. Design is how it works.",
    author: "Steve Jobs"
  },
  {
    text: "The best way to predict the future is to create it.",
    author: "Peter Drucker"
  },
  {
    text: "Creativity is intelligence having fun.",
    author: "Albert Einstein"
  },
  {
    text: "Simplicity is the ultimate sophistication.",
    author: "Leonardo da Vinci"
  },
  {
    text: "The only true wisdom is in knowing you know nothing.",
    author: "Socrates"
  },
  {
    text: "Life is what happens while you're busy making other plans.",
    author: "John Lennon"
  },
  {
    text: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    author: "Nelson Mandela"
  },
  {
    text: "In the middle of difficulty lies opportunity.",
    author: "Albert Einstein"
  },
  {
    text: "The journey of a thousand miles begins with one step.",
    author: "Lao Tzu"
  },
  {
    text: "Everything you've ever wanted is on the other side of fear.",
    author: "George Addair"
  },
  {
    text: "The only person you are destined to become is the person you decide to be.",
    author: "Ralph Waldo Emerson"
  },
  {
    text: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt"
  },
  {
    text: "I have not failed. I've just found 10,000 ways that won't work.",
    author: "Thomas A. Edison"
  },
  {
    text: "The mind is everything. What you think you become.",
    author: "Buddha"
  },
  {
    text: "The best revenge is massive success.",
    author: "Frank Sinatra"
  },
  {
    text: "Do what you can, with what you have, where you are.",
    author: "Theodore Roosevelt"
  },
  {
    text: "If you want to lift yourself up, lift up someone else.",
    author: "Booker T. Washington"
  },
  {
    text: "The only way to do great work is to be passionate about what you do.",
    author: "Steve Jobs"
  },
  {
    text: "Don't watch the clock; do what it does. Keep going.",
    author: "Sam Levenson"
  },
  {
    text: "The harder you work for something, the greater you'll feel when you achieve it.",
    author: "Unknown"
  },
  {
    text: "Dream big and dare to fail.",
    author: "Norman Vaughan"
  },
  {
    text: "What you get by achieving your goals is not as important as what you become by achieving your goals.",
    author: "Zig Ziglar"
  },
  {
    text: "The future depends on what you do today.",
    author: "Mahatma Gandhi"
  }
];

interface TypewriterTextProps {
  text: string;
  className?: string;
  onComplete?: () => void;
}

const TypewriterText = ({ text, className, onComplete }: TypewriterTextProps) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 30);

      return () => clearTimeout(timeout);
    } else if (onComplete) {
      onComplete();
    }
  }, [currentIndex, text, onComplete]);

  useEffect(() => {
    setDisplayText('');
    setCurrentIndex(0);
  }, [text]);

  return <span className={className}>{displayText}</span>;
};

function App() {
  const [currentQuote, setCurrentQuote] = useState<Quote>(quotes[0]);
  const [fadeIn, setFadeIn] = useState(true);
  const [isTyping, setIsTyping] = useState(false);
  const [quoteTyped, setQuoteTyped] = useState(false);
  const [authorTyped, setAuthorTyped] = useState(false);

  const getRandomQuote = () => {
    if (isTyping) return;
    
    setFadeIn(false);
    setIsTyping(true);
    setQuoteTyped(false);
    setAuthorTyped(false);
    
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * quotes.length);
      setCurrentQuote(quotes[randomIndex]);
      setFadeIn(true);
    }, 300);
  };

  const handleQuoteComplete = () => {
    setQuoteTyped(true);
  };

  const handleAuthorComplete = () => {
    setAuthorTyped(true);
    setIsTyping(false);
  };

  useEffect(() => {
    getRandomQuote();
  }, []);

  return (
    <div className="app">
      <div className="quote-container">
        <div className={`quote ${fadeIn ? 'fade-in' : 'fade-out'}`}>
          <p className="quote-text">
            <TypewriterText 
              text={`"${currentQuote.text}"`} 
              onComplete={handleQuoteComplete}
            />
            {quoteTyped && <span className="cursor">|</span>}
          </p>
          <p className="quote-author">
            <TypewriterText 
              text={`- ${currentQuote.author}`}
              onComplete={handleAuthorComplete}
            />
            {authorTyped && <span className="cursor">|</span>}
          </p>
        </div>
        <button 
          className="new-quote-btn"
          onClick={getRandomQuote}
          disabled={isTyping}
        >
          New Quote
        </button>
      </div>
    </div>
  )
}

export default App
