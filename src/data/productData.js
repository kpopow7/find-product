// Product finder data structure
// Each question can have multiple answers, and each answer can lead to another question or a product

export const productData = {
  questions: {
    q1: {
      id: 'q1',
      text: 'What type of device are you looking for?',
      type: 'single', // single or multiple choice
      answers: [
        {
          id: 'a1',
          text: 'Laptop',
          nextQuestion: 'q2'
        },
        {
          id: 'a2',
          text: 'Desktop Computer',
          nextQuestion: 'q3'
        },
        {
          id: 'a3',
          text: 'Tablet',
          nextQuestion: 'q4'
        },
        {
          id: 'a4',
          text: 'Smartphone',
          nextQuestion: 'q5'
        }
      ]
    },
    q2: {
      id: 'q2',
      text: 'What is your primary use case for the laptop?',
      type: 'single',
      answers: [
        {
          id: 'a5',
          text: 'Gaming',
          nextQuestion: 'q6'
        },
        {
          id: 'a6',
          text: 'Business/Work',
          nextQuestion: 'q7'
        },
        {
          id: 'a7',
          text: 'Creative Work (Design, Video Editing)',
          nextQuestion: 'q8'
        },
        {
          id: 'a8',
          text: 'General Use/Student',
          nextQuestion: 'q9'
        }
      ]
    },
    q3: {
      id: 'q3',
      text: 'What is your primary use case for the desktop?',
      type: 'single',
      answers: [
        {
          id: 'a9',
          text: 'Gaming',
          nextQuestion: 'q10'
        },
        {
          id: 'a10',
          text: 'Workstation/Professional',
          nextQuestion: 'q11'
        },
        {
          id: 'a11',
          text: 'Home Office',
          nextQuestion: 'q12'
        }
      ]
    },
    q4: {
      id: 'q4',
      text: 'What size tablet are you interested in?',
      type: 'single',
      answers: [
        {
          id: 'a12',
          text: 'Small (7-9 inches)',
          productId: 'product1'
        },
        {
          id: 'a13',
          text: 'Medium (10-11 inches)',
          productId: 'product2'
        },
        {
          id: 'a14',
          text: 'Large (12+ inches)',
          productId: 'product3'
        }
      ]
    },
    q5: {
      id: 'q5',
      text: 'What is your budget range?',
      type: 'single',
      answers: [
        {
          id: 'a15',
          text: 'Under $500',
          productId: 'product4'
        },
        {
          id: 'a16',
          text: '$500 - $1000',
          productId: 'product5'
        },
        {
          id: 'a17',
          text: 'Over $1000',
          productId: 'product6'
        }
      ]
    },
    q6: {
      id: 'q6',
      text: 'What is your budget for a gaming laptop?',
      type: 'single',
      answers: [
        {
          id: 'a18',
          text: 'Under $1000',
          productId: 'product7'
        },
        {
          id: 'a19',
          text: '$1000 - $2000',
          productId: 'product8'
        },
        {
          id: 'a20',
          text: 'Over $2000',
          productId: 'product9'
        }
      ]
    },
    q7: {
      id: 'q7',
      text: 'Do you need portability or performance?',
      type: 'single',
      answers: [
        {
          id: 'a21',
          text: 'Portability (Lightweight, Long Battery)',
          productId: 'product10'
        },
        {
          id: 'a22',
          text: 'Performance (Powerful CPU, More RAM)',
          productId: 'product11'
        },
        {
          id: 'a23',
          text: 'Balance of Both',
          productId: 'product12'
        }
      ]
    },
    q8: {
      id: 'q8',
      text: 'What is your budget for creative work?',
      type: 'single',
      answers: [
        {
          id: 'a24',
          text: 'Under $1500',
          productId: 'product13'
        },
        {
          id: 'a25',
          text: '$1500 - $3000',
          productId: 'product14'
        },
        {
          id: 'a26',
          text: 'Over $3000',
          productId: 'product15'
        }
      ]
    },
    q9: {
      id: 'q9',
      text: 'What is your budget for a general use laptop?',
      type: 'single',
      answers: [
        {
          id: 'a27',
          text: 'Under $600',
          productId: 'product16'
        },
        {
          id: 'a28',
          text: '$600 - $1200',
          productId: 'product17'
        },
        {
          id: 'a29',
          text: 'Over $1200',
          productId: 'product18'
        }
      ]
    },
    q10: {
      id: 'q10',
      text: 'What is your budget for a gaming desktop?',
      type: 'single',
      answers: [
        {
          id: 'a30',
          text: 'Under $1500',
          productId: 'product19'
        },
        {
          id: 'a31',
          text: '$1500 - $3000',
          productId: 'product20'
        },
        {
          id: 'a32',
          text: 'Over $3000',
          productId: 'product21'
        }
      ]
    },
    q11: {
      id: 'q11',
      text: 'What type of professional work?',
      type: 'single',
      answers: [
        {
          id: 'a33',
          text: 'Software Development',
          productId: 'product22'
        },
        {
          id: 'a34',
          text: '3D Rendering/Animation',
          productId: 'product23'
        },
        {
          id: 'a35',
          text: 'Data Science/AI',
          productId: 'product24'
        }
      ]
    },
    q12: {
      id: 'q12',
      text: 'What is your budget for a home office desktop?',
      type: 'single',
      answers: [
        {
          id: 'a36',
          text: 'Under $800',
          productId: 'product25'
        },
        {
          id: 'a37',
          text: '$800 - $1500',
          productId: 'product26'
        },
        {
          id: 'a38',
          text: 'Over $1500',
          productId: 'product27'
        }
      ]
    }
  },
  products: {
    product1: {
      id: 'product1',
      name: 'Compact Tablet 8"',
      description: 'Perfect for reading and light tasks. Compact and portable with excellent battery life.',
      price: '$199',
      features: ['8" Display', '64GB Storage', '10-hour battery', 'Lightweight design']
    },
    product2: {
      id: 'product2',
      name: 'Standard Tablet 10.5"',
      description: 'Ideal for productivity and entertainment. Great balance of size and portability.',
      price: '$399',
      features: ['10.5" Display', '128GB Storage', '12-hour battery', 'Stylus support']
    },
    product3: {
      id: 'product3',
      name: 'Large Tablet 12.9"',
      description: 'Professional-grade tablet for creative work and productivity. Large, vibrant display.',
      price: '$799',
      features: ['12.9" Display', '256GB Storage', '10-hour battery', 'Professional stylus', 'Keyboard support']
    },
    product4: {
      id: 'product4',
      name: 'Budget Smartphone',
      description: 'Affordable smartphone with essential features. Great value for everyday use.',
      price: '$299',
      features: ['6.1" Display', '64GB Storage', 'Dual Camera', 'All-day battery']
    },
    product5: {
      id: 'product5',
      name: 'Mid-Range Smartphone',
      description: 'Premium features at a great price. Excellent camera and performance.',
      price: '$699',
      features: ['6.5" Display', '128GB Storage', 'Triple Camera', 'Fast charging', '5G ready']
    },
    product6: {
      id: 'product6',
      name: 'Flagship Smartphone',
      description: 'Top-of-the-line smartphone with cutting-edge technology and premium build.',
      price: '$1299',
      features: ['6.7" Display', '256GB Storage', 'Pro Camera System', 'Wireless charging', '5G', 'Premium materials']
    },
    product7: {
      id: 'product7',
      name: 'Entry-Level Gaming Laptop',
      description: 'Affordable gaming laptop that handles popular games at medium settings.',
      price: '$899',
      features: ['15.6" Display', 'GTX 1650 GPU', '8GB RAM', '512GB SSD', '1080p Gaming']
    },
    product8: {
      id: 'product8',
      name: 'Mid-Range Gaming Laptop',
      description: 'Powerful gaming laptop for smooth gameplay at high settings. Great for most games.',
      price: '$1499',
      features: ['15.6" 144Hz Display', 'RTX 3060 GPU', '16GB RAM', '1TB SSD', 'RGB Keyboard']
    },
    product9: {
      id: 'product9',
      name: 'High-End Gaming Laptop',
      description: 'Premium gaming laptop with top-tier performance. Handles any game at max settings.',
      price: '$2499',
      features: ['17.3" 240Hz Display', 'RTX 4080 GPU', '32GB RAM', '2TB SSD', 'Mechanical Keyboard', 'Advanced cooling']
    },
    product10: {
      id: 'product10',
      name: 'Ultra-Portable Business Laptop',
      description: 'Lightweight and thin laptop perfect for business travel. Long battery life.',
      price: '$1299',
      features: ['13.3" Display', 'Intel i7', '16GB RAM', '512GB SSD', '14-hour battery', '2.5 lbs']
    },
    product11: {
      id: 'product11',
      name: 'Performance Business Laptop',
      description: 'Powerful workstation laptop for demanding business applications.',
      price: '$1799',
      features: ['15.6" Display', 'Intel i9', '32GB RAM', '1TB SSD', 'Dedicated GPU', 'Enterprise security']
    },
    product12: {
      id: 'product12',
      name: 'Balanced Business Laptop',
      description: 'Perfect balance of portability and performance for modern professionals.',
      price: '$1499',
      features: ['14" Display', 'Intel i7', '16GB RAM', '512GB SSD', '10-hour battery', 'Premium build']
    },
    product13: {
      id: 'product13',
      name: 'Creative Laptop - Entry',
      description: 'Solid laptop for photo editing and light video work. Good color accuracy.',
      price: '$1299',
      features: ['15.6" Color-Accurate Display', '16GB RAM', '512GB SSD', 'Dedicated GPU', 'Stylus support']
    },
    product14: {
      id: 'product14',
      name: 'Creative Laptop - Pro',
      description: 'Professional-grade laptop for serious creative work. Excellent for video editing.',
      price: '$2499',
      features: ['16" 4K Display', '32GB RAM', '1TB SSD', 'RTX 3070 GPU', 'Color-calibrated', 'Touch screen']
    },
    product15: {
      id: 'product15',
      name: 'Creative Laptop - Studio',
      description: 'Ultimate creative workstation. Handles 8K video editing and complex 3D work.',
      price: '$3999',
      features: ['17" 4K OLED Display', '64GB RAM', '2TB SSD', 'RTX 4090 GPU', 'Studio-grade color', 'Premium build']
    },
    product16: {
      id: 'product16',
      name: 'Budget Laptop',
      description: 'Affordable laptop perfect for students and everyday tasks. Great value.',
      price: '$499',
      features: ['15.6" Display', '8GB RAM', '256GB SSD', 'All-day battery', 'Lightweight']
    },
    product17: {
      id: 'product17',
      name: 'Mid-Range Laptop',
      description: 'Versatile laptop that handles work, entertainment, and light creative tasks.',
      price: '$899',
      features: ['15.6" Display', '16GB RAM', '512GB SSD', 'Fast processor', 'Good battery life']
    },
    product18: {
      id: 'product18',
      name: 'Premium General Use Laptop',
      description: 'High-quality laptop with premium features for power users.',
      price: '$1499',
      features: ['15.6" Premium Display', '16GB RAM', '1TB SSD', 'Latest processor', 'Premium build quality']
    },
    product19: {
      id: 'product19',
      name: 'Budget Gaming Desktop',
      description: 'Affordable gaming PC that runs most games smoothly at 1080p.',
      price: '$999',
      features: ['RTX 3060 GPU', '16GB RAM', '512GB SSD', 'Ryzen 5 CPU', 'RGB Lighting']
    },
    product20: {
      id: 'product20',
      name: 'High-Performance Gaming Desktop',
      description: 'Powerful gaming PC for 1440p and 4K gaming. Handles any game with ease.',
      price: '$2499',
      features: ['RTX 4070 GPU', '32GB RAM', '1TB SSD', 'Ryzen 7 CPU', 'Liquid cooling', 'Premium case']
    },
    product21: {
      id: 'product21',
      name: 'Ultimate Gaming Desktop',
      description: 'Top-tier gaming PC with the best components. Maximum performance for enthusiasts.',
      price: '$3999',
      features: ['RTX 4090 GPU', '64GB RAM', '2TB SSD', 'Ryzen 9 CPU', 'Custom liquid cooling', 'Premium RGB']
    },
    product22: {
      id: 'product22',
      name: 'Development Workstation',
      description: 'Optimized for software development with powerful CPU and plenty of RAM.',
      price: '$1999',
      features: ['Ryzen 9 CPU', '64GB RAM', '2TB SSD', 'Multiple monitor support', 'Linux/Windows ready']
    },
    product23: {
      id: 'product23',
      name: '3D Rendering Workstation',
      description: 'Professional workstation for 3D modeling, rendering, and animation.',
      price: '$3499',
      features: ['RTX 4080 GPU', '128GB RAM', '4TB SSD', 'Threadripper CPU', 'Professional GPU', 'Color-accurate monitors']
    },
    product24: {
      id: 'product24',
      name: 'AI/Data Science Workstation',
      description: 'High-performance workstation optimized for machine learning and data science.',
      price: '$4999',
      features: ['Dual RTX 4090 GPUs', '128GB RAM', '4TB NVMe SSD', 'Threadripper Pro CPU', 'AI-optimized']
    },
    product25: {
      id: 'product25',
      name: 'Compact Home Office Desktop',
      description: 'Small form factor PC perfect for home offices. Quiet and efficient.',
      price: '$599',
      features: ['Compact design', '8GB RAM', '256GB SSD', 'Integrated graphics', 'Quiet operation']
    },
    product26: {
      id: 'product26',
      name: 'Standard Home Office Desktop',
      description: 'Reliable desktop for productivity and multitasking. Great for home offices.',
      price: '$1099',
      features: ['16GB RAM', '512GB SSD', 'Dedicated GPU', 'Fast processor', 'Multiple ports']
    },
    product27: {
      id: 'product27',
      name: 'Premium Home Office Desktop',
      description: 'High-performance desktop for demanding home office tasks and multitasking.',
      price: '$1899',
      features: ['32GB RAM', '1TB SSD', 'Powerful GPU', 'Latest CPU', 'Premium build', 'Multiple monitor support']
    }
  }
};

