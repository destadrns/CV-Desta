const educationHistory = [
    { id: 1, period: '2023 - Sekarang', institution: 'Universitas Amikom Yogyakarta', major: 'S1 - Teknik Informatika' },
    { id: 2, period: '2020 - 2023', institution: 'SMA Negeri 1 Depok', major: 'MIPA' }
  ];

  const skills = [
    { name: 'Vue.js',
      level: 'Mahir',
      iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg'
    },

    { name: 'JavaScript',
      level: 'Mahir',
      iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'
    },

    { name: 'Tailwind CSS',
      level: 'Mahir',
      iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg'
    },

    { name: 'Node.js',
      level: 'Menengah',
      iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg'
    },

    { name: 'React.js',
      level: 'Menengah',
      iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
    },

    { name: 'MySQL',
      level: 'Menengah',
      iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg'
    },

    { name: 'Git & GitHub',
      level: 'Mahir',
      iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg'
    },
    { name: 'HTML5 & CSS3',
      level: 'Mahir',
      iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg'
    }
  ];

  const projects = [
    {
      title: 'Website Rental',
      image: 'rental',
      description: 'Website untuk sewa mobil secara online.',
      tech: ['React.js', 'Laravel', 'MySQL'],
      link: 'https://github.com/LavinaCaco/rentaliqra'
    },
    {
      title: 'APK Reservasi Hotel',
      image: 'hotel',
      description: 'Aplikasi untuk memudahkan admin hotel dalam mengatur penginapan.',
      tech: ['C#'],
      link: 'https://github.com/ddeizz/Reservasi_Hotel'
    }
  ];

  module.exports = { educationHistory, skills, projects };