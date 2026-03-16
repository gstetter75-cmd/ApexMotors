/* ==========================================================================
   APEX MOTORS — Vehicle Data Module
   Centralized vehicle database for modal, cards, and inquiry form
   ========================================================================== */

const vehicleData = [
  // --- Supersport Collection ---
  {
    id: "vortex-gt",
    brand: "Apex Motors",
    model: "Vortex GT",
    name: "Apex Vortex GT",
    year: 2025,
    category: "supersport",
    badge: "New",
    images: [
      "https://images.pexels.com/photos/9130190/pexels-photo-9130190.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/9130190/pexels-photo-9130190.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/5158160/pexels-photo-5158160.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    specs: {
      hp: 820,
      topSpeed: "342 km/h",
      acceleration: "2.7s",
      engine: "4.0L Twin-Turbo V8",
      drivetrain: "AWD",
      weight: "1,420 kg",
      transmission: "7-Speed DCT"
    },
    description: {
      en: "The Apex Vortex GT represents the new generation of supersport engineering. With its twin-turbocharged V8 producing 820 horsepower and an advanced all-wheel-drive system, it delivers breathtaking acceleration while maintaining exceptional road manners. The carbon-ceramic brakes and active aerodynamics ensure confidence-inspiring performance at any speed.",
      de: "Der Apex Vortex GT repr\u00e4sentiert die neue Generation des Supersport-Engineerings. Mit seinem Twin-Turbo-V8, der 820 PS leistet, und einem fortschrittlichen Allradsystem liefert er atemberaubende Beschleunigung bei au\u00dFergew\u00f6hnlichem Fahrverhalten. Carbon-Keramik-Bremsen und aktive Aerodynamik sorgen f\u00fcr vertrauenserweckende Performance bei jeder Geschwindigkeit."
    }
  },
  {
    id: "nemesis-rsr",
    brand: "Apex Motors",
    model: "Nemesis RSR",
    name: "Apex Nemesis RSR",
    year: 2025,
    category: "supersport",
    badge: "Limited",
    badgeClass: "badge-limited",
    limited: { total: 25 },
    images: [
      "https://images.pexels.com/photos/11629361/pexels-photo-11629361.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/11629361/pexels-photo-11629361.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/30054873/pexels-photo-30054873.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    specs: {
      hp: 1200,
      topSpeed: "365 km/h",
      acceleration: "2.3s",
      engine: "5.2L Twin-Turbo V10",
      drivetrain: "RWD",
      weight: "1,280 kg",
      transmission: "6-Speed Sequential"
    },
    description: {
      en: "Track-bred and road-legal, the Nemesis RSR is an uncompromising machine born from decades of motorsport DNA. Its naturally aspirated V10, boosted by twin turbochargers, produces a staggering 1,200 horsepower. Limited to just 25 units worldwide, each one was hand-assembled over 400 hours. Exclusively sourced through Apex Motors.",
      de: "Rennstrecken-geboren und stra\u00dfenzugelassen \u2014 der Nemesis RSR ist eine kompromisslose Maschine, geboren aus Jahrzehnten Motorsport-DNA. Sein Saugmotor-V10, verst\u00e4rkt durch Twin-Turbolader, leistet atemberaubende 1.200 PS. Limitiert auf nur 25 Exemplare weltweit, wurde jedes einzelne in \u00fcber 400 Stunden Handarbeit montiert. Exklusiv \u00fcber Apex Motors erh\u00e4ltlich."
    }
  },
  {
    id: "phantom-s",
    brand: "Apex Motors",
    model: "Phantom S",
    name: "Apex Phantom S",
    year: 2024,
    category: "supersport",
    images: [
      "https://images.pexels.com/photos/30806967/pexels-photo-30806967.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/30806967/pexels-photo-30806967.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/12987129/pexels-photo-12987129.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    specs: {
      hp: 710,
      topSpeed: "325 km/h",
      acceleration: "2.9s",
      engine: "3.8L Twin-Turbo V6",
      drivetrain: "AWD",
      weight: "1,380 kg",
      transmission: "8-Speed DCT"
    },
    description: {
      en: "Stealth meets performance in the Phantom S. Its sleek, aerodynamically optimized silhouette hides a ferocious twin-turbo V6 heart capable of 710 horsepower. Advanced driver assistance systems and adaptive suspension make it equally comfortable on a grand touring journey or a spirited mountain pass.",
      de: "Stealth trifft Performance im Phantom S. Seine schlanke, aerodynamisch optimierte Silhouette verbirgt ein wildes Twin-Turbo-V6-Herz mit 710 PS. Fortschrittliche Fahrerassistenzsysteme und adaptives Fahrwerk machen ihn gleicherma\u00dfen komfortabel auf der Grand Tour wie auf einem spiritigen Alpenpass."
    }
  },
  {
    id: "zenith-one",
    brand: "Apex Motors",
    model: "Zenith One",
    name: "Apex Zenith One",
    year: 2025,
    category: "supersport",
    badge: "1 of 7",
    badgeClass: "badge-limited",
    limited: { total: 7 },
    images: [
      "https://images.pexels.com/photos/30644946/pexels-photo-30644946.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/30644946/pexels-photo-30644946.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/8192659/pexels-photo-8192659.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    specs: {
      hp: 1500,
      topSpeed: "380 km/h",
      acceleration: "2.1s",
      engine: "6.5L Quad-Turbo V12",
      drivetrain: "AWD",
      weight: "1,350 kg",
      transmission: "7-Speed Sequential"
    },
    description: {
      en: "The Zenith One is the ultimate expression of Apex engineering. With only 7 units ever produced, each features a bespoke quad-turbocharged V12 producing 1,500 horsepower, a full carbon fiber monocoque, and active aerodynamics that generate over 1,200 kg of downforce at speed. This is not merely a hypercar. This is automotive art.",
      de: "Der Zenith One ist der ultimative Ausdruck von Apex Engineering. Mit nur 7 jemals produzierten Exemplaren bietet jedes einen ma\u00dfgeschneiderten Quad-Turbo-V12 mit 1.500 PS, ein vollst\u00e4ndiges Carbon-Monocoque und aktive Aerodynamik, die bei Geschwindigkeit \u00fcber 1.200 kg Abtrieb erzeugt. Das ist nicht blo\u00df ein Hypercar. Das ist automobile Kunst."
    }
  },
  {
    id: "classica-964",
    brand: "Apex Motors",
    model: "Classica 964",
    name: "Apex Classica 964",
    year: 1991,
    category: "supersport",
    badge: "Heritage",
    images: [
      "https://images.pexels.com/photos/17377922/pexels-photo-17377922.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/17377922/pexels-photo-17377922.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/12175738/pexels-photo-12175738.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    specs: {
      hp: 450,
      topSpeed: "298 km/h",
      acceleration: "3.8s",
      engine: "3.6L Flat-6 Turbo",
      drivetrain: "RWD",
      weight: "1,120 kg",
      transmission: "5-Speed Manual"
    },
    description: {
      en: "A meticulously restored and enhanced air-cooled icon. The Classica 964 has been completely reimagined by Apex engineers while preserving the soul of the original. The rebuilt flat-six now produces 450 horsepower through a perfectly calibrated turbo system, paired with a period-correct 5-speed manual gearbox.",
      de: "Eine akribisch restaurierte und verbesserte luftgek\u00fchlte Ikone. Der Classica 964 wurde von Apex-Ingenieuren komplett neu interpretiert, w\u00e4hrend die Seele des Originals bewahrt wurde. Der neu aufgebaute Boxermotor leistet nun 450 PS durch ein perfekt kalibriertes Turbosystem, gepaart mit einem zeitgem\u00e4\u00dfen 5-Gang-Schaltgetriebe."
    }
  },
  {
    id: "volt-hyperion",
    brand: "Apex Motors",
    model: "Volt Hyperion",
    name: "Apex Volt Hyperion",
    year: 2026,
    category: "supersport",
    badge: "Electric",
    badgeClass: "badge-limited",
    limited: { total: 50 },
    images: [
      "https://images.pexels.com/photos/29851072/pexels-photo-29851072.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/29851072/pexels-photo-29851072.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/5288724/pexels-photo-5288724.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    specs: {
      hp: 1800,
      topSpeed: "370 km/h",
      acceleration: "1.9s",
      engine: "Tri-Motor Electric",
      drivetrain: "AWD",
      weight: "1,680 kg",
      transmission: "Single-Speed Direct"
    },
    description: {
      en: "The future of performance arrives with the Volt Hyperion. Three electric motors produce a combined 1,800 horsepower with instantaneous torque delivery. The 120 kWh solid-state battery pack provides 450 km of range, while 350 kW ultra-rapid charging reaches 80% in just 15 minutes. Limited to 50 units worldwide.",
      de: "Die Zukunft der Performance kommt mit dem Volt Hyperion. Drei Elektromotoren erzeugen zusammen 1.800 PS mit sofortiger Drehmomentabgabe. Das 120-kWh-Festk\u00f6rperbatteriepaket bietet 450 km Reichweite, w\u00e4hrend 350-kW-Ultra-Schnellladung in nur 15 Minuten 80% erreicht. Limitiert auf 50 Exemplare weltweit."
    }
  },

  // --- Premium Collection ---
  {
    id: "bmw-m4",
    brand: "BMW",
    model: "M4 Competition",
    name: "BMW M4 Competition",
    year: 2024,
    category: "premium",
    type: "coupe",
    images: [
      "https://images.pexels.com/photos/3849556/pexels-photo-3849556.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/3849556/pexels-photo-3849556.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    specs: {
      hp: 510,
      topSpeed: "250 km/h",
      acceleration: "3.9s",
      engine: "3.0L Twin-Turbo I6",
      drivetrain: "RWD",
      weight: "1,725 kg",
      transmission: "8-Speed Automatic"
    },
    description: {
      en: "The BMW M4 Competition combines everyday usability with track-capable performance. Its twin-turbo inline-six delivers 510 horsepower with a distinctive, intoxicating exhaust note. Adaptive M suspension and M-specific steering provide razor-sharp handling.",
      de: "Der BMW M4 Competition vereint Alltagstauglichkeit mit rennstreckentauglicher Performance. Sein Twin-Turbo-Reihensechszylinder liefert 510 PS mit einem unverwechselbaren, berauschenden Auspuffsound. Adaptives M-Fahrwerk und M-spezifische Lenkung bieten messerscharfes Handling."
    }
  },
  {
    id: "amg-gt63",
    brand: "Mercedes-AMG",
    model: "GT 63 S",
    name: "Mercedes-AMG GT 63 S",
    year: 2024,
    category: "premium",
    type: "sedan",
    images: [
      "https://images.pexels.com/photos/63767/pexels-photo-63767.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/63767/pexels-photo-63767.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    specs: {
      hp: 639,
      topSpeed: "315 km/h",
      acceleration: "3.2s",
      engine: "4.0L Twin-Turbo V8",
      drivetrain: "AWD",
      weight: "2,045 kg",
      transmission: "9-Speed MCT"
    },
    description: {
      en: "The GT 63 S is the pinnacle of AMG's four-door grand tourer philosophy. A hand-built 4.0L twin-turbo V8 delivers 639 horsepower, while the fully variable AMG Performance 4MATIC+ all-wheel drive provides exceptional traction in all conditions.",
      de: "Der GT 63 S ist der Gipfel von AMGs Viert\u00fcrer-Grand-Tourer-Philosophie. Ein handgebauter 4,0-Liter-Twin-Turbo-V8 liefert 639 PS, w\u00e4hrend der vollvariable AMG Performance 4MATIC+ Allradantrieb au\u00dfergew\u00f6hnliche Traktion unter allen Bedingungen bietet."
    }
  },
  {
    id: "range-rover-svr",
    brand: "Range Rover",
    model: "Sport SVR",
    name: "Range Rover Sport SVR",
    year: 2024,
    category: "premium",
    type: "suv",
    images: [
      "https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    specs: {
      hp: 575,
      topSpeed: "283 km/h",
      acceleration: "4.3s",
      engine: "5.0L Supercharged V8",
      drivetrain: "AWD",
      weight: "2,310 kg",
      transmission: "8-Speed Automatic"
    },
    description: {
      en: "The Range Rover Sport SVR defies the boundaries between luxury SUV and performance machine. Its supercharged V8 produces 575 horsepower, propelling this luxury cruiser with astonishing speed. Off-road capability meets on-road dominance.",
      de: "Der Range Rover Sport SVR sprengt die Grenzen zwischen Luxus-SUV und Performance-Maschine. Sein kompressorgeladener V8 leistet 575 PS und treibt diesen Luxuskreuzer mit erstaunlicher Geschwindigkeit an. Gel\u00e4ndetauglichkeit trifft auf Stra\u00dfendominanz."
    }
  },
  {
    id: "cayenne-gts",
    brand: "Porsche",
    model: "Cayenne GTS",
    name: "Porsche Cayenne GTS",
    year: 2024,
    category: "premium",
    type: "suv",
    images: [
      "https://images.pexels.com/photos/2612855/pexels-photo-2612855.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/2612855/pexels-photo-2612855.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    specs: {
      hp: 460,
      topSpeed: "270 km/h",
      acceleration: "4.5s",
      engine: "4.0L Twin-Turbo V8",
      drivetrain: "AWD",
      weight: "2,175 kg",
      transmission: "8-Speed Tiptronic"
    },
    description: {
      en: "The Cayenne GTS is the sports car among SUVs. Porsche's twin-turbo V8 delivers 460 horsepower with the unmistakable GTS exhaust note. Active suspension management and rear-axle steering make it handle like a vehicle half its size.",
      de: "Der Cayenne GTS ist der Sportwagen unter den SUVs. Porsches Twin-Turbo-V8 liefert 460 PS mit dem unverwechselbaren GTS-Auspuffsound. Aktives Fahrwerksmanagement und Hinterachslenkung lassen ihn sich wie ein Fahrzeug halber Gr\u00f6\u00dfe fahren."
    }
  },
  {
    id: "amg-gt-coupe",
    brand: "Mercedes-AMG",
    model: "GT Coup\u00e9",
    name: "Mercedes-AMG GT Coup\u00e9",
    year: 2025,
    category: "premium",
    type: "coupe",
    images: [
      "https://images.pexels.com/photos/17476943/pexels-photo-17476943.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/17476943/pexels-photo-17476943.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    specs: {
      hp: 585,
      topSpeed: "318 km/h",
      acceleration: "3.4s",
      engine: "4.0L Twin-Turbo V8",
      drivetrain: "RWD",
      weight: "1,785 kg",
      transmission: "7-Speed DCT"
    },
    description: {
      en: "Pure two-door grand touring excellence. The AMG GT Coup\u00e9 features a front-mid-mounted V8 for perfect weight distribution, a transaxle rear-mounted transmission, and a driver-focused cockpit that makes every journey an event.",
      de: "Pures zweit\u00fcriges Grand-Touring-Exzellenz. Das AMG GT Coup\u00e9 bietet einen vorne-mittig montierten V8 f\u00fcr perfekte Gewichtsverteilung, ein Transaxle-Heckgetriebe und ein fahrerorientiertes Cockpit, das jede Fahrt zum Erlebnis macht."
    }
  },
  {
    id: "s580",
    brand: "Mercedes-Benz",
    model: "S 580 4MATIC",
    name: "Mercedes-Benz S 580 4MATIC",
    year: 2024,
    category: "premium",
    type: "sedan",
    images: [
      "https://images.pexels.com/photos/164634/pexels-photo-164634.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/164634/pexels-photo-164634.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    specs: {
      hp: 503,
      topSpeed: "250 km/h",
      acceleration: "4.4s",
      engine: "4.0L Twin-Turbo V8 + EQ Boost",
      drivetrain: "AWD",
      weight: "2,165 kg",
      transmission: "9-Speed Automatic"
    },
    description: {
      en: "The S-Class defines automotive luxury. The S 580 combines a twin-turbo V8 with 48V mild-hybrid technology for effortless power delivery. Rear-axle steering, E-Active Body Control, and the MBUX Hyperscreen create an unparalleled driving and riding experience.",
      de: "Die S-Klasse definiert automobilen Luxus. Der S 580 kombiniert einen Twin-Turbo-V8 mit 48V-Mild-Hybrid-Technologie f\u00fcr m\u00fchelosen Kraftfluss. Hinterachslenkung, E-Active Body Control und der MBUX Hyperscreen schaffen ein unerreichtes Fahr- und Reiseerlebnis."
    }
  },
  {
    id: "bmw-i4-m50",
    brand: "BMW",
    model: "i4 M50",
    name: "BMW i4 M50",
    year: 2024,
    category: "premium",
    type: "electric",
    images: [
      "https://images.pexels.com/photos/19281437/pexels-photo-19281437.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/19281437/pexels-photo-19281437.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    specs: {
      hp: 544,
      topSpeed: "225 km/h",
      acceleration: "3.9s",
      engine: "Dual Electric Motors",
      drivetrain: "AWD",
      weight: "2,215 kg",
      transmission: "Single-Speed"
    },
    description: {
      en: "The first all-electric M Performance vehicle. The i4 M50 delivers instant torque from dual electric motors producing 544 horsepower. With an 83.9 kWh battery providing up to 520 km range, it proves that electric driving can be thrilling.",
      de: "Das erste vollelektrische M Performance Fahrzeug. Der i4 M50 liefert sofortiges Drehmoment von zwei Elektromotoren mit 544 PS. Mit einer 83,9-kWh-Batterie und bis zu 520 km Reichweite beweist er, dass elektrisches Fahren aufregend sein kann."
    }
  },
  {
    id: "taycan-turbo-s",
    brand: "Porsche",
    model: "Taycan Turbo S",
    name: "Porsche Taycan Turbo S",
    year: 2025,
    category: "premium",
    type: "electric",
    images: [
      "https://images.pexels.com/photos/26954166/pexels-photo-26954166.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/26954166/pexels-photo-26954166.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    specs: {
      hp: 761,
      topSpeed: "260 km/h",
      acceleration: "2.8s",
      engine: "Dual Electric Motors",
      drivetrain: "AWD",
      weight: "2,295 kg",
      transmission: "2-Speed (Rear)"
    },
    description: {
      en: "The Taycan Turbo S rewrites the rules of electric performance. With 761 horsepower on overboost and Porsche's innovative 2-speed rear transmission, it combines explosive acceleration with Porsche's legendary handling DNA. 800V architecture enables rapid charging.",
      de: "Der Taycan Turbo S schreibt die Regeln elektrischer Performance neu. Mit 761 PS im Overboost und Porsches innovativem 2-Gang-Heckgetriebe kombiniert er explosive Beschleunigung mit Porsches legend\u00e4rer Handling-DNA. Die 800V-Architektur erm\u00f6glicht ultraschnelles Laden."
    }
  }
];

function getVehicleById(id) {
  return vehicleData.find(v => v.id === id) || null;
}
