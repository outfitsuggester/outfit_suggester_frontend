import { BodyShape, Gender, BodyComplexion, Outfit, OutfitRecommendation } from '@/types';
import { v4 as uuidv4 } from 'uuid';

// Mock data for outfit recommendations
// In a real application, this would come from an AI model or API
const mockOutfits: Record<BodyShape, Record<Gender, Outfit[]>> = {
  hourglass: {
    female: [
      {
        id: uuidv4(),
        bodyShape: 'hourglass',
        gender: 'female',
        items: [
          {
            id: uuidv4(),
            type: 'top',
            name: 'Wrap Front Blouse',
            description: 'A fitted wrap blouse that accentuates your waistline',
            imageUrl: '/images/wrap-top.jpg',
            purchaseLink: 'https://example.com/product1',
            price: 49.99,
            brand: 'StyleFit',
            color: 'Light Olive'
          },
          {
            id: uuidv4(),
            type: 'bottom',
            name: 'High-waisted Slim Jeans',
            description: 'Perfectly contoured jeans to highlight your curves',
            imageUrl: 'https://images.unsplash.com/photo-1584370848010-d7fe6bc767ec?q=80&w=1974&auto=format&fit=crop',
            purchaseLink: 'https://example.com/product2',
            price: 79.99,
            brand: 'CurveFit',
            color: 'Dark Blue'
          }
        ]
      },
      {
        id: uuidv4(),
        bodyShape: 'hourglass',
        gender: 'female',
        items: [
          {
            id: uuidv4(),
            type: 'dress',
            name: 'Belted Wrap Dress',
            description: 'A classic wrap dress that enhances your natural curves',
            imageUrl: '/images/wrap-dress.jpg',
            purchaseLink: 'https://example.com/product3',
            price: 89.99,
            brand: 'ElegantCurve',
            color: 'Blue'
          }
        ]
      },
      {
        id: uuidv4(),
        bodyShape: 'hourglass',
        gender: 'female',
        items: [
          {
            id: uuidv4(),
            type: 'top',
            name: 'Fitted Peplum Top',
            description: 'Structured peplum top that highlights your waist',
            imageUrl: '/images/peplum-top.jpg',
            purchaseLink: 'https://example.com/hourglass-f3-top',
            price: 58.99,
            brand: 'ShapeLine',
            color: 'Red'
          },
          {
            id: uuidv4(),
            type: 'bottom',
            name: 'Pencil Skirt',
            description: 'Classic pencil skirt that complements your curves',
            imageUrl: '/images/pencil-skirt.jpg',
            purchaseLink: 'https://example.com/hourglass-f3-bottom',
            price: 65.99,
            brand: 'CurveFit',
            color: 'Black'
          }
        ]
      },
      {
        id: uuidv4(),
        bodyShape: 'hourglass',
        gender: 'female',
        items: [
          {
            id: uuidv4(),
            type: 'dress',
            name: 'Fit & Flare Dress',
            description: 'A fit and flare dress that defines your waist and flows at the hips',
            imageUrl: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?q=80&w=1746&auto=format&fit=crop',
            purchaseLink: 'https://example.com/hourglass-f4',
            price: 94.99,
            brand: 'CurveCouture',
            color: 'Emerald Green'
          }
        ]
      },
      {
        id: uuidv4(),
        bodyShape: 'hourglass',
        gender: 'female',
        items: [
          {
            id: uuidv4(),
            type: 'top',
            name: 'V-neck Bodysuit',
            description: 'Form-fitting bodysuit with V-neck detail',
            imageUrl: '/images/v-neck.jpg',
            purchaseLink: 'https://example.com/hourglass-f5-top',
            price: 42.99,
            brand: 'BodyContour',
            color: 'Burgundy'
          },
          {
            id: uuidv4(),
            type: 'bottom',
            name: 'Wide Leg Trousers',
            description: 'Elegant wide leg trousers with high waist',
            imageUrl: '/images/wideleg-tr.jpg',
            purchaseLink: 'https://example.com/hourglass-f5-bottom',
            price: 78.99,
            brand: 'ModernFit',
            color: 'White'
          }
        ]
      },
      {
        id: uuidv4(),
        bodyShape: 'hourglass',
        gender: 'female',
        items: [
          {
            id: uuidv4(),
            type: 'top',
            name: 'Cropped Cardigan',
            description: 'Fitted cropped cardigan that hits at the waist',
            imageUrl: '/images/cropped-cardign.jpg',
            purchaseLink: 'https://example.com/hourglass-f6-top',
            price: 45.99,
            brand: 'WaistDefine',
            color: 'Navy Blue'
          },
          {
            id: uuidv4(),
            type: 'bottom',
            name: 'A-line Midi Skirt',
            description: 'Flowing A-line skirt that balances your silhouette',
            imageUrl: '/images/midi-skirt.jpg',
            purchaseLink: 'https://example.com/hourglass-f6-bottom',
            price: 59.99,
            brand: 'FlowStyle',
            color: 'Navy'
          }
        ]
      }
    ],
    male: [
      {
        id: uuidv4(),
        bodyShape: 'hourglass',
        gender: 'male',
        items: [
          {
            id: uuidv4(),
            type: 'top',
            name: 'Tailored Slim Fit Shirt',
            description: 'A tailored shirt that complements your proportions',
            imageUrl: '/images/blazer.jpg',
            purchaseLink: 'https://example.com/product4',
            price: 59.99,
            brand: 'TailoredMen',
            color: 'White'
          },
          {
            id: uuidv4(),
            type: 'bottom',
            name: 'Tapered Chinos',
            description: 'Classic chinos with a perfect straight fit',
            imageUrl: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?q=80&w=1974&auto=format&fit=crop',
            purchaseLink: 'https://example.com/product5',
            price: 69.99,
            brand: 'UrbanFit',
            color: 'Khaki'
          }
        ]
      },
      {
        id: uuidv4(),
        bodyShape: 'hourglass',
        gender: 'male',
        items: [
          {
            id: uuidv4(),
            type: 'top',
            name: 'Athletic Fit Henley',
            description: 'Form-fitting henley that highlights your proportions',
            imageUrl: 'https://images.unsplash.com/photo-1563630423918-b58f07336ac9?q=80&w=1974&auto=format&fit=crop',
            purchaseLink: 'https://example.com/hourglass-m2-top',
            price: 49.99,
            brand: 'AthleteWear',
            color: 'Heather Gray'
          },
          {
            id: uuidv4(),
            type: 'bottom',
            name: 'Slim Fit Jeans',
            description: 'Well-fitted jeans that complement your build',
            imageUrl: 'https://images.unsplash.com/photo-1511105612320-2e73c919bf9f?q=80&w=2073&auto=format&fit=crop',
            purchaseLink: 'https://example.com/hourglass-m2-bottom',
            price: 75.99,
            brand: 'DenimFit',
            color: 'Dark Indigo'
          }
        ]
      },
      {
        id: uuidv4(),
        bodyShape: 'hourglass',
        gender: 'male',
        items: [
          {
            id: uuidv4(),
            type: 'top',
            name: 'Fitted Polo Shirt',
            description: 'Structured polo that enhances your natural V-shape',
            imageUrl: 'https://images.unsplash.com/photo-1571455786673-9d9d6c194f90?q=80&w=1932&auto=format&fit=crop',
            purchaseLink: 'https://example.com/hourglass-m3-top',
            price: 58.99,
            brand: 'ClassicMan',
            color: 'Navy Blue'
          },
          {
            id: uuidv4(),
            type: 'bottom',
            name: 'Tailored Shorts',
            description: 'Perfectly fitted shorts for warm weather',
            imageUrl: 'https://images.unsplash.com/photo-1565084888279-aca607ecce0c?q=80&w=2070&auto=format&fit=crop',
            purchaseLink: 'https://example.com/hourglass-m3-bottom',
            price: 54.99,
            brand: 'SummerFit',
            color: 'Beige'
          }
        ]
      },
      {
        id: uuidv4(),
        bodyShape: 'hourglass',
        gender: 'male',
        items: [
          {
            id: uuidv4(),
            type: 'top',
            name: 'Structured Blazer',
            description: 'Well-tailored blazer that enhances your balanced proportions',
            imageUrl: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1771&auto=format&fit=crop',
            purchaseLink: 'https://example.com/hourglass-m4-top',
            price: 159.99,
            brand: 'ExecutiveStyle',
            color: 'Charcoal Gray'
          },
          {
            id: uuidv4(),
            type: 'bottom',
            name: 'Dress Trousers',
            description: 'Formal trousers with a perfect fit',
            imageUrl: 'https://images.unsplash.com/photo-1517438476312-10d79c077509?q=80&w=1974&auto=format&fit=crop',
            purchaseLink: 'https://example.com/hourglass-m4-bottom',
            price: 89.99,
            brand: 'FormalFit',
            color: 'Black'
          }
        ]
      },
      {
        id: uuidv4(),
        bodyShape: 'hourglass',
        gender: 'male',
        items: [
          {
            id: uuidv4(),
            type: 'top',
            name: 'V-neck Sweater',
            description: 'Fitted sweater with V-neck to enhance your shape',
            imageUrl: 'https://images.unsplash.com/photo-1556658005-f05251c8df6b?q=80&w=1976&auto=format&fit=crop',
            purchaseLink: 'https://example.com/hourglass-m5-top',
            price: 69.99,
            brand: 'LuxKnit',
            color: 'Forest Green'
          },
          {
            id: uuidv4(),
            type: 'bottom',
            name: 'Slim Dress Pants',
            description: 'Smart casual pants with a tailored fit',
            imageUrl: 'https://images.unsplash.com/photo-1553143820-9ef1afc9c1f4?q=80&w=1740&auto=format&fit=crop',
            purchaseLink: 'https://example.com/hourglass-m5-bottom',
            price: 79.99,
            brand: 'SharpStyle',
            color: 'Gray'
          }
        ]
      },
      {
        id: uuidv4(),
        bodyShape: 'hourglass',
        gender: 'male',
        items: [
          {
            id: uuidv4(),
            type: 'top',
            name: 'Fitted Button-Down',
            description: 'Crisp button-down with subtle tapering at the waist',
            imageUrl: 'https://images.unsplash.com/photo-1589310243389-96a5483213a8?q=80&w=1974&auto=format&fit=crop',
            purchaseLink: 'https://example.com/hourglass-m6-top',
            price: 64.99,
            brand: 'ProperCloth',
            color: 'Light Blue'
          },
          {
            id: uuidv4(),
            type: 'bottom',
            name: 'Performance Chinos',
            description: 'Flexible chinos that move with your body',
            imageUrl: 'https://images.unsplash.com/photo-1598522325074-042db73aa4e6?q=80&w=1974&auto=format&fit=crop',
            purchaseLink: 'https://example.com/hourglass-m6-bottom',
            price: 74.99,
            brand: 'ActiveFit',
            color: 'Olive'
          }
        ]
      }
    ],
    other: []
  },
  pear: {
    female: [
      {
        id: uuidv4(),
        bodyShape: 'pear',
        gender: 'female',
        items: [
          {
            id: uuidv4(),
            type: 'top',
            name: 'Structured Boatneck Top',
            description: 'A top that broadens your shoulders to balance your hips',
            imageUrl: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?q=80&w=1905&auto=format&fit=crop',
            purchaseLink: 'https://example.com/product6',
            price: 45.99,
            brand: 'BalanceFit',
            color: 'Navy'
          },
          {
            id: uuidv4(),
            type: 'bottom',
            name: 'A-line Midi Skirt',
            description: 'An A-line skirt that flows from the hips',
            imageUrl: 'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?q=80&w=1964&auto=format&fit=crop',
            purchaseLink: 'https://example.com/product7',
            price: 55.99,
            brand: 'FlowStyle',
            color: 'Black'
          }
        ]
      },
      {
        id: uuidv4(),
        bodyShape: 'pear',
        gender: 'female',
        items: [
          {
            id: uuidv4(),
            type: 'top',
            name: 'Off-Shoulder Blouse',
            description: 'Draws attention upward while highlighting shoulders',
            imageUrl: '/images/off-shoulder.jpg',
            purchaseLink: 'https://example.com/pear-f2-top',
            price: 49.99,
            brand: 'ShoulderFocus',
            color: 'Red'
          },
          {
            id: uuidv4(),
            type: 'bottom',
            name: 'Dark Wash Bootcut Jeans',
            description: 'Balanced cut that creates harmony with wider hips',
            imageUrl: '/images/bootcut-jeans.jpg',
            purchaseLink: 'https://example.com/pear-f2-bottom',
            price: 69.99,
            brand: 'CurveDenim',
            color: 'Black'
          }
        ]
      },
      {
        id: uuidv4(),
        bodyShape: 'pear',
        gender: 'female',
        items: [
          {
            id: uuidv4(),
            type: 'dress',
            name: 'Fit and Flare Dress',
            description: 'Defined at the waist with a full skirt to balance proportions',
            imageUrl: '/images/fit-dress.jpg',
            purchaseLink: 'https://example.com/pear-f3-dress',
            price: 88.99,
            brand: 'BalanceLine',
            color: 'Royal Blue'
          }
        ]
      },
      {
        id: uuidv4(),
        bodyShape: 'pear',
        gender: 'female',
        items: [
          {
            id: uuidv4(),
            type: 'top',
            name: 'Embellished Shoulder Top',
            description: 'Details at shoulder create visual width to balance hips',
            imageUrl: '/images/shoulder-top.jpg',
            purchaseLink: 'https://example.com/pear-f4-top',
            price: 53.99,
            brand: 'DetailChic',
            color: 'black'
          },
          {
            id: uuidv4(),
            type: 'bottom',
            name: 'Flowy Wide Leg Pants',
            description: 'Elegant pants that drape beautifully from the hips',
            imageUrl: '/images/wideleg.jpg',
            purchaseLink: 'https://example.com/pear-f4-bottom',
            price: 64.99,
            brand: 'FlowDrape',
            color: 'cream'
          }
        ]
      },
      {
        id: uuidv4(),
        bodyShape: 'pear',
        gender: 'female',
        items: [
          {
            id: uuidv4(),
            type: 'top',
            name: 'Padded Shoulder Blazer',
            description: 'Structured blazer that creates balanced proportions',
            imageUrl: '/images/pladded-blazer.jpg',
            purchaseLink: 'https://example.com/pear-f5-top',
            price: 89.99,
            brand: 'PowerShape',
            color: 'grey'
          },
          {
            id: uuidv4(),
            type: 'bottom',
            name: 'Dark Pleated Skirt',
            description: 'Elegant pleated skirt that flatters your lower half',
            imageUrl: '/images/dark-skirt.jpg',
            purchaseLink: 'https://example.com/pear-f5-bottom',
            price: 68.99,
            brand: 'ElegantFlow',
            color: 'black'
          }
        ]
      },
      {
        id: uuidv4(),
        bodyShape: 'pear',
        gender: 'female',
        items: [
          {
            id: uuidv4(),
            type: 'top',
            name: 'Puff Sleeve Blouse',
            description: 'Volume at the shoulders creates perfect balance',
            imageUrl: '/images/puff-sleeve.jpg',
            purchaseLink: 'https://example.com/pear-f6-top',
            price: 56.99,
            brand: 'VolumeTop',
            color: 'white'
          },
          {
            id: uuidv4(),
            type: 'bottom',
            name: 'Wrap Skirt',
            description: 'Flattering wrap design that drapes beautifully over hips',
            imageUrl: '/images/wrap-skirt.jpg',
            purchaseLink: 'https://example.com/pear-f6-bottom',
            price: 59.99,
            brand: 'WrapStyle',
            color: 'Burgundy'
          }
        ]
      }
    ],
    male: [
      {
        id: uuidv4(),
        bodyShape: 'pear',
        gender: 'male',
        items: [
          {
            id: uuidv4(),
            type: 'top',
            name: 'Structured Blazer',
            description: 'Adds definition to the upper body',
            imageUrl: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1771&auto=format&fit=crop',
            purchaseLink: 'https://example.com/product-male-pear1',
            price: 129.99,
            brand: 'MensFit',
            color: 'Navy'
          },
          {
            id: uuidv4(),
            type: 'bottom',
            name: 'Relaxed Fit Trousers',
            description: 'Comfortable fit that balances your proportions',
            imageUrl: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?q=80&w=1997&auto=format&fit=crop',
            purchaseLink: 'https://example.com/product-male-pear2',
            price: 69.99,
            brand: 'ComfortWear',
            color: 'Charcoal'
          }
        ]
      },
      {
        id: uuidv4(),
        bodyShape: 'pear',
        gender: 'male',
        items: [
          {
            id: uuidv4(),
            type: 'top',
            name: 'Padded Shoulder Shirt',
            description: 'Fitted shirt with subtle structure at shoulders',
            imageUrl: 'https://images.unsplash.com/photo-1589310243389-96a5483213a8?q=80&w=1974&auto=format&fit=crop',
            purchaseLink: 'https://example.com/pear-m2-top',
            price: 65.99,
            brand: 'MensBalance',
            color: 'Light Blue'
          },
          {
            id: uuidv4(),
            type: 'bottom',
            name: 'Straight Leg Jeans',
            description: 'Classic jeans that balance your proportions',
            imageUrl: 'https://images.unsplash.com/photo-1604176424472-9e9468137942?q=80&w=1780&auto=format&fit=crop',
            purchaseLink: 'https://example.com/pear-m2-bottom',
            price: 75.99,
            brand: 'BalanceDenim',
            color: 'Medium Wash'
          }
        ]
      },
      {
        id: uuidv4(),
        bodyShape: 'pear',
        gender: 'male',
        items: [
          {
            id: uuidv4(),
            type: 'top',
            name: 'Patterned Button-Up',
            description: 'Visual interest up top to balance proportions',
            imageUrl: 'https://images.unsplash.com/photo-1607345366928-199ea26cfe3e?q=80&w=1974&auto=format&fit=crop',
            purchaseLink: 'https://example.com/pear-m3-top',
            price: 59.99,
            brand: 'PatternFocus',
            color: 'Multi'
          },
          {
            id: uuidv4(),
            type: 'bottom',
            name: 'Dark Straight Chinos',
            description: 'Clean lines that create a balanced silhouette',
            imageUrl: 'https://images.unsplash.com/photo-1542272604-787c3835535d?q=80&w=1926&auto=format&fit=crop',
            purchaseLink: 'https://example.com/pear-m3-bottom',
            price: 69.99,
            brand: 'ClassicFit',
            color: 'Navy'
          }
        ]
      },
      {
        id: uuidv4(),
        bodyShape: 'pear',
        gender: 'male',
        items: [
          {
            id: uuidv4(),
            type: 'top',
            name: 'Structured Henley',
            description: 'Casual top that adds visual width to shoulders',
            imageUrl: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1780&auto=format&fit=crop',
            purchaseLink: 'https://example.com/pear-m4-top',
            price: 49.99,
            brand: 'CasualStructure',
            color: 'Burgundy'
          },
          {
            id: uuidv4(),
            type: 'bottom',
            name: 'Athletic Fit Pants',
            description: 'Designed for comfort with room in legs and seat',
            imageUrl: 'https://images.unsplash.com/photo-1584273143981-41c073dfe8f8?q=80&w=1974&auto=format&fit=crop',
            purchaseLink: 'https://example.com/pear-m4-bottom',
            price: 65.99,
            brand: 'ActiveComfort',
            color: 'Tan'
          }
        ]
      },
      {
        id: uuidv4(),
        bodyShape: 'pear',
        gender: 'male',
        items: [
          {
            id: uuidv4(),
            type: 'top',
            name: 'Cable Knit Sweater',
            description: 'Textured pattern adds visual interest to upper body',
            imageUrl: 'https://images.unsplash.com/photo-1631541911265-ce4de404427b?q=80&w=1974&auto=format&fit=crop',
            purchaseLink: 'https://example.com/pear-m5-top',
            price: 79.99,
            brand: 'TextureKnit',
            color: 'Oatmeal'
          },
          {
            id: uuidv4(),
            type: 'bottom',
            name: 'Relaxed Wool Trousers',
            description: 'Classic wool trousers with room in the seat and thighs',
            imageUrl: 'https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?q=80&w=1974&auto=format&fit=crop',
            purchaseLink: 'https://example.com/pear-m5-bottom',
            price: 89.99,
            brand: 'ClassicWool',
            color: 'Charcoal'
          }
        ]
      },
      {
        id: uuidv4(),
        bodyShape: 'pear',
        gender: 'male',
        items: [
          {
            id: uuidv4(),
            type: 'top',
            name: 'Rugby Style Shirt',
            description: 'Horizontal stripes create visual width at shoulders',
            imageUrl: 'https://images.unsplash.com/photo-1602810316693-3667c854239a?q=80&w=1974&auto=format&fit=crop',
            purchaseLink: 'https://example.com/pear-m6-top',
            price: 56.99,
            brand: 'SportClassic',
            color: 'Navy/White Stripe'
          },
          {
            id: uuidv4(),
            type: 'bottom',
            name: 'Medium-wash Relaxed Jeans',
            description: 'Comfortable jeans with balanced proportions',
            imageUrl: 'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?q=80&w=2070&auto=format&fit=crop',
            purchaseLink: 'https://example.com/pear-m6-bottom',
            price: 72.99,
            brand: 'ComfortDenim',
            color: 'Medium Blue'
          }
        ]
      }
    ],
    other: []
  },
  rectangle: {
    female: [
      {
        id: uuidv4(),
        bodyShape: 'rectangle',
        gender: 'female',
        items: [
          {
            id: uuidv4(),
            type: 'top',
            name: 'Ruffled Peplum Top',
            description: 'A top that creates the illusion of curves',
            imageUrl: '/images/peplum.jpg',
            purchaseLink: 'https://example.com/product8',
            price: 39.99,
            brand: 'CurveCreate',
            color: 'red'
          },
          {
            id: uuidv4(),
            type: 'bottom',
            name: 'Belted Wide-leg Pants',
            description: 'Pants that add volume to create a more curved silhouette',
            imageUrl: '/images/belt-wideleg.jpg',
            purchaseLink: 'https://example.com/product9',
            price: 65.99,
            brand: 'VolumeStyle',
            color: 'black'
          }
        ]
      },
      {
        id: uuidv4(),
        bodyShape: 'rectangle',
        gender: 'female',
        items: [
          {
            id: uuidv4(),
            type: 'dress',
            name: 'Wrap Midi Dress',
            description: 'Creates definition at the waist with a flattering wrap design',
            imageUrl: '/images/wrap-midi.jpg',
            purchaseLink: 'https://example.com/rectangle-f2',
            price: 79.99,
            brand: 'WrapStyle',
            color: 'blue-white'
          }
        ]
      },
      {
        id: uuidv4(),
        bodyShape: 'rectangle',
        gender: 'female',
        items: [
          {
            id: uuidv4(),
            type: 'top',
            name: 'Wrap Blouse with Belt',
            description: 'Defines the waist with an adjustable belt detail',
            imageUrl: '/images/wrap-belt.jpg',
            purchaseLink: 'https://example.com/rectangle-f3-top',
            price: 54.99,
            brand: 'WaistDefine',
            color: 'white'
          },
          {
            id: uuidv4(),
            type: 'bottom',
            name: 'Paper Bag Waist Trousers',
            description: 'High-waisted design with gathering that creates curves',
            imageUrl: '/images/paper-trousers.jpg',
            purchaseLink: 'https://example.com/rectangle-f3-bottom',
            price: 65.99,
            brand: 'ShapeMaker',
            color: 'black'
          }
        ]
      },
      {
        id: uuidv4(),
        bodyShape: 'rectangle',
        gender: 'female',
        items: [
          {
            id: uuidv4(),
            type: 'top',
            name: 'Cropped Bustier Top',
            description: 'Creates definition and structure at the bust',
            imageUrl: '/images/cropped-top.jpg',
            purchaseLink: 'https://example.com/rectangle-f4-top',
            price: 49.99,
            brand: 'StructureFit',
            color: 'white'
          },
          {
            id: uuidv4(),
            type: 'bottom',
            name: 'High-waisted Circle Skirt',
            description: 'Full skirt that creates volume at the hips',
            imageUrl: '/images/highwaist-skirt.jpg',
            purchaseLink: 'https://example.com/rectangle-f4-bottom',
            price: 59.99,
            brand: 'FullSway',
            color: 'black'
          }
        ]
      },
      {
        id: uuidv4(),
        bodyShape: 'rectangle',
        gender: 'female',
        items: [
          {
            id: uuidv4(),
            type: 'top',
            name: 'Off-Shoulder Ruched Top',
            description: 'Draws attention to shoulders and collarbones with elegant ruching',
            imageUrl: '/images/offshoulder-top.jpg',
            purchaseLink: 'https://example.com/rectangle-f5-top',
            price: 45.99,
            brand: 'FeminineDetail',
            color: 'red'
          },
          {
            id: uuidv4(),
            type: 'bottom',
            name: 'Pleated Midi Skirt',
            description: 'Structured pleats create shape and movement',
            imageUrl: '/images/pleated-skirt.jpg',
            purchaseLink: 'https://example.com/rectangle-f5-bottom',
            price: 68.99,
            brand: 'PleatChic',
            color: 'black'
          }
        ]
      },
      {
        id: uuidv4(),
        bodyShape: 'rectangle',
        gender: 'female',
        items: [
          {
            id: uuidv4(),
            type: 'dress',
            name: 'Fit & Flare Jumpsuit',
            description: 'Cinches at the waist and flares at the legs to create curves',
            imageUrl: '/images/jumpsuit.jpg',
            purchaseLink: 'https://example.com/rectangle-f6',
            price: 89.99,
            brand: 'JumpCurve',
            color: 'Grey'
          }
        ]
      }
    ],
    male: [
      {
        id: uuidv4(),
        bodyShape: 'rectangle',
        gender: 'male',
        items: [
          {
            id: uuidv4(),
            type: 'top',
            name: 'Double-breasted Blazer',
            description: 'A blazer that adds structure to your frame',
            imageUrl: '/images/blazer.jpg',
            purchaseLink: 'https://example.com/product10',
            price: 129.99,
            brand: 'SharpStyle',
            color: 'Grey'
          },
          {
            id: uuidv4(),
            type: 'bottom',
            name: 'Slim Fit Chinos',
            description: 'Tapered fit pants that create shape',
            imageUrl: '/images/slimfit-chinos.jpg',
            purchaseLink: 'https://example.com/product11',
            price: 69.99,
            brand: 'ModernMan',
            color: 'Black'
          }
        ]
      },
      {
        id: uuidv4(),
        bodyShape: 'rectangle',
        gender: 'male',
        items: [
          {
            id: uuidv4(),
            type: 'top',
            name: 'Structured Padded Shirt',
            description: 'Adds definition to shoulders for more shape',
            imageUrl: '/images/padded-shirt.jpg',
            purchaseLink: 'https://example.com/rectangle-m2-top',
            price: 64.99,
            brand: 'ShoulderStructure',
            color: 'Blue'
          },
          {
            id: uuidv4(),
            type: 'bottom',
            name: 'Relaxed Tapered Jeans',
            description: 'Creates a balanced look with taper at the ankle',
            imageUrl: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=1974&auto=format&fit=crop',
            purchaseLink: 'https://example.com/rectangle-m2-bottom',
            price: 79.99,
            brand: 'TaperFit',
            color: 'Dark Wash'
          }
        ]
      },
      {
        id: uuidv4(),
        bodyShape: 'rectangle',
        gender: 'male',
        items: [
          {
            id: uuidv4(),
            type: 'top',
            name: 'Pocket Detail Shirt',
            description: 'Pocket details add dimension to your chest',
            imageUrl: '/images/pocket-shirt.jpg',
            purchaseLink: 'https://example.com/rectangle-m3-top',
            price: 58.99,
            brand: 'DetailFocus',
            color: 'Grey'
          },
          {
            id: uuidv4(),
            type: 'bottom',
            name: 'Structured Cargo Pants',
            description: 'Pockets and details add dimension to your lower half',
            imageUrl: '/images/cargo-pants.jpg',
            purchaseLink: 'https://example.com/rectangle-m3-bottom',
            price: 74.99,
            brand: 'CargoStyle',
            color: 'Black'
          }
        ]
      },
      {
        id: uuidv4(),
        bodyShape: 'rectangle',
        gender: 'male',
        items: [
          {
            id: uuidv4(),
            type: 'top',
            name: 'Layered Vest & Shirt',
            description: 'Layering creates dimension and structure',
            imageUrl: '/images/vest & shirt.jpg',
            purchaseLink: 'https://example.com/rectangle-m4-top',
            price: 85.99,
            brand: 'LayerPro',
            color: 'Gray/White/Red'
          },
          {
            id: uuidv4(),
            type: 'bottom',
            name: 'Pleated Front Trousers',
            description: 'Front pleats add shape and dimension',
            imageUrl: '/images/trousers.jpg',
            purchaseLink: 'https://example.com/rectangle-m4-bottom',
            price: 84.99,
            brand: 'ClassicPleat',
            color: 'Black'
          }
        ]
      },
      {
        id: uuidv4(),
        bodyShape: 'rectangle',
        gender: 'male',
        items: [
          {
            id: uuidv4(),
            type: 'top',
            name: 'Ribbed Sweater',
            description: 'Texture adds dimension to your upper body',
            imageUrl: '/images/sweater.jpg',
            purchaseLink: 'https://example.com/rectangle-m5-top',
            price: 69.99,
            brand: 'TextureLux',
            color: 'Light Brown'
          },
          {
            id: uuidv4(),
            type: 'bottom',
            name: 'Belted Chino Shorts',
            description: 'Belt detail creates definition at the waist',
            imageUrl: '/images/shorts.jpg',
            purchaseLink: 'https://example.com/rectangle-m5-bottom',
            price: 54.99,
            brand: 'BeltStyle',
            color: 'White'
          }
        ]
      },
      {
        id: uuidv4(),
        bodyShape: 'rectangle',
        gender: 'male',
        items: [
          {
            id: uuidv4(),
            type: 'top',
            name: 'Horizontal Striped Polo',
            description: 'Horizontal stripes create the illusion of width',
            imageUrl: '/images/striped-polo.jpg',
            purchaseLink: 'https://example.com/rectangle-m6-top',
            price: 54.99,
            brand: 'StripeMaster',
            color: 'Navy/White'
          },
          {
            id: uuidv4(),
            type: 'bottom',
            name: 'Slim Fit Joggers',
            description: 'Modern joggers that taper for a shaped look',
            imageUrl: '/images/joggers.jpg',
            purchaseLink: 'https://example.com/rectangle-m6-bottom',
            price: 64.99,
            brand: 'ModernActive',
            color: 'Cream'
          }
        ]
      }
    ],
    other: []
  },
  apple: {
    female: [
      {
        id: uuidv4(),
        bodyShape: 'apple',
        gender: 'female',
        items: [
          {
            id: uuidv4(),
            type: 'top',
            name: 'V-neck Empire Waist Blouse',
            description: 'A top that defines the waist just below the bust',
            imageUrl: '/images/v-blouse.jpg',
            purchaseLink: 'https://example.com/product12',
            price: 49.99,
            brand: 'WaistDefine',
            color: 'red'
          },
          {
            id: uuidv4(),
            type: 'bottom',
            name: 'Straight Leg Trousers',
            description: 'Pants that create a balanced look for your silhouette',
            imageUrl: '/images/straight-leg.jpg',
            purchaseLink: 'https://example.com/product13',
            price: 59.99,
            brand: 'BalanceStyle',
            color: 'Black'
          }
        ]
      },
      {
        id: uuidv4(),
        bodyShape: 'apple',
        gender: 'female',
        items: [
          {
            id: uuidv4(),
            type: 'dress',
            name: 'A-line Wrap Dress',
            description: 'Flows from under the bust for a flattering fit',
            imageUrl: '/images/linewrap-dress.jpg',
            purchaseLink: 'https://example.com/apple-f2',
            price: 84.99,
            brand: 'FlowingFit',
            color: 'green'
          }
        ]
      },
      {
        id: uuidv4(),
        bodyShape: 'apple',
        gender: 'female',
        items: [
          {
            id: uuidv4(),
            type: 'top',
            name: 'Draped Cowl Neck Top',
            description: 'Draping draws attention upward and skims the midsection',
            imageUrl: '/images/neck-top.jpg',
            purchaseLink: 'https://example.com/apple-f3-top',
            price: 55.99,
            brand: 'DrapeFit',
            color: 'pink'
          },
          {
            id: uuidv4(),
            type: 'bottom',
            name: 'Boot Cut Jeans',
            description: 'Balanced cut that creates a harmonious silhouette',
            imageUrl: '/images/bootcut-jeans.jpg',
            purchaseLink: 'https://example.com/apple-f3-bottom',
            price: 69.99,
            brand: 'BalanceDenim',
            color: 'black'
          }
        ]
      },
      {
        id: uuidv4(),
        bodyShape: 'apple',
        gender: 'female',
        items: [
          {
            id: uuidv4(),
            type: 'top',
            name: 'Asymmetrical Tunic',
            description: 'Asymmetrical hem draws the eye diagonally for a slimming effect',
            imageUrl: '/images/tunic.jpg',
            purchaseLink: 'https://example.com/apple-f4-top',
            price: 59.99,
            brand: 'AsymStyle',
            color: 'black'
          },
          {
            id: uuidv4(),
            type: 'bottom',
            name: 'Dark Slim Leg Pants',
            description: 'Streamlined pants that elongate your legs',
            imageUrl: '/images/slim-leg.jpg',
            purchaseLink: 'https://example.com/apple-f4-bottom',
            price: 65.99,
            brand: 'SlimLeg',
            color: 'black'
          }
        ]
      },
      {
        id: uuidv4(),
        bodyShape: 'apple',
        gender: 'female',
        items: [
          {
            id: uuidv4(),
            type: 'dress',
            name: 'Empire Waist Maxi Dress',
            description: 'Long, flowing dress with definition under the bust',
            imageUrl: '/images/maxi-dress.jpg',
            purchaseLink: 'https://example.com/apple-f5',
            price: 89.99,
            brand: 'MaxiFlow',
            color: 'yellow'
          }
        ]
      },
      {
        id: uuidv4(),
        bodyShape: 'apple',
        gender: 'female',
        items: [
          {
            id: uuidv4(),
            type: 'top',
            name: 'Open Front Cardigan',
            description: 'Vertical lines create a lengthening effect',
            imageUrl: '/images/open-front.jpg',
            purchaseLink: 'https://example.com/apple-f6-top',
            price: 64.99,
            brand: 'LengthLine',
            color: 'violet'
          },
          {
            id: uuidv4(),
            type: 'bottom',
            name: 'A-Line Midi Skirt',
            description: 'Flowing from the hips for a balanced silhouette',
            imageUrl: '/images/midi-skirt.jpg',
            purchaseLink: 'https://example.com/apple-f6-bottom',
            price: 65.99,
            brand: 'FlowSkirt',
            color: 'white'
          }
        ]
      }
    ],
    male: [
      {
        id: uuidv4(),
        bodyShape: 'apple',
        gender: 'male',
        items: [
          {
            id: uuidv4(),
            type: 'top',
            name: 'Structured Button-Up Shirt',
            description: 'A shirt designed to create a balanced silhouette',
            imageUrl: '/images/bottomup-shirt.jpg',
            purchaseLink: 'https://example.com/product-male-apple1',
            price: 65.99,
            brand: 'StyleBalance',
            color: 'Dark Blue'
          },
          {
            id: uuidv4(),
            type: 'bottom',
            name: 'Straight Fit Dark Jeans',
            description: 'Jeans that provide structure without being too tight',
            imageUrl: '/images/relaxed-fit.jpg',
            purchaseLink: 'https://example.com/product-male-apple2',
            price: 79.99,
            brand: 'ComfortDenim',
            color: 'Dark Wash'
          }
        ]
      },
      {
        id: uuidv4(),
        bodyShape: 'apple',
        gender: 'male',
        items: [
          {
            id: uuidv4(),
            type: 'top',
            name: 'Vertical Stripe Button-Up',
            description: 'Vertical stripes create a lengthening effect',
            imageUrl: '/images/strip-shirt.jpg',
            purchaseLink: 'https://example.com/apple-m2-top',
            price: 69.99,
            brand: 'StripeLength',
            color: 'White/Blue Stripe'
          },
          {
            id: uuidv4(),
            type: 'bottom',
            name: 'Flat Front Chinos',
            description: 'Clean front chinos with a straight leg',
            imageUrl: '/images/chinos.jpg',
            purchaseLink: 'https://example.com/apple-m2-bottom',
            price: 74.99,
            brand: 'CleanLine',
            color: 'Navy'
          }
        ]
      },
      {
        id: uuidv4(),
        bodyShape: 'apple',
        gender: 'male',
        items: [
          {
            id: uuidv4(),
            type: 'top',
            name: 'Untucked Casual Shirt',
            description: 'Designed to be worn untucked with a structured collar',
            imageUrl: '/images/untucked.jpg',
            purchaseLink: 'https://example.com/apple-m3-top',
            price: 64.99,
            brand: 'UntuckedStyle',
            color: 'Light Blue'
          },
          {
            id: uuidv4(),
            type: 'bottom',
            name: 'Athletic Fit Jeans',
            description: 'Room in the thigh with a slight taper',
            imageUrl: 'https://images.unsplash.com/photo-1604176424472-9e9468137942?q=80&w=1780&auto=format&fit=crop',
            purchaseLink: 'https://example.com/apple-m3-bottom',
            price: 79.99,
            brand: 'AthDenim',
            color: 'Medium Wash'
          }
        ]
      },
      {
        id: uuidv4(),
        bodyShape: 'apple',
        gender: 'male',
        items: [
          {
            id: uuidv4(),
            type: 'top',
            name: 'V-Neck Sweater',
            description: 'Elongates the torso with its V-shaped neckline',
            imageUrl: '/images/v-neck men.jpg',
            purchaseLink: 'https://example.com/apple-m4-top',
            price: 74.99,
            brand: 'VeeLine',
            color: 'Charcoal'
          },
          {
            id: uuidv4(),
            type: 'bottom',
            name: 'Relaxed Fit Trousers',
            description: 'Comfortable trousers with a relaxed fit through the leg',
            imageUrl: '/images/relaxed-fit.jpg',
            purchaseLink: 'https://example.com/apple-m4-bottom',
            price: 84.99,
            brand: 'ComfortStyle',
            color: 'Gray'
          }
        ]
      },
      {
        id: uuidv4(),
        bodyShape: 'apple',
        gender: 'male',
        items: [
          {
            id: uuidv4(),
            type: 'top',
            name: 'Stretch Oxford Shirt',
            description: 'Comfortable stretch fabric with a classic design',
            imageUrl: '/images/oxford-shirt.jpg',
            purchaseLink: 'https://example.com/apple-m5-top',
            price: 69.99,
            brand: 'StretchComfort',
            color: 'White'
          },
          {
            id: uuidv4(),
            type: 'bottom',
            name: 'Comfort Waist Dress Pants',
            description: 'Hidden comfort waistband for a sleek look and comfortable fit',
            imageUrl: '/images/waist-pants.jpg',
            purchaseLink: 'https://example.com/apple-m5-bottom',
            price: 89.99,
            brand: 'ComfortExec',
            color: 'cream'
          }
        ]
      },
      {
        id: uuidv4(),
        bodyShape: 'apple',
        gender: 'male',
        items: [
          {
            id: uuidv4(),
            type: 'top',
            name: 'Casual Blazer',
            description: 'Structured yet comfortable blazer that adds definition',
            imageUrl: '/images/causal-blazer.jpg',
            purchaseLink: 'https://example.com/apple-m6-top',
            price: 129.99,
            brand: 'CasualStructure',
            color: 'Navy'
          },
          {
            id: uuidv4(),
            type: 'bottom',
            name: 'Straight Dark Denim',
            description: 'Classic straight leg jeans in a versatile dark wash',
            imageUrl: '/images/relaxed-fit.jpg',
            purchaseLink: 'https://example.com/apple-m6-bottom',
            price: 84.99,
            brand: 'ClassicDenim',
            color: 'light blue'
          }
        ]
      }
    ],
    other: []
  },
  'inverted-triangle': {
    female: [
      {
        id: uuidv4(),
        bodyShape: 'inverted-triangle',
        gender: 'female',
        items: [
          {
            id: uuidv4(),
            type: 'top',
            name: 'Draped V-neck Top',
            description: 'A top that draws attention to your center and softens shoulders',
            imageUrl: '/images/draped v-neck.jpg',
            purchaseLink: 'https://example.com/product14',
            price: 42.99,
            brand: 'SoftStyle',
            color: 'Forest Green'
          },
          {
            id: uuidv4(),
            type: 'bottom',
            name: 'Full A-line Midi Skirt',
            description: 'A skirt that adds volume to balance broader shoulders',
            imageUrl: '/images/full-midi.jpg',
            purchaseLink: 'https://example.com/product15',
            price: 65.99,
            brand: 'BalanceFit',
            color: 'Black'
          }
        ]
      },
      {
        id: uuidv4(),
        bodyShape: 'inverted-triangle',
        gender: 'female',
        items: [
          {
            id: uuidv4(),
            type: 'dress',
            name: 'A-line Dress with V-neck',
            description: 'Balances proportions with a fitted top and flared skirt',
            imageUrl: '/images/v-neck dress.jpg',
            purchaseLink: 'https://example.com/invtri-f2',
            price: 89.99,
            brand: 'BalanceLine',
            color: 'blue'
          }
        ]
      },
      {
        id: uuidv4(),
        bodyShape: 'inverted-triangle',
        gender: 'female',
        items: [
          {
            id: uuidv4(),
            type: 'top',
            name: 'Soft Cowl Neck Blouse',
            description: 'Fluid draping that softens shoulder lines',
            imageUrl: 'https://images.unsplash.com/photo-1564257631407-4deb1f99d992?q=80&w=1974&auto=format&fit=crop',
            purchaseLink: 'https://example.com/invtri-f3-top',
            price: 54.99,
            brand: 'FluidStyle',
            color: 'Blush'
          },
          {
            id: uuidv4(),
            type: 'bottom',
            name: 'Wide Leg Pants',
            description: 'Dramatic wide leg to balance broader shoulders',
            imageUrl: '/images/blue-wideleg.jpg',
            purchaseLink: 'https://example.com/invtri-f3-bottom',
            price: 72.99,
            brand: 'WideLeg',
            color: 'blue'
          }
        ]
      },
      {
        id: uuidv4(),
        bodyShape: 'inverted-triangle',
        gender: 'female',
        items: [
          {
            id: uuidv4(),
            type: 'top',
            name: 'Wrap Top',
            description: 'Creates a feminine V-neckline and draws attention to the waist',
            imageUrl: '/images/wrap top.jpg',
            purchaseLink: 'https://example.com/invtri-f4-top',
            price: 49.99,
            brand: 'WrapStyle',
            color: 'orange'
          },
          {
            id: uuidv4(),
            type: 'bottom',
            name: 'Flared Skirt with Patterns',
            description: 'Pattern detail draws attention to the lower body',
            imageUrl: '/images/flared-skirt.jpg',
            purchaseLink: 'https://example.com/invtri-f4-bottom',
            price: 64.99,
            brand: 'PatternFlare',
            color: 'Multi white'
          }
        ]
      },
      {
        id: uuidv4(),
        bodyShape: 'inverted-triangle',
        gender: 'female',
        items: [
          {
            id: uuidv4(),
            type: 'top',
            name: 'Ruched Detail Top',
            description: 'Soft gathering that draws attention to the center',
            imageUrl: 'https://images.unsplash.com/photo-1549062572-544a64fb0c56?q=80&w=1974&auto=format&fit=crop',
            purchaseLink: 'https://example.com/invtri-f5-top',
            price: 56.99,
            brand: 'GatherSoft',
            color: 'Plum'
          },
          {
            id: uuidv4(),
            type: 'bottom',
            name: 'Patterned Wide Trousers',
            description: 'Bold pattern and volume create balance',
            imageUrl: '/images/pattern-trousers.jpg',
            purchaseLink: 'https://example.com/invtri-f5-bottom',
            price: 74.99,
            brand: 'PatternVolume',
            color: 'multi colors'
          }
        ]
      },
      {
        id: uuidv4(),
        bodyShape: 'inverted-triangle',
        gender: 'female',
        items: [
          {
            id: uuidv4(),
            type: 'dress',
            name: 'Fit and Full Skirt Dress',
            description: 'Fitted on top with a statement full skirt',
            imageUrl: '/images/full-skirt.jpg',
            purchaseLink: 'https://example.com/invtri-f6',
            price: 94.99,
            brand: 'FullSkirt',
            color: 'black'
          }
        ]
      }
    ],
    male: [
      {
        id: uuidv4(),
        bodyShape: 'inverted-triangle',
        gender: 'male',
        items: [
          {
            id: uuidv4(),
            type: 'top',
            name: 'Relaxed Fit Henley',
            description: 'A shirt with a relaxed fit around the shoulders',
            imageUrl: '/images/fit-henley.jpg',
            purchaseLink: 'https://example.com/product-male-inverted1',
            price: 45.99,
            brand: 'CasualWear',
            color: 'Gray Melange'
          },
          {
            id: uuidv4(),
            type: 'bottom',
            name: 'Straight Cut Cargo Pants',
            description: 'Pants with details that add volume to the lower body',
            imageUrl: '/images/cargo-pants.jpg',
            purchaseLink: 'https://example.com/product-male-inverted2',
            price: 69.99,
            brand: 'UtilityStyle',
            color: 'black'
          }
        ]
      },
      {
        id: uuidv4(),
        bodyShape: 'inverted-triangle',
        gender: 'male',
        items: [
          {
            id: uuidv4(),
            type: 'top',
            name: 'V-Neck Tee',
            description: 'Simple V-neck that balances broad shoulders',
            imageUrl: '/images/v-neck men.jpg',
            purchaseLink: 'https://example.com/invtri-m2-top',
            price: 39.99,
            brand: 'VStyle',
            color: 'white'
          },
          {
            id: uuidv4(),
            type: 'bottom',
            name: 'Relaxed Fit Jeans',
            description: 'Straight through hip and thigh for balanced proportions',
            imageUrl: '/images/relaxed-fit.jpg',
            purchaseLink: 'https://example.com/invtri-m2-bottom',
            price: 79.99,
            brand: 'RelaxDenim',
            color: 'Medium Wash'
          }
        ]
      },
      {
        id: uuidv4(),
        bodyShape: 'inverted-triangle',
        gender: 'male',
        items: [
          {
            id: uuidv4(),
            type: 'top',
            name: 'Untucked Button-Down',
            description: 'Slightly looser fit that de-emphasizes broad shoulders',
            imageUrl: '/images/untucked.jpg',
            purchaseLink: 'https://example.com/invtri-m3-top',
            price: 64.99,
            brand: 'RelaxFit',
            color: 'Light Blue'
          },
          {
            id: uuidv4(),
            type: 'bottom',
            name: 'Straight Leg Chinos',
            description: 'Simple, classic cut with room in the leg',
            imageUrl: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?q=80&w=1974&auto=format&fit=crop',
            purchaseLink: 'https://example.com/invtri-m3-bottom',
            price: 69.99,
            brand: 'ClassicChino',
            color: 'Tan'
          }
        ]
      },
      {
        id: uuidv4(),
        bodyShape: 'inverted-triangle',
        gender: 'male',
        items: [
          {
            id: uuidv4(),
            type: 'top',
            name: 'Pattern Detail Shirt',
            description: 'Pattern draws attention away from broad shoulders',
            imageUrl: 'https://images.unsplash.com/photo-1607345366928-199ea26cfe3e?q=80&w=1974&auto=format&fit=crop',
            purchaseLink: 'https://example.com/invtri-m4-top',
            price: 68.99,
            brand: 'PatternFocus',
            color: 'Multi'
          },
          {
            id: uuidv4(),
            type: 'bottom',
            name: 'Wide leg Jeans',
            description: 'Slightly flared leg opening balances proportions',
            imageUrl: '/images/wideleg-men.jpg',
            purchaseLink: 'https://example.com/invtri-m4-bottom',
            price: 84.99,
            brand: 'BootDenim',
            color: 'Dark Wash'
          }
        ]
      },
      {
        id: uuidv4(),
        bodyShape: 'inverted-triangle',
        gender: 'male',
        items: [
          {
            id: uuidv4(),
            type: 'top',
            name: 'Casual Sweater',
            description: 'Relaxed fit that doesn\'t cling to shoulders',
            imageUrl: '/images/sweater.jpg',
            purchaseLink: 'https://example.com/invtri-m5-top',
            price: 74.99,
            brand: 'ComfortKnit',
            color: 'Navy'
          },
          {
            id: uuidv4(),
            type: 'bottom',
            name: 'Athletic Fit Pants',
            description: 'Room in the seat and thigh for balanced proportions',
            imageUrl: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?q=80&w=1997&auto=format&fit=crop',
            purchaseLink: 'https://example.com/invtri-m5-bottom',
            price: 79.99,
            brand: 'AthlFit',
            color: 'Gray'
          }
        ]
      },
      {
        id: uuidv4(),
        bodyShape: 'inverted-triangle',
        gender: 'male',
        items: [
          {
            id: uuidv4(),
            type: 'top',
            name: 'Soft Polo T-Shirt',
            description: 'Relaxed fit polo that doesn\'t emphasize shoulders',
            imageUrl: 'https://images.unsplash.com/photo-1571455786673-9d9d6c194f90?q=80&w=1932&auto=format&fit=crop',
            purchaseLink: 'https://example.com/invtri-m6-top',
            price: 58.99,
            brand: 'SoftPolo',
            color: 'Forest Green'
          },
          {
            id: uuidv4(),
            type: 'bottom',
            name: 'Pleated Shorts',
            description: 'Extra volume at the hip to balance upper body',
            imageUrl: '/images/shorts.jpg',
            purchaseLink: 'https://example.com/invtri-m6-bottom',
            price: 59.99,
            brand: 'PleatStyle',
            color: 'Khaki'
          }
        ]
      }
    ],
    other: []
  },
  athletic: {
    female: [
      {
        id: uuidv4(),
        bodyShape: 'athletic',
        gender: 'female',
        items: [
          {
            id: uuidv4(),
            type: 'top',
            name: 'Fitted Scoop Neck Top',
            description: 'Accentuates your athletic build while adding feminine touch',
            imageUrl: 'https://images.unsplash.com/photo-1566678124698-60b26fea4786?q=80&w=1964&auto=format&fit=crop',
            purchaseLink: 'https://example.com/product-female-athletic1',
            price: 39.99,
            brand: 'ActiveChic',
            color: 'Dusty Rose'
          },
          {
            id: uuidv4(),
            type: 'bottom',
            name: 'Tapered Joggers',
            description: 'Comfortable yet stylish pants that complement your athletic build',
            imageUrl: 'https://images.unsplash.com/photo-1552902019-54dda9486e7f?q=80&w=1742&auto=format&fit=crop',
            purchaseLink: 'https://example.com/product-female-athletic2',
            price: 49.99,
            brand: 'SportyFit',
            color: 'Gray'
          }
        ]
      },
      {
        id: uuidv4(),
        bodyShape: 'athletic',
        gender: 'female',
        items: [
          {
            id: uuidv4(),
            type: 'dress',
            name: 'Draped Midi Dress',
            description: 'Soft draping that adds feminine curves',
            imageUrl: 'https://images.unsplash.com/photo-1566678124698-60b26fea4786?q=80&w=1964&auto=format&fit=crop',
            purchaseLink: 'https://example.com/athletic-f2',
            price: 85.99,
            brand: 'DrapeFit',
            color: 'Terracotta'
          }
        ]
      },
      {
        id: uuidv4(),
        bodyShape: 'athletic',
        gender: 'female',
        items: [
          {
            id: uuidv4(),
            type: 'top',
            name: 'Ruffled Sleeve Blouse',
            description: 'Feminine details that balance athletic shoulders',
            imageUrl: 'https://images.unsplash.com/photo-1619102814948-d4571057a22e?q=80&w=1974&auto=format&fit=crop',
            purchaseLink: 'https://example.com/athletic-f3-top',
            price: 54.99,
            brand: 'FeminineDetail',
            color: 'Sky Blue'
          },
          {
            id: uuidv4(),
            type: 'bottom',
            name: 'A-line Mini Skirt',
            description: 'Adds feminine curves while showcasing athletic legs',
            imageUrl: 'https://images.unsplash.com/photo-1577900232427-18219b9166a0?q=80&w=1770&auto=format&fit=crop',
            purchaseLink: 'https://example.com/athletic-f3-bottom',
            price: 59.99,
            brand: 'FlareStyle',
            color: 'Black'
          }
        ]
      },
      {
        id: uuidv4(),
        bodyShape: 'athletic',
        gender: 'female',
        items: [
          {
            id: uuidv4(),
            type: 'top',
            name: 'Wrap Style Crop Top',
            description: 'Creates curves with wrap detail and crop length',
            imageUrl: 'https://images.unsplash.com/photo-1530268578403-df6e89da0d30?q=80&w=1770&auto=format&fit=crop',
            purchaseLink: 'https://example.com/athletic-f4-top',
            price: 48.99,
            brand: 'WrapCrop',
            color: 'Emerald'
          },
          {
            id: uuidv4(),
            type: 'bottom',
            name: 'High Waisted Wide Pants',
            description: 'Creates curves with high waist and volume',
            imageUrl: 'https://images.unsplash.com/photo-1604176424472-9e9468137942?q=80&w=1780&auto=format&fit=crop',
            purchaseLink: 'https://example.com/athletic-f4-bottom',
            price: 75.99,
            brand: 'VolumeFit',
            color: 'Cream'
          }
        ]
      },
      {
        id: uuidv4(),
        bodyShape: 'athletic',
        gender: 'female',
        items: [
          {
            id: uuidv4(),
            type: 'dress',
            name: 'Bodycon Mini Dress',
            description: 'Shows off your athletic shape with sleek lines',
            imageUrl: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?q=80&w=1976&auto=format&fit=crop',
            purchaseLink: 'https://example.com/athletic-f5',
            price: 78.99,
            brand: 'SleekFit',
            color: 'Black'
          }
        ]
      },
      {
        id: uuidv4(),
        bodyShape: 'athletic',
        gender: 'female',
        items: [
          {
            id: uuidv4(),
            type: 'top',
            name: 'Off-Shoulder Top',
            description: 'Highlights shoulders while adding feminine touch',
            imageUrl: 'https://images.unsplash.com/photo-1499939667766-4afceb292d05?q=80&w=1973&auto=format&fit=crop',
            purchaseLink: 'https://example.com/athletic-f6-top',
            price: 52.99,
            brand: 'FemShoulder',
            color: 'White'
          },
          {
            id: uuidv4(),
            type: 'bottom',
            name: 'Faux Leather Leggings',
            description: 'Edgy style that shows off athletic legs',
            imageUrl: 'https://images.unsplash.com/photo-1454720503269-3a35c21bebc6?q=80&w=2006&auto=format&fit=crop',
            purchaseLink: 'https://example.com/athletic-f6-bottom',
            price: 65.99,
            brand: 'EdgeStyle',
            color: 'Black'
          }
        ]
      }
    ],
    male: [
      {
        id: uuidv4(),
        bodyShape: 'athletic',
        gender: 'male',
        items: [
          {
            id: uuidv4(),
            type: 'top',
            name: 'Fitted Crew Neck Tee',
            description: 'A top that showcases your athletic build',
            imageUrl: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1780&auto=format&fit=crop',
            purchaseLink: 'https://example.com/product16',
            price: 35.99,
            brand: 'AthleteStyle',
            color: 'Heather Gray'
          },
          {
            id: uuidv4(),
            type: 'bottom',
            name: 'Athletic Slim Fit Jeans',
            description: 'Jeans that complement your athletic proportions',
            imageUrl: 'https://images.unsplash.com/photo-1475178626620-a4d074967452?q=80&w=1772&auto=format&fit=crop',
            purchaseLink: 'https://example.com/product17',
            price: 75.99,
            brand: 'PerformFit',
            color: 'Dark Wash'
          }
        ]
      },
      {
        id: uuidv4(),
        bodyShape: 'athletic',
        gender: 'male',
        items: [
          {
            id: uuidv4(),
            type: 'top',
            name: 'Performance Polo',
            description: 'Athletic fit polo that showcases your physique',
            imageUrl: 'https://images.unsplash.com/photo-1571455786673-9d9d6c194f90?q=80&w=1932&auto=format&fit=crop',
            purchaseLink: 'https://example.com/athletic-m2-top',
            price: 59.99,
            brand: 'PerformPolo',
            color: 'Royal Blue'
          },
          {
            id: uuidv4(),
            type: 'bottom',
            name: 'Tapered Performance Pants',
            description: 'Stretch fabric with a tapered fit for athletes',
            imageUrl: 'https://images.unsplash.com/photo-1584273143981-41c073dfe8f8?q=80&w=1974&auto=format&fit=crop',
            purchaseLink: 'https://example.com/athletic-m2-bottom',
            price: 74.99,
            brand: 'ActiveTaper',
            color: 'Charcoal'
          }
        ]
      },
      {
        id: uuidv4(),
        bodyShape: 'athletic',
        gender: 'male',
        items: [
          {
            id: uuidv4(),
            type: 'top',
            name: 'Muscle Fit Button-Up',
            description: 'Tailored shirt that shows off your athletic build',
            imageUrl: 'https://images.unsplash.com/photo-1589310243389-96a5483213a8?q=80&w=1974&auto=format&fit=crop',
            purchaseLink: 'https://example.com/athletic-m3-top',
            price: 69.99,
            brand: 'MuscleFit',
            color: 'White'
          },
          {
            id: uuidv4(),
            type: 'bottom',
            name: 'Slim Fit Chinos',
            description: 'Modern slim fit that complements athletic legs',
            imageUrl: 'https://images.unsplash.com/photo-1517445312882-bc9910d016b7?q=80&w=1973&auto=format&fit=crop',
            purchaseLink: 'https://example.com/athletic-m3-bottom',
            price: 72.99,
            brand: 'ModernSlim',
            color: 'Navy'
          }
        ]
      },
      {
        id: uuidv4(),
        bodyShape: 'athletic',
        gender: 'male',
        items: [
          {
            id: uuidv4(),
            type: 'top',
            name: 'Technical Henley',
            description: 'Performance fabric with athletic fit',
            imageUrl: 'https://images.unsplash.com/photo-1563630423918-b58f07336ac9?q=80&w=1974&auto=format&fit=crop',
            purchaseLink: 'https://example.com/athletic-m4-top',
            price: 54.99,
            brand: 'TechStyle',
            color: 'Olive'
          },
          {
            id: uuidv4(),
            type: 'bottom',
            name: 'Athletic Shorts',
            description: 'Perfect length shorts that show off athletic legs',
            imageUrl: 'https://images.unsplash.com/photo-1565084888279-aca607ecce0c?q=80&w=2070&auto=format&fit=crop',
            purchaseLink: 'https://example.com/athletic-m4-bottom',
            price: 49.99,
            brand: 'SportStyle',
            color: 'Black'
          }
        ]
      },
      {
        id: uuidv4(),
        bodyShape: 'athletic',
        gender: 'male',
        items: [
          {
            id: uuidv4(),
            type: 'top',
            name: 'Fitted Blazer',
            description: 'Perfectly tailored blazer for athletic builds',
            imageUrl: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1771&auto=format&fit=crop',
            purchaseLink: 'https://example.com/athletic-m5-top',
            price: 149.99,
            brand: 'AthleticTailor',
            color: 'Charcoal'
          },
          {
            id: uuidv4(),
            type: 'bottom',
            name: 'Athletic Fit Dress Pants',
            description: 'Room in the thigh with a sleek taper',
            imageUrl: 'https://images.unsplash.com/photo-1517445312882-bc9910d016b7?q=80&w=1973&auto=format&fit=crop',
            purchaseLink: 'https://example.com/athletic-m5-bottom',
            price: 89.99,
            brand: 'AthDress',
            color: 'Black'
          }
        ]
      },
      {
        id: uuidv4(),
        bodyShape: 'athletic',
        gender: 'male',
        items: [
          {
            id: uuidv4(),
            type: 'top',
            name: 'Quarter Zip Pullover',
            description: 'Athletic fit pullover in performance fabric',
            imageUrl: 'https://images.unsplash.com/photo-1556658005-f05251c8df6b?q=80&w=1976&auto=format&fit=crop',
            purchaseLink: 'https://example.com/athletic-m6-top',
            price: 69.99,
            brand: 'ZipPerform',
            color: 'Navy'
          },
          {
            id: uuidv4(),
            type: 'bottom',
            name: 'Premium Joggers',
            description: 'Stylish joggers that showcase athletic build',
            imageUrl: 'https://images.unsplash.com/photo-1552902019-54dda9486e7f?q=80&w=1742&auto=format&fit=crop',
            purchaseLink: 'https://example.com/athletic-m6-bottom',
            price: 64.99,
            brand: 'PremiumActive',
            color: 'Heather Gray'
          }
        ]
      }
    ],
    other: []
  }
};

