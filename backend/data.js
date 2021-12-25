import bcrypt from "bcryptjs";

const data = {
  users: [
    {
      name: "khiem0cry",
      email: "ledohoangkhiem3k@gmail.com",
      password: bcrypt.hashSync("1", 8),
      isAdmin: true,
      isSeller: true,
      seller: {
        name: "Hoang Khiem",
        logo: "/images/logokhiem.png",
        description: "young seller",
        rating: 4.5,
        numReviews: 120,
      },
    },
    {
      name: "Seller 1",
      email: "1@gmail.com",
      password: bcrypt.hashSync("1", 8),
      isAdmin: false,
      isSeller: true,
      seller: {
        name: "John",
        logo: "/images/logokhach1.jpg",
        description: "best seller",
        rating: 4.5,
        numReviews: 120,
      },
    },
    {
      name: "Seller 2",
      email: "2@gmail.com",
      password: bcrypt.hashSync("2", 8),
      isAdmin: false,
      isSeller: true,
      seller: {
        name: "Alex",
        logo: "/images/logokhach2.jpg",
        description: "best seller",
        rating: 4.5,
        numReviews: 120,
      },
    },
    {
      name: "John",
      email: "user@example.com",
      password: bcrypt.hashSync("1234", 8),
      isAdmin: false,
    },
  ],
  products: [
    {
      name: "The Storyteller: Tales of Life and Music",
      category: "Arts & Photography",
      image: "/images/thestoreyteller.jpg",
      price: 18,
      countInStock: 50,
      brand: "Dave Grohl",
      rating: 4.5,
      numReviews: 10,
      description:
        "Having entertained the idea for years, and even offered a few questionable opportunities. Its a piece of cake! Just do 4 hours of interviews, find someone else to write it, put your face on the cover, and voila! I have decided to write these stories just as I have always done, in my own hand. The joy that I have felt from chronicling these tales is not unlike listening back to a song that Ive recorded and cant wait to share with the world, or reading a primitive journal entry from a stained notebook, or even hearing my voice bounce between the Kiss posters on my wall as a child.",
    },

    {
      name: "How to Draw Cool Stuff",
      category: "Arts & Photography",
      image: "/images/drawcool.jpg",
      price: 20,
      countInStock: 12,
      brand: "Mark Manson",
      rating: 4.5,
      numReviews: 15,
      description:
        "This book contains a series of fun, hands-on exercises that will help you see line, shape, space and other elements in everyday objects and turn them into detailed works of art in just a few simple steps. The exercises in this book will help train your brain so you can visualize ordinary objects in a different manner, allowing you to see through the eyes of an artist. From photorealistic faces to holiday themes and tattoo drawings, How to Draw Cool Stuff makes drawing easier than you would think and more fun than you ever imagined! Now is the time to learn how to draw the subjects and scenes you've always dreamt of drawing.",
    },
    {
      name: "I Am Confident",
      category: "Arts & Photography",
      image: "/images/iamcon.jpg",
      price: 13,
      countInStock: 12,
      brand: "Lennon",
      rating: 4.5,
      numReviews: 15,
      description:
        "This book features hundreds of whimsical doodles, including: butterflies, nature scenes, an astronaut, unicorns, science scenes, trees, flowers, a castle, birds, ocean waves, animals, hearts, cats, rainbows, camping scenes, dragons, stars, a gardening scene, a microscope, a treehouse, a telescope, plants, a skyscraper, rockets, space scenes, a train, a superhero cape, musical instruments, art supplies, dolphins, bunnies, rock climbing, elephants, illustrated math equations, dancing, singing, swimming, biking, dogs, an exploration of inner beauty and much, much more!",
    },
    {
      name: "The 1619 Project",
      category: "History",
      image: "/images/1969.jpg",
      price: 31,
      countInStock: 15,
      brand: "Nikole Hannah-Jones",
      rating: 4,
      numReviews: 15,
      description:
        "In late August 1619, a ship arrived in the British colony of Virginia bearing a cargo of twenty to thirty enslaved people from Africa. Their arrival led to the barbaric and unprecedented system of American chattel slavery that would last for the next 250 years. This is sometimes referred to as the country’s original sin, but it is more than that: It is the source of so much that still defines the United States.",
    },
    {
      name: "History of the World Map by Map",
      category: "History",
      image: "/images/history.jpg",
      price: 22,
      countInStock: 15,
      brand: "Dk",
      rating: 5,
      numReviews: 15,
      description:
        "Learn how something like the printing press can define a time, or how the Allies in Europe could defeat the Nazis. There is so much to read about in this remarkable history book, and just as much to look at. Maps are more than the topography of the Earth or the borders of countries. Maps can represent the movement of people and ideas, and they provide a unique way to explain historical themes and explore sweeping periods of time.",
    },
    {
      name: "Interesting Stories For Curious People",
      category: "History",
      image: "/images/inter.jpg",
      price: 33,
      countInStock: 15,
      brand: "Bill O'Neill",
      rating: 4,
      numReviews: 15,
      description:
        "Whether you are a trivia maven or just a person who likes to learn new things, you’ll learn something new and find yourself entertained as you discover some of the most fascination criminals, ghost stories, strange habits of historical figures, and just weird things that are a part of our world. So open this book and your mind and see another side of things that you may not know existed.",
    },
    {
      name: "The Unofficial Disney Parks Cookbook",
      category: "Travel",
      image: "/images/disney.jpg",
      price: 21,
      countInStock: 15,
      brand: "Nikole Hannah-Jones",
      rating: 4,
      numReviews: 15,
      description:
        "Stroll right down the middle of Main Street USA, journey from Adventureland to Infinity and Beyond at Pixar Pier, and explore every avenue in between to taste the flavors of the Disney Parks…all without leaving your kitchen.",
    },
    {
      name: "Destinations of a Lifetime",
      category: "Travel",
      image: "/images/desti.jpg",
      price: 26,
      countInStock: 15,
      brand: "National Geo",
      rating: 4,
      numReviews: 15,
      description:
        "NatGeo takes you on a photographic tour of the world's most spectacular destinations, inspiring tangible ideas for your next trip. Travel to hundreds of the most breathtaking locales-both natural and man-made-illustrated with vivid images taken by the organization's world-class photographers. ",
    },
    {
      name: "Wanderlust",
      category: "Travel",
      image: "/images/wander.jpg",
      price: 29,
      countInStock: 15,
      brand: "Moon Travel Guides",
      rating: 4.5,
      numReviews: 15,
      description:
        "Get inspired with lists of mythic locations, epic trails, ancient cities, and more that span the four corners. This stunning, hardcover book is packed with full-color photos, charming illustrations, and fascinating overviews of each destination, making it the perfect gift for dreamers and adventurers alike.",
    },
  ],
};
export default data;
