type storeDataType = {
  id: number,
  title: string,
  price: number,
  description: string,
  category: string,
  image: string,
  rating: {rate: number, count: number},
}

export const storeData:storeDataType[] = [
  {
    id: 1,
    title: "THE GRAND MOGUL",
    price: 109.95,
    description:
      "Mughal painting has been known and appreciated in Europe since the early seventeenth century. Sir Thomas Roe, the English ambassador to the Mughal Court between 1615 and 1618, brought paintings back to England, and in 1639 a Mughal album was presented to the Bodleian Library at Oxford University by Archbishop Laud.",
    category: "Mogul",
    image: "https://www.rarebooksocietyofindia.org/photo_archive/ID-1621930381",
    rating: { rate: 3.9, count: 120 },
  },
  {
    id: 2,
    title: "THE IMERIAL IMAGE",
    price: 22.3,
    description:
      "In Muslim India, as in the Islamic world generally, books were regarded as precious objects. Physically valuable because of the materials and time that went into their preparation, they were tangible evidence of wealth, intelligence, and power.",
    category: "British Rule",
    image:
      "https://www.rarebooksocietyofindia.org/photo_archive/ID-1621930312",
    rating: { rate: 4.1, count: 259 },
  },
  {
    id: 3,
    title: "Digital Rare Book",
    price: 55.99,
    description:
      "Of all the acts associated with the administration of Lord William Bentinck there was none more important or of greater consequence than the new education policy inaugurated in 1834, which was based on the establishment of English as the official language of the country. ",
    category: "British Rule",
    image: "https://www.rarebooksocietyofindia.org/photo_archive/196174216674_10155066395676675",
    rating: { rate: 4.7, count: 500 },
  },
  {
    id: 4,
    title: "Indian Famines, their Causes and Prevention",
    price: 15.99,
    description:
      "A family was starving in a relief camp during the Madras Famine 1876-1878, Tamil Nadu, South India. A twenty-year-old man, five feet tall, weighed sixty-two and a half pounds.",
    category: "British Rule",
    image: "https://www.rarebooksocietyofindia.org/photo_archive/196174216674_10154993371901675",
    rating: { rate: 2.1, count: 430 },
  },
  {
    id: 5,
    title:
      "The History of the Church of Malabar",
    price: 695,
    description:
      "he History of the Church of Malabar, from the time of its being first discover'd by the Portuguezes in the year 1501 : giving an account of the persecutions and violent methods of the Roman prelates, to reduce them to the subjection of the Church of Rome",
    category: "British Rule",
    image: "https://www.rarebooksocietyofindia.org/photo_archive/196174216674_10155031091976675",
    rating: { rate: 4.6, count: 400 },
  },
  {
    id: 6,
    title: "The Mughal Empire",
    price: 168,
    description:
      "This, the seventh volume of the series, deals with the period from 1526 to 1707 A.D. during which the Mughuls gradually established their authority over nearly the whole of India. This is the brightest Chapter in the history of Muslim rule in India, which began in the 13th century A.D. and covers a period of nearly six hundred years in north and five hundred years in south India.",
    category: "Mogul",
    image: "https://www.rarebooksocietyofindia.org/photo_archive/ID-1621928359",
    rating: { rate: 3.9, count: 70 },
  },
  {
    id: 7,
    title: "History of Aurangzib",
    price: 9.99,
    description:
      "Muhi-ud-Din Muhammad (3 November 1618 â€“ 3 March 1707), commonly known by the sobriquet Aurangzeb or by his regnal title Alamgir (Persian: 'Conqueror of the World') was the sixth Mughal emperor, who ruled over almost the entire Indian subcontinent for a period of 49 years",
    category: "Mogul",
    image: "https://www.rarebooksocietyofindia.org/photo_archive/ID-1621581876",
    rating: { rate: 3, count: 400 },
  },
  {
    id: 8,
    title: "Srimad Bhagavatam",
    price: 10.99,
    description:
      "Abhay Charanaravinda Bhaktivedanta Swami (1 September 1896 â€“ 14 November 1977) or Srila Prabhupada, born Abhay Charan De, was an Indian spiritual teacher and the founder-acharya (preceptor) of the International Society for Krishna Consciousness (ISKCON), commonly known as the 'Hare Krishna Movement'. Members of the ISKCON movement view Bhaktivedanta Swami as a representative and messenger of Krishna Chaitanya.",
    category: "Gurus",
    image: "https://www.rarebooksocietyofindia.org/photo_archive/ID-1606579230",
    rating: { rate: 1.9, count: 100 },
  },
  {
    id: 9,
    title: "Autobiography of a Yogi",
    price: 64,
    description:
      "Paramahansa Yogananda (born Mukunda Lal Ghosh; January 5, 1893 â€“ March 7, 1952) was an Indian monk, yogi and guru who introduced millions to the teachings of meditation and Kriya Yoga through his organization Self-Realization Fellowship (SRF) / Yogoda Satsanga Society (YSS) of India, and who lived his last 32 years in America",
    category: "Gurus",
    image: "https://www.rarebooksocietyofindia.org/photo_archive/ID-1606579176",
    rating: { rate: 3.3, count: 203 },
  },
  {
    id: 10,
    title: "Sri Aurobindo",
    price: 109,
    description:
      "Sri Aurobindo (born Aurobindo Ghose; 15 August 1872 â€“ 5 December 1950) was an Indian philosopher, yogi, guru, poet, and nationalist. He joined the Indian movement for independence from British rule, for a while was one of its influential leaders and then became a spiritual reformer, introducing his visions on human progress and spiritual evolution.",
    category: "Gurus",
    image: "https://www.rarebooksocietyofindia.org/photo_archive/ID-1606579082",
    rating: { rate: 2.9, count: 470 },
  },
];

export const categories:string[] = ["All", "Mogul", "British Rule", "Gurus"]
