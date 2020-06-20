///import httpClient from './httpClient'

// const END_POINT = `/Social`


const getSocial = () => ({
    id: 1,
    username: 'franciscopastene',
    full_name: 'Francisco Pastene',
    date: '2020-06-20T00:00:00.000Z',
    instagram: {
        biography: 'O vereador do povo.',
        email: '',
        followers: 2954,
        following: 228,
        username: 'franciscopastene',
        full_name: 'Francisco Pastene',
        url: 'https://instagram.com/franciscopastene',
        website: null,
        business_account: false,
        business_category_name: null,
        verified: true,
        joined_recently: false,
        profile_pic_url: 'https://scontent-lht6-1.cdninstagram.com/v/t51.2885-19/s150x150/10246110_198869057142688_339063835_a.jpg?_nc_ht=scontent-lht6-1.cdninstagram.com&_nc_ohc=XmJb4YV5ZGsAX9jcO4D&oh=0adc2791cf1e4b3ca004ebe4963e22e7&oe=5F15035C',
        posts: [
            {
                image: 'https://scontent-lht6-1.cdninstagram.com/v/t51.2885-15/e35/12825942_153678265021961_2080773462_n.jpg?_nc_ht=scontent-lht6-1.cdninstagram.com&_nc_cat=105&_nc_ohc=7eYuozkjEzgAX9GyaP-&oh=c43278aeacf2bb16c398549b443146b2&oe=5F1639D6',
                caption: '',
                date: '2016-03-08T16:38:18.000Z',
                timestamp: 1457455098,
                likes: 50,
                comments: 10
            }
        ],
        comments: 150,
        likes: 352,
        engagement: 3.08,
        frequency: { days: 0, hours: 0, minutes: 0, seconds: 0, milliseconds: 0 }

    },
    twitter: {
        biography: 'Politico, igualdade para todos.',
        username: 'fpastene',
        full_name: 'Francisco J. Pastene',
        profile_pic_url: 'https://scontent-lht6-1.cdninstagram.com/v/t51.2885-19/s150x150/10246110_198869057142688_339063835_a.jpg?_nc_ht=scontent-lht6-1.cdninstagram.com&_nc_ohc=XmJb4YV5ZGsAX9jcO4D&oh=0adc2791cf1e4b3ca004ebe4963e22e7&oe=5F15035C',
        verified: true,
        followers: 896,
        following: 32,
    },    
    facebook: {
        biography: 'Politico.',
        username: 'chicao767',
        full_name: 'Francisco Pastene',
        profile_pic_url: 'https://scontent-lht6-1.cdninstagram.com/v/t51.2885-19/s150x150/10246110_198869057142688_339063835_a.jpg?_nc_ht=scontent-lht6-1.cdninstagram.com&_nc_ohc=XmJb4YV5ZGsAX9jcO4D&oh=0adc2791cf1e4b3ca004ebe4963e22e7&oe=5F15035C',
        verified: true,
        followers: 985,
        likes: 452,
    },    
    youtube: {
        subscribers: 300
    }    
})

