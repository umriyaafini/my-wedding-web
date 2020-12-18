import Vue from 'vue'
import App from './App.vue'
import VueI18n from 'vue-i18n';

import 'normalize.css'
import 'swiper/css/swiper.css';

Vue.config.productionTip = false
Vue.use(VueI18n);

const messages = {
  en: {
    introduction: {
      caption: 'We are getting married 👰🤵!',
    },
    ourStory: {
      title: 'Our Story',
      stories: [
        'We met for the first time seven years ago, in a campus community called Doscom. We often met, talk, and became friends🤙',
        'As time went by, we were busy and had not seen each other for 2 years, then we accidentally met again and became co-workers.',
        'While working we complete our study, though we graduate at different times, we congratulate each other and start to fill the absence time with chatting a lot 😗',
        'Then we started dating several times, until on a beautiful date (12/12), Reza confessed his feelings and Umriya accepted! 💞',
        'After a while, Reza moved to Jakarta, and Umriya moved to Jogja. A long-distance relationship is tough for us, but Skype, Zoom, and also Train are our saviors 🚃',
        'A few months later Umriya moved to Jakarta and we were together again! In Jakarta, we focus on pursuing careers that turn out are also difficult 🙂💰 ',
        'Basically, we like to move around, and being in Jakarta makes us feel unhappy. Finally, we returned to Semarang to our hometown 🏡',
        'We really had a really magical time in our long distance relationship between Jakarta, Jogja, and Semarang. Last September we engaged, and now we are ready to start another magical time together.',
      ],
    },
    event: {
      title: 'Wedding Ceremony',
      date: 'December 20, 2020',
      day: 'A Sunday, 09.00 AM',
      place: 'Semarang, Indonesia',
      disclaimer:
        'Due to the existence of Covid-19, we sincerely apologize because it is not possible to invite all of you to our wedding ceremony. Our sincere thanks for the prayers and blessings you are given 🙏',
    },
    guestBook: {
      title: 'Guest Book',
    },
    award: {
      title:
        'Thank you to everyone who made our life so fun. This is our Special Awards 🥇🥈🥉',
      entertainment: 'Entertainment',
      app: 'Applications',
      winner: 'The Winner Goes to ...',
      nomination: 'Nomination',
      entertainmentCategoryTitle: [
        'Category Most-viewed Youtube channel 📺',
        'Category Best recent K-drama 👩👨️‍',
        'Category Best Netflix series 🍟',
        'Category Most favorite activities together 🌿',
        "Category Twitter's funny jokes in our timeline 😂",
      ],
      appCategoryTitle: [
        'Category Tools when we miss each other 👩‍💞👨',
        'Category Tools to stay connected 💬',
        'Category Tools to brainstorm idea 🎲',
        'Category Tools to listen music 🎉 Spotify 🎉',
      ],
    },
    supportUs: {
      title: 'Next Chapter',
      button: 'Get The Essential Kit / Support Us',
      caption:
        "Your prayers and blessings mean a lot to us and are all we ask for. Love to know we are passionate about sustainable living. If you'd still like to contribute, please support us and the planet to live sustainably by considering to reuse your belonging every day in your life.",
      zerowaste: `
        <b>This zero waste essential kit will help you to start:</b>
        <br /><br />
        <p>1 Set cutlery made from mahogany: spoon, fork and chopsticks</p>
        <p>1 Set stainless steel straws</p>
        <p>Organic soap (flavor: charcoal / jasmine / coffee)</p>
        <p>100 pcs wooden cotton bud</p>
        <p>Loofah Sponge (± 10cm)</p>
        <p>1 Bamboo toothbrush</p>
      `,
    },
  },
  id: {
    introduction: {
      caption: 'Kami akan menikah 👰🤵!',
    },
    ourStory: {
      title: 'Cerita Kami',
      stories: [
        'Kami bertemu pertama kali tujuh tahun yang lalu, di sebuah komunitas kampus bernama Doscom. Dari sana kami sering bertemu, bercerita, sambat sampai jadi sahabat 🤙',
        'Seiring berjalannya waktu kami sibuk masing-masing dan sempat tidak bertemu selama 2 tahun, tanpa disengaja kami bertemu kembali dan menjadi partner kerja! 🙌',
        'Sambil bekerja kami menyelesaikan perkuliahan dan lulus di waktu yang berbeda. Dari sini kami mulai saling bercerita lagi, ngobrol sana sini 😗',
        'Tak lama kami mulai kencan beberapa kali. Di tanggal cantik bulan Desember, Reza menyatakan perasannya dan Umriya menerimanya! 💞',
        'Selang beberapa lama, Reza pindah ke Jakarta, dan Umriya pindah ke Jogja. Hubungan jarak jauh merupakan tantangan berat buat kami, tapi Skype dan Kereta menjadi penyelamat kami 🚃',
        'Beberapa bulan kemudian Umriya pindah ke Jakarta dan kami bersama kembali! Di Jakarta kami fokus mengejar karir yang ternyata susah juga ya 🙂💰 ',
        'Pada dasarnya kami suka berpindah, dan lama di Jakarta membuat kami merasa bosan, hanya itu itu saja. Akhirnya kami kembali ke Semarang ke daerah asal kami 🏡',
        'Kami benar-benar memiliki waktu yang sangat ajaib dalam hubungan jarak jauh kami antara Jakarta, Jogja dan Semarang. Bulan September lalu kami telah melaksanakan Lamaran, dan sekarang kami siap untuk memulai waktu ajaib lainnya bersama.',
      ],
    },
    event: {
      title: 'Akad Nikah',
      date: '20 Desember 2020',
      day: 'Minggu, 09.00 AM',
      place: 'Semarang, Indonesia',
      disclaimer:
        'Sehubungan dengan adanya Covid-19, kami mohon maaf dengan tulus karena tidak memungkinkan untuk mengundang kalian semua ke acara pernikahan kami. Terima kasih tulus kami atas doa dan berkah yang Anda berikan 🙏',
    },
    guestBook: {
      title: 'Buku Tamu',
    },
    award: {
      title:
        'Terima kasih telah membuat hidup kami menyenangkan. Ini adalah Penghargaan Khusus kami 🥇🥈🥉',
      entertainment: 'Hiburan',
      app: 'Aplikasi',
      winner: 'Pemenangnya adalah ...',
      nomination: 'Nominasi',
      entertainmentCategoryTitle: [
        'Kategori Youtube channel favorit 📺',
        'Kategori K-drama romcom terbaik 👩👨️‍',
        'Kategori Serial Netflix Terbaik 🍟',
        'Kategori Kegiatan paling favorit bersama 🌿',
        'Kategori receh Twitter di timeline kami 😂',
      ],
      appCategoryTitle: [
        'Kategori pelepas rindu 👩‍💞👨',
        'Kategori untuk tetap terhubung 💬',
        'Kategori untuk bertukar pikiran 🎲',
        'Kategori mendengarkan musik 🎉',
      ],
    },
    supportUs: {
      title: 'Selanjutnya',
      button: 'Dapatkan Essential Kit / Dukung Kami',
      caption:
        'Doa dan berkah Anda sangat berarti bagi kami dan hanya itu yang kami minta. Senang mengetahui bahwa kami bersemangat tentang sustainable living. Jika Anda masih ingin berkontribusi, dukung kami dan planet ini untuk hidup berkelanjutan dengan mempertimbangkan untuk menggunakan kembali barang-barang milik Anda setiap hari dalam hidup Anda.',
      zerowaste: `
        <b>Paket zero waste essential kit ini akan membantumu mamulai:</b>
        <br /><br />
        <p>1 Set alat makan yang terbuat dari kayu mahoni: sendok, garpu dan sumpit</p>
        <p>1 Set sedotan stainless steel</p>
        <p>Sabun organik (rasa: charcoal / jasmine / coffee)</p>
        <p>100 pcs cotton bud kayu</p>
        <p>Loofah / Oyong spons organik (± 10cm)</p>
        <p>1 Sikat gigi bambu</p>
      `,
    },
  },
};

const i18n = new VueI18n({
  locale: 'id',
  messages,
});

new Vue({
  render: (h) => h(App),
  i18n,
}).$mount('#app');
