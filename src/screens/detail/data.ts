export const bookData = {
  id: 1,
  title: 'The Great Gatsby',
  author: 'F. Scott Fitzgerald',
  rating: {
    star: 4.5,
    votes: 269,
  },
  categories: [
    {name: 'Fiction', id: 1},
    {name: 'Classic', id: 2},
  ],
  price: 9.99,
  description: `The Great Gatsby is a novel by American writer F. Scott Fitzgerald. Set in the Jazz Age on Long Island, near New York City, the novel depicts first-person narrator Nick Carraway's interactions with mysterious millionaire Jay Gatsby and Gatsby's obsession to reunite with his former lover, Daisy Buchanan.`,
  thumbnail: 'https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg',
  catalog: [
    {
      id: 1,
      title: 'Chapter 1',
      content: `In the summer of 1922, Nick Carraway, a Yale graduate and veteran of the Great War from the Midwest—who serves as the novel's narrator—takes a job in New York as a bond salesman. He rents a`,
    },
  ],
};

export const bookComments = [
  {
    id: 1,
    name: 'John Doe',
    comment:
      'Great book! I love it! lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
    date: '2021-09-01',
    liked: false,
  },
  {
    id: 2,
    name: 'Jane Doe',
    comment: 'I love the story!',
    avatar: 'https://randomuser.me/api/portraits/men/2.jpg',
    date: '2021-09-01',
    liked: false,
  },
  {
    id: 3,
    name: 'John Doe',
    comment: 'Great book! I love it!',
    avatar: 'https://randomuser.me/api/portraits/men/3.jpg',
    date: '2021-09-01',
    liked: true,
  },
];
