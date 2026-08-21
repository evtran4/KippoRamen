export type Tag = 'VEGETARIAN' | 'SPICY' | 'MUST TRY';

export interface MenuItem {
  label: string;
  description?: string;
  tag?: Tag;
}

export interface MenuSubsection {
  title: string;
  description?: string;
  items: MenuItem[];
}

export interface MenuSection {
  title: string;
  description?: string;
  items?: MenuItem[];
  subsections?: MenuSubsection[];
}

export const menu: MenuSection[] = [
  {
    title: 'Pork Broth',
    subsections: [
      {
        title: 'Tonkotsu',
        description:
          'Hakata-style pork bone broth. Choose between a salt base or soy sauce base with fried garlic. Comes with pork chashu, bean sprouts, kikurage mushrooms, green onion, and half nitamago egg.',
        items: [
          {
            label: 'Original',
            description: 'Hakata-style pork bone broth.',
          },
          {
            label: 'Black',
            description:
              'Drizzle of smoky, savory black garlic oil.',
          },
          {
            label: 'Red',
            description:
              'Seasoned with spicy paste and a drizzle of spicy oil.',
            tag: 'SPICY',
          },
          {
            label: 'Black & Red',
            description: 'Black garlic oil and spicy oil.',
            tag: 'MUST TRY',
          },
          {
            label: 'Tokyo Tonkotsu',
            description:
              'Gyofun-infused ramen with Japanese fish powder, smoky and umami.',
          },
          {
            label: 'Curry Tonkotsu',
            description: 'Japanese curry-infused ramen.',
          },
          {
            label: 'Naruto Miso',
            description:
              'Custom blend of miso and tonkotsu shoyu broth with pork chashu, bamboo, naruto fish cake, green onion, half nitamago egg, and nori seaweed.',
            tag: 'MUST TRY',
          },
        ],
      },
    ],
  },

  {
    title: 'Chicken Broth',
    subsections: [
      {
        title: 'Paitan',
        description:
          'Velvety, slow-cooked chicken bone broth. Comes with chicken chashu, corn, bean sprouts, green onion, and half nitamago egg. Choose between a salt base or soy sauce base with fried garlic.',
        items: [
          {
            label: 'Original',
            description: 'Velvety, slow-cooked chicken bone broth.',
          },
          {
            label: 'Black',
            description:
              'Drizzle of smoky, savory black garlic oil.',
          },
          {
            label: 'Red',
            description:
              'Seasoned with spicy paste and a drizzle of spicy oil.',
            tag: 'SPICY',
          },
          {
            label: 'Black & Red',
            description: 'Black garlic oil and spicy oil.',
          },
          {
            label: 'Creamy Shio',
            description:
              'Creamy salt base broth finished with sweet butter.',
          },
        ],
      },
      {
        title: 'Clear Chicken Broth',
        items: [
          {
            label: 'Chicken Shio',
            description:
              'Salt-based chicken ramen — clean, light broth.',
          },
          {
            label: 'Classic Shoyu',
            description:
              'Clear soy sauce-based chicken broth with garlic and nori.',
            tag: 'MUST TRY',
          },
        ],
      },
    ],
  },

  {
    title: 'Vegetable Broth',
    subsections: [
      {
        title: 'Vegetable Broth',
        description:
          'Made from shiitake mushrooms and seaweed. Comes with tofu, bean sprouts, bok choy, kikurage mushrooms, green onion, and half nitamago egg.',
        items: [
          {
            label: 'Veggie Shio',
            description: 'Simple, light, and refreshing.',
            tag: 'VEGETARIAN',
          },
          {
            label: 'Yuzu Shio',
            description:
              'Savory with a bright citrus flavor from yuzu kosho.',
            tag: 'VEGETARIAN',
          },
          {
            label: 'Curry Shio',
            description: 'Japanese curry-infused ramen.',
            tag: 'VEGETARIAN',
          },
          {
            label: 'Creamy Veggie',
            description:
              'Rich vegetable broth with a splash of soy milk.',
            tag: 'VEGETARIAN',
          },
          {
            label: 'Curry Creamy Veggie',
            description:
              'Creamy vegetable ramen with Japanese curry flavor.',
            tag: 'VEGETARIAN',
          },
        ],
      },
      {
        title: 'Miso & Sesame',
        items: [
          {
            label: 'Miso',
            description:
              'Choose a base broth of pork, chicken, or vegetable, with pork, chicken, or tofu.',
          },
          {
            label: 'Spicy Miso',
            description:
              'Spicy miso ramen with your choice of pork, chicken, or vegetable broth and pork, chicken, or tofu.',
            tag: 'SPICY',
          },
          {
            label: 'Ginger Miso',
            description:
              'Ginger miso ramen with your choice of broth and protein.',
          },
          {
            label: 'Sesame Shio',
            description:
              'Wavy noodles in a savory sesame shio broth.',
          },
          {
            label: 'Spicy Sesame Shio',
            description:
              'Wavy noodles in a spicy sesame shio broth.',
            tag: 'SPICY',
          },
        ],
      },
    ],
  },

  {
    title: 'Salad / Soup',
    items: [
      {
        label: 'Seaweed Salad',
        description: 'Marinated seaweed salad.',
        tag: 'VEGETARIAN',
      },
      {
        label: 'House Salad',
        description:
          'Fresh greens with sesame, carrot ginger, or yum yum dressing.',
        tag: 'VEGETARIAN',
      },
      {
        label: 'Avocado Salad',
        description:
          'Fresh avocado with sesame, carrot ginger, or yum yum dressing.',
        tag: 'VEGETARIAN',
      },
      {
        label: 'Miso Soup',
        description:
          'Wakame seaweed, tofu, and green onion.',
        tag: 'VEGETARIAN',
      },
    ],
  },

  {
    title: 'Side Order',
    items: [
      {
        label: 'Gyoza',
        description: 'Pork or vegetable dumplings.',
      },
      {
        label: 'Pork Dumplings',
        description: 'Steamed or fried pork dumplings.',
      },
      {
        label: 'Chicken Kara-age',
        description:
          'Fried chicken served with honey mustard or honey sriracha.',
      },
      {
        label: 'Edamame',
        description:
          'Regular or spicy garlic. Steamed, salted or stir-fried with spicy garlic butter.',
        tag: 'VEGETARIAN',
      },
      {
        label: 'Green Beans',
        description:
          'Regular or spicy garlic. Stir-fried with garlic soy or spicy garlic butter.',
        tag: 'VEGETARIAN',
      },
      {
        label: 'Vegetable Spring Rolls',
        description:
          '3pc vegetable spring rolls served with sweet chili sauce.',
        tag: 'VEGETARIAN',
      },
      {
        label: 'Geso Kara-age',
        description:
          'Fried squid legs served with honey sriracha sauce.',
      },
      {
        label: 'Fried Shrimp',
        description:
          'Tempura-battered shrimp served with warm tentsuyu sauce.',
      },
      {
        label: 'Chicken Wings',
        description:
          'Plain, Garlic Honey, or Spicy Gochujang.',
      },
      {
        label: 'Jalapeño Poppers',
        description:
          'Tempura-battered jalapeño with eel sauce, honey mustard, and sushi ginger.',
        tag: 'SPICY',
      },
      {
        label: 'Cream Cheese',
        description: 'Jalapeño poppers with cream cheese.',
      },
      {
        label: 'Spicy Tuna & Cream Cheese',
        description:
          'Jalapeño poppers with spicy tuna and cream cheese.',
        tag: 'SPICY',
      },
      {
        label: 'Takoyaki',
        description:
          'Japanese octopus fritters topped with takoyaki sauce, mayo, bonito flakes, and seaweed.',
      },
      {
        label: 'Agedashi Tofu',
        description:
          'Tempura tofu served in warm tentsuyu sauce.',
        tag: 'VEGETARIAN',
      },
    ],
  },

  {
    title: 'Rice Dishes',
    items: [
      {
        label: 'Steamed Rice',
        tag: 'VEGETARIAN',
      },
      {
        label: 'Veggie Curry Rice',
        description: 'Japanese vegetable curry, regular or spicy.',
        tag: 'VEGETARIAN',
      },
      {
        label: 'Chashu Donburi',
        description:
          'Signature diced pork chashu over rice with green onions.',
        tag: 'MUST TRY',
      },
      {
        label: 'Unagi Donburi',
        description:
          'Roasted eel over rice, served with miso soup.',
      },
      {
        label: 'Pork Donburi',
        description:
          'Thin-sliced seared pork over rice with green onions. Choose Garlic Soy or Spicy Teriyaki.',
        tag: 'SPICY',
      },
      {
        label: 'Beef Donburi',
        description:
          'Sukiyaki-style beef over rice with green onions.',
        tag: 'MUST TRY',
      },
    ],
  },

  {
    title: 'Sushi',
    subsections: [
      {
        title: 'Sashimi',
        items: [
          {
            label: 'Salmon Sashimi',
            description: 'Fresh raw salmon sashimi.',
          },
          {
            label: 'Tuna Sashimi',
            description: 'Fresh raw tuna sashimi.',
          },
        ],
      },

      {
        title: 'Vegan / Vegetarian Rolls',
        items: [
          {
            label: 'Avocado Roll',
            description: 'Classic avocado roll.',
            tag: 'VEGETARIAN',
          },
          {
            label: 'Cucumber Roll',
            description: 'Classic cucumber roll.',
            tag: 'VEGETARIAN',
          },
          {
            label: 'Sweet Potato Roll',
            description:
              'Tempura purple sweet potato with crunchy flakes and eel sauce.',
            tag: 'VEGETARIAN',
          },
          {
            label: 'Green Bean Roll',
            description:
              'Cooked green beans and cucumber. Available regular or spicy.',
            tag: 'VEGETARIAN',
          },
          {
            label: 'Vegan Spam Roll',
            description: 'Fried vegan spam.',
            tag: 'VEGETARIAN',
          },
        ],
      },

      {
        title: 'Regular Rolls',
        items: [
          {
            label: 'California Roll',
            description:
              'Imitation crab mix and avocado.',
          },
          {
            label: 'Philadelphia Roll',
            description:
              'Smoked salmon and cream cheese.',
          },
          {
            label: 'Tekka-Maki',
            description: 'Tuna roll.',
          },
          {
            label: 'Tuna Avocado Roll',
            description: 'Tuna and avocado.',
          },
          {
            label: 'Spicy Tuna Roll',
            description:
              'Spicy tuna and cucumber.',
            tag: 'SPICY',
          },
          {
            label: 'Sake-Maki',
            description: 'Salmon roll.',
          },
          {
            label: 'Salmon Avocado Roll',
            description: 'Salmon and avocado.',
          },
          {
            label: 'Spicy Salmon Roll',
            description:
              'Spicy salmon and cucumber.',
            tag: 'SPICY',
          },
          {
            label: 'Tempura Shrimp Roll',
            description:
              'Tempura shrimp, crab mix, avocado, eel sauce, and spicy mayo.',
          },
          {
            label: 'Eel Avocado Roll',
            description:
              'BBQ eel, avocado, and eel sauce.',
          },
        ],
      },

      {
        title: 'Special Sushi Rolls',
        items: [
          {
            label: 'Godzilla Roll',
            description:
              'Shrimp tempura, cream cheese, spicy crab mix inside, spicy tuna, jalapeño, eel sauce, and crunchy flakes.',
            tag: 'SPICY',
          },
          {
            label: 'Green Dragon Roll',
            description:
              'BBQ eel and cucumber with avocado inside, topped with avocado and eel sauce.',
            tag: 'MUST TRY',
          },
          {
            label: 'Okinawa Roll',
            description:
              'Tempura purple sweet potato, cream cheese, and cucumber inside, topped with avocado, spicy mayo, and eel sauce.',
          },
          {
            label: 'Fried Spicy Tuna Roll',
            description:
              'Spicy tuna, cream cheese, and eel sauce.',
            tag: 'SPICY',
          },
        ],
      },
    ],
  },
];