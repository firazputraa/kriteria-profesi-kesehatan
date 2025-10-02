export const quizData = [
  {
    question:
      "Saat melihat seseorang terluka, apa yang pertama kali ingin kamu lakukan?",
    answers: [
      {
        text: "Segera memberikan pertolongan pertama.",
        points: { dokter: 3, perawat: 3 },
      },
      {
        text: "Menganalisis penyebab cederanya.",
        points: { dokter: 2, apoteker: 1 },
      },
      {
        text: "Memastikan mereka mendapatkan obat yang tepat.",
        points: { apoteker: 3 },
      },
      {
        text: "Memikirkan rencana pemulihan jangka panjangnya.",
        points: { ahliGizi: 2 },
      },
    ],
  },
  {
    question: "Kamu lebih tertarik pada...",
    answers: [
      { text: "Cara kerja tubuh manusia dan penyakit.", points: { dokter: 3 } },
      { text: "Interaksi kimia dalam obat-obatan.", points: { apoteker: 3 } },
      {
        text: "Memberikan perawatan dan kenyamanan kepada pasien.",
        points: { perawat: 3 },
      },
      { text: "Pengaruh makanan terhadap kesehatan.", points: { ahliGizi: 3 } },
    ],
  },
  {
    question: "Dalam sebuah tim, kamu lebih suka berperan sebagai...",
    answers: [
      {
        text: "Pemimpin yang mengambil keputusan diagnosis.",
        points: { dokter: 3 },
      },
      {
        text: "Pelaksana yang memastikan semua perawatan berjalan baik.",
        points: { perawat: 3 },
      },
      {
        text: "Ahli teknis yang memastikan semua formula benar.",
        points: { apoteker: 3 },
      },
      {
        text: "Konsultan yang memberikan saran gaya hidup.",
        points: { ahliGizi: 3 },
      },
    ],
  },
  {
    question: "Mana yang paling menggambarkan caramu memecahkan masalah?",
    answers: [
      {
        text: "Analitis, berdasarkan data dan bukti.",
        points: { dokter: 3, apoteker: 2 },
      },
      {
        text: "Empati, fokus pada kebutuhan emosional orang lain.",
        points: { perawat: 3 },
      },
      {
        text: "Sistematis dan teliti, mengikuti prosedur.",
        points: { apoteker: 3 },
      },
      {
        text: "Holistik, melihat gambaran besar dan pencegahan.",
        points: { ahliGizi: 3 },
      },
    ],
  },
  {
    question: "Tugas mana yang paling menarik bagimu?",
    answers: [
      {
        text: "Melakukan operasi atau prosedur medis yang kompleks.",
        points: { dokter: 3 },
      },
      {
        text: "Meracik obat sesuai resep dengan presisi tinggi.",
        points: { apoteker: 3 },
      },
      {
        text: "Mendampingi pasien melewati masa sulit mereka.",
        points: { perawat: 3 },
      },
      {
        text: "Merancang menu makanan sehat untuk pemulihan atlet.",
        points: { ahliGizi: 3 },
      },
    ],
  },
  {
    question: "Lingkungan kerja seperti apa yang kamu idamkan?",
    answers: [
      {
        text: "Ruang gawat darurat yang dinamis dan penuh tantangan.",
        points: { dokter: 3, perawat: 2 },
      },
      {
        text: "Laboratorium atau apotek yang bersih dan terorganisir.",
        points: { apoteker: 3 },
      },
      {
        text: "Bangsal perawatan di mana saya bisa berinteraksi dengan pasien.",
        points: { perawat: 3 },
      },
      {
        text: "Dapur konsultasi atau pusat kebugaran.",
        points: { ahliGizi: 3 },
      },
    ],
  },
  {
    question: "Apa yang membuatmu merasa paling puas dalam bekerja?",
    answers: [
      {
        text: "Berhasil memecahkan teka-teki medis yang rumit.",
        points: { dokter: 3 },
      },
      {
        text: "Melihat senyum pasien yang merasa lebih baik berkat perawatanku.",
        points: { perawat: 3 },
      },
      {
        text: "Mengetahui bahwa saya memberikan obat yang aman dan efektif.",
        points: { apoteker: 3 },
      },
      {
        text: "Melihat klien berhasil mencapai target kesehatannya.",
        points: { ahliGizi: 3 },
      },
    ],
  },
  {
    question: "Saat belajar, topik apa yang paling kamu nikmati?",
    answers: [
      { text: "Anatomi dan Fisiologi.", points: { dokter: 3, perawat: 2 } },
      { text: "Kimia Organik dan Farmakologi.", points: { apoteker: 3 } },
      {
        text: "Psikologi dan Komunikasi Interpersonal.",
        points: { perawat: 3 },
      },
      { text: "Biokimia dan Ilmu Pangan.", points: { ahliGizi: 3 } },
    ],
  },
  {
    question: "Seberapa penting interaksi langsung dengan pasien bagimu?",
    answers: [
      {
        text: "Penting, tapi fokus utamaku pada diagnosis penyakitnya.",
        points: { dokter: 2 },
      },
      {
        text: "Sangat penting, ini adalah inti dari pekerjaan yang saya inginkan.",
        points: { perawat: 3 },
      },
      {
        text: "Cukup penting, terutama saat memberikan edukasi obat.",
        points: { apoteker: 2, ahliGizi: 2 },
      },
      {
        text: "Kurang penting, saya lebih suka bekerja di belakang layar.",
        points: { apoteker: 1 },
      },
    ],
  },
  {
    question: "Bagaimana caramu menghadapi tekanan atau situasi darurat?",
    answers: [
      {
        text: "Tetap tenang dan fokus pada langkah-langkah logis.",
        points: { dokter: 3, apoteker: 2 },
      },
      {
        text: "Mengandalkan empati untuk menenangkan orang lain.",
        points: { perawat: 3 },
      },
      {
        text: "Mengikuti protokol dan daftar periksa dengan cermat.",
        points: { apoteker: 3 },
      },
      {
        text: "Mencari solusi pencegahan agar situasi darurat tidak terjadi lagi.",
        points: { ahliGizi: 2 },
      },
    ],
  },
  {
    question: "Keterampilan mana yang paling kamu kuasai?",
    answers: [
      {
        text: "Kemampuan mengambil keputusan cepat di bawah tekanan.",
        points: { dokter: 3 },
      },
      {
        text: "Ketelitian dan perhatian terhadap detail kecil.",
        points: { apoteker: 3 },
      },
      {
        text: "Mendengarkan dan berkomunikasi dengan baik.",
        points: { perawat: 3, ahliGizi: 2 },
      },
      {
        text: "Merencanakan dan mengorganisir program.",
        points: { ahliGizi: 3 },
      },
    ],
  },
  {
    question:
      "Jika kamu membaca berita kesehatan, judul mana yang paling menarik perhatianmu?",
    answers: [
      {
        text: "'Terobosan Baru dalam Teknologi Bedah Robotik'",
        points: { dokter: 3 },
      },
      {
        text: "'Penemuan Molekul Baru untuk Obat Kanker'",
        points: { apoteker: 3 },
      },
      {
        text: "'Studi: Dukungan Emosional Mempercepat Penyembuhan Pasien'",
        points: { perawat: 3 },
      },
      {
        text: "'Diet Mediterania Terbukti Menurunkan Risiko Penyakit Jantung'",
        points: { ahliGizi: 3 },
      },
    ],
  },
  {
    question: "Pekerjaan jangka panjang seperti apa yang kamu bayangkan?",
    answers: [
      {
        text: "Menjadi dokter spesialis di sebuah rumah sakit ternama.",
        points: { dokter: 3 },
      },
      {
        text: "Menjadi kepala perawat yang mengelola sebuah unit.",
        points: { perawat: 3 },
      },
      {
        text: "Bekerja di industri farmasi mengembangkan obat baru.",
        points: { apoteker: 3 },
      },
      {
        text: "Membuka praktik konsultasi gizi pribadi.",
        points: { ahliGizi: 3 },
      },
    ],
  },
  {
    question: "Bagaimana pandanganmu tentang pekerjaan rutin dan berulang?",
    answers: [
      {
        text: "Saya lebih suka tantangan yang bervariasi setiap hari.",
        points: { dokter: 3 },
      },
      {
        text: "Saya tidak keberatan, rutinitas memastikan tidak ada kesalahan.",
        points: { apoteker: 3 },
      },
      {
        text: "Rutinitas itu penting, tapi interaksi dengan orang yang berbeda membuatnya menarik.",
        points: { perawat: 3 },
      },
      {
        text: "Saya suka kombinasi antara membuat rencana (rutin) dan bertemu klien (bervariasi).",
        points: { ahliGizi: 2 },
      },
    ],
  },
  {
    question: "Apa tujuan utamamu jika bekerja di bidang kesehatan?",
    answers: [
      {
        text: "Menyembuhkan penyakit dan menyelamatkan nyawa.",
        points: { dokter: 3 },
      },
      {
        text: "Memastikan keamanan dan efektivitas pengobatan.",
        points: { apoteker: 3 },
      },
      {
        text: "Memberikan rasa nyaman dan merawat orang yang membutuhkan.",
        points: { perawat: 3 },
      },
      {
        text: "Meningkatkan kualitas hidup melalui gaya hidup sehat.",
        points: { ahliGizi: 3 },
      },
    ],
  },
];

