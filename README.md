# Quote Generator

A modern, interactive quote generator built with React and TypeScript. This application features a sleek neobrutalism design with smooth typing animations and a responsive layout.

![Quote Generator Demo](demo.gif)

## Features

- 🎯 Random quote generation
- ⌨️ Typewriter animation effect
- 🎨 Neobrutalism design style
- 📱 Fully responsive layout
- ⚡ Smooth transitions and animations
- 🎭 Collection of 30+ inspirational quotes

## Technologies Used

- React
- TypeScript
- Vite
- CSS3 (with modern animations)

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/quote-gen.git
cd quote-gen
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Start the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open your browser and visit `http://localhost:5173`

## Usage

- Click the "New Quote" button to generate a random quote
- Watch the typewriter animation as the quote appears
- The button is disabled while the animation is in progress
- Each quote includes both the text and its author

## Project Structure

```
quote-gen/
├── src/
│   ├── App.tsx          # Main application component
│   ├── App.css          # Application styles
│   └── main.tsx         # Application entry point
├── public/              # Static assets
├── index.html           # HTML template
└── package.json         # Project dependencies
```

## Customization

### Adding New Quotes

To add new quotes, edit the `quotes` array in `src/App.tsx`:

```typescript
const quotes: Quote[] = [
  {
    text: "Your quote here",
    author: "Author name"
  },
  // Add more quotes...
];
```

### Styling

The application uses a neobrutalism design style. You can customize the appearance by modifying the CSS in `src/App.css`.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Quotes from various notable figures
- Inspired by neobrutalism design principles
- Built with modern web technologies
