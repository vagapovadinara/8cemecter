import { Review } from "../types/review";

const reviews: Review[] = [
    {
        'id': '1',
        'comment': 'I came with the children, there are no places nearby where you can go with them. It is ideal for companies, but not for families.',
        'date': 'May 2022',
        'rating': 3.5,
        'user': {
          'name': 'Nina Golovan',
          'avatarUrl': '../../public/img/avatar-nina.jpg',
          'isPro': true,
        },
      },
      {
        'id': '2',
        'comment': 'Location in the city center for a decent price. I recommend it for rent. The owner is very polite.',
        'date': 'April 2024',
        'rating': 5,
        'user': {
          'name': 'Kolya Eropolov',
          'avatarUrl': '../../public/img/avatar-kolya.jpg',
          'isPro': false,
        },
      },
      {
        'id': '3',
        'comment': 'Excellent accommodation. I recommend',
        'date': 'January 2025',
        'rating': 4.5,
        'user': {
          'name': 'Oleg Gazmanov',
          'avatarUrl': '../../public/img/avatar-oleg.jpg',
          'isPro': true,
        },
      },
];

export { reviews };