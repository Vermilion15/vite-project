/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { useState } from "react";
import "./App.css";

const animesData = [
  {
    mal_id: 21,
    title: "Adzana Shaliha",
    year: 2019,
    image: "https://jkt48.com/profile/adzana_shaliha.jpg?v=20230116",
    score: 2023,
    biography:
      "Adzana Shaliha atau akrab dipanggil Ashel ini merupakan anggota JKT48 dari generasi kesembilan. Ashel adalah keponakan dari basis Slank, Ivanka. Gadis yang mempunyai hobi senam ini juga pernah menjadi pemandu sorak. Ashel pertama kali diperkenalkan sebagai member JKT48 pada acara Joy Kick! Tears Handshake Festival pada 1 Desember 2019. Setelah melalui tes tahap pertama dan tahap kedua sebagai syarat kenaikan kelas, Ashel dipromosikan ke Akademi Kelas A pada tanggal 25 Januari 2020.Pada 12 Maret 2021 ia dipromosikan ke tim utama JKT48.Pada 13 Oktober 2023, Ashel mengumumkan kelulusannya dari JKT48.",
  },
  {
    mal_id: 20,
    title: "Gabriela Margareth Warouw",
    year: 2011,
    image:
      "https://i.pinimg.com/564x/0f/e3/83/0fe383cb00284fd7836f996bef3a4291.jpg",
    score: 2022,
    biography:
      "Gaby JKT48 bernama asli Gabriela Margareth Warouw yang lahir pada 11 April 1998. Gaby Warouw adalah mantan anggota generasi pertama JKT48 yang bergabung sejak tahun 2011. Ia merupakan anggota dengan masa karier terlama di JKT48, yakni 11 tahun.Dalam perjalanan kariernya, dia tidak memulai dari menyanyi. Melainkan, terjun ke dunia modelling dan menjadi gadis Sampul terlebih dahulu.Dimulai dari tahun 2011, dia resmi menjadi personel JKT48 dari generasi pertama. Setahun setelahnya, Gaby bersama generasi satu lainnya berhasil memiliki konser live debut mereka yang sempat ditayangkan di RCTI,Tidak hanya menyanyi, dirinya juga tetap menjalankan kegiatan sembari aktif bermodel. Tidak heran, jika dirinya terlihat di beberapa iklan produk yang ada, seperti Pocari Sweat, Rakuten, Laurier, Mio, dan beberapa iklan terkemuka lainnya.Lalu, di 2018 Gaby sempat menjadi kapten tim J meskipun dirinya menjadi personel generasi 1 termuda saat itu.Meskipun ia telah menjalani kariernya di industri hiburan, Gaby juga masih bermimpi untuk menjadi psikolog, sesuai dengan jurusan yang telah ia tempuh semasa kuliahnya.Waktu yang begitu cepat berjalan, membuat Gaby memutuskan untuk lulus dari JKT48 pada 8 Agustus 2022 setelah meniti kariernya 10 tahun ini. Acara kelulusan Gaby pun turut dimeriahkan bersama an dengan perayaan tahunan JKT48 yang ke-10.",
  },
  {
    mal_id: 269,
    title: "Gita Sekar Andarini",
    year: 2018,
    image:
      "https://i.pinimg.com/236x/69/d6/38/69d63864d137d10dd945bb7c353bae06.jpg",
    score: "Current",
    biography:
      "Gita lahir di Jakarta, 30 Juni 2001. Sebelum bergabung dengan JKT48, Gita aktif mengikuti berbagai ekstrakurikuler, seperti marching band dan paskibra (pasukan pengibar bendera). Menyukai lagu-lagu JKT48 sejak SD, Gita memutuskan untuk mengikuti audisi. Gita diperkenalkan sebagai satu dari 14 (empat belas) anggota JKT48 generasi keenam pada 8 April 2018 di teater JKT48. KT48 Akademi Kelas B → JKT48 Akademi Kelas A → JKT48 Tim KIII → JKT48 New Era",
  },
  {
    mal_id: 31964,
    title: "Shani Indira Natio",
    year: 2014,
    image:
      "https://i.pinimg.com/236x/ee/0c/a1/ee0ca1d5bd4b9cb5d67f044c620d4be1.jpg",
    score: 2023,
    biography:
      "Shani Indira Natio, S.I.Kom (lahir 5 Oktober 1998), secara mononim dikenal sebagai Shani JKT48, adalah seorang penyanyi dan penari Indonesia yang merupakan anggota dari grup idola JKT48.[1] Ia merupakan anggota generasi ketiga JKT48 yang terpilih menjadi Kapten bersama Jinan Safa Safira sebagai Wakil Kapten pertama JKT48 New Era sejak tanggal 18 Desember 2021.a mengumumkan kelulusannya saat JKT48 Summer Festival yang digelar di Tennis Outdoor Senayan, Jakarta pada Minggu, 2 Juli 2023.[3] Shani melangsungkan Seitansai terakhirnya pada hari Minggu, 8 Oktober 2023. ",
  },
  {
    mal_id: 43216,
    title: "Shania Gracia",
    year: 2014,
    image: "https://jkt48.com/profile/shania_gracia.jpg?v=20230116",
    score: "Current",
    biography:
      "Shania Gracia Harlan, S.I.Kom.[1] (lahir 31 Agustus 1999) adalah salah aktris, penyanyi, dan penari berkebangsaan Indonesia. Shania merupakan anggota grup idola JKT48 generasi ketiga.JKT48 Trainee → Tim T → Tim KIII Bergabung JKT48 sebagai Trainee pada 15 Maret 2014.Dipromosikan ke Tim T pada 24 Januari 2015. (Formasi Tim T)Ditransfer ke Tim KIII pada 11 September 2016. (JKT48 1 Grand Team Shuffle).",
  },
  {
    mal_id: 21234,
    title: "Helisma Mauludzunia Putri Kurnia",
    year: 2018,
    image:
      "https://i.pinimg.com/236x/1d/26/80/1d2680db5c2354d44dfe635cf3bf4942.jpg",
    score: "Current",
    biography:
      "Helisma Mauludzunia Putri Kurnia, kerap disapa Eli atau Ceu Eli, lahir pada 15 Juni 2000 adalah anak pertama dari dua bersaudara. Sebelum masuk JKT48, Eli adalah anggota dari dance cover bergenre K-Pop. Salah satu girl band yang pernah dicover adalah TWICE. Eli mengidolakan BTS, Jung Jaehyun NCT dan Tomu Mutou AKB48. Karakter favorit Eli adalah mermaid (putri duyung). Zodiak Eli adalah Gemini.",
  },
  {
    mal_id: 21284,
    title: "Feni Fitriyanti",
    year: 2013,
    image: "https://jkt48.com/profile/feni_fitriyanti.jpg?v=20230116",
    score: "Current",
    biography:
      "Feni Fitriyanti (lahir 16 Januari 1999) juga dikenal sebagai Feni JKT48 adalah salah seorang penyanyi Indonesia dan anggota grup idola JKT48 generasi ketiga. Feni juga dulunya merangkap sebagai anggota sub-unit 4 Gulali. Ia sangat terkenal dengan sikap ceria dan imut, tetapi penuh energi dan berkarisma di atas panggung. Rambut Feni yang diwarnai blonde saat ini menjadi ciri khasnya karena sangat mencolok di antara rambut anggota JKT48 lainnya. Saat ini Feni, tergabung dengan JKT48 New Era sebagai salah satu senior kebanggaan JKT48.",
  },
  {
    mal_id: 34565,
    title: "Azizi Asadel",
    year: 2018,
    image: "https://jkt48.com/profile/azizi_asadel.jpg?v=20230116 ",
    score: "Current",
    biography:
      "Azizi Shafaa Asadel (lahir 16 Mei 2004), dikenal dengan nama mononim Zee JKT48, adalah seorang penyanyi dan aktris asal Indonesia yang tergabung sebagai anggota grup idola JKT48. Ia merupakan anggota generasi ketujuh JKT48 yang diperkenalkan pada 29 September 2018.",
  },
  {
    mal_id: 19083,
    title: "Cornelia Vanisa",
    year: 2019,
    image: "https://jkt48.com/profile/cornelia_vanisa.jpg?v=20230116 ",
    score: "Current",
    biography:
      "Cornelia Syafa Vanisa (lahir di Tangerang, 26 Juli 2002) yang biasa dipanggil Oniel (juga dikenal sebagai Oniel JKT48 (selama menjadi anggota JKT48) adalah salah seorang penyanyi Indonesia, model dan anggota JKT48 yang berasal dari Jakarta, Indonesia. Oniel merupakan anggota JKT48 generasi kedelapan yang diperkenalkan pada 27 April 2019.Jikoushokai (salam perkenalan) dari Oniel di JKT48 adalah 'Seperti teka teki kalian akan selalu penasaran denganku, halo aku Oniel!'. Oniel memiliki basis penggemar yang disebut Onielity.",
  },
  {
    mal_id: 56576,
    title: "Indah Cahya Nabila",
    year: 2018,
    image: "https://jkt48.com/profile/indah_cahya.jpg?v=20230116 ",
    score: "Current",
    biography:
      'Indah Cahya Nabila (lahir di Jambi, 20 Maret 2001) yang biasa dipanggil Indah adalah member JKT 48 generasi ke 9,Indah dikenalkan oleh JKT pada tahun 2019,Jikoshoukai Indah adalah "Tak banyak bicara bercerita lewat tulisan,halo aku Indah" Indah memiliki fanbase bernama Interindah .',
  },
];

