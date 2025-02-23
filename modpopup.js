// Palette definitions
const palettes = {
    default: {
      '--text': '#2E2E2E',
      '--background': '#ECD58C',
      '--primary': '#2c8890',
      '--secondary': '#ffffff',
      '--accent': '#20767e',
      '--dark-shadow': '#04222550',
      '--light-shadow': '#42301c77'
    },
    warm: {
      '--text': '#4E342E',
      '--background': '#FFCCBC',
      '--primary': '#BF360C',
      '--secondary': '#FFF8E1',
      '--accent': '#E65100',
      '--dark-shadow': 'rgba(0,0,0,0.3)',
      '--light-shadow': 'rgba(0,0,0,0.1)'
    },
    cool: {
      '--text': '#263238',
      '--background': '#B0BEC5',
      '--primary': '#0277BD',
      '--secondary': '#ECEFF1',
      '--accent': '#01579B',
      '--dark-shadow': 'rgba(0,0,0,0.3)',
      '--light-shadow': 'rgba(0,0,0,0.1)'
    },

    light: {
        '--text': '#2E2E2E',
      '--background': '#fff9e7',
      '--primary': '#2c8890',
      '--secondary': '#ECD58C',
      '--accent': '#20767e',
      '--dark-shadow': '#04222550',
      '--light-shadow': '#42301c77'
      },
      dark: {
        '--text': '#fff9e7',
      '--background': '#2E2E2E',
      '--primary': '#2c8890',
      '--secondary': '#ECD58C',
      '--accent': '#20767e',
      '--dark-shadow': '#04222550',
      '--light-shadow': '#42301c77'
      }
  };
  
  const paletteBtn = document.getElementById('palette-btn');
  const popup = document.getElementById('palette-popup');
  const closePopup = document.getElementById('close-popup');
  
  paletteBtn.addEventListener('click', () => {
    popup.classList.remove('hidden');
  });
  
  closePopup.addEventListener('click', () => {
    popup.classList.add('hidden');
  });
  
  document.querySelectorAll('.palette-option').forEach(option => {
    option.addEventListener('click', () => {
      const paletteName = option.getAttribute('data-palette');
      const palette = palettes[paletteName];
      if (palette) {
        for (const [varName, value] of Object.entries(palette)) {
          document.documentElement.style.setProperty(varName, value);
        }
      }
      popup.classList.add('hidden');
    });
  });
  