import { CategoryContent } from "./category-content"

const categoryData = {
  luxury: {
    title: "Luxury Cars",
    description: "Experience unparalleled comfort and sophistication with our premium luxury vehicles.",
    vehicles: [
      {
        id: 1,
        name: "Rolls-Royce Phantom",
        price: "€450,000",
        image: "https://images.unsplash.com/photo-1563720223185-11003d516935?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      },
      {
        id: 2,
        name: "Bentley Flying Spur",
        price: "€320,000",
        image: "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      },
      {
        id: 9,
        name: "Maybach S-Class",
        price: "€380,000",
        image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      },
    ]
  },
  sports: {
    title: "Sports Cars",
    description: "Discover our collection of high-performance sports cars built for the ultimate driving experience.",
    vehicles: [
      {
        id: 3,
        name: "Ferrari SF90 Stradale",
        price: "€500,000",
        image: "https://images.unsplash.com/photo-1592198084033-aade902d1aae?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      },
      {
        id: 4,
        name: "Lamborghini Huracán",
        price: "€280,000",
        image: "https://images.unsplash.com/photo-1566473965997-3de9c817e938?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      },
      {
        id: 10,
        name: "McLaren 720S",
        price: "€315,000",
        image: "https://images.unsplash.com/photo-1621202432974-5e3aac3f5f10?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      },
    ]
  },
  "formula-one": {
    title: "Formula 1",
    description: "Experience the pinnacle of motorsport engineering with our exclusive Formula 1 collection.",
    vehicles: [
      {
        id: 5,
        name: "Mercedes-AMG F1 W12",
        price: "On Request",
        image: "https://images.unsplash.com/photo-1515036551567-bf1198cccc35?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      },
      {
        id: 11,
        name: "Red Bull RB16B",
        price: "On Request",
        image: "https://images.unsplash.com/photo-1514063364521-a61a3cf3a2de?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      }
    ]
  },
  classic: {
    title: "Classic Collection",
    description: "Timeless automotive masterpieces that represent the golden age of motoring.",
    vehicles: [
      {
        id: 6,
        name: "Mercedes-Benz 300SL Gullwing",
        price: "€1,800,000",
        image: "https://images.unsplash.com/photo-1566024287286-457247b70310?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      },
      {
        id: 12,
        name: "Ferrari 250 GTO",
        price: "€45,000,000",
        image: "https://images.unsplash.com/photo-1612911912304-5c585d289294?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      }
    ]
  },
  motorcycles: {
    title: "Motorcycles",
    description: "Premium two-wheel excellence for the distinguished rider.",
    vehicles: [
      {
        id: 7,
        name: "Ducati Panigale V4",
        price: "€28,000",
        image: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      },
      {
        id: 13,
        name: "BMW M 1000 RR",
        price: "€32,000",
        image: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      },
      {
        id: 14,
        name: "MV Agusta F4",
        price: "€25,000",
        image: "https://images.unsplash.com/photo-1609630875289-22852fa678ce?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      }
    ]
  },
  aviation: {
    title: "Aviation",
    description: "Luxury takes flight with our exclusive collection of private aircraft.",
    vehicles: [
      {
        id: 8,
        name: "Gulfstream G650",
        price: "€54,500,000",
        image: "https://images.unsplash.com/photo-1540962351504-03099e0a754b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      },
      {
        id: 15,
        name: "Bombardier Global 7500",
        price: "€72,000,000",
        image: "https://images.unsplash.com/photo-1474302770737-173ee21bab63?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      },
      {
        id: 16,
        name: "Embraer Praetor 600",
        price: "€21,000,000",
        image: "https://images.unsplash.com/photo-1559686043-e65d6d6c0e3b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      }
    ]
  }
}

export function generateStaticParams() {
  return Object.keys(categoryData).map((category) => ({
    category,
  }))
}

export default function CategoryPage({ params }: { params: { category: string } }) {
  const data = categoryData[params.category as keyof typeof categoryData] || {
    title: "Category Not Found",
    description: "This category does not exist.",
    vehicles: []
  }

  return <CategoryContent data={data} />
}