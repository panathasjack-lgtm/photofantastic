import { PortfolioItem, ServiceItem } from './types';
import portfolioResort from './assets/images/portfolio_resort_1_1780664984061.png';
import portfolioSunset from './assets/images/portfolio_sunset_1_1780665002746.png';
import portfolioCouple from './assets/images/portfolio_couple_1_1780665019263.png';
import portfolioFamily from './assets/images/portfolio_family_1_1780665036721.png';

export const SERVICES: ServiceItem[] = [
  {
    id: 'hotel-shootings',
    title: 'In-Resort Guest Photography',
    shortDesc: 'Artistic, elegant photography for guests during their stay at elite Crete resorts and luxury hotels.',
    longDesc: 'We partner with premier luxury hotels and resorts in Hersonissos and around Crete. Our resident photographers blend seamlessly with the hotel atmosphere to capture candid, authentic, and upscale moments of your stay. From poolside relaxation to garden strolls and terrace moments, we turn your vacation into a timeless visual story. Note: This service is available exclusively on-site at the specific resort or hotel where you are registered as a staying guest.',
    coverImage: portfolioResort,
    highlights: [
      'Tailored resort portrait sessions',
      'Candid lifestyle and pool-side moments',
      'Exclusive to the grounds of your staying hotel',
      'Seamless coordination with your hotel front desk or concierge'
    ]
  },
  {
    id: 'golden-hour-shootings',
    title: 'Golden Hour Private Shootings',
    shortDesc: 'Bespoke portrait and couple sessions bathed in Crete’s world-renowned honey-warm sunset light.',
    longDesc: 'Crete’s golden hour is legendary. As the sun dips below the Aegean Sea, casting a soft, amber glow over Hersonissos, we create cinematic masterpieces. These private beach or cliffside shoots are carefully timed and directed to harness the most flattering and poetic light of the day. Private sunset beach shoots are hosted exclusively at your registered staying hotel’s private beach access.',
    coverImage: portfolioSunset,
    highlights: [
      'Perfect styling guidance for outdoor Greek sunset light',
      'Breathtaking coastal beach backdrops of your resident resort',
      'Available exclusively at the hotel or resort where you are staying',
      'Optimally timed during the exact astronomical golden hour'
    ]
  },
  {
    id: 'private-portraits',
    title: 'Private & Couple Shoots',
    shortDesc: 'Exclusive, intimate shooting sessions customized for couples, honeymooners, and families.',
    longDesc: 'An exclusive individual, couple, or family session designed around your unique personality and style. Whether you are celebrating an anniversary, a honeymoon, a surprise proposal, or simply wishing to capture family bonds in a beautiful Mediterranean setting, we provide a personalized experience. Please note that shoots are conducted strictly and exclusively on the grounds of the hotel/resort you are currently staying at.',
    coverImage: portfolioCouple,
    highlights: [
      'Surprise proposal and engagement planning & execution',
      'Exclusively hosted on your registered resident hotel grounds',
      'Artistic individual fashion / editorial portraits',
      'Warm edit styles tailored carefully for high-resolution prints'
    ]
  }
];

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: '1',
    title: 'Joyful Ocean Waves Splash',
    category: 'private',
    imageUrl: portfolioFamily,
    location: 'Hersonissos Beach Coast',
    description: 'Breathtaking family beach portraits capturing pure Mediterranean happiness and playful ocean waves.'
  },
  {
    id: '2',
    title: 'Sunset Cliffs Romantic Walk',
    category: 'golden-hour',
    imageUrl: portfolioSunset,
    location: 'Sarantaris Cape Cliffs',
    description: 'An unforgettable afternoon walking along Crete\'s scenic cliffs, bathed in the world-famous golden hour light.'
  },
  {
    id: '3',
    title: 'Intimate Coastal Couple Portrait',
    category: 'private',
    imageUrl: portfolioCouple,
    location: 'Anissaras Sunset Shores',
    description: 'Elegant, romantic editorial portrait capturing sunset laughter on the soft sands of Hersonissos.'
  },
  {
    id: '4',
    title: 'Luxury Villa Poolside Bliss',
    category: 'hotel',
    imageUrl: portfolioResort,
    location: 'Elite Hersonissos Water Villa',
    hotel: 'Stella Island Resort & Spa',
    description: 'High-end resort portrait sessions featuring stunning architectural aesthetics and premium summer relaxation.'
  }
];