const bodyShapeRecommendations: Record<BodyShape, string> = {
  hourglass: "Your hourglass figure allows you to wear form-fitting styles that accentuate your natural curves. Wrap tops and dresses, fitted silhouettes, and high-waisted bottoms work particularly well for you.",
  pear: "To balance your wider hips, opt for styles that add definition to your upper body while skimming over your lower half. Boat necks, statement tops, and A-line bottoms will flatter your shape.",
  rectangle: "Create the illusion of curves with garments that add volume or definition at strategic points. Peplum tops, layered pieces, and structured outerwear can add dimension to your silhouette.",
  apple: "Draw attention away from your midsection with V-necks, empire waists, and streamlined bottoms. Focus on creating a balanced silhouette with strategic layering.",
  "inverted-triangle": "Balance your broader shoulders with fuller bottoms and details at the hip. V-necks and vertical design elements help to narrow your upper body visually.",
  athletic: "Your balanced proportions allow for many styles. Fitted pieces showcase your athletic build, while layered looks can add dimension if desired."
};

export const getOutfitRecommendations = (
  bodyShape: BodyShape,
  gender: Gender,
  complexion: BodyComplexion
): OutfitRecommendation => {
  // Get outfits for this body shape and gender
  const shapeOutfits = mockOutfits[bodyShape]?.[gender] || [];
  
  // In a real app, we would filter based on complexion
  // For now, we'll just return what we have
  
  return {
    outfits: shapeOutfits,
    bodyShape,
    gender,
    explanation: bodyShapeRecommendations[bodyShape]
  };
};