const getListSocials = () => [
    {
        id: 1,
        username: 'franciscopastene',
        full_name: 'Francisco Pastene',
        date: '2020-06-14T00:00:00.000Z',
        instagram: {
            biography: 'O vereador do povo.',
            email: '',
            followers: 1301,
            following: 225,
            username: 'franciscopastene',
            full_name: 'Francisco Pastene',
            url: 'https://instagram.com/franciscopastene',
            website: null,
            business_account: false,
            business_category_name: null,
            verified: true,
            joined_recently: false,
            profile_pic_url: 'https://scontent-lht6-1.cdninstagram.com/v/t51.2885-19/s150x150/10246110_198869057142688_339063835_a.jpg?_nc_ht=scontent-lht6-1.cdninstagram.com&_nc_ohc=XmJb4YV5ZGsAX9jcO4D&oh=0adc2791cf1e4b3ca004ebe4963e22e7&oe=5F15035C',
            posts: [
                {
                    image: 'https://scontent-lht6-1.cdninstagram.com/v/t51.2885-15/e35/12825942_153678265021961_2080773462_n.jpg?_nc_ht=scontent-lht6-1.cdninstagram.com&_nc_cat=105&_nc_ohc=7eYuozkjEzgAX9GyaP-&oh=c43278aeacf2bb16c398549b443146b2&oe=5F1639D6',
                    caption: '',
                    date: '2016-03-08T16:38:18.000Z',
                    timestamp: 1457455098,
                    likes: 11,
                    comments: 4
                }
            ],
            comments: 80,
            likes: 115,
            engagement: 2.78,
            frequency: { days: 0, hours: 0, minutes: 0, seconds: 0, milliseconds: 0 }

        },
        twitter: {
            biography: 'Politico, igualdade para todos.',
            username: 'fpastene',
            full_name: 'Francisco J. Pastene',
            profile_pic_url: 'https://scontent-lht6-1.cdninstagram.com/v/t51.2885-19/s150x150/10246110_198869057142688_339063835_a.jpg?_nc_ht=scontent-lht6-1.cdninstagram.com&_nc_ohc=XmJb4YV5ZGsAX9jcO4D&oh=0adc2791cf1e4b3ca004ebe4963e22e7&oe=5F15035C',
            verified: true,
            followers: 896,
            following: 32,
        },    
        facebook: {
            biography: 'Politico.',
            username: 'chicao767',
            full_name: 'Francisco Pastene',
            profile_pic_url: 'https://scontent-lht6-1.cdninstagram.com/v/t51.2885-19/s150x150/10246110_198869057142688_339063835_a.jpg?_nc_ht=scontent-lht6-1.cdninstagram.com&_nc_ohc=XmJb4YV5ZGsAX9jcO4D&oh=0adc2791cf1e4b3ca004ebe4963e22e7&oe=5F15035C',
            verified: true,
            followers: 985,
            likes: 452,
        },    
        youtube: {
            subscribers: 300
        }    
    },
    {
        id: 1,
        username: 'franciscopastene',
        full_name: 'Francisco Pastene',
        date: '2020-06-15T00:00:00.000Z',
        instagram: {
            biography: 'O vereador do povo.',
            email: '',
            followers: 1852,
            following: 225,
            username: 'franciscopastene',
            full_name: 'Francisco Pastene',
            url: 'https://instagram.com/franciscopastene',
            website: null,
            business_account: false,
            business_category_name: null,
            verified: true,
            joined_recently: false,
            profile_pic_url: 'https://scontent-lht6-1.cdninstagram.com/v/t51.2885-19/s150x150/10246110_198869057142688_339063835_a.jpg?_nc_ht=scontent-lht6-1.cdninstagram.com&_nc_ohc=XmJb4YV5ZGsAX9jcO4D&oh=0adc2791cf1e4b3ca004ebe4963e22e7&oe=5F15035C',
            posts: [
                {
                    image: 'https://scontent-lht6-1.cdninstagram.com/v/t51.2885-15/e35/12825942_153678265021961_2080773462_n.jpg?_nc_ht=scontent-lht6-1.cdninstagram.com&_nc_cat=105&_nc_ohc=7eYuozkjEzgAX9GyaP-&oh=c43278aeacf2bb16c398549b443146b2&oe=5F1639D6',
                    caption: '',
                    date: '2016-03-08T16:38:18.000Z',
                    timestamp: 1457455098,
                    likes: 11,
                    comments: 4
                }
            ],
            comments: 94,
            likes: 120,
            engagement: 2.08,
            frequency: { days: 0, hours: 0, minutes: 0, seconds: 0, milliseconds: 0 }

        },
        twitter: {
            biography: 'Politico, igualdade para todos.',
            username: 'fpastene',
            full_name: 'Francisco J. Pastene',
            profile_pic_url: 'https://scontent-lht6-1.cdninstagram.com/v/t51.2885-19/s150x150/10246110_198869057142688_339063835_a.jpg?_nc_ht=scontent-lht6-1.cdninstagram.com&_nc_ohc=XmJb4YV5ZGsAX9jcO4D&oh=0adc2791cf1e4b3ca004ebe4963e22e7&oe=5F15035C',
            verified: true,
            followers: 896,
            following: 32,
        },    
        facebook: {
            biography: 'Politico.',
            username: 'chicao767',
            full_name: 'Francisco Pastene',
            profile_pic_url: 'https://scontent-lht6-1.cdninstagram.com/v/t51.2885-19/s150x150/10246110_198869057142688_339063835_a.jpg?_nc_ht=scontent-lht6-1.cdninstagram.com&_nc_ohc=XmJb4YV5ZGsAX9jcO4D&oh=0adc2791cf1e4b3ca004ebe4963e22e7&oe=5F15035C',
            verified: true,
            followers: 985,
            likes: 452,
        },    
        youtube: {
            subscribers: 300
        }    
    },
    {
        id: 1,
        username: 'franciscopastene',
        full_name: 'Francisco Pastene',
        date: '2020-06-16T00:00:00.000Z',
        instagram: {
            biography: 'O vereador do povo.',
            email: '',
            followers: 2530,
            following: 225,
            username: 'franciscopastene',
            full_name: 'Francisco Pastene',
            url: 'https://instagram.com/franciscopastene',
            website: null,
            business_account: false,
            business_category_name: null,
            verified: true,
            joined_recently: false,
            profile_pic_url: 'https://scontent-lht6-1.cdninstagram.com/v/t51.2885-19/s150x150/10246110_198869057142688_339063835_a.jpg?_nc_ht=scontent-lht6-1.cdninstagram.com&_nc_ohc=XmJb4YV5ZGsAX9jcO4D&oh=0adc2791cf1e4b3ca004ebe4963e22e7&oe=5F15035C',
            posts: [
                {
                    image: 'https://scontent-lht6-1.cdninstagram.com/v/t51.2885-15/e35/12825942_153678265021961_2080773462_n.jpg?_nc_ht=scontent-lht6-1.cdninstagram.com&_nc_cat=105&_nc_ohc=7eYuozkjEzgAX9GyaP-&oh=c43278aeacf2bb16c398549b443146b2&oe=5F1639D6',
                    caption: '',
                    date: '2016-03-08T16:38:18.000Z',
                    timestamp: 1457455098,
                    likes: 11,
                    comments: 4
                }
            ],
            comments: 132,
            likes: 189,
            engagement: 2.30,
            frequency: { days: 0, hours: 0, minutes: 0, seconds: 0, milliseconds: 0 }

        },
        twitter: {
            biography: 'Politico, igualdade para todos.',
            username: 'fpastene',
            full_name: 'Francisco J. Pastene',
            profile_pic_url: 'https://scontent-lht6-1.cdninstagram.com/v/t51.2885-19/s150x150/10246110_198869057142688_339063835_a.jpg?_nc_ht=scontent-lht6-1.cdninstagram.com&_nc_ohc=XmJb4YV5ZGsAX9jcO4D&oh=0adc2791cf1e4b3ca004ebe4963e22e7&oe=5F15035C',
            verified: true,
            followers: 896,
            following: 32,
        },    
        facebook: {
            biography: 'Politico.',
            username: 'chicao767',
            full_name: 'Francisco Pastene',
            profile_pic_url: 'https://scontent-lht6-1.cdninstagram.com/v/t51.2885-19/s150x150/10246110_198869057142688_339063835_a.jpg?_nc_ht=scontent-lht6-1.cdninstagram.com&_nc_ohc=XmJb4YV5ZGsAX9jcO4D&oh=0adc2791cf1e4b3ca004ebe4963e22e7&oe=5F15035C',
            verified: true,
            followers: 985,
            likes: 452,
        },    
        youtube: {
            subscribers: 300
        }    
    },
    {
        id: 1,
        username: 'franciscopastene',
        full_name: 'Francisco Pastene',
        date: '2020-06-17T00:00:00.000Z',
        instagram: {
            biography: 'O vereador do povo.',
            email: '',
            followers: 2580,
            following: 225,
            username: 'franciscopastene',
            full_name: 'Francisco Pastene',
            url: 'https://instagram.com/franciscopastene',
            website: null,
            business_account: false,
            business_category_name: null,
            verified: true,
            joined_recently: false,
            profile_pic_url: 'https://scontent-lht6-1.cdninstagram.com/v/t51.2885-19/s150x150/10246110_198869057142688_339063835_a.jpg?_nc_ht=scontent-lht6-1.cdninstagram.com&_nc_ohc=XmJb4YV5ZGsAX9jcO4D&oh=0adc2791cf1e4b3ca004ebe4963e22e7&oe=5F15035C',
            posts: [
                {
                    image: 'https://scontent-lht6-1.cdninstagram.com/v/t51.2885-15/e35/12825942_153678265021961_2080773462_n.jpg?_nc_ht=scontent-lht6-1.cdninstagram.com&_nc_cat=105&_nc_ohc=7eYuozkjEzgAX9GyaP-&oh=c43278aeacf2bb16c398549b443146b2&oe=5F1639D6',
                    caption: '',
                    date: '2016-03-08T16:38:18.000Z',
                    timestamp: 1457455098,
                    likes: 12,
                    comments: 5
                }
            ],
            comments: 130,
            likes: 156,
            engagement: 4.25,
            frequency: { days: 0, hours: 0, minutes: 0, seconds: 0, milliseconds: 0 }

        },
        twitter: {
            biography: 'Politico, igualdade para todos.',
            username: 'fpastene',
            full_name: 'Francisco J. Pastene',
            profile_pic_url: 'https://scontent-lht6-1.cdninstagram.com/v/t51.2885-19/s150x150/10246110_198869057142688_339063835_a.jpg?_nc_ht=scontent-lht6-1.cdninstagram.com&_nc_ohc=XmJb4YV5ZGsAX9jcO4D&oh=0adc2791cf1e4b3ca004ebe4963e22e7&oe=5F15035C',
            verified: true,
            followers: 896,
            following: 32,
        },    
        facebook: {
            biography: 'Politico.',
            username: 'chicao767',
            full_name: 'Francisco Pastene',
            profile_pic_url: 'https://scontent-lht6-1.cdninstagram.com/v/t51.2885-19/s150x150/10246110_198869057142688_339063835_a.jpg?_nc_ht=scontent-lht6-1.cdninstagram.com&_nc_ohc=XmJb4YV5ZGsAX9jcO4D&oh=0adc2791cf1e4b3ca004ebe4963e22e7&oe=5F15035C',
            verified: true,
            followers: 985,
            likes: 452,
        },    
        youtube: {
            subscribers: 300
        }    
    },
    {
        id: 1,
        username: 'franciscopastene',
        full_name: 'Francisco Pastene',
        date: '2020-06-18T00:00:00.000Z',
        instagram: {
            biography: 'O vereador do povo.',
            email: '',
            followers: 2689,
            following: 228,
            username: 'franciscopastene',
            full_name: 'Francisco Pastene',
            url: 'https://instagram.com/franciscopastene',
            website: null,
            business_account: false,
            business_category_name: null,
            verified: true,
            joined_recently: false,
            profile_pic_url: 'https://scontent-lht6-1.cdninstagram.com/v/t51.2885-19/s150x150/10246110_198869057142688_339063835_a.jpg?_nc_ht=scontent-lht6-1.cdninstagram.com&_nc_ohc=XmJb4YV5ZGsAX9jcO4D&oh=0adc2791cf1e4b3ca004ebe4963e22e7&oe=5F15035C',
            posts: [
                {
                    image: 'https://scontent-lht6-1.cdninstagram.com/v/t51.2885-15/e35/12825942_153678265021961_2080773462_n.jpg?_nc_ht=scontent-lht6-1.cdninstagram.com&_nc_cat=105&_nc_ohc=7eYuozkjEzgAX9GyaP-&oh=c43278aeacf2bb16c398549b443146b2&oe=5F1639D6',
                    caption: '',
                    date: '2016-03-08T16:38:18.000Z',
                    timestamp: 1457455098,
                    likes: 50,
                    comments: 10
                }
            ],
            comments: 160,
            likes: 302,
            engagement: 0.08,
            frequency: { days: 0, hours: 0, minutes: 0, seconds: 0, milliseconds: 0 }

        },
        twitter: {
            biography: 'Politico, igualdade para todos.',
            username: 'fpastene',
            full_name: 'Francisco J. Pastene',
            profile_pic_url: 'https://scontent-lht6-1.cdninstagram.com/v/t51.2885-19/s150x150/10246110_198869057142688_339063835_a.jpg?_nc_ht=scontent-lht6-1.cdninstagram.com&_nc_ohc=XmJb4YV5ZGsAX9jcO4D&oh=0adc2791cf1e4b3ca004ebe4963e22e7&oe=5F15035C',
            verified: true,
            followers: 896,
            following: 32,
        },    
        facebook: {
            biography: 'Politico.',
            username: 'chicao767',
            full_name: 'Francisco Pastene',
            profile_pic_url: 'https://scontent-lht6-1.cdninstagram.com/v/t51.2885-19/s150x150/10246110_198869057142688_339063835_a.jpg?_nc_ht=scontent-lht6-1.cdninstagram.com&_nc_ohc=XmJb4YV5ZGsAX9jcO4D&oh=0adc2791cf1e4b3ca004ebe4963e22e7&oe=5F15035C',
            verified: true,
            followers: 985,
            likes: 452,
        },    
        youtube: {
            subscribers: 300
        }    
    },
    {
        id: 1,
        username: 'franciscopastene',
        full_name: 'Francisco Pastene',
        date: '2020-06-19T00:00:00.000Z',
        instagram: {
            biography: 'O vereador do povo.',
            email: '',
            followers: 2731,
            following: 228,
            username: 'franciscopastene',
            full_name: 'Francisco Pastene',
            url: 'https://instagram.com/franciscopastene',
            website: null,
            business_account: false,
            business_category_name: null,
            verified: true,
            joined_recently: false,
            profile_pic_url: 'https://scontent-lht6-1.cdninstagram.com/v/t51.2885-19/s150x150/10246110_198869057142688_339063835_a.jpg?_nc_ht=scontent-lht6-1.cdninstagram.com&_nc_ohc=XmJb4YV5ZGsAX9jcO4D&oh=0adc2791cf1e4b3ca004ebe4963e22e7&oe=5F15035C',
            posts: [
                {
                    image: 'https://scontent-lht6-1.cdninstagram.com/v/t51.2885-15/e35/12825942_153678265021961_2080773462_n.jpg?_nc_ht=scontent-lht6-1.cdninstagram.com&_nc_cat=105&_nc_ohc=7eYuozkjEzgAX9GyaP-&oh=c43278aeacf2bb16c398549b443146b2&oe=5F1639D6',
                    caption: '',
                    date: '2016-03-08T16:38:18.000Z',
                    timestamp: 1457455098,
                    likes: 50,
                    comments: 10
                }
            ],
            comments: 180,
            likes: 382,
            engagement: 3.98,
            frequency: { days: 0, hours: 0, minutes: 0, seconds: 0, milliseconds: 0 }

        },
        twitter: {
            biography: 'Politico, igualdade para todos.',
            username: 'fpastene',
            full_name: 'Francisco J. Pastene',
            profile_pic_url: 'https://scontent-lht6-1.cdninstagram.com/v/t51.2885-19/s150x150/10246110_198869057142688_339063835_a.jpg?_nc_ht=scontent-lht6-1.cdninstagram.com&_nc_ohc=XmJb4YV5ZGsAX9jcO4D&oh=0adc2791cf1e4b3ca004ebe4963e22e7&oe=5F15035C',
            verified: true,
            followers: 896,
            following: 32,
        },    
        facebook: {
            biography: 'Politico.',
            username: 'chicao767',
            full_name: 'Francisco Pastene',
            profile_pic_url: 'https://scontent-lht6-1.cdninstagram.com/v/t51.2885-19/s150x150/10246110_198869057142688_339063835_a.jpg?_nc_ht=scontent-lht6-1.cdninstagram.com&_nc_ohc=XmJb4YV5ZGsAX9jcO4D&oh=0adc2791cf1e4b3ca004ebe4963e22e7&oe=5F15035C',
            verified: true,
            followers: 985,
            likes: 452,
        },    
        youtube: {
            subscribers: 300
        }    
    },
    {
        id: 1,
        username: 'franciscopastene',
        full_name: 'Francisco Pastene',
        date: '2020-06-20T00:00:00.000Z',
        instagram: {
            biography: 'O vereador do povo.',
            email: '',
            followers: 2954,
            following: 228,
            username: 'franciscopastene',
            full_name: 'Francisco Pastene',
            url: 'https://instagram.com/franciscopastene',
            website: null,
            business_account: false,
            business_category_name: null,
            verified: true,
            joined_recently: false,
            profile_pic_url: 'https://scontent-lht6-1.cdninstagram.com/v/t51.2885-19/s150x150/10246110_198869057142688_339063835_a.jpg?_nc_ht=scontent-lht6-1.cdninstagram.com&_nc_ohc=XmJb4YV5ZGsAX9jcO4D&oh=0adc2791cf1e4b3ca004ebe4963e22e7&oe=5F15035C',
            posts: [
                {
                    image: 'https://scontent-lht6-1.cdninstagram.com/v/t51.2885-15/e35/12825942_153678265021961_2080773462_n.jpg?_nc_ht=scontent-lht6-1.cdninstagram.com&_nc_cat=105&_nc_ohc=7eYuozkjEzgAX9GyaP-&oh=c43278aeacf2bb16c398549b443146b2&oe=5F1639D6',
                    caption: '',
                    date: '2016-03-08T16:38:18.000Z',
                    timestamp: 1457455098,
                    likes: 50,
                    comments: 10
                }
            ],
            comments: 150,
            likes: 352,
            engagement: 3.08,
            frequency: { days: 0, hours: 0, minutes: 0, seconds: 0, milliseconds: 0 }

        },
        twitter: {
            biography: 'Politico, igualdade para todos.',
            username: 'fpastene',
            full_name: 'Francisco J. Pastene',
            profile_pic_url: 'https://scontent-lht6-1.cdninstagram.com/v/t51.2885-19/s150x150/10246110_198869057142688_339063835_a.jpg?_nc_ht=scontent-lht6-1.cdninstagram.com&_nc_ohc=XmJb4YV5ZGsAX9jcO4D&oh=0adc2791cf1e4b3ca004ebe4963e22e7&oe=5F15035C',
            verified: true,
            followers: 896,
            following: 32,
        },    
        facebook: {
            biography: 'Politico.',
            username: 'chicao767',
            full_name: 'Francisco Pastene',
            profile_pic_url: 'https://scontent-lht6-1.cdninstagram.com/v/t51.2885-19/s150x150/10246110_198869057142688_339063835_a.jpg?_nc_ht=scontent-lht6-1.cdninstagram.com&_nc_ohc=XmJb4YV5ZGsAX9jcO4D&oh=0adc2791cf1e4b3ca004ebe4963e22e7&oe=5F15035C',
            verified: true,
            followers: 985,
            likes: 452,
        },    
        youtube: {
            subscribers: 300
        }    
    }

]

// httpClient.get(END_POINT)

// const getBook = book_id => httpClient.get(`${END_POINT}/${book_id}`)

export {
    getSocial,
    getListSocials
}    