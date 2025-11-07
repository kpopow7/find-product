// Product finder data structure
// Each question can have multiple answers, and each answer can lead to another question or a product

export const productData = {
  questions: {
    q1: {
      id: 'q1',
      text: 'How does your product move?',
      type: 'single', // single or multiple choice
      answers: [
        {
          id: 'a1',
          text: 'Up and Down',
          nextQuestion: 'q2'
        },
        {
          id: 'a2',
          text: 'Side to Side',
          nextQuestion: 'q3'
        },
        {
          id: 'a3',
          text: 'Shutters, Hinged Panels',
          nextQuestion: 'q4'
        },
        {
          id: 'a4',
          text: 'Moves inside a Skylight',
          nextQuestion: 'q5'
        }
      ]
    },
    q2: {
      id: 'q2',
      text: 'Is your product made of fabric, wood, or metal?',
      type: 'single',
      answers: [
        {
          id: 'a5',
          text: 'Fabric',
          nextQuestion: 'q6'
        },
        {
          id: 'a6',
          text: 'Wood',
          nextQuestion: 'q7'
        },
        {
          id: 'a7',
          text: 'Metal',
          productId: 'udMetal'
        }        
      ]
    },
    q3: {
      id: 'q3',
      text: 'Is your product made of fabric or wood?',
      type: 'single',
      answers: [
        {
          id: 'a9',
          text: 'Fabric/Vinyl',
          nextQuestion: 'q9'
        },
        {
          id: 'a10',
          text: 'Wood',
          nextQuestion: 'q11'
        }
      ]
    },
    q4: {
      id: 'q4',
      text: 'What material is your Shutter?',
      type: 'single',
      answers: [
        {
          id: 'a12',
          text: 'Vinyl',
          nextQuestion: 'q13'
        },
        {
          id: 'a13',
          text: 'Composite',
          nextQuestion: 'q14'
        },
        {
          id: 'a14',
          text: '100% Wood',
          nextQuestion: 'q15'
        }
      ]
    },
    q5: {
      id: 'q5',
      text: 'Skylift Motorized',
      type: 'single',
      answers: [
        {
          id: 'a15',
          text: 'Skylift Manual',
          nextQuestion: 'q16'
        },
        {
          id: 'a16',
          text: 'Simplicity Manual',
          nextQuestion: 'q17'
        }
      ]
    },
    q6: {
      id: 'q6',
      text: 'What does your shade most look like?',
      type: 'single',
      answers: [
        {
            id: 'a17',
            text: 'Honeycomb/Cellular Shades',
            nextQuestion: 'q17a'
        },
        {
          id: 'a18',
          text: 'Roller Shades',
          nextQuestion: 'q18'
        },
        {
          id: 'a19',
          text: 'Roman Shades',
          nextQuestion: 'q19'
        },
        {
          id: 'a20',
          text: 'Sheer Shades',
          nextQuestion: 'q20'
        },
        {
            id: 'a21',
            text: 'Aria Fabric Blinds',
            productId: 'ariaFabricBlinds'
        }
      ]
    },
    q7: {
      id: 'q7',
      text: 'Wood Blinds',
      type: 'single',
      answers: [        
        {
          id: 'a22',
          text: 'Real Wood',
          nextQuestion: 'q22'
        },
        {
          id: 'a23',
          text: 'Faux Wood',
          nextQuestion: 'q23'
        }
      ]
    },
    q9: {
      id: 'q9',
      text: 'Fabri/Vinyl',
      type: 'single',
      answers: [
        {
          id: 'a27',
          text: 'Fabric has individual vanes',
         nextQuestion: 'q24'
        },
        {
          id: 'a28',
          text: 'Fabric is a single pane',
          nextQuestion: 'q25'
        }
      ]
    },
    //reuse?
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
      text: 'Wood',
      type: 'single',
      answers: [
        {
          id: 'a33',
          text: 'Does your product have large wood panels that slide on a track or Wood Vanes that hang from a track?',
          a50: 'product22'
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
    },
    q17a: {
      id: 'q17a',
      text: 'Does the fabric look similar to this image?',
      type: 'single',
      answers: [
        {
          id: 'a40',
          text: 'I have Honeycomb Fabric',
          productId: 'honeycombCellularShades'
        },
        {
            id: 'a41',
            text: 'I have Sonnette Fabric',
            productId: 'sonnetteFabric'
        }
      ]
    },
    q18: {
        id: 'q18',
        text: 'Does the fabric look similar to the image?',
        type: 'single',
        answers: [
            {
                id: 'a42',
                text: 'I have Roller/Screen Fabric',
                productId: 'rollerScreenFabric'
            },
            {
                id: 'a43',
                text: 'I have Sonnette Fabric',
                productId: 'sonnetteRollerShades'
            },
            {
                id: 'a44',
                text: 'I have Designer Banded Fabric',
                productId: 'designerBandedFabric'
            }
        ]
    },
    q19: {
        id: 'q19',
        text: 'Does the fabric look similar to the image?',
        type: 'single',
        answers: [
            {
                id: 'a45',
                text: 'I have Woven Wood Roman Shade',
                productId: 'wovenWoodRomanShade'
            },
            {
                id: 'a46',
                text: 'I have Fabric Roman Shade',
                productId: 'fabricRomanShade'
            }
        ]
    },    
    q20: {
        id: 'q20',
        text: 'Does the fabric look similar to the image?',
        type: 'single',
        answers: [
            {
                id: 'a47',
                text: 'I have S-Shaped fabric vane between sheers',
                productId: 'sShapedFabricVaneBetweenSheers'
            },
            {
                id: 'a48',
                text: 'I have one sheer panel with fabric on the front',
                productId: 'pirSheerShades'
            },
            {
                id: 'a49',  
                text: 'I have a sheer that rolls through the bottom rail',
                productId: 'designerBandedRollerShades'
            }
        ]
    },   
    q24: {
      id: 'q24',
      text: 'I have small vanes fabric or vinyl',
      type: 'single',
      answers: [
        {
          id: 'a39',
          text: 'You have Vertical Blinds!',
          productId: 'verticalBlinds'
        }
        ]
  },
  products: {
    ariaFabricBlinds: {
      id: 'ariaFabricBlinds',
      name: 'Aria Fabric Blinds',
      description: 'Great Choice!  You have Duette® and Applause Cellular Shades. Lightweight and translucent for diffusing sunlight into a beautiful glow.',
      features: ['Sleek, modern look', 'Versatile option for any space']
    },
    honeycombCellularShades: {
      id: 'honeycombCellularShades',
      name: 'Honeycomb/Cellular Shades',
      description: 'Great Choice!  You have Duette® and Applause Cellular Shades.  Year-round comfort. Beautiful natural light. Through stunning, energy-efficient, honeycomb shades.',
      features: ['Year-round comfort', 'Beautiful natural light', 'Stunning, energy-efficient, honeycomb shades']
    },
    sonnetteFabric: {
      id: 'sonnetteFabric',
      name: 'Sonnette Fabric',  
      description: 'Great Choice!  You have Sonnette® Roller Shades! A cellular shade and a roller shade, paired together. For a fresh take on style and energy efficiency.',
      features: ['Sonnette Fabric']
    },
    verticalBlinds: {
      id: 'verticalBlinds',
      name: 'Vertical Blinds',
      description: 'We offer a few types of Vertical products: Somner Vertical Blinds - Vinyl, fabric and aluminum styles in many colors and finishes. For vertical blinds that make a statement. Vertical Solutions® Vertical Blinds- Essential fabric and vinyl options with a minimalist design. So art and furniture can take center stage!',
      features: ['Vertical Blinds']
    },
    udMetal: {
      id: 'udMetal',
      name: 'Modern Precious Metals® Mini Blinds',
      description: 'Great Choice! You have Modern Precious Metals® Mini Blinds  Sleek aluminum slats.  A streamlined, durable aesthetic.  An appealing option for high-traffic homes.  ',
      features: ['Aluminum slats', 'Streamlined, durable aesthetic', 'Appealing option for high-traffic homes']
    },
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
  }
};