export default function App() {
  const [animes, setAnimes] = useState(animesData);
  const [selectedAnime, setSelectedAnime] = useState(animes[0]);

  function handleSelectedAnime(id) {
    const newAnime = animes.filter((anime) => anime.mal_id === id);
    setSelectedAnime(newAnime[0]);
  }

  return (
    <>
      <Navbar>
        <Search>
          <Result animes={animes} />
        </Search>
      </Navbar>
      <Main>
        <Box>
          <MemberList animes={animes} onSelectedAnime={handleSelectedAnime} />
        </Box>
        <Box>
          <MemberDetail selectedAnime={selectedAnime} />
        </Box>
      </Main>
    </>
  );
}

function Main({ children }) {
  return <main className="main">{children}</main>;
}

function Box({ children }) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="box">
      <button className="btn-toggle" onClick={() => setIsOpen((open) => !open)}>
        {isOpen ? "–" : "+"}
      </button>
      {isOpen && children}
    </div>
  );
}

function MemberList({ animes, onSelectedAnime }) {
  return (
    <ul className="list list-anime">
      {animes?.map((anime) => (
        <Member
          key={anime.mal_id}
          anime={anime}
          onSelectedAnime={onSelectedAnime}
        />
      ))}
    </ul>
  );
}

function Member({ anime, onSelectedAnime }) {
  return (
    <li onClick={() => onSelectedAnime(anime.mal_id)}>
      <img src={anime.image} alt={`${anime.title} cover`} />
      <h3>{anime.title}</h3>
      <div>
        <p>
          <span>{anime.year}</span>
        </p>
      </div>
    </li>
  );
}

