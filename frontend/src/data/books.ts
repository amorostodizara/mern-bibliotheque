export interface Book {
  id: string;
  title: string;
  author: string;
  cover: string;
  genre: string;
  rating: number;
  year: number;
  description: string;
  pages: number;
  isFavorite?: boolean;
}

export const genres = ["Tous", "Roman", "Science-Fiction", "Fantasy", "Thriller", "Poésie", "Philosophie", "Histoire", "Développement Personnel"];

export const books: Book[] = [
  {
    id: "1",
    title: "Les Misérables",
    author: "Victor Hugo",
    cover: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=300&h=400&fit=crop",
    genre: "Roman",
    rating: 4.8,
    year: 1862,
    description: "Un chef-d'œuvre de la littérature française qui suit le parcours de Jean Valjean à travers la France du XIXe siècle.",
    pages: 1488,
  },
  {
    id: "2",
    title: "Dune",
    author: "Frank Herbert",
    cover: "https://images.unsplash.com/photo-1531988042231-d39a9cc12a9a?w=300&h=400&fit=crop",
    genre: "Science-Fiction",
    rating: 4.7,
    year: 1965,
    description: "Une épopée de science-fiction se déroulant sur la planète désertique Arrakis.",
    pages: 688,
  },
  {
    id: "3",
    title: "Le Petit Prince",
    author: "Antoine de Saint-Exupéry",
    cover: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=300&h=400&fit=crop",
    genre: "Philosophie",
    rating: 4.9,
    year: 1943,
    description: "Un conte philosophique et poétique sous l'apparence d'un conte pour enfants.",
    pages: 96,
  },
  {
    id: "4",
    title: "Le Seigneur des Anneaux",
    author: "J.R.R. Tolkien",
    cover: "https://images.unsplash.com/photo-1621351183012-e2f9972dd9bf?w=300&h=400&fit=crop",
    genre: "Fantasy",
    rating: 4.9,
    year: 1954,
    description: "L'épopée fantastique la plus célèbre, suivant la quête de Frodon pour détruire l'Anneau Unique.",
    pages: 1178,
  },
  {
    id: "5",
    title: "L'Étranger",
    author: "Albert Camus",
    cover: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=300&h=400&fit=crop",
    genre: "Roman",
    rating: 4.5,
    year: 1942,
    description: "Le récit d'un homme confronté à l'absurdité de l'existence.",
    pages: 159,
  },
  {
    id: "6",
    title: "Fondation",
    author: "Isaac Asimov",
    cover: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=300&h=400&fit=crop",
    genre: "Science-Fiction",
    rating: 4.6,
    year: 1951,
    description: "La saga épique d'Hari Seldon et de la Fondation pour préserver la civilisation galactique.",
    pages: 244,
  },
  {
    id: "7",
    title: "Les Fleurs du Mal",
    author: "Charles Baudelaire",
    cover: "https://images.unsplash.com/photo-1476275466078-4007374efbbe?w=300&h=400&fit=crop",
    genre: "Poésie",
    rating: 4.7,
    year: 1857,
    description: "Le recueil de poèmes le plus célèbre de la littérature française.",
    pages: 252,
  },
  {
    id: "8",
    title: "Da Vinci Code",
    author: "Dan Brown",
    cover: "https://images.unsplash.com/photo-1589998059171-988d887df646?w=300&h=400&fit=crop",
    genre: "Thriller",
    rating: 4.2,
    year: 2003,
    description: "Un thriller haletant mêlant art, religion et symboles secrets.",
    pages: 689,
  },
  {
    id: "9",
    title: "Méditations",
    author: "Marc Aurèle",
    cover: "https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?w=300&h=400&fit=crop",
    genre: "Philosophie",
    rating: 4.6,
    year: 180,
    description: "Les réflexions intimes de l'empereur philosophe sur la vie et la vertu.",
    pages: 254,
  },
  {
    id: "10",
    title: "Atomic Habits",
    author: "James Clear",
    cover: "https://images.unsplash.com/photo-1535398089889-dd807df1dfaa?w=300&h=400&fit=crop",
    genre: "Développement Personnel",
    rating: 4.8,
    year: 2018,
    description: "Un guide pratique pour créer de bonnes habitudes et en éliminer les mauvaises.",
    pages: 320,
  },
  {
    id: "11",
    title: "Sapiens",
    author: "Yuval Noah Harari",
    cover: "https://images.unsplash.com/photo-1524578271613-d550eacf6090?w=300&h=400&fit=crop",
    genre: "Histoire",
    rating: 4.7,
    year: 2011,
    description: "Une brève histoire de l'humanité, des premiers hommes à nos jours.",
    pages: 443,
  },
  {
    id: "12",
    title: "1984",
    author: "George Orwell",
    cover: "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=300&h=400&fit=crop",
    genre: "Science-Fiction",
    rating: 4.8,
    year: 1949,
    description: "Un roman dystopique sur un régime totalitaire qui contrôle chaque aspect de la vie.",
    pages: 328,
  },
];
