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

export interface MenuSubsection {
  title: string;
  items: MenuItem[];
}

export interface MenuSection {
  title: string;
  items?: MenuItem[];
  subsections?: MenuSubsection[];
}

export const menu: MenuSection[] = [
  {
    title: 'Ramen',
    subsections: [
      {
        title: 'Pork Broth',
        items: [
          {
            src: gallery1,
            label: 'Tonkotsu Original',
            description: 'Hakata style pork broth, Salt or Soy Sauce base, straight noodles.',
          },
          {
            src: gallery2,
            label: 'Tonkotsu Black',
            description: 'Hakata style pork broth with black garlic oil, giving it a subtle touch of bitterness.',
          },
          {
            src: gallery3,
            label: 'Tonkotsu Red',
            description: 'Wavy noodles with spicy paste, finished with a drizzle of spicy oil.',
            tag: 'SPICY',
          },
          {
            src: gallery1,
            label: 'Tonkotsu Black & Red',
            description: 'Wavy noodles made special with black garlic oil and spicy oil.',
            tag: 'BEST SELLER',
          },
          {
            src: gallery2,
            label: 'Curry Tonkotsu',
            description: 'Curry flavored tonkotsu ramen, wavy noodles.',
          },
          {
            src: gallery3,
            label: 'Tokyo Tonkotsu',
            description: 'Gyofun infused tonkotsu ramen, wavy noodles.',
          },
          {
            src: gallery1,
            label: 'Naruto Miso Tonkotsu',
            description:
              'Custom blend of miso and shoyu pork broth with Pork Chashu, Bamboo, Naruto, Egg, Green Onion and Nori Seaweed.',
            tag: "CHEF'S PICK",
          },
        ],
      },
      {
        title: 'Chicken Broth',
        items: [
          {
            src: gallery2,
            label: 'Paitan Original',
            description: 'Silky style chicken broth, Salt or Soy Sauce base, straight noodles.',
          },
          {
            src: gallery3,
            label: 'Paitan Black',
            description: 'Silky chicken broth with black garlic oil, giving it a subtle touch of bitterness.',
          },
          {
            src: gallery1,
            label: 'Paitan Red',
            description: 'Wavy noodles with spicy paste, finished with a drizzle of spicy oil.',
            tag: 'SPICY',
          },
          {
            src: gallery2,
            label: 'Paitan Black & Red',
            description: 'Wavy noodles made special with black garlic oil and spicy oil.',
          },
          {
            src: gallery3,
            label: 'Creamy Shio Paitan',
            description: 'Creamy salt base chicken ramen, wavy noodles.',
          },
          {
            src: gallery1,
            label: 'Shio',
            description: 'Salt base clear chicken broth, wavy noodles.',
          },
          {
            src: gallery2,
            label: 'Shoyu',
            description: 'Soy sauce base clear chicken broth, wavy noodles.',
          },
          {
            src: gallery3,
            label: 'Spicy Shoyu',
            description: 'Spicy soy sauce base clear chicken broth, wavy noodles.',
            tag: 'SPICY',
          },
        ],
      },
      {
        title: 'Vegetable Broth',
        items: [
          {
            src: gallery1,
            label: 'Veggie Shio',
            description:
              'Light and delicate vegetable broth made from vegetables, shiitake and seaweed, with Tofu, Egg, Bean Sprouts, Green Onion, Kikurage and Corn. Available with Yuzu or Curry.',
          },
          {
            src: gallery2,
            label: 'Creamy Veggie',
            description: 'Tonkotsu style vegetable broth ramen made with soy milk, straight noodles.',
          },
          {
            src: gallery3,
            label: 'Curry Creamy Veggie',
            description: 'Creamy vegetable broth ramen with rich curry flavor, straight noodles.',
            tag: 'NEW',
          },
          {
            src: gallery1,
            label: 'Spicy Miso Ramen',
            description:
              'Choose your broth (Chicken, Pork or Vegetable) and protein (Pork, Chicken or Tofu), with Egg, Bean Sprouts, Corn and Green Onion. Wavy noodles.',
            tag: 'SPICY',
          },
          {
            src: gallery2,
            label: 'Ginger Miso Ramen',
            description: 'Build-your-own broth and protein, served with Egg, Bean Sprouts, Corn and Green Onion.',
          },
          {
            src: gallery3,
            label: 'Miso Ramen',
            description: 'Build-your-own broth and protein, served with Egg, Bean Sprouts, Corn and Green Onion.',
          },
          {
            src: gallery1,
            label: 'Sesame Shio',
            description: 'Wavy noodles in a build-your-own sesame shio broth.',
          },
          {
            src: gallery2,
            label: 'Spicy Sesame Shio',
            description: 'Wavy noodles in a build-your-own spicy sesame shio broth.',
            tag: 'SPICY',
          },
        ],
      },
    ],
  },

  {
    title: 'Poke Donburi',
    items: [
      {
        src: rice1,
        label: 'Fried Tofu Bowl',
        description:
          'Crispy fried tofu over romaine, cucumber, carrot, cilantro and fried onion. Choose your base (rice, salad, or half & half) and sauce (poke, spicy gochujang, sweet chili, or garlic soy).',
      },
      {
        src: rice2,
        label: 'Portobello Kara-age Bowl',
        description: 'Fried portobello mushroom with romaine, cucumber, carrot, cilantro and fried onion.',
      },
      {
        src: rice3,
        label: 'Pulled Chicken Bowl',
        description: 'Dark meat pulled chicken with romaine, cucumber, carrot, cilantro and fried onion.',
      },
      {
        src: rice1,
        label: 'Fried Shrimp Bowl',
        description: 'Crispy fried shrimp with romaine, cucumber, carrot, cilantro and fried onion.',
      },
      {
        src: rice2,
        label: 'Spicy Fried Shrimp Bowl',
        description: 'Crispy fried shrimp tossed in spicy sauce, with romaine, cucumber, carrot and fried onion.',
        tag: 'SPICY',
      },
      {
        src: rice3,
        label: 'Tonkatsu Bowl',
        description: 'Crispy pork tonkatsu with romaine, cucumber, carrot, cilantro and fried onion.',
      },
      {
        src: rice1,
        label: 'Salmon Poke',
        description:
          'Fresh salmon with avocado, mango and cucumber. Choose your base (rice, salad, half & half, or kale noodle) and sauce (poke, lite wasabi, spicy chili, or soy sesame).',
      },
      {
        src: rice2,
        label: 'Tuna Poke',
        description: 'Fresh tuna with avocado, mango and cucumber, served with your choice of base and sauce.',
      },
      {
        src: rice3,
        label: 'Tuna/Salmon Mix Poke',
        description: 'A mix of fresh tuna and salmon with avocado, mango and cucumber.',
      },
      {
        src: rice1,
        label: 'Tuna/Spicy Tuna Poke',
        description: 'Fresh tuna and spicy tuna with avocado, mango and cucumber.',
        tag: 'SPICY',
      },
    ],
  },

  {
    title: 'Rice Dishes',
    items: [
      {
        src: rice1,
        label: 'Steamed Rice',
        description: 'A simple bowl of steamed white rice.',
      },
      {
        src: rice2,
        label: 'Veggie Curry Rice',
        description: 'Japanese style vegetable curry sauce over rice, regular or spicy.',
      },
      {
        src: rice3,
        label: 'Beef Donburi',
        description: 'Sukiyaki style beef over rice, topped with green onions.',
        tag: 'BEST SELLER',
      },
      {
        src: rice1,
        label: 'Unagi Donburi',
        description: 'Roasted eel over rice, served with miso soup.',
        tag: "CHEF'S PICK",
      },
      {
        src: rice2,
        label: 'Pork Donburi - Garlic Soy',
        description: 'Thin sliced pork over rice in garlic soy sauce, topped with green onions.',
      },
      {
        src: rice3,
        label: 'Pork Donburi - Spicy Teriyaki',
        description: 'Thin sliced pork over rice in spicy teriyaki sauce, topped with green onions.',
        tag: 'SPICY',
      },
    ],
  },
  {
    title: 'Sushi/Sashimi',
    subsections: [
      {
        title: 'Sushi Rolls',
        items: [
          {
            src: sushi3,
            label: 'Avocado Roll',
            description: 'Classic avocado roll.',
          },
          {
            src: sushi1,
            label: 'Cucumber Roll',
            description: 'Classic cucumber roll.',
          },
          {
            src: sushi2,
            label: 'Sweet Potato Roll',
            description: 'Crunchy sweet potato flakes topped with sushi sauce.',
          },
          {
            src: sushi3,
            label: 'Green Beans Roll',
            description: 'Green bean and cucumber roll.',
          },
          {
            src: sushi1,
            label: 'Spicy Green Beans Roll',
            description: 'Green bean and cucumber roll with a spicy kick.',
            tag: 'SPICY',
          },
          {
            src: sushi2,
            label: 'Vegan Spam Roll',
            description: 'Vegan spam roll.',
          },
          {
            src: sushi3,
            label: 'California Roll',
            description: 'Imitation crab and avocado',
            tag: 'BEST SELLER',
          },
          {
            src: sushi1,
            label: 'Spicy California Roll',
            description: 'Our California roll with a spicy finish.',
            tag: 'SPICY',
          },
          {
            src: sushi2,
            label: 'Philadelphia Roll',
            description: 'Smoked salmon and cream cheese.',
          },
          {
            src: sushi3,
            label: 'Fried Philadelphia Roll',
            description: 'Our Philadelphia roll, tempura fried.',
          },
          {
            src: sushi1,
            label: 'Tekka-Maki',
            description: 'Classic tuna roll.',
          },
          {
            src: sushi2,
            label: 'Tuna Avocado Roll',
            description: 'Tuna and avocado.',
          },
          {
            src: sushi3,
            label: 'Spicy Tuna Roll',
            description: 'Spicy tuna and cucumber.',
            tag: 'SPICY',
          },
          {
            src: sushi1,
            label: 'Fried Spicy Tuna',
            description: 'Spicy tuna and cream cheese, tempura fried.',
            tag: 'SPICY',
          },
          {
            src: sushi2,
            label: 'Sake-Maki',
            description: 'Classic salmon roll.',
          },
          {
            src: sushi3,
            label: 'Salmon Avocado Roll',
            description: 'Salmon and avocado.',
          },
          {
            src: sushi1,
            label: 'Spicy Salmon Roll',
            description: 'Spicy salmon and cucumber.',
            tag: 'SPICY',
          },
          {
            src: sushi2,
            label: 'Shrimp/Cream Cheese Roll',
            description: 'Shrimp and cream cheese, finished with eel sauce.',
          },
          {
            src: sushi3,
            label: 'Shrimp Crab Roll',
            description: 'Shrimp and crab mix.',
          },
          {
            src: sushi1,
            label: 'Spicy Shrimp Crab Roll',
            description: 'Shrimp and spicy crab mix.',
            tag: 'SPICY',
          },
          {
            src: sushi2,
            label: 'Tempura Shrimp Roll',
            description: 'Shrimp, crab mix and avocado, tempura battered.',
          },
          {
            src: sushi3,
            label: 'Red Dragon Roll',
            description:
              'Fried roll with imitation crabmeat and cream cheese, topped with kara-age shrimp and crab meat, finished with eel sauce.',
            tag: "CHEF'S PICK",
          },
        ],
      },
      {
        title: 'Sashimi',
        items: [
          {
            src: sushi1,
            label: 'Salmon Sashimi',
            description: 'Fresh raw salmon, served 3 or 5 pieces.',
          },
          {
            src: sushi2,
            label: 'Tuna Sashimi',
            description: 'Fresh raw tuna, served 3 or 5 pieces.',
          },
        ],
      },
      {
        title: 'Sashimi Donburi',
        items: [
          {
            src: sushi1,
            label: 'Salmon Sashimi Donburi',
            description: '5 pieces of fresh salmon sashimi over rice.',
          },
          {
            src: sushi2,
            label: 'Tuna Sashimi Donburi',
            description: '5 pieces of fresh tuna sashimi over rice.',
          },
        ],
      },
    ],
  },
  {
    title: 'Salad / Soup',
    items: [
      {
        src: gallery1,
        label: 'Seaweed Salad',
        description: 'Marinated seaweed salad.',
      },
      {
        src: gallery2,
        label: 'Avocado Salad',
        description:
          'Fresh avocado with sesame, carrot ginger, Japanese wasabi, or yumyum sauce.',
      },
      {
        src: gallery3,
        label: 'House Salad',
        description:
          'Fresh greens with sesame, carrot ginger, Japanese wasabi, or yumyum sauce.',
      },
      {
        src: gallery1,
        label: 'Miso Soup',
        description: 'Vegan miso soup served with wakame seaweed, tofu and green onion.',
      },
    ],
  },

  {
    title: 'Desserts',
    items: [
      {
        src: gallery2,
        label: 'Taiyaki Ice Cream Sandwich',
        description:
          'Fish-shaped waffle sandwich available in Brown Sugar, Chocolate, Red Bean or Strawberry.',
        tag: 'BEST SELLER',
      },
      {
        src: gallery3,
        label: 'Mochi Ice Cream',
        description:
          'Soft mochi filled with ice cream, 1 piece. Matcha Green Tea, Strawberry, Mango (vf), or PassionFruit (vf).',
      },
    ],
  },

  {
    title: 'Drinks',
    items: [
      {
        src: gallery1,
        label: 'Soda',
        description: 'Coke, Coke Zero, Sprite, or Ginger Ale, in can or unsweetened cup.',
      },
      {
        src: gallery2,
        label: 'Ramune Marble Soda',
        description: 'Original, Strawberry, Melon, Grape, Peach or Lychee.',
      },
      {
        src: gallery3,
        label: 'Iced Green Tea',
        description: 'By Ito En, unsweetened, served in a can.',
      },
      {
        src: gallery1,
        label: 'Hot Tea',
        description:
          'Choose from Black, Ginger Peach, White - Honey Mango, Organic Dancing Leaves, Herbal - Chamomile Lemon, Oolong, or Peach Blossom.',
      },
      {
        src: gallery2,
        label: 'Milk Tea',
        description: 'By Royal Mill, served in a can.',
      },
      {
        src: gallery3,
        label: 'Calpico',
        description: 'Japanese milky drink, served in a can.',
      },
      {
        src: gallery1,
        label: 'Creamy Soda',
        description: '16.5oz bottle, Mango or Melon.',
      },
      {
        src: gallery2,
        label: 'Guinness Blonde',
        description: '5% ABV draft beer.',
      },
      {
        src: gallery3,
        label: 'Yuengling',
        description: '4.4% ABV draft beer.',
      },
      {
        src: gallery1,
        label: 'Bloodline',
        description: 'Blood Orange IPA, 7%.',
        tag: 'SPICY',
      },
      {
        src: gallery2,
        label: 'Double Dog',
        description: 'Double IPA, 11.5%.',
      },
      {
        src: gallery3,
        label: 'Raging Bitch',
        description: 'Belgian IPA, 8.3%.',
      },
      {
        src: gallery1,
        label: 'Voodoo Ranger',
        description: 'Imperial IPA, 9%.',
      },
      {
        src: gallery2,
        label: 'Asahi',
        description: 'Japanese lager, 5%, available in 12oz/21oz or 5oz cup.',
      },
      {
        src: gallery3,
        label: 'Kirin Ichiban',
        description: 'Japanese lager, 5%, available in 12oz/25oz or 5oz cup.',
      },
      {
        src: gallery1,
        label: 'Sapporo Light',
        description: '3.9% ABV, 12oz.',
      },
      {
        src: gallery2,
        label: 'Sapporo',
        description: '5% ABV, available in 12oz/22oz or 5oz cup.',
      },
      {
        src: gallery3,
        label: 'Sapporo Black',
        description: '5% ABV, 22oz.',
      },
      {
        src: gallery1,
        label: 'Orion Draft Beer',
        description: '5% ABV, 350ml.',
      },
      {
        src: gallery2,
        label: 'Echigo',
        description: 'Rice lager, 5%, 350ml.',
      },
      {
        src: gallery3,
        label: 'JPOP',
        description: '6.5% ABV sake cooler, Peach or Grapefruit/Lychee, 355ml.',
      },
      {
        src: gallery1,
        label: 'Chum Churum Soju',
        description: '14% ABV, Original (16.5%), Apple, Peach or Strawberry (12%), 375ml.',
      },
      {
        src: gallery2,
        label: 'House Sake (hot or cold)',
        description: 'Available in 4oz or 10oz pours.',
      },
      {
        src: gallery3,
        label: "Sho Chiku Bai 'Silky'",
        description: 'Bold and textured, sweet, fruity, and creamy. 375ml.',
      },
      {
        src: gallery1,
        label: "Hakushika 'Snow Beauty'",
        description: 'Non-filtered sake with rice flavor and mellow finish. 300ml.',
      },
      {
        src: gallery2,
        label: "Funaguchi 'Gold'",
        description: 'Rich, dense sake with a hint of sweetness. 200ml.',
      },
      {
        src: gallery3,
        label: 'Dassai 45',
        description:
          'A prize-winning sake with graceful aroma and well-rounded flavor. 300ml.',
      },
      {
        src: gallery1,
        label: "Otokoyama 'Man's Mountain'",
        description: 'Earthy yet sweet aromatic nose with ripe fruit notes. 300ml.',
      },
      {
        src: gallery2,
        label: "Wakatake Onikoroshi 'Demon Slayer Red'",
        description:
          'Berry and green plum notes with cinnamon and steamed rice elements. 300ml.',
      },
      {
        src: gallery3,
        label: 'Choyu Umeshu Plum Sake',
        description: 'Classic Japanese plum wine, 50ml.',
      },
      {
        src: gallery1,
        label: 'Sparkling Plum Sake',
        description:
          'Sparkling wine + tart ume with citrus and white peach notes. 187ml.',
        tag: 'NEW',
      },
      {
        src: gallery2,
        label: 'Sawa Sawa Sparkling Sake',
        description: 'Sparkling Junmai Nigori-sake with sweet finish. 250ml.',
      },
      {
        src: gallery3,
        label: 'Mio Sparkling Sake',
        description: 'Refreshing fruity sparkling sake with sweet aroma. 300ml.',
      },
    ],
  },
];