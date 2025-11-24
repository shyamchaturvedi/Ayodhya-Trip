import { Place, ZoneType } from './types';

export const INITIAL_PLACES: Place[] = [
  // RAM MANDIR ZONE
  {
    id: '1',
    name: 'Ram Janmabhoomi Mandir',
    distance: '0 km',
    mapLink: 'https://maps.app.goo.gl/J5Q2iVWqsKq2',
    description: 'Shri Ram ka janm sthal, bhavya naya mandir.',
    zone: ZoneType.RAM_MANDIR
  },
  {
    id: '2',
    name: 'Kanak Bhawan',
    distance: '~1.1 km',
    mapLink: 'https://maps.app.goo.gl/f8ws1H5D3P',
    description: 'Ram-Sita ka suvarn bhawan, prem ki pehchaan.',
    zone: ZoneType.RAM_MANDIR
  },
  {
    id: '3',
    name: 'Dashrath Mahal',
    distance: '~700 m',
    mapLink: 'https://maps.app.goo.gl/ZGq2Ka3pP42',
    description: 'Maharaj Dashrath ka puratan mahal.',
    zone: ZoneType.RAM_MANDIR
  },
  {
    id: '4',
    name: 'Sita Rasoi',
    distance: '~2.3 km',
    mapLink: 'https://maps.app.goo.gl/sitaRasoi',
    description: 'Mata Sita ki pavitra rasoi.',
    zone: ZoneType.RAM_MANDIR
  },
  {
    id: '5',
    name: 'Tulsi Smarak Bhavan',
    distance: '~3 km',
    mapLink: 'https://maps.app.goo.gl/tulsismarak',
    description: 'Goswami Tulsidas ji se sambandhit sthal.',
    zone: ZoneType.RAM_MANDIR
  },
  {
    id: '6',
    name: 'Tulsi Udyan',
    distance: '~2.8 km',
    mapLink: 'https://maps.app.goo.gl/tulsiudyan',
    description: 'Prakritik sundarta se bharpur.',
    zone: ZoneType.RAM_MANDIR
  },
  {
    id: '7',
    name: 'Shri Ram Katha Museum',
    distance: '~3 km',
    mapLink: 'https://maps.app.goo.gl/ramkathamuseum',
    description: 'Ramayan aur Ayodhya ka itihaas samarpit.',
    zone: ZoneType.RAM_MANDIR
  },
  {
    id: '8',
    name: 'Mani Parvat',
    distance: '~4 km',
    mapLink: 'https://maps.app.goo.gl/maniparvat',
    description: 'Hanuman ji sanjeevani le jaate waqt gira parvat.',
    zone: ZoneType.RAM_MANDIR
  },
  {
    id: '9',
    name: 'Valmiki Bhavan',
    distance: '~4.2 km',
    mapLink: 'https://maps.app.goo.gl/valmikibhavan',
    description: 'Ramayan rachnakaar Maharshi Valmiki ka ashram.',
    zone: ZoneType.RAM_MANDIR
  },

  // HANUMAN GARHI ZONE
  {
    id: '10',
    name: 'Hanuman Garhi Temple',
    distance: '0 km',
    mapLink: 'https://maps.app.goo.gl/hanumangarhi',
    description: '76 seedhiyon wali prachin Hanuman ji ki gaddi.',
    zone: ZoneType.HANUMAN_GARHI
  },
  {
    id: '11',
    name: 'Anjaneya Temple',
    distance: '~350 m',
    mapLink: 'https://maps.app.goo.gl/anjaney',
    description: 'Hanuman ji ka ek aur roop.',
    zone: ZoneType.HANUMAN_GARHI
  },
  {
    id: '12',
    name: 'Dashrath Kund',
    distance: '~1 km',
    mapLink: 'https://maps.app.goo.gl/dashrathkund',
    description: 'Raja Dashrath se judi pavitra jheel.',
    zone: ZoneType.HANUMAN_GARHI
  },
  {
    id: '13',
    name: 'Raj Sadan',
    distance: '~1.5 km',
    mapLink: 'https://maps.app.goo.gl/rajsadan',
    description: 'Ayodhya rajvansh ka mahal.',
    zone: ZoneType.HANUMAN_GARHI
  },
  {
    id: '14',
    name: 'Kaushalya Bhawan',
    distance: '~1.3 km',
    mapLink: 'https://maps.app.goo.gl/kaushalyabhawan',
    description: 'Mata Kaushalya se sambandhit itihasik sthal.',
    zone: ZoneType.HANUMAN_GARHI
  },
  {
    id: '15',
    name: 'Bharat Kund',
    distance: '~12 km',
    mapLink: 'https://maps.app.goo.gl/bharatk',
    description: 'Bharat ji ka tapasya sthal.',
    zone: ZoneType.HANUMAN_GARHI
  },
  {
    id: '16',
    name: 'Brahmakund',
    distance: '~2 km',
    mapLink: 'https://maps.app.goo.gl/brahmakund',
    description: 'Pavitra snaan sthal.',
    zone: ZoneType.HANUMAN_GARHI
  },
  {
    id: '17',
    name: 'Laxman Fort (Purana Durg)',
    distance: '~4 km',
    mapLink: 'https://maps.app.goo.gl/laxmanfort',
    description: 'Laxman ji se sambandhit sanrakshit durg.',
    zone: ZoneType.HANUMAN_GARHI
  },

  // SARYU GHAT ZONE
  {
    id: '18',
    name: 'Saryu Ghat / Ram Ki Paidi',
    distance: '0 km',
    mapLink: 'https://maps.app.goo.gl/saryughat',
    description: 'Saryu aarti, ghaat aur pavitra snaan sthal.',
    zone: ZoneType.SARYU_GHAT
  },
  {
    id: '19',
    name: 'Swarg Dwar',
    distance: '~500 m',
    mapLink: 'https://maps.app.goo.gl/swargdwar',
    description: 'Parampara ke anusaar "swarg ka dwar".',
    zone: ZoneType.SARYU_GHAT
  },
  {
    id: '20',
    name: 'Naya Ghat',
    distance: '~800 m',
    mapLink: 'https://maps.app.goo.gl/nayaghat',
    description: 'Photography & sunrise ke liye best.',
    zone: ZoneType.SARYU_GHAT
  },
  {
    id: '21',
    name: 'Guptar Ghat',
    distance: '~13 km',
    mapLink: 'https://maps.app.goo.gl/guptarg',
    description: 'Jahan Shri Ram ne "jal samadhi" li thi.',
    zone: ZoneType.SARYU_GHAT
  },
  {
    id: '22',
    name: 'Queen Huh Memorial Park',
    distance: '~2 km',
    mapLink: 'https://maps.app.goo.gl/queenpark',
    description: 'Korea-Ayodhya parivarik rishte ka pratik.',
    zone: ZoneType.SARYU_GHAT
  },
  {
    id: '23',
    name: 'Saryu Barrage',
    distance: '~5 km',
    mapLink: 'https://maps.app.goo.gl/saryubarrage',
    description: 'Scenic view point.',
    zone: ZoneType.SARYU_GHAT
  },
  {
    id: '24',
    name: 'Nandi Ghat',
    distance: '~1 km',
    mapLink: 'https://maps.app.goo.gl/nandighat',
    description: 'Shant aur kam bheed wala ghat.',
    zone: ZoneType.SARYU_GHAT
  }
];