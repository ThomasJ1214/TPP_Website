/**
 * Menu data — edit this file to update the menu.
 *
 * Adding photos:
 *   1. Drop the image into /public/images/menu/ (recommended: 900×600px JPG)
 *   2. Set the `image` field to the path, e.g. image: '/images/menu/cheese-pizza.jpg'
 *   Omit the `image` field entirely to hide the photo slot.
 */

export interface MenuItem {
  name: string;
  description: string;
  price: string;     // e.g. '$21' or '$9+'
  image?: string;    // path from /public — omit to hide
  soldOut?: boolean;
}

export interface MenuSection {
  id: string;
  title: string;
  items: MenuItem[];
}

export const MENU: MenuSection[] = [
  {
    id: 'pizza',
    title: 'Pizza',
    items: [
      {
        name: 'Cheese Pizza',
        description: 'Fresh, whole milk & part skim mozzarella blend. Organic milled tomatoes. Finished with basil and parm.',
        price: '$21',
        // image: '/images/menu/cheese-pizza.jpg',
      },
      {
        name: 'New Haven Style',
        description: 'Thin crust. Light mozz. Heavy sauce. Extra parm. Baked very crispy.',
        price: '$21',
        // image: '/images/menu/new-haven-style.jpg',
      },
      {
        name: 'Marinara',
        description: 'Organic milled tomatoes. Shaved garlic. Sicilian oregano. Finished with basil & EVOO.',
        price: '$17',
        // image: '/images/menu/marinara.jpg',
      },
      {
        name: 'Pepperoni',
        description: 'Cheese pizza base. Crispy cupping pepperoni. Finished with parm & basil.',
        price: '$25',
        // image: '/images/menu/pepperoni.jpg',
      },
      {
        name: 'Pepperoni Hot Honey',
        description: 'Cheese base. Crispy cupping pepperoni. Finished with whipped ricotta, basil, parm, and our own hot honey.',
        price: '$28',
        // image: '/images/menu/pepperoni-hot-honey.jpg',
      },
      {
        name: 'Vodka Sauce',
        description: 'Creamy house vodka sauce. Fresh, whole milk, part skim mozzarella. Finished with basil and parm.',
        price: '$26',
        // image: '/images/menu/vodka-sauce.jpg',
      },
      {
        name: 'White',
        description: 'Garlic. Ricotta. Provolone. Fresh, whole milk & part skim mozzarella blend. Finished with basil and parm.',
        price: '$25',
        // image: '/images/menu/white.jpg',
      },
      {
        name: 'Buffalo Chicken',
        description: 'Crispy chicken cutlet tossed in buffalo sauce. Mozzarella cheese blend. Finished with ranch & chives.',
        price: '$28',
        // image: '/images/menu/buffalo-chicken.jpg',
      },
      {
        name: 'Burrata',
        description: 'Organic milled tomatoes. Shaved garlic. Finished with burrata, basil, parm & EVOO.',
        price: '$28',
        // image: '/images/menu/burrata.jpg',
      },
      {
        name: 'Mushroom & Onion',
        description: 'Fresh, whole milk & part skim mozzarella. Caramelized onions, thyme. No sauce. Finished with parm.',
        price: '$25',
        // image: '/images/menu/mushroom-onion.jpg',
      },
    ],
  },
  {
    id: 'chicken-cutlets',
    title: 'Chicken Cutlets',
    items: [
      {
        name: 'Marinara Chicken Parm',
        description: 'Large crispy chicken cutlet, topped with melted mozzarella, house marinara, basil, and grated parm. Fried in avocado oil.',
        price: '$18',
        // image: '/images/menu/marinara-chicken-parm.jpg',
      },
      {
        name: 'Vodka Chicken Parm',
        description: 'Large chicken cutlet, topped with melted mozzarella, creamy vodka sauce, basil, and grated parm. Fried in avocado oil.',
        price: '$19',
        // image: '/images/menu/vodka-chicken-parm.jpg',
      },
      {
        name: 'Buffalo Chicken Cutlet',
        description: 'Large chicken cutlet, topped with house buffalo sauce, seed oil free ranch, and chives. Fried in avocado oil.',
        price: '$18',
        // image: '/images/menu/buffalo-chicken-cutlet.jpg',
      },
      {
        name: 'Lemon Zest Chicken Cutlet',
        description: 'Large chicken cutlet, topped with lemon zest & juice, parsley, EVOO and grated parm. Fried in avocado oil.',
        price: '$17',
        // image: '/images/menu/lemon-zest-chicken-cutlet.jpg',
      },
    ],
  },
  {
    id: 'sides',
    title: 'Sides',
    items: [
      {
        name: 'Caesar Salad',
        description: 'Chopped romaine lettuce, sourdough croutons & parmigiano reggiano. House made Caesar dressing. Contains pasteurized egg yolks and anchovies.',
        price: '$9+',
        // image: '/images/menu/caesar-salad.jpg',
      },
      {
        name: 'Garlic Knots',
        description: 'Five knots. Tossed in garlic butter and parmigiano reggiano. Choice of marinara or vodka for dipping.',
        price: '$5',
        // image: '/images/menu/garlic-knots.jpg',
      },
    ],
  },
  {
    id: 'desserts',
    title: 'Desserts',
    items: [
      {
        name: 'Browned Butter Chocolate Chunk Cookie',
        description: 'Brown butter chocolate chunk cookie. Crispy on the outside, gooey on the inside. Flakey salt. Baked every day.',
        price: '$5',
        // image: '/images/menu/cookie.jpg',
      },
    ],
  },
  {
    id: 'beverages',
    title: 'Beverages',
    items: [
      { name: 'Mexican Coke',                   description: '', price: '$4.25' },
      { name: 'Mexican Sprite',                 description: '', price: '$4.25' },
      { name: 'Mountain Valley Still Water',    description: '', price: '$3' },
      { name: 'Mountain Valley Sparkling Water',description: '', price: '$4' },
      { name: 'Diet Coke',                      description: '', price: '$3' },
      { name: 'Just Iced Tea',                  description: '', price: '$4' },
      { name: 'Birch Beer / Root Beer',         description: '', price: '$4' },
    ],
  },
];
