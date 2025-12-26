// Style Guides Data
// This file contains all the data for different art style guides

const styleGuidesData = {
  'mid-century-modern': {
    title: "Mid-Century Modern",
    subtitle: "Abstract Art Reference Guide for Watercolorists",
    palettes: [
      { name: "Atomic Ranch", description: "Classic suburban warmth", colors: ["#D35400", "#F39C12", "#E8D5B7", "#2C3E50", "#1ABC9C", "#ECF0F1"] },
      { name: "Desert Sunset", description: "Southwestern influences", colors: ["#C0392B", "#E74C3C", "#F5B041", "#FAD7A0", "#784212", "#F8F1E5"] },
      { name: "Avocado Kitchen", description: "Retro appliance vibes", colors: ["#6B8E23", "#8B9A46", "#BDB76B", "#F5DEB3", "#8B4513", "#FFF8DC"] },
      { name: "Tiki Lounge", description: "Polynesian pop culture", colors: ["#FF6B35", "#004E64", "#25A18E", "#9FFFCB", "#7A4419", "#FFE5D9"] },
      { name: "Scandinavian Modern", description: "Nordic minimalism", colors: ["#2C3E50", "#95A5A6", "#ECF0F1", "#E67E22", "#D4AC0D", "#FDFEFE"] },
      { name: "Palm Springs", description: "Desert modernism", colors: ["#F06292", "#4DD0E1", "#FFF176", "#E0E0E0", "#FF8A65", "#FFFFFF"] },
      { name: "Harvest Gold", description: "Warm metallic tones", colors: ["#DAA520", "#CD853F", "#8B7355", "#F5F5DC", "#B8860B", "#FAEBD7"] },
      { name: "Eames Era", description: "Designer classics", colors: ["#B22222", "#2F4F4F", "#DAA520", "#F5F5F5", "#191970", "#FFFAF0"] },
      { name: "Seafoam Dreams", description: "Coastal tranquility", colors: ["#66CDAA", "#20B2AA", "#40E0D0", "#F0FFF0", "#2F4F4F", "#FFFAFA"] },
      { name: "Burnt Sienna", description: "Earthy sophistication", colors: ["#A0522D", "#D2691E", "#DEB887", "#FFF8DC", "#5C4033", "#FAF0E6"] },
      { name: "Atomic Age", description: "Space race optimism", colors: ["#FF4500", "#FFD700", "#00CED1", "#2F4F4F", "#C0C0C0", "#FFFFF0"] },
      { name: "Danish Teak", description: "Furniture inspired", colors: ["#8B4513", "#D2691E", "#F5DEB3", "#2F4F4F", "#B8860B", "#FFFAF0"] },
      { name: "Coral Gables", description: "Tropical elegance", colors: ["#FF7F50", "#FFB6C1", "#98FB98", "#87CEEB", "#DDA0DD", "#FFFAFA"] },
      { name: "Mustard & Olive", description: "Earth tone classics", colors: ["#FFDB58", "#808000", "#556B2F", "#F5F5DC", "#8B8000", "#FFFFF0"] },
      { name: "Space Age", description: "Futuristic metallics", colors: ["#708090", "#C0C0C0", "#B8860B", "#2F4F4F", "#FF6347", "#F5F5F5"] },
      { name: "Boomerang", description: "Googie architecture", colors: ["#00BFFF", "#FF69B4", "#FFD700", "#2F4F4F", "#FF4500", "#FFFAFA"] },
      { name: "Terrazzo", description: "Flooring patterns", colors: ["#E8D5C4", "#C19A6B", "#708090", "#2F4F4F", "#BC8F8F", "#FAF0E6"] },
      { name: "Cocktail Hour", description: "Lounge sophistication", colors: ["#2E4057", "#048A81", "#54C6EB", "#F5D547", "#8EE3EF", "#F7F7F7"] },
      { name: "Sunburst", description: "Radiant wall decor", colors: ["#FF8C00", "#FFD700", "#FFA500", "#FFFACD", "#B8860B", "#FFF8DC"] },
      { name: "Mod Squad", description: "Bold contrasts", colors: ["#000000", "#FFFFFF", "#FF4500", "#FFD700", "#1E90FF", "#F5F5F5"] }
    ],
    shapes: [
      { name: "Boomerang", desc: "Curved asymmetric arc", svg: `<svg width="90" height="90" viewBox="0 0 100 100"><path d="M20 80 Q10 50 30 30 Q50 10 70 20 Q60 30 55 40 Q50 55 35 70 Q25 80 20 80Z" fill="#D35400"/></svg>` },
      { name: "Starburst", desc: "Radiating spikes from center", svg: `<svg width="90" height="90" viewBox="0 0 100 100"><polygon points="50,5 54,40 90,50 54,60 50,95 46,60 10,50 46,40" fill="#F39C12"/></svg>` },
      { name: "Kidney/Amoeba", desc: "Organic blob form", svg: `<svg width="90" height="90" viewBox="0 0 100 100"><ellipse cx="50" cy="50" rx="35" ry="25" fill="#1ABC9C" transform="rotate(-20 50 50)"/></svg>` },
      { name: "Atomic Orbit", desc: "Elliptical paths with nucleus", svg: `<svg width="90" height="90" viewBox="0 0 100 100"><ellipse cx="50" cy="50" rx="40" ry="15" fill="none" stroke="#2C3E50" stroke-width="2"/><ellipse cx="50" cy="50" rx="40" ry="15" fill="none" stroke="#2C3E50" stroke-width="2" transform="rotate(60 50 50)"/><ellipse cx="50" cy="50" rx="40" ry="15" fill="none" stroke="#2C3E50" stroke-width="2" transform="rotate(120 50 50)"/><circle cx="50" cy="50" r="6" fill="#D35400"/></svg>` },
      { name: "Diamond/Lozenge", desc: "Rotated square, often clustered", svg: `<svg width="90" height="90" viewBox="0 0 100 100"><rect x="30" y="30" width="40" height="40" fill="#E74C3C" transform="rotate(45 50 50)"/></svg>` },
      { name: "Triangle", desc: "Pointing up = optimism", svg: `<svg width="90" height="90" viewBox="0 0 100 100"><polygon points="50,15 85,80 15,80" fill="#3498DB"/></svg>` },
      { name: "Circle Cluster", desc: "Overlapping varied circles", svg: `<svg width="90" height="90" viewBox="0 0 100 100"><circle cx="35" cy="50" r="20" fill="#9B59B6" opacity="0.8"/><circle cx="55" cy="40" r="15" fill="#E74C3C" opacity="0.8"/><circle cx="60" cy="60" r="18" fill="#F39C12" opacity="0.8"/></svg>` },
      { name: "Tapered Rectangle", desc: "Wedge or trapezoid", svg: `<svg width="90" height="90" viewBox="0 0 100 100"><polygon points="25,75 35,25 65,25 75,75" fill="#16A085"/></svg>` },
      { name: "Eye/Leaf", desc: "Pointed oval, almond shape", svg: `<svg width="90" height="90" viewBox="0 0 100 100"><ellipse cx="50" cy="50" rx="38" ry="18" fill="#27AE60"/><circle cx="50" cy="50" r="8" fill="#2C3E50"/></svg>` },
      { name: "Hairpin Legs", desc: "Thin lines converging", svg: `<svg width="90" height="90" viewBox="0 0 100 100"><line x1="30" y1="20" x2="40" y2="80" stroke="#2C3E50" stroke-width="3"/><line x1="70" y1="20" x2="60" y2="80" stroke="#2C3E50" stroke-width="3"/><line x1="35" y1="20" x2="65" y2="20" stroke="#2C3E50" stroke-width="3"/></svg>` },
      { name: "Dots/Spheres", desc: "Scattered or grid pattern", svg: `<svg width="90" height="90" viewBox="0 0 100 100"><circle cx="25" cy="30" r="8" fill="#E74C3C"/><circle cx="50" cy="25" r="6" fill="#F39C12"/><circle cx="75" cy="35" r="7" fill="#3498DB"/><circle cx="30" cy="60" r="5" fill="#9B59B6"/><circle cx="55" cy="55" r="9" fill="#1ABC9C"/><circle cx="70" cy="70" r="6" fill="#E67E22"/></svg>` },
      { name: "Parabola/Arc", desc: "Single curved sweep", svg: `<svg width="90" height="90" viewBox="0 0 100 100"><path d="M15 70 Q50 10 85 70" fill="none" stroke="#D35400" stroke-width="4" stroke-linecap="round"/></svg>` }
    ],
    compositions: [
      { name: "Floating Cluster", desc: "Shapes grouped off-center with generous white space", bg: "#FAF0E6", shapes: [{type: 'circle', x: 60, y: 35, r: 25, fill: '#D35400'}, {type: 'circle', x: 75, y: 55, r: 15, fill: '#F39C12'}, {type: 'rect', x: 45, y: 50, w: 20, h: 20, fill: '#2C3E50', rotate: 45}] },
      { name: "Diagonal Flow", desc: "Elements arranged along invisible diagonal", bg: "#F5F5DC", shapes: [{type: 'circle', x: 20, y: 75, r: 18, fill: '#1ABC9C'}, {type: 'rect', x: 40, y: 45, w: 25, h: 15, fill: '#E74C3C', rotate: -15}, {type: 'circle', x: 70, y: 25, r: 12, fill: '#3498DB'}] },
      { name: "Grounded + Float", desc: "Heavy base element with lighter floating shapes", bg: "#FFFAF0", shapes: [{type: 'rect', x: 20, y: 70, w: 60, h: 15, fill: '#2C3E50', rotate: 0}, {type: 'circle', x: 35, y: 35, r: 12, fill: '#F39C12'}, {type: 'circle', x: 60, y: 45, r: 8, fill: '#D35400'}] },
      { name: "Radial Scatter", desc: "Elements radiating from implied center point", bg: "#F0FFF0", shapes: [{type: 'circle', x: 50, y: 50, r: 10, fill: '#E74C3C'}, {type: 'circle', x: 30, y: 30, r: 8, fill: '#3498DB'}, {type: 'circle', x: 70, y: 35, r: 6, fill: '#F39C12'}, {type: 'circle', x: 25, y: 60, r: 7, fill: '#9B59B6'}, {type: 'circle', x: 75, y: 65, r: 9, fill: '#1ABC9C'}] }
    ]
  },

  'japanese-sumi-e': {
    title: "Japanese Sumi-e & Ink Wash",
    subtitle: "Minimalist East Asian Painting for Watercolorists",
    palettes: [
      { name: "Monochrome Values", description: "Traditional ink gradations", colors: ["#000000", "#2C2C2C", "#5A5A5A", "#888888", "#B8B8B8", "#E8E8E8"] },
      { name: "Warm Earth Tones", description: "Sepia and brown variations", colors: ["#3E2723", "#5D4037", "#795548", "#A1887F", "#BCAAA4", "#F5F5F5"] },
      { name: "Traditional Accents", description: "Vermillion and indigo", colors: ["#1A237E", "#303F9F", "#C62828", "#E53935", "#424242", "#FAFAFA"] },
      { name: "Tea Ceremony", description: "Matcha and natural tones", colors: ["#33691E", "#558B2F", "#C5E1A5", "#F1F8E9", "#6D4C41", "#EFEBE9"] },
      { name: "Cherry Blossom", description: "Soft pinks with gray-greens", colors: ["#F8BBD0", "#F48FB1", "#C5E1A5", "#A5D6A7", "#78909C", "#FFFFFF"] },
      { name: "Autumn Leaves", description: "Rust, ochre, deep crimson", colors: ["#B71C1C", "#D32F2F", "#F57C00", "#FB8C00", "#6D4C41", "#F5F5F5"] },
      { name: "Mountain Mist", description: "Cool grays and slate blues", colors: ["#263238", "#37474F", "#546E7A", "#90A4AE", "#CFD8DC", "#ECEFF1"] },
      { name: "Zen Garden", description: "Stone grays, moss, sand", colors: ["#424242", "#616161", "#4CAF50", "#81C784", "#BCAAA4", "#EFEBE9"] },
      { name: "Ink Stone", description: "Charcoal to light gray", colors: ["#212121", "#424242", "#616161", "#9E9E9E", "#BDBDBD", "#F5F5F5"] },
      { name: "Morning Dew", description: "Pale blues and misty grays", colors: ["#B0BEC5", "#CFD8DC", "#E1F5FE", "#F1F8E9", "#FAFAFA", "#FFFFFF"] }
    ],
    shapes: [
      { name: "Bamboo Stroke", desc: "Segmented vertical stems", svg: `<svg width="90" height="90" viewBox="0 0 100 100"><line x1="50" y1="10" x2="50" y2="90" stroke="#2E7D32" stroke-width="8" stroke-linecap="round"/><line x1="45" y1="30" x2="55" y2="30" stroke="#1B5E20" stroke-width="2"/><line x1="45" y1="55" x2="55" y2="55" stroke="#1B5E20" stroke-width="2"/><line x1="45" y1="75" x2="55" y2="75" stroke="#1B5E20" stroke-width="2"/></svg>` },
      { name: "Orchid Petal", desc: "Graceful curved petal", svg: `<svg width="90" height="90" viewBox="0 0 100 100"><path d="M50 20 Q30 40 35 70 Q50 65 50 50 Q50 65 65 70 Q70 40 50 20Z" fill="#7B1FA2" opacity="0.7"/></svg>` },
      { name: "Plum Blossom", desc: "Five-petaled simple flower", svg: `<svg width="90" height="90" viewBox="0 0 100 100"><circle cx="50" cy="35" r="8" fill="#E91E63"/><circle cx="35" cy="50" r="8" fill="#E91E63"/><circle cx="50" cy="65" r="8" fill="#E91E63"/><circle cx="65" cy="50" r="8" fill="#E91E63"/><circle cx="50" cy="50" r="8" fill="#E91E63"/><circle cx="50" cy="50" r="4" fill="#FFC107"/></svg>` },
      { name: "Pine Needle", desc: "Clustered angular needles", svg: `<svg width="90" height="90" viewBox="0 0 100 100"><line x1="50" y1="50" x2="35" y2="25" stroke="#1B5E20" stroke-width="2"/><line x1="50" y1="50" x2="45" y2="25" stroke="#2E7D32" stroke-width="2"/><line x1="50" y1="50" x2="55" y2="25" stroke="#2E7D32" stroke-width="2"/><line x1="50" y1="50" x2="65" y2="25" stroke="#1B5E20" stroke-width="2"/></svg>` },
      { name: "Mountain Silhouette", desc: "Angular peak form", svg: `<svg width="90" height="90" viewBox="0 0 100 100"><polygon points="20,80 40,50 50,60 70,30 90,80" fill="#37474F" opacity="0.8"/></svg>` },
      { name: "Koi Fish", desc: "Simplified fish form", svg: `<svg width="90" height="90" viewBox="0 0 100 100"><ellipse cx="50" cy="50" rx="30" ry="15" fill="#FF6F00" opacity="0.7"/><polygon points="75,50 90,45 90,55" fill="#FF6F00" opacity="0.7"/><circle cx="40" cy="47" r="3" fill="#000"/></svg>` },
      { name: "Crane", desc: "Elegant bird silhouette", svg: `<svg width="90" height="90" viewBox="0 0 100 100"><path d="M30 60 Q40 40 50 35 L50 70" stroke="#424242" stroke-width="3" fill="none"/><circle cx="50" cy="30" r="6" fill="#424242"/><path d="M30 65 L45 65 L50 70 L55 65 L70 65" stroke="#424242" stroke-width="2" fill="none"/></svg>` },
      { name: "Lotus Leaf", desc: "Circular leaf with center", svg: `<svg width="90" height="90" viewBox="0 0 100 100"><circle cx="50" cy="50" r="30" fill="#43A047" opacity="0.6"/><line x1="50" y1="50" x2="50" y2="20" stroke="#2E7D32" stroke-width="2"/><line x1="50" y1="50" x2="35" y2="35" stroke="#2E7D32" stroke-width="1"/><line x1="50" y1="50" x2="65" y2="35" stroke="#2E7D32" stroke-width="1"/></svg>` },
      { name: "Mist/Cloud", desc: "Soft atmospheric wash", svg: `<svg width="90" height="90" viewBox="0 0 100 100"><ellipse cx="50" cy="50" rx="35" ry="20" fill="#B0BEC5" opacity="0.5"/><ellipse cx="40" cy="55" rx="25" ry="15" fill="#CFD8DC" opacity="0.4"/></svg>` },
      { name: "Ink Splash", desc: "Expressive brush mark", svg: `<svg width="90" height="90" viewBox="0 0 100 100"><path d="M30 50 Q40 30 60 40 Q70 50 60 65 Q45 70 30 50Z" fill="#000" opacity="0.7"/></svg>` },
      { name: "Willow Branch", desc: "Drooping graceful branch", svg: `<svg width="90" height="90" viewBox="0 0 100 100"><path d="M20 20 Q30 40 25 60 Q23 75 28 85" stroke="#558B2F" stroke-width="3" fill="none"/><ellipse cx="22" cy="45" rx="8" ry="3" fill="#7CB342" opacity="0.7" transform="rotate(-30 22 45)"/><ellipse cx="25" cy="65" rx="8" ry="3" fill="#7CB342" opacity="0.7" transform="rotate(-20 25 65)"/></svg>` },
      { name: "Calligraphy Stroke", desc: "Thick-to-thin brush line", svg: `<svg width="90" height="90" viewBox="0 0 100 100"><path d="M20 30 Q40 50 45 50 Q50 50 70 80" stroke="#000" stroke-width="6" stroke-linecap="round" fill="none" opacity="0.8"/></svg>` }
    ],
    compositions: [
      { name: "Off-Center Simplicity", desc: "Single subject placed asymmetrically with breathing room", bg: "#F5F5F5", shapes: [{type: 'circle', x: 35, y: 30, r: 15, fill: '#424242'}, {type: 'rect', x: 30, y: 48, w: 2, h: 35, fill: '#2E7D32', rotate: 0}] },
      { name: "Diagonal Movement", desc: "Elements flow along invisible diagonal path", bg: "#FAFAFA", shapes: [{type: 'circle', x: 25, y: 25, r: 8, fill: '#E91E63'}, {type: 'circle', x: 50, y: 50, r: 6, fill: '#424242'}, {type: 'circle', x: 75, y: 75, r: 10, fill: '#558B2F'}] },
      { name: "Heaven-Earth-Man", desc: "Triadic balance with three focal points", bg: "#F8F8F8", shapes: [{type: 'circle', x: 50, y: 20, r: 8, fill: '#90A4AE'}, {type: 'rect', x: 28, y: 65, w: 12, h: 20, fill: '#6D4C41', rotate: 0}, {type: 'circle', x: 70, y: 50, r: 12, fill: '#424242'}] },
      { name: "Ma (Emptiness)", desc: "Minimal elements, maximum negative space", bg: "#FFFFFF", shapes: [{type: 'circle', x: 75, y: 30, r: 6, fill: '#000000'}, {type: 'rect', x: 73, y: 38, w: 1, h: 25, fill: '#2E7D32', rotate: 5}] }
    ]
  },

  'botanical-illustration': {
    title: "Botanical Illustration",
    subtitle: "Scientific Accuracy Meets Artistic Beauty for Watercolorists",
    palettes: [
      { name: "Foliage Greens", description: "Complete green spectrum", colors: ["#9ACD32", "#7CB342", "#558B2F", "#388E3C", "#2E7D32", "#1B5E20"] },
      { name: "Garden Roses", description: "Classic rose colors", colors: ["#F8BBD0", "#F06292", "#EC407A", "#C2185B", "#FFF59D", "#FFECB3"] },
      { name: "Wildflower Meadow", description: "Mixed field flowers", colors: ["#7B1FA2", "#9C27B0", "#FFD54F", "#FFC107", "#FF6F00", "#FFFFFF"] },
      { name: "Succulent Garden", description: "Dusty blue-greens", colors: ["#80CBC4", "#4DB6AC", "#26A69A", "#F48FB1", "#CE93D8", "#B0BEC5"] },
      { name: "Autumn Botanicals", description: "Fall foliage tones", colors: ["#8D6E63", "#A1887F", "#BF360C", "#D84315", "#F57C00", "#FBC02D"] },
      { name: "Spring Blossoms", description: "Soft spring colors", colors: ["#F8BBD0", "#F3E5F5", "#E1F5FE", "#C8E6C9", "#FFF9C4", "#FFFFFF"] },
      { name: "Tropical Palette", description: "Vibrant jungle colors", colors: ["#D32F2F", "#E64A19", "#F57C00", "#1B5E20", "#004D40", "#006064"] },
      { name: "Herb Garden", description: "Silvery and muted", colors: ["#9E9E9E", "#90A4AE", "#78909C", "#7E57C2", "#FFF59D", "#DCEDC8"] },
      { name: "Vintage Herbarium", description: "Aged botanical tones", colors: ["#8D6E63", "#A1887F", "#BCAAA4", "#D7CCC8", "#6D4C41", "#F5F5DC"] },
      { name: "Forest Floor", description: "Earthy woodland colors", colors: ["#4E342E", "#5D4037", "#6D4C41", "#558B2F", "#7CB342", "#BCAAA4"] },
      { name: "Citrus Bright", description: "Lemon, orange, lime", colors: ["#F9FBE7", "#F4FF81", "#FFEB3B", "#FF9800", "#FF6F00", "#7CB342"] },
      { name: "Berry Tones", description: "Deep fruit colors", colors: ["#4A148C", "#6A1B9A", "#880E4F", "#C2185B", "#AD1457", "#F8BBD0"] },
      { name: "Lavender Fields", description: "Purple and sage", colors: ["#7E57C2", "#9575CD", "#B39DDB", "#D1C4E9", "#9E9E9E", "#E8EAF6"] },
      { name: "Desert Blooms", description: "Cactus flowers", colors: ["#FF6F00", "#FF8F00", "#FFA000", "#F06292", "#EC407A", "#69F0AE"] },
      { name: "Woodland Mushrooms", description: "Fungi and forest", colors: ["#8D6E63", "#A1887F", "#FFCCBC", "#FF8A65", "#6D4C41", "#D7CCC8"] }
    ],
    shapes: [
      { name: "Simple Leaf", desc: "Ovate with midrib", svg: `<svg width="90" height="90" viewBox="0 0 100 100"><ellipse cx="50" cy="50" rx="18" ry="30" fill="#43A047"/><line x1="50" y1="20" x2="50" y2="80" stroke="#2E7D32" stroke-width="1.5"/></svg>` },
      { name: "Serrated Leaf", desc: "Toothed edges", svg: `<svg width="90" height="90" viewBox="0 0 100 100"><path d="M50 20 L55 30 L53 35 L58 40 L55 45 L60 50 L55 55 L58 60 L53 65 L55 70 L50 80 L45 70 L47 65 L42 60 L45 55 L40 50 L45 45 L42 40 L47 35 L45 30 Z" fill="#558B2F"/><line x1="50" y1="20" x2="50" y2="80" stroke="#33691E" stroke-width="1"/></svg>` },
      { name: "Compound Leaf", desc: "Multiple leaflets", svg: `<svg width="90" height="90" viewBox="0 0 100 100"><ellipse cx="50" cy="25" rx="8" ry="12" fill="#66BB6A"/><ellipse cx="40" cy="45" rx="8" ry="12" fill="#66BB6A"/><ellipse cx="60" cy="45" rx="8" ry="12" fill="#66BB6A"/><ellipse cx="35" cy="65" rx="8" ry="12" fill="#66BB6A"/><ellipse cx="65" cy="65" rx="8" ry="12" fill="#66BB6A"/><line x1="50" y1="25" x2="50" y2="75" stroke="#2E7D32" stroke-width="2"/></svg>` },
      { name: "Five-Petal Flower", desc: "Simple blossom", svg: `<svg width="90" height="90" viewBox="0 0 100 100"><circle cx="50" cy="40" r="10" fill="#F06292"/><circle cx="35" cy="50" r="10" fill="#F06292"/><circle cx="50" cy="65" r="10" fill="#F06292"/><circle cx="65" cy="50" r="10" fill="#F06292"/><circle cx="50" cy="50" r="10" fill="#F06292"/><circle cx="50" cy="50" r="5" fill="#FBC02D"/></svg>` },
      { name: "Bell Flower", desc: "Drooping tubular bloom", svg: `<svg width="90" height="90" viewBox="0 0 100 100"><path d="M50 30 Q40 40 45 55 L55 55 Q60 40 50 30 Z" fill="#7E57C2" opacity="0.8"/><line x1="50" y1="20" x2="50" y2="30" stroke="#558B2F" stroke-width="2"/></svg>` },
      { name: "Daisy", desc: "White petals, yellow center", svg: `<svg width="90" height="90" viewBox="0 0 100 100"><ellipse cx="50" cy="35" rx="5" ry="12" fill="#FFFFFF" stroke="#E0E0E0"/><ellipse cx="35" cy="50" rx="12" ry="5" fill="#FFFFFF" stroke="#E0E0E0"/><ellipse cx="50" cy="65" rx="5" ry="12" fill="#FFFFFF" stroke="#E0E0E0"/><ellipse cx="65" cy="50" rx="12" ry="5" fill="#FFFFFF" stroke="#E0E0E0"/><circle cx="50" cy="50" r="8" fill="#FDD835"/></svg>` },
      { name: "Rose Hip", desc: "Seed pod structure", svg: `<svg width="90" height="90" viewBox="0 0 100 100"><ellipse cx="50" cy="50" rx="12" ry="15" fill="#D32F2F"/><path d="M50 35 L48 30 L52 30 Z" fill="#558B2F"/></svg>` },
      { name: "Fern Frond", desc: "Pinnate leaf pattern", svg: `<svg width="90" height="90" viewBox="0 0 100 100"><line x1="50" y1="20" x2="50" y2="80" stroke="#2E7D32" stroke-width="2"/><path d="M50 30 Q40 30 38 35" fill="none" stroke="#43A047" stroke-width="1.5"/><path d="M50 30 Q60 30 62 35" fill="none" stroke="#43A047" stroke-width="1.5"/><path d="M50 45 Q40 45 38 50" fill="none" stroke="#43A047" stroke-width="1.5"/><path d="M50 45 Q60 45 62 50" fill="none" stroke="#43A047" stroke-width="1.5"/><path d="M50 60 Q40 60 38 65" fill="none" stroke="#43A047" stroke-width="1.5"/><path d="M50 60 Q60 60 62 65" fill="none" stroke="#43A047" stroke-width="1.5"/></svg>` },
      { name: "Succulent Rosette", desc: "Layered symmetry", svg: `<svg width="90" height="90" viewBox="0 0 100 100"><ellipse cx="50" cy="50" rx="6" ry="12" fill="#4DB6AC" transform="rotate(0 50 50)"/><ellipse cx="50" cy="50" rx="6" ry="12" fill="#26A69A" transform="rotate(60 50 50)"/><ellipse cx="50" cy="50" rx="6" ry="12" fill="#4DB6AC" transform="rotate(120 50 50)"/><ellipse cx="50" cy="50" rx="6" ry="12" fill="#26A69A" transform="rotate(180 50 50)"/><ellipse cx="50" cy="50" rx="6" ry="12" fill="#4DB6AC" transform="rotate(240 50 50)"/><ellipse cx="50" cy="50" rx="6" ry="12" fill="#26A69A" transform="rotate(300 50 50)"/></svg>` },
      { name: "Seed Pod", desc: "Elongated capsule", svg: `<svg width="90" height="90" viewBox="0 0 100 100"><ellipse cx="50" cy="50" rx="8" ry="25" fill="#8D6E63"/><line x1="50" y1="25" x2="50" y2="75" stroke="#5D4037" stroke-width="1"/></svg>` },
      { name: "Berry Cluster", desc: "Grouped fruits", svg: `<svg width="90" height="90" viewBox="0 0 100 100"><circle cx="45" cy="45" r="6" fill="#C2185B"/><circle cx="55" cy="42" r="6" fill="#AD1457"/><circle cx="50" cy="53" r="6" fill="#C2185B"/><circle cx="60" cy="50" r="5" fill="#880E4F"/><line x1="50" y1="35" x2="50" y2="20" stroke="#558B2F" stroke-width="2"/></svg>` },
      { name: "Vine Tendril", desc: "Curling climbing structure", svg: `<svg width="90" height="90" viewBox="0 0 100 100"><path d="M30 30 Q40 35 45 45 Q50 55 58 60 Q65 65 70 70" fill="none" stroke="#558B2F" stroke-width="2"/><path d="M55 50 Q60 45 68 45" fill="none" stroke="#7CB342" stroke-width="1.5"/></svg>` }
    ],
    compositions: [
      { name: "Single Specimen", desc: "One plant centered with botanical details", bg: "#FFFFFF", shapes: [{type: 'circle', x: 50, y: 50, r: 8, fill: '#E91E63'}, {type: 'rect', x: 49, y: 60, w: 2, h: 25, fill: '#558B2F', rotate: 0}] },
      { name: "Branch Study", desc: "Flowering branch diagonally placed", bg: "#FAFAFA", shapes: [{type: 'circle', x: 35, y: 40, r: 5, fill: '#F06292'}, {type: 'circle', x: 55, y: 50, r: 6, fill: '#F06292'}, {type: 'circle', x: 65, y: 35, r: 5, fill: '#F8BBD0'}, {type: 'rect', x: 28, y: 45, w: 40, h: 2, fill: '#6D4C41', rotate: -25}] },
      { name: "Life Cycle", desc: "Bud to bloom to seed progression", bg: "#F5F5F5", shapes: [{type: 'circle', x: 25, y: 50, r: 4, fill: '#9E9E9E'}, {type: 'circle', x: 50, y: 50, r: 8, fill: '#EC407A'}, {type: 'circle', x: 75, y: 50, r: 5, fill: '#8D6E63'}] },
      { name: "Botanical Plate", desc: "Multiple views - whole plant, detail, cross-section", bg: "#FFFFFF", shapes: [{type: 'circle', x: 30, y: 40, r: 12, fill: '#66BB6A'}, {type: 'circle', x: 70, y: 35, r: 6, fill: '#F06292'}, {type: 'rect', x: 60, y: 60, w: 20, h: 15, fill: '#E8D5B7', rotate: 0}] }
    ]
  },

  'impressionist-landscape': {
    title: "Impressionist Landscape",
    subtitle: "Capturing Light and Atmosphere for Watercolorists",
    palettes: [
      { name: "Golden Hour", description: "Warm sunset light", colors: ["#FF6F00", "#FF8F00", "#FFA726", "#FFB74D", "#7E57C2", "#512DA8"] },
      { name: "Blue Hour", description: "Cool twilight tones", colors: ["#283593", "#3949AB", "#5C6BC0", "#7986CB", "#F48FB1", "#F06292"] },
      { name: "Midday Summer", description: "Bright and clear", colors: ["#1976D2", "#2196F3", "#64B5F6", "#7CB342", "#9CCC65", "#FFFFFF"] },
      { name: "Overcast Day", description: "Soft muted light", colors: ["#78909C", "#90A4AE", "#B0BEC5", "#A5D6A7", "#81C784", "#E0E0E0"] },
      { name: "Autumn Field", description: "Fall harvest colors", colors: ["#F57C00", "#FB8C00", "#FFA726", "#FFB74D", "#8D6E63", "#D7CCC8"] },
      { name: "Spring Meadow", description: "Fresh greens and flowers", colors: ["#7CB342", "#9CCC65", "#C5E1A5", "#BA68C8", "#CE93D8", "#FFE082"] },
      { name: "Water Reflections", description: "Sky mirrored in water", colors: ["#0277BD", "#0288D1", "#03A9F4", "#29B6F6", "#4FC3F7", "#E1F5FE"] },
      { name: "Snowy Landscape", description: "Winter whites and blues", colors: ["#E3F2FD", "#BBDEFB", "#90CAF9", "#5E35B1", "#7E57C2", "#B39DDB"] },
      { name: "Sunset Sky", description: "Vibrant evening colors", colors: ["#FF6F00", "#FF8F00", "#FFA726", "#EC407A", "#AB47BC", "#5E35B1"] },
      { name: "Morning Mist", description: "Soft dawn light", colors: ["#FFF9C4", "#FFF59D", "#FFECB3", "#C5E1A5", "#A5D6A7", "#E0F2F1"] },
      { name: "Vineyard", description: "Grape and wine country", colors: ["#6A1B9A", "#8E24AA", "#AB47BC", "#558B2F", "#689F38", "#F5F5DC"] },
      { name: "Seaside", description: "Ocean and shore", colors: ["#006064", "#00838F", "#00ACC1", "#F5F5DC", "#BCAAA4", "#E0E0E0"] },
      { name: "Forest Path", description: "Dappled woodland light", colors: ["#33691E", "#558B2F", "#689F38", "#8D6E63", "#A1887F", "#D7CCC8"] },
      { name: "Lavender Fields", description: "Provence-inspired", colors: ["#5E35B1", "#7E57C2", "#9575CD", "#7CB342", "#9CCC65", "#E8EAF6"] },
      { name: "Desert Sunset", description: "Warm earth and sky", colors: ["#BF360C", "#D84315", "#FF6F00", "#FF8F00", "#FFA726", "#FFE0B2"] }
    ],
    shapes: [
      { name: "Cloud Mass", desc: "Soft billowing forms", svg: `<svg width="90" height="90" viewBox="0 0 100 100"><ellipse cx="35" cy="50" rx="20" ry="12" fill="#90CAF9" opacity="0.7"/><ellipse cx="55" cy="48" rx="18" ry="10" fill="#BBDEFB" opacity="0.7"/><ellipse cx="65" cy="52" rx="15" ry="10" fill="#E3F2FD" opacity="0.7"/></svg>` },
      { name: "Tree Canopy", desc: "Loose foliage mass", svg: `<svg width="90" height="90" viewBox="0 0 100 100"><circle cx="50" cy="40" r="22" fill="#7CB342" opacity="0.8"/><circle cx="38" cy="45" r="15" fill="#9CCC65" opacity="0.7"/><circle cx="62" cy="45" r="15" fill="#689F38" opacity="0.7"/><rect x="47" y="60" width="6" height="25" fill="#6D4C41"/></svg>` },
      { name: "Water Ripple", desc: "Horizontal strokes", svg: `<svg width="90" height="90" viewBox="0 0 100 100"><path d="M20 45 Q30 42 40 45 Q50 48 60 45 Q70 42 80 45" stroke="#0288D1" stroke-width="2" fill="none" opacity="0.7"/><path d="M20 55 Q30 52 40 55 Q50 58 60 55 Q70 52 80 55" stroke="#03A9F4" stroke-width="2" fill="none" opacity="0.6"/><path d="M20 65 Q30 62 40 65 Q50 68 60 65 Q70 62 80 65" stroke="#4FC3F7" stroke-width="2" fill="none" opacity="0.5"/></svg>` },
      { name: "Horizon Line", desc: "Land meets sky", svg: `<svg width="90" height="90" viewBox="0 0 100 100"><rect x="0" y="0" width="100" height="50" fill="#90CAF9"/><rect x="0" y="50" width="100" height="50" fill="#9CCC65"/><line x1="0" y1="50" x2="100" y2="50" stroke="#7CB342" stroke-width="1" opacity="0.5"/></svg>` },
      { name: "Broken Color", desc: "Dappled light effect", svg: `<svg width="90" height="90" viewBox="0 0 100 100"><rect x="25" y="25" width="12" height="12" fill="#FFB74D"/><rect x="42" y="30" width="10" height="10" fill="#FFA726"/><rect x="58" y="28" width="14" height="14" fill="#FF8F00"/><rect x="30" y="45" width="11" height="11" fill="#FFA726"/><rect x="50" y="48" width="13" height="13" fill="#FFB74D"/><rect x="68" y="50" width="9" height="9" fill="#FF8F00"/></svg>` },
      { name: "Path Perspective", desc: "Receding pathway", svg: `<svg width="90" height="90" viewBox="0 0 100 100"><path d="M30 90 L45 30 L55 30 L70 90 Z" fill="#8D6E63" opacity="0.6"/></svg>` },
      { name: "Brushstroke Sky", desc: "Loose horizontal marks", svg: `<svg width="90" height="90" viewBox="0 0 100 100"><rect x="15" y="25" width="70" height="8" fill="#FF8F00" opacity="0.7"/><rect x="20" y="38" width="65" height="6" fill="#FFA726" opacity="0.6"/><rect x="18" y="48" width="68" height="7" fill="#FFB74D" opacity="0.5"/></svg>` },
      { name: "Flower Field", desc: "Impressionistic blooms", svg: `<svg width="90" height="90" viewBox="0 0 100 100"><circle cx="30" cy="50" r="5" fill="#EC407A"/><circle cx="50" cy="45" r="6" fill="#F06292"/><circle cx="70" cy="52" r="5" fill="#F48FB1"/><circle cx="40" cy="60" r="4" fill="#EC407A"/><circle cx="60" cy="58" r="5" fill="#F06292"/><rect x="0" y="70" width="100" height="30" fill="#7CB342"/></svg>` },
      { name: "Building Mass", desc: "Simplified architecture", svg: `<svg width="90" height="90" viewBox="0 0 100 100"><rect x="25" y="40" width="20" height="40" fill="#BCAAA4"/><rect x="50" y="35" width="25" height="45" fill="#A1887F"/><polygon points="25,40 35,25 45,40" fill="#8D6E63"/><polygon points="50,35 62.5,22 75,35" fill="#6D4C41"/></svg>` },
      { name: "Shadow Pattern", desc: "Diagonal cast shadows", svg: `<svg width="90" height="90" viewBox="0 0 100 100"><polygon points="30,50 50,70 60,60 40,40" fill="#5E35B1" opacity="0.4"/><polygon points="50,30 70,50 80,40 60,20" fill="#7E57C2" opacity="0.3"/></svg>` },
      { name: "Grass Texture", desc: "Vertical dash marks", svg: `<svg width="90" height="90" viewBox="0 0 100 100"><line x1="25" y1="60" x2="25" y2="75" stroke="#558B2F" stroke-width="2"/><line x1="35" y1="55" x2="35" y2="73" stroke="#689F38" stroke-width="2"/><line x1="45" y1="58" x2="45" y2="76" stroke="#7CB342" stroke-width="2"/><line x1="55" y1="62" x2="55" y2="74" stroke="#8BC34A" stroke-width="2"/><line x1="65" y1="56" x2="65" y2="75" stroke="#689F38" stroke-width="2"/><line x1="75" y1="60" x2="75" y2="77" stroke="#558B2F" stroke-width="2"/></svg>` },
      { name: "Sunlight Burst", desc: "Radiating light", svg: `<svg width="90" height="90" viewBox="0 0 100 100"><circle cx="50" cy="30" r="12" fill="#FFF59D" opacity="0.9"/><line x1="50" y1="15" x2="50" y2="5" stroke="#FFEB3B" stroke-width="2" opacity="0.7"/><line x1="65" y1="20" x2="72" y2="13" stroke="#FFF176" stroke-width="2" opacity="0.6"/><line x1="35" y1="20" x2="28" y2="13" stroke="#FFF176" stroke-width="2" opacity="0.6"/><line x1="70" y1="30" x2="80" y2="30" stroke="#FFEB3B" stroke-width="2" opacity="0.7"/><line x1="30" y1="30" x2="20" y2="30" stroke="#FFEB3B" stroke-width="2" opacity="0.7"/></svg>` }
    ],
    compositions: [
      { name: "Rule of Thirds Sky", desc: "Horizon at lower third with expansive sky", bg: "#E3F2FD", shapes: [{type: 'rect', x: 0, y: 67, w: 100, h: 33, fill: '#7CB342', rotate: 0}, {type: 'circle', x: 25, y: 25, r: 15, fill: '#FFF59D'}] },
      { name: "Atmospheric Depth", desc: "Cool distant, warm foreground", bg: "#B3E5FC", shapes: [{type: 'rect', x: 0, y: 70, w: 100, h: 30, fill: '#FF8F00', rotate: 0}, {type: 'rect', x: 0, y: 50, w: 100, h: 20, fill: '#9CCC65', rotate: 0}] },
      { name: "Path Leading In", desc: "Diagonal leads eye into distance", bg: "#C5E1A5", shapes: [{type: 'rect', x: 35, y: 30, w: 8, h: 10, fill: '#8D6E63', rotate: 0}, {type: 'rect', x: 40, y: 45, w: 12, h: 15, fill: '#A1887F', rotate: 0}, {type: 'rect', x: 42, y: 65, w: 16, h: 20, fill: '#BCAAA4', rotate: 0}] },
      { name: "Water Reflection", desc: "Sky colors mirrored below horizon", bg: "#FFA726", shapes: [{type: 'rect', x: 0, y: 0, w: 100, h: 45, fill: '#5E35B1', rotate: 0}, {type: 'rect', x: 0, y: 55, w: 100, h: 45, fill: '#7E57C2', rotate: 0}, {type: 'rect', x: 0, y: 45, w: 100, h: 10, fill: '#689F38', rotate: 0}] }
    ]
  }
};