function MemberDetail({ selectedAnime }) {
  return (
    <div className="details">
      <header>
        <img src={selectedAnime.image} alt={`${selectedAnime.title} cover`} />
        <div className="details-overview">
          <h2>{selectedAnime.title}</h2>
          <p>
            {selectedAnime.year} &#8213; {selectedAnime.score}
          </p>
        </div>
      </header>
      <MemberDetailSection selectedAnime={selectedAnime} />
    </div>
  );
}

function MemberDetailSection({ selectedAnime }) {
  return (
    <section>
      <p>
        <em>{selectedAnime.biography}</em>
      </p>
    </section>
  );
}

function Navbar({ children }) {
  return (
    <nav className="nav-bar">
      <Logo />
      {children}
    </nav>
  );
}

function Logo() {
  return (
    <div className="logo">
      <span role="img">🍥</span>
      <h1>JKT 48</h1>
      <span role="img">🍥</span>
    </div>
  );
}

function Search({ children }) {
  const [query, setQuery] = useState("");

  return (
    <div className="search-container">
      <input
        className="search"
        type="text"
        placeholder="Search Member..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      {children}
    </div>
  );
}

function Result({ animes }) {
  return (
    <p className="search-results">
      Found <strong>{animes.length}</strong> results
    </p>
  );
}
