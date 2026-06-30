import gallery1 from './assets/gallery-1.png';
import gallery2 from './assets/gallery-2.png';
import gallery3 from './assets/gallery-3.png';
import sushi1 from './assets/sushi1.jpg';
import sushi2 from './assets/sushi2.jpg';
import sushi3 from './assets/sushi3.jpg';
import rice1 from './assets/rice1.jpg';
import rice2 from './assets/rice2.jpg';
import rice3 from './assets/rice3.jpg';

export type Tag = 'BEST SELLER' | "CHEF'S PICK" | 'SPICY' | 'NEW';

export interface MenuItem {
  src: string;
  label: string;
  description?: string;
  tag?: Tag;
}

export interface MenuSection {
  title: string;
  items: MenuItem[];
}

export const menu: MenuSection[] = [
  {
    title: 'Ramen',
    items: [
      {
        src: gallery3,
        label: 'Tonkotsu (Black & Red)',
        description: 'Spicy tonkotsu finished with black garlic and spicy oil.',
        tag: 'BEST SELLER',
      },
      {
        src: gallery1,
        label: 'Naruto Miso Tonkotsu',
        description: 'Tonkotsu pork broth ramen seasoned with light miso.',
        tag: "CHEF'S PICK",
      },
      {
        src: gallery2,
        label: 'Curry Tonkotsu',
        description: 'Curry flavored tonkotsu ramen.',
      },
      {
        src: gallery3,
        label: 'Chicken Paitan',
        description: 'Silky style chicken broth ramen.',
      },
      {
        src: gallery2,
        label: 'Chicken Paitan (Black & Red)',
        description: 'Finished with black garlic and spicy oil.',
        tag: 'SPICY',
      },
      {
        src: gallery3,
        label: 'Classic Shoyu',
        description: 'Traditional soy sauce ramen.',
      },
      {
        src: gallery1,
        label: 'Miso Ramen',
      },
      {
        src: gallery2,
        label: 'Spicy Miso Ramen',
        tag: 'SPICY',
      },
      {
        src: gallery3,
        label: 'Ginger Miso Ramen',
      },
      {
        src: gallery1,
        label: 'Veggie Shio Ramen',
        description: 'Light and delicate vegetable broth ramen.',
      },
      {
        src: gallery2,
        label: 'Curry Veggie Shio',
        description: 'Vegetable shio ramen seasoned with Japanese curry powder.',
      },
      {
        src: gallery3,
        label: 'Yuzu Veggie Shio',
        description: 'Vegetable shio ramen with a hint of yuzu kosho.',
      },
      {
        src: gallery1,
        label: 'Sesame Shio Ramen',
      },
      {
        src: gallery2,
        label: 'Spicy Sesame Shio Ramen',
        tag: 'SPICY',
      },
      {
        src: gallery3,
        label: 'Creamy Veggie Ramen',
        description: 'Tonkotsu-style veggie broth ramen with a touch of soy milk.',
        tag: 'NEW',
      },
      {
        src: gallery1,
        label: 'Curry Creamy Veggie Ramen',
        description: 'Creamy veggie ramen with rich curry flavor.',
      },
    ],
  },
  {
    title: 'Sushi / Sashimi',
    items: [
      {
        src: sushi1,
        label: 'Salmon Nigiri',
        tag: 'BEST SELLER',
      },
      {
        src: sushi2,
        label: 'Tuna Nigiri',
      },
      {
        src: sushi3,
        label: 'Yellowtail Nigiri',
      },
      {
        src: sushi1,
        label: 'Eel Nigiri',
        tag: "CHEF'S PICK",
      },
      {
        src: sushi2,
        label: 'Salmon Sashimi',
      },
      {
        src: sushi3,
        label: 'Tuna Sashimi',
      },
      {
        src: sushi1,
        label: 'Yellowtail Sashimi',
      },
      {
        src: sushi2,
        label: 'California Roll',
        tag: 'BEST SELLER',
      },
      {
        src: sushi3,
        label: 'Spicy Tuna Roll',
        tag: 'SPICY',
      },
      {
        src: sushi1,
        label: 'Salmon Avocado Roll',
      },
      {
        src: sushi2,
        label: 'Philadelphia Roll',
      },
      {
        src: sushi3,
        label: 'Shrimp Tempura Roll',
      },
    ],
  },
  {
    title: 'Rice Bowls',
    items: [
      {
        src: rice1,
        label: 'Chicken Teriyaki Bowl',
        tag: 'BEST SELLER',
      },
      {
        src: rice2,
        label: 'Beef Teriyaki Bowl',
      },
      {
        src: rice3,
        label: 'Pork Chashu Bowl',
        tag: "CHEF'S PICK",
      },
      {
        src: rice1,
        label: 'Curry Rice Bowl',
      },
      {
        src: rice2,
        label: 'Chicken Katsu Curry',
      },
      {
        src: rice3,
        label: 'Unagi Don',
      },
    ],
  },
];