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
          productId: 'vinylShutters'
        },
        {
          id: 'a13',
          text: 'Composite',
          productId: 'compositeShutters'
        },
        {
          id: 'a14',
          text: '100% Wood',
          productId: 'woodShutters'
        }
      ]
    },
    q5: {
      id: 'q5',
      text: 'Moves inside a Skylight',
      type: 'single',
      answers: [
        {
            id: 'a15a',
            text: 'Skylift Motorized',
            productId: 'skyliftMotorized'
        },        
        {
          id: 'a15',
          text: 'Skylift Manual',
          productId: 'manualSkylightShutters'
        },
        {
          id: 'a16',
          text: 'Simplicity Manual',
          productId: 'simplicitySkylightShutters'
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
          productId: 'parklandWoodBlinds'
        },
        {
          id: 'a23',
          text: 'Faux Wood',
          productId: 'everwoodFauxWoodBlinds'
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
          nextQuestion: 'q13'
        }
      ]
    },    
    q11: {
      id: 'q11',
      text: 'Does your product have large wood panels that slide on a track or Wood Vanes that hang from a track',
      type: 'single',
      answers: [
        {
          id: 'a33',
          text: 'Large Panels that slide on a track',   
          nextQuestion: 'q25'
        },
        {
          id: 'a34',
          text: 'It\'s wood panels but its not on a track',
          nextQuestion: 'q26'
        }
      ]
    },    
    q13: {
        id: 'q13',
        text: 'Fabric/Vinyl',
        type: 'single',
        answers: [
            {
                id: 'a53',
                text: 'I have sheer drapery style fabric',
                productId: 'luminetteFabric'
            },
            {
                id: 'a54',
                text: 'I have cellular honeycomb fabric',
                productId: 'honeycombVertiglide'
            },
            {
                id: 'a55',
                text: 'I have woven wood drapery style fabric',
                productId: 'wovenWoodDraperyFabric'
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
                productId: 'sonnetteFabric'
            },
            {
                id: 'a44',
                text: 'I have Designer Banded Fabric',
                productId: 'designerBandedRollerShades'
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
                productId: 'sshapedFabricVaneBetweenSheers'
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
      text: 'Does the fabric look similar to the image?',
      type: 'single',
      answers: [
        {            
          id: 'a39',
          text: 'I have small vanes fabric or vinyl',
          productId: 'verticalBlinds'
        },
        {
            id: 'a52',
            text: 'I have large vertical panels on a track',
            productId: 'panelTrackBlinds'
        }
        ]
    },
    q25: {
        id: 'q25',
        text: 'Does your product look similar to the image below?',
        type: 'single',
        answers: [
            {
                id: 'a50',
                text: 'Yes',
            },
            {
                id: 'a51',
                text: 'No',

            }
        ]
        },
},
  products: {
    panelTrackBlinds: {
      id: 'panelTrackBlinds',
      name: 'Skyline® Panel-Track Blinds',
      description: 'You have Skyline® Panel-Track Blinds! Sleek gliding panels. A contemporary feel. Creating a dramatic backdrop for short, tall or wide windows.',
      features: ['Sleek gliding panels', 'A contemporary feel', 'Creating a dramatic backdrop for short, tall or wide windows']
    },
    luminetteFabric: {
      id: 'luminetteFabric',
      name: 'Luminette Sheer Panels',
      description: 'You have Luminette Sheer Panels! Drapery-like sheers exude a soft glow. Distinctly designed to control light while creating privacy.',
      features: ['Drapery-like sheers exude a soft glow', 'Distinctly designed to control light while creating privacy']
    },
    honeycombVertiglide: {
      id: 'honeycombVertiglide',
      name: 'Honeycomb Vertiglide',
      description: 'You have Honeycomb Vertiglide! An ideal choice for vertical side-to-side openings, sliding-glass doors or as room dividers, Vertiglide is available as a child-safe, cordless operating system on our Duette® and Applause® Honeycomb Shades.',
      features: ['An ideal choice for vertical side-to-side openings, sliding-glass doors or as room dividers', 'Vertiglide is available as a child-safe, cordless operating system on our Duette® and Applause® Honeycomb Shades']
    },
    wovenWoodDraperyFabric: {
      id: 'wovenWoodDraperyFabric',
      name: 'Provenance Woven Wood Drapery Shades',
      description: 'You have Provenance Woven Wood Drapery Shades! Artisanal, artistically woven wood. Infusing organic style and texture into a room.',
      features: ['Artisanal, artistically woven wood', 'Infusing organic style and texture into a room']
    },
    pirSheerShades: {
      id: 'pirSheerShades',
      name: 'Pirouette® Sheer Shades',
      description: 'You have Pirouette® Sheer Shade! Soft fabric vanes whose shape changes on demand. Controlling light in a magical new way.',
      features: ['Soft fabric vanes whose shape changes on demand', 'Controlling light in a magical new way']
    },
    sshapedFabricVaneBetweenSheers: {
      id: 'sshapedFabricVaneBetweenSheers',
      name: 'Silhouette® Sheer Shades',
      description: 'You have Silhouette® Sheer Shades! S-shaped fabric vanes float between sheers. For gorgeous, diffused light, along with daytime privacy.',
      features: ['Gorgeous, diffused light', 'Daytime privacy']
    },
    fabricRomanShade: {
      id: 'fabricRomanShade',
      name: 'Fabric Roman Shade',
      description: 'You have Roman Shades! Elegantly tailored. In flat or full folds. Transforming light, for a more alluring space.',
      features: ['Elegantly tailored', 'In flat or full folds', 'Transforming light, for a more alluring space']
    },
    wovenWoodRomanShade: {
      id: 'wovenWoodRomanShade',
      name: 'Provenance Woven Wood Shades',
      description: 'You have Provenance Woven Wood Shades! Artisanal, artistically woven wood. Infusing organic style and texture into a room.',
      features: ['Artisanal, artistically woven wood', 'Infusing organic style and texture into a room']
    },
    designerBandedRollerShades: {
      id: 'designerBandedRollerShades',
      name: 'Designer Banded Roller Shades',
      description: 'You have Designer Banded Roller Shades! Modern, layered, sheer and solid fabrics. For a view when you want it. And privacy when you need it.',
      features: ['Modern, layered, sheer and solid fabrics', 'For a view when you want it. And privacy when you need it']
    },
    rollerScreenFabric: {
      id: 'rollerScreenFabric',
      name: 'Roller Shades',
      description: 'You have Roller Shades! A clean, minimal design perfect for any room. Solar shades Helps curb harsh UV rays while preserving views to the outside.',
      features: ['Clean, minimal design', 'Solar shades Helps curb harsh UV rays while preserving views to the outside']
    },
    skyliftMotorized: {
      id: 'skyliftMotorized',
      name: 'Duette® and Applause Cellular with Skylift™ Shades',
      description: 'You have Duette® and Applause Cellular with Skylift™ Shades! Skylift™ skylight system, available on our Duette® and Applause® Honeycomb Shades, is specifically suited for skylights. Choose PowerView® Automation for these shades, or manual operation with a hand crank or telescoping pole for hard-to-reach windows. Either way, the SkyLift system is perfect for very large, overhead windows.',
      features: ['Skylift™ skylight system', 'PowerView® Automation', 'Manual operation with a hand crank or telescoping pole for hard-to-reach windows']
    },
    manualSkylightShutters: {
      id: 'manualSkylightShutters',
      name: 'Duette® and Applause Cellular with Skylift™ Shades',
      description: 'You have Duette® and Applause Cellular with Skylift™ Shades! Skylift™ skylight system, available on our Duette® and Applause® Honeycomb Shades, is specifically suited for skylights. Choose PowerView® Automation for these shades, or manual operation with a hand crank or telescoping pole for hard-to-reach windows. Either way, the SkyLift system is perfect for very large, overhead windows.',
      features: ['Skylift™ skylight system', 'PowerView® Automation', 'Manual operation with a hand crank or telescoping pole for hard-to-reach windows']
    },
    simplicitySkylightShutters: {
      id: 'simplicitySkylightShutters',
      name: 'Duette® and Applause Cellular with Simplicity™ System Shades',
      description: 'You have Duette® and Applause Cellular with Simplicity™ System Shades! Simplicity™ is a manual operating system for skylights that is available for vertical or horizontal orientation and can stack in any direction.',
      features: ['Simplicity™ is a manual operating system for skylights that is available for vertical or horizontal orientation and can stack in any direction']
    },
    everwoodFauxWoodBlinds: {
      id: 'everwoodFauxWoodBlinds',
      name: 'Everwood® Faux Wood Blinds',
      description: 'You have Everwood® Faux Wood Blinds! Outstanding durability. Classic good looks. Rich, alternative wood that stands up to the elements.',
      features: ['Outstanding durability', 'Classic good looks', 'Rich, alternative wood that stands up to the elements']
    },
    parklandWoodBlinds: {   
      id: 'parklandWoodBlinds', 
      name: 'Parkland Wood Blinds',
      description: 'You have Parkland® Wood Blinds! Real wood in rich colors, paints and stains. Fashioned to create a warm and inviting look.',
      features: ['Real wood in rich colors, paints and stains', 'Fashioned to create a warm and inviting look']
    },
    ariaFabricBlinds: {
      id: 'ariaFabricBlinds',
      name: 'Duette® and Applause Cellular Shades',
      description: 'You have Duette® and Applause Cellular Shades. Lightweight and translucent for diffusing sunlight into a beautiful glow.',
      features: ['Sleek, modern look', 'Versatile option for any space']
    },
    honeycombCellularShades: {
      id: 'honeycombCellularShades',
      name: 'Duette® and Applause Cellular Shades',
      description: 'You have Duette® and Applause Cellular Shades.  Year-round comfort. Beautiful natural light. Through stunning, energy-efficient, honeycomb shades.',
      features: ['Year-round comfort', 'Beautiful natural light', 'Stunning, energy-efficient, honeycomb shades']
    },
    sonnetteFabric: {
      id: 'sonnetteFabric',
      name: 'Sonnette® Roller Shades',  
      description: 'You have Sonnette® Roller Shades! A cellular shade and a roller shade, paired together. For a fresh take on style and energy efficiency.',
      features: ['Sonnette Fabric']
    },
    verticalBlinds: {
      id: 'verticalBlinds',
      name: 'Vertical Blinds',
      description: 'You have Vertical Blinds! We offer a few types of Vertical products: Somner Vertical Blinds - Vinyl, fabric and aluminum styles in many colors and finishes. For vertical blinds that make a statement. Vertical Solutions® Vertical Blinds- Essential fabric and vinyl options with a minimalist design. So art and furniture can take center stage!',
      features: ['Vinyl, fabric and aluminum styles in many colors and finishes', 'For vertical blinds that make a statement', 'Essential fabric and vinyl options with a minimalist design', 'So art and furniture can take center stage!']
    },
    udMetal: {
      id: 'udMetal',
      name: 'Modern Precious Metals® Mini Blinds',
      description: 'You have Modern Precious Metals® Mini Blinds  Sleek aluminum slats.  A streamlined, durable aesthetic.  An appealing option for high-traffic homes.  ',
      features: ['Aluminum slats', 'Streamlined, durable aesthetic', 'Appealing option for high-traffic homes']
    }
  }
};

