import { notFound } from 'next/navigation'
import { VehicleContent } from "./vehicle-content"

export const vehicleData = {
  "1": {
    id: "1",
    name: "Rolls-Royce Phantom",
    price: "€450,000",
    rentPrice: "€2,500/day",
    description: "The Rolls-Royce Phantom is the pinnacle of luxury motoring. This extraordinary automobile combines timeless elegance with cutting-edge technology to deliver an unparalleled driving experience.",
    specs: {
      engine: "6.75L V12 Twin-Turbo",
      power: "563 hp",
      acceleration: "0-60 mph in 5.1 seconds",
      transmission: "8-speed automatic",
      drivetrain: "Rear-wheel drive",
      interior: "Handcrafted leather, wood, and metal finishes"
    },
    images: [
      "https://images.unsplash.com/photo-1563720223185-11003d516935?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1635770310392-f1ae37e0a5b6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1635776062127-d379bfcba9f8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    ]
  },
  "2": {
    id: "2",
    name: "Bentley Flying Spur",
    price: "€320,000",
    rentPrice: "€1,800/day",
    description: "The Bentley Flying Spur represents the perfect fusion of luxury and performance. With its powerful engine and sumptuous interior, it delivers an exceptional driving experience.",
    specs: {
      engine: "6.0L W12 Twin-Turbo",
      power: "626 hp",
      acceleration: "0-60 mph in 3.7 seconds",
      transmission: "8-speed dual-clutch",
      drivetrain: "All-wheel drive",
      interior: "Premium leather, wood veneer, and metal accents"
    },
    images: [
      "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    ]
  },
  "3": {
    id: "3",
    name: "Ferrari SF90 Stradale",
    price: "€500,000",
    rentPrice: "€3,000/day",
    description: "The Ferrari SF90 Stradale is Ferrari's first series-production PHEV (Plug-in Hybrid Electric Vehicle), representing the peak of Ferrari's engineering capabilities.",
    specs: {
      engine: "4.0L V8 + 3 Electric Motors",
      power: "986 hp combined",
      acceleration: "0-60 mph in 2.5 seconds",
      transmission: "8-speed dual-clutch",
      drivetrain: "All-wheel drive",
      interior: "Racing-inspired cockpit with carbon fiber trim"
    },
    images: [
      "https://images.unsplash.com/photo-1592198084033-aade902d1aae?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    ]
  },
  "4": {
    id: "4",
    name: "Lamborghini Huracán",
    price: "€280,000",
    rentPrice: "€1,500/day",
    description: "The Lamborghini Huracán perfectly balances aggressive performance with everyday usability, featuring a naturally aspirated V10 engine.",
    specs: {
      engine: "5.2L V10",
      power: "631 hp",
      acceleration: "0-60 mph in 2.9 seconds",
      transmission: "7-speed dual-clutch",
      drivetrain: "All-wheel drive",
      interior: "Alcantara and leather with hexagonal design elements"
    },
    images: [
      "https://images.unsplash.com/photo-1566473965997-3de9c817e938?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    ]
  },
  "5": {
    id: "5",
    name: "Mercedes-AMG F1 W12",
    price: "On Request",
    rentPrice: "On Request",
    description: "The Mercedes-AMG F1 W12 E Performance is the pinnacle of Formula 1 engineering, featuring advanced aerodynamics and hybrid power unit.",
    specs: {
      engine: "1.6L V6 Turbo-Hybrid",
      power: "1000+ hp",
      acceleration: "0-60 mph in 2.6 seconds",
      transmission: "8-speed semi-automatic",
      drivetrain: "Rear-wheel drive",
      interior: "Carbon fiber monocoque"
    },
    images: [
      "https://images.unsplash.com/photo-1515036551567-bf1198cccc35?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    ]
  },
  "6": {
    id: "6",
    name: "Mercedes-Benz 300SL Gullwing",
    price: "€1,800,000",
    rentPrice: "€5,000/day",
    description: "The legendary Mercedes-Benz 300SL Gullwing is one of the most iconic cars ever produced, featuring distinctive gullwing doors and groundbreaking engineering for its time.",
    specs: {
      engine: "3.0L Inline-6",
      power: "215 hp",
      acceleration: "0-60 mph in 8.8 seconds",
      transmission: "4-speed manual",
      drivetrain: "Rear-wheel drive",
      interior: "Classic leather with period-correct details"
    },
    images: [
      "https://images.unsplash.com/photo-1566024287286-457247b70310?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    ]
  },
  "7": {
    id: "7",
    name: "Ducati Panigale V4",
    price: "€28,000",
    rentPrice: "€200/day",
    description: "The Ducati Panigale V4 represents the pinnacle of Ducati's engineering excellence, bringing MotoGP technology to the road.",
    specs: {
      engine: "1,103cc V4",
      power: "214 hp",
      acceleration: "0-60 mph in 2.8 seconds",
      transmission: "6-speed",
      drivetrain: "Chain drive",
      interior: "Racing-inspired cockpit"
    },
    images: [
      "https://images.unsplash.com/photo-1558981806-ec527fa84c39?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    ]
  },
  "8": {
    id: "8",
    name: "Gulfstream G650",
    price: "€54,500,000",
    rentPrice: "€15,000/day",
    description: "The Gulfstream G650 sets the standard for performance and luxury in business aviation, offering exceptional range and comfort.",
    specs: {
      engine: "Twin Rolls-Royce BR725",
      power: "16,900 lbf each",
      acceleration: "N/A",
      transmission: "N/A",
      drivetrain: "N/A",
      interior: "Custom luxury cabin with multiple living areas"
    },
    images: [
      "https://images.unsplash.com/photo-1540962351504-03099e0a754b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    ]
  }
}

export function generateStaticParams() {
  return Object.keys(vehicleData).map((id) => ({
    id,
  }))
}

export default function VehiclePage({ params }: { params: { id: string } }) {
  const vehicle = vehicleData[params.id as keyof typeof vehicleData]
  
  if (!vehicle) {
    notFound()
  }

  return <VehicleContent vehicle={vehicle} />
}