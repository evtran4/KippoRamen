import gallery1 from './assets/gallery-1.png';
import gallery2 from './assets/gallery-2.png';
import gallery3 from './assets/gallery-3.png';
import sushi1 from './assets/sushi1.jpg'
import sushi2 from './assets/sushi2.jpg'
import sushi3 from './assets/sushi3.jpg'
import rice1 from './assets/rice1.jpg'
import rice2 from './assets/rice2.jpg'
import rice3 from './assets/rice3.jpg'

export const menu = [
  {
    title: 'Ramen',
    items: [
      {
        src: gallery3,
        label: 'Tonkotsu (Black & Red)',
        description: 'Spicy tonkotsu finished with black garlic and spicy oil.',
      },
      {
        src: gallery1,
        label: 'Naruto Miso Tonkotsu',
        description: 'Tonkotsu pork broth ramen seasoned with light miso.',
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
      },
      {
        src: gallery3,
        label: 'Classic Shoyu',
        description: 'Traditional soy sauce ramen.',
      },
      { src: gallery1, label: 'Miso Ramen' },
      { src: gallery2, label: 'Spicy Miso Ramen' },
      { src: gallery3, label: 'Ginger Miso Ramen' },
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
      { src: gallery1, label: 'Sesame Shio Ramen' },
      { src: gallery2, label: 'Spicy Sesame Shio Ramen' },
      {
        src: gallery3,
        label: 'Creamy Veggie Ramen',
        description: 'Tonkotsu-style veggie broth ramen with a touch of soy milk.',
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
      { src: sushi1, label: 'Salmon Nigiri' },
      { src: sushi2, label: 'Tuna Nigiri' },
      { src: sushi3, label: 'Yellowtail Nigiri' },
      { src: sushi1, label: 'Eel Nigiri' },
      { src: sushi2, label: 'Salmon Sashimi' },
      { src: sushi3, label: 'Tuna Sashimi' },
      { src: sushi1, label: 'Yellowtail Sashimi' },
      { src: sushi2, label: 'California Roll' },
      { src: sushi3, label: 'Spicy Tuna Roll' },
      { src: sushi1, label: 'Salmon Avocado Roll' },
      { src: sushi2, label: 'Philadelphia Roll' },
      { src: sushi3, label: 'Shrimp Tempura Roll' },
    ],
  },
    {
    title: 'Rice Bowls',
    items: [
      { src: rice1, label: 'Chicken Teriyaki Bowl' },
      { src: rice2, label: 'Beef Teriyaki Bowl' },
      { src: rice3, label: 'Pork Chashu Bowl' },
      { src: rice1, label: 'Curry Rice Bowl' },
      { src: rice2, label: 'Chicken Katsu Curry' },
      { src: rice3, label: 'Unagi Don' },
    ],
  }
];

/**
 *   {
    title: 'Sides',
    items: [
      { src: gallery2, label: 'Gyoza' },
      { src: gallery3, label: 'Takoyaki' },
      { src: gallery1, label: 'Chicken Karaage' },
      { src: gallery2, label: 'Edamame' },
      { src: gallery3, label: 'Seaweed Salad' },
      { src: gallery1, label: 'House Salad' },
      { src: gallery2, label: 'Agedashi Tofu' },
      { src: gallery3, label: 'French Fries' },
    ],
  }
 */