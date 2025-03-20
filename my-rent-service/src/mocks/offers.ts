import { FullOffer } from "../types/offer.ts";


const offers: FullOffer[] = [
    {
        'id' : '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d',
        'title': 'Wood and stone place',
        'description' : 'A new spacius villa, one floor. All commodities, jacuzzi and beautiful scenery. Ideal for familes',
        'type' : 'apartament',
        'price' : 370,
        'images' : [
            '.././public/img/1.jpg',
            '.././public/img/17.jpg', 
            '.././public/img/16.jpg', 
            '.././public/img/15.jpg', 
            '.././public/img/2.jpg', 
            '.././public/img/7.jpg'
          ],
        'city' : {
            'name' : 'Paris',
            'location' : {
                'latitude' : 48.85661,
                'longitude' : 2.351499,
                'zoom' : 13
            }
        },
        'location' : {
            'latitude' : 48.8566100000004,
            'longitude' : 2.342499,
            'zoom' : 13
        },

        'goods' : [
            'Heating',
            'Wi-Fi',
            'Fridge',
            'Laptop friendly workspace',
            'Baby seat',
            'Air conditioning',
            'Washer',
            'Towels',
            'Dishwasher',
            'Kitchen',
            'Washing machine',
            'Breakfast',
            'Coffee machine'
        ],
        'host' : {
            'isPro': true,
            'name' : 'Angelina',
            'avatarUrl' : '.././public/img/avatar-angelina.jpg'
        },

        'isPremium' : false,
        'isFavorite' : true,
        'rating' : 4.9,
        'bedrooms' : 2,
        'maxAdults' : 3
    },

    {
        "id": "a1b2c3d4-e5f6-7g8h-9i0j-k1l2m3n4o5p6",
        'title': 'Stylish Loft in HafenCity',
        'description': 'Modern loft apartment in the trendy HafenCity district. Close to the Elbphilharmonie and other attractions. Great for design lovers.',
        'type': 'apartment',
        'price': 220,
        'images': [
        '.././public/img/31.jpg',
        '.././public/img/32.jpg',
        '.././public/img/33.jpg',
        '.././public/img/34.jpg',
        '.././public/img/35.jpg',
        '.././public/img/36.jpg'
    ],
    'city': {
        'name': 'Hamburg',
        'location': {
            'latitude': 53.551086,
            'longitude': 9.993682,
            'zoom': 13
        }
    },
    'location': {
        'latitude': 53.5439,
        'longitude': 9.9992,
        'zoom': 16
    },
    'goods': [
        'Heating',
        'Wi-Fi',
        'Fridge',
        'Laptop friendly workspace',
        'Balcony',
        'River view',
        'Washer',
        'Towels',
        'Dishwasher',
        'Kitchen',
        'Coffee machine',
        'Parking'
    ],
    'host': {
        'isPro': false,
        'name': 'Markus',
        'avatarUrl': '.././public/img/avatar-markus.jpg'
    },
    'isPremium': true,
    'isFavorite': true,
    'rating': 4.8,
    'bedrooms': 1,
    'maxAdults': 2
      },

      {
        "id": "b2c3d4e5-f6g7-8h9i-0j1k-l2m3n4o5p6q7",
        'title': 'Modern Apartment near Grand Place',
        'description': 'Stylish apartment in the heart of Brussels, steps from Grand Place. Perfect for business travelers or tourists exploring the city.',
        'type': 'apartment',
        'price': 180,
        'images': [
        '.././public/img/25.jpg',
        '.././public/img/26.jpg',
        '.././public/img/27.jpg',
        '.././public/img/28.jpg',
        '.././public/img/29.jpg',
        '.././public/img/30.jpg'
    ],
    'city': {
        'name': 'Brussels',
        'location': {
        'latitude': 50.85045,
        'longitude': 4.34673,
        'zoom': 13
        }
        },
        'location': {
        'latitude': 50.8467,
        'longitude': 4.3525,
        'zoom': 16
      },
        'goods': [
        'Heating',
        'Wi-Fi',
        'Fridge',
        'Laptop friendly workspace',
        'Elevator',
        'City view',
        'Washer',
        'Towels',
        'Kitchen',
        'Coffee machine',
        'Iron',
        'Hair dryer'
      ],
        'host': {
        'isPro': true,
        'name': 'Sophie',
        'avatarUrl': '.././public/img/avatar-sophie.jpg'
      },
        'isPremium': false,
        'isFavorite': false,
        'rating': 4.7,
        'bedrooms': 1,
        'maxAdults': 2
      },

      {
        "id": "c3d4e5f6-g7h8-9i0j-1k2l-m3n4o5p6q7r8",
        "title": "Cozy Canal House Apartment",
        "description": "Charming apartment overlooking the canals. Perfect for couples or small families looking to explore Amsterdam. Close to all major attractions.",
        "type": "apartment",
        "price": 250,
        'images' : [
          '.././public/img/23.jpg',
          '.././public/img/1.jpg',
          '.././public/img/18.jpg',
          '.././public/img/19.jpg',
          '.././public/img/24.jpg',
          '.././public/img/21.jpg',
      ],
        "city": {
          "name": "Amsterdam",
          "location": {
            "latitude": 52.370216,
            "longitude": 4.895168,
            "zoom": 13
          }
        },
        "location": {
          "latitude": 52.366667,
          "longitude": 4.900000,
          "zoom": 16
        },
        "goods": [
          "Wi-Fi",
          "Heating",
          "Kitchen",
          "Fridge",
          "Washing machine",
          "Towels",
          "Bike rental",
          "Canal view",
          "Coffee machine",
          "Hair dryer",
          "Laptop friendly workspace",
          "Bicycle rental"
        ],
        "host": {
          "isPro": false,
          "name": "Pieter",
          "avatarUrl": ".././public/img/avatar-pieter.jpg"
        },
        "isPremium": true,
        "isFavorite": false,
        "rating": 4.6,
        "bedrooms": 1,
        "maxAdults": 2
      },
]

export {offers};