export const professionDetails = {
  dokter: {
    title: "Dokter",
    description:
      "Kamu memiliki jiwa analitis yang kuat dan minat mendalam pada diagnosis penyakit. Kamu cocok menjadi pemimpin dalam tim medis dan mengambil keputusan kritis untuk menyelamatkan nyawa.",
  },
  perawat: {
    title: "Perawat",
    description:
      "Kamu sangat empatik dan peduli pada orang lain. Peranmu sebagai perawat akan sangat penting dalam memberikan perawatan langsung, dukungan, dan kenyamanan bagi pasien selama proses penyembuhan.",
  },
  apoteker: {
    title: "Apoteker",
    description:
      "Kamu teliti dan memiliki ketertarikan pada ilmu kimia. Sebagai apoteker, kamu akan menjadi ahli obat-obatan, memastikan pasien menerima obat yang efektif dan aman.",
  },
  ahliGizi: {
    title: "Ahli Gizi",
    description:
      "Kamu percaya bahwa pencegahan lebih baik daripada mengobati. Sebagai ahli gizi, kamu akan membantu orang lain merencanakan pola makan sehat untuk meningkatkan kualitas hidup dan mencegah penyakit.",
  },
};

export const state = {
  currentQuestionIndex: 0,
  scores: {
    dokter: 0,
    perawat: 0,
    apoteker: 0,
    ahliGizi: 0,
  },

  reset() {
    this.currentQuestionIndex = 0;
    this.scores = { dokter: 0, perawat: 0, apoteker: 0, ahliGizi: 0 };
  },

  addScores(points) {
    for (const profession in points) {
      if (Object.hasOwn(this.scores, profession)) {
        this.scores[profession] += points[profession];
      }
    }
  },

  getFinalResult() {
    let maxScore = -1;
    let resultKey = "";
    for (const profession in this.scores) {
      if (this.scores[profession] > maxScore) {
        maxScore = this.scores[profession];
        resultKey = profession;
      }
    }
    return professionDetails[resultKey];
  },
};
