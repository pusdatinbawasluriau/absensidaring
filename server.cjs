var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// server.ts
var import_express = __toESM(require("express"), 1);
var import_path = __toESM(require("path"), 1);
var import_fs = __toESM(require("fs"), 1);
var import_vite = require("vite");

// src/data/mockData.ts
var INITIAL_ACTIVITIES = [
  {
    id: "ACT-2026-001",
    namaKegiatan: "Rakor Pengawasan Logistik Pemilukada Daring BAWASLU Riau 2026",
    tanggal: "2026-07-21",
    jamMulai: "08:30",
    jamSelesai: "12:00",
    penyelenggara: "Divisi Pencegahan, Parmas, dan Humas Bawaslu Riau",
    status: "Aktif",
    deskripsi: "Rapat koordinasi virtual kesiapan pengawasan logistik seluruh Bawaslu Kab/Kota se-Provinsi Riau.",
    totalPeserta: 28
  },
  {
    id: "ACT-2026-002",
    namaKegiatan: "Webinar Pembekalan Netralitas ASN & TNI/POLRI Dalam Pemilu Daring",
    tanggal: "2026-07-22",
    jamMulai: "09:00",
    jamSelesai: "15:30",
    penyelenggara: "Divisi Penanganan Pelanggaran Bawaslu Riau",
    status: "Aktif",
    deskripsi: "Sosialisasi & pembekalan teknis penanganan sengketa dan netralitas aparatur negara.",
    totalPeserta: 15
  },
  {
    id: "ACT-2026-003",
    namaKegiatan: "Bimtek Tata Kelola Keuangan & Pertanggungjawaban Sekretariat",
    tanggal: "2026-07-20",
    jamMulai: "09:00",
    jamSelesai: "16:00",
    penyelenggara: "Kepala Sekretariat Bawaslu Provinsi Riau",
    status: "Selesai",
    deskripsi: "Bimbingan teknis akuntabilitas anggaran & SPJ keuangan kegiatan daring.",
    totalPeserta: 42
  }
];
var INITIAL_ATTENDANCE = [
  {
    id: "PRES-001",
    kegiatanId: "ACT-2026-001",
    namaKegiatan: "Rakor Pengawasan Logistik Pemilukada Daring BAWASLU Riau 2026",
    kabKota: "Kota Pekanbaru",
    nama: "ADITYA AL JAMIL",
    nipNik: "",
    jabatan: "Ketua Bawaslu",
    noHp: "",
    waktuPresensi: "2026-07-21T08:32:15+07:00",
    statusKehadiran: "Hadir",
    statusVerifikasi: "Disetujui",
    fotoBuktiUrl: "",
    lokasiGps: {
      latitude: 0.5071,
      longitude: 101.4478,
      alamatSingkat: "Pekanbaru, Riau"
    },
    catatan: "",
    syncedToGoogleSheet: true
  },
  {
    id: "PRES-002",
    kegiatanId: "ACT-2026-001",
    namaKegiatan: "Rakor Pengawasan Logistik Pemilukada Daring BAWASLU Riau 2026",
    kabKota: "Kabupaten Kampar",
    nama: "KHAIDIR",
    nipNik: "",
    jabatan: "Anggota Bawaslu",
    noHp: "",
    waktuPresensi: "2026-07-21T08:35:40+07:00",
    statusKehadiran: "Hadir",
    statusVerifikasi: "Disetujui",
    fotoBuktiUrl: "",
    lokasiGps: {
      latitude: 0.3421,
      longitude: 101.0289,
      alamatSingkat: "Bangkinang, Kampar"
    },
    catatan: "",
    syncedToGoogleSheet: true
  },
  {
    id: "PRES-003",
    kegiatanId: "ACT-2026-001",
    namaKegiatan: "Rakor Pengawasan Logistik Pemilukada Daring BAWASLU Riau 2026",
    kabKota: "Kabupaten Bengkalis",
    nama: "M.SARBINI",
    nipNik: "",
    jabatan: "Kepala Sekretariat",
    noHp: "",
    waktuPresensi: "2026-07-21T08:41:02+07:00",
    statusKehadiran: "Hadir",
    statusVerifikasi: "Disetujui",
    fotoBuktiUrl: "",
    lokasiGps: {
      latitude: 1.4812,
      longitude: 102.1321,
      alamatSingkat: "Bengkalis, Riau"
    },
    catatan: "",
    syncedToGoogleSheet: true
  },
  {
    id: "PRES-004",
    kegiatanId: "ACT-2026-001",
    namaKegiatan: "Rakor Pengawasan Logistik Pemilukada Daring BAWASLU Riau 2026",
    kabKota: "Kota Dumai",
    nama: "IDRIS SARDI",
    nipNik: "",
    jabatan: "Koordinator Sekretariat",
    noHp: "",
    waktuPresensi: "2026-07-21T08:44:50+07:00",
    statusKehadiran: "Hadir",
    statusVerifikasi: "Disetujui",
    fotoBuktiUrl: "",
    lokasiGps: {
      latitude: 1.6811,
      longitude: 101.4491,
      alamatSingkat: "Dumai, Riau"
    },
    catatan: "",
    syncedToGoogleSheet: false
  },
  {
    id: "PRES-005",
    kegiatanId: "ACT-2026-001",
    namaKegiatan: "Rakor Pengawasan Logistik Pemilukada Daring BAWASLU Riau 2026",
    kabKota: "Kabupaten Indragiri Hilir",
    nama: "NURILLAH",
    nipNik: "",
    jabatan: "Staf Teknis",
    noHp: "",
    waktuPresensi: "2026-07-21T08:50:11+07:00",
    statusKehadiran: "Hadir",
    statusVerifikasi: "Disetujui",
    fotoBuktiUrl: "",
    lokasiGps: {
      latitude: -0.3201,
      longitude: 103.1502,
      alamatSingkat: "Tembilahan, Inhil"
    },
    catatan: "",
    syncedToGoogleSheet: false
  },
  {
    id: "PRES-006",
    kegiatanId: "ACT-2026-001",
    namaKegiatan: "Rakor Pengawasan Logistik Pemilukada Daring BAWASLU Riau 2026",
    kabKota: "Kabupaten Siak",
    nama: "SUTRISNA",
    nipNik: "",
    jabatan: "Anggota Bawaslu",
    noHp: "",
    waktuPresensi: "2026-07-21T08:52:30+07:00",
    statusKehadiran: "Hadir",
    statusVerifikasi: "Disetujui",
    fotoBuktiUrl: "",
    lokasiGps: {
      latitude: 0.7933,
      longitude: 102.0492,
      alamatSingkat: "Siak Sri Indrapura"
    },
    catatan: "",
    syncedToGoogleSheet: true
  },
  {
    id: "PRES-007",
    kegiatanId: "ACT-2026-001",
    namaKegiatan: "Rakor Pengawasan Logistik Pemilukada Daring BAWASLU Riau 2026",
    kabKota: "Kabupaten Pelalawan",
    nama: "ELVINA ARMISTA",
    nipNik: "",
    jabatan: "Pegawai",
    noHp: "",
    waktuPresensi: "2026-07-21T09:05:00+07:00",
    statusKehadiran: "Hadir",
    statusVerifikasi: "Disetujui",
    fotoBuktiUrl: "",
    lokasiGps: {
      latitude: 0.3812,
      longitude: 101.8812,
      alamatSingkat: "Pangkalan Kerinci"
    },
    catatan: "",
    syncedToGoogleSheet: true
  }
];
var INITIAL_SYNC_CONFIG = {
  spreadsheetId: "1BawasluRiau_2026_PresensiDaringSheetID",
  sheetName: "Presensi_Bawaslu_Riau",
  driveFolderId: "1BawasluFolder_BuktiFotoPresensi",
  appsScriptUrl: "https://script.google.com/macros/s/AKfycbx_BawasluRiau_Presensi_App/exec",
  autoSync: true,
  lastSyncedAt: "2026-07-21T19:00:00+07:00",
  statusKoneksi: "Terhubung"
};

// src/data/pesertaData.ts
var DATA_PESERTA_BY_KABKOTA = {
  "Kabupaten Siak": [
    "SUTRISNA",
    "SUHARTOYO",
    "EKO OCTAVIANUS",
    "DESRIVINA RAMKAS OKTAVIANI",
    "MEGA AGUSTINI",
    "JEFRIYADI",
    "UTARI SELVIRA BR. TOBING",
    "JUMAIDI",
    "MISNO PARMAYANTO",
    "DENI WIRATAMA",
    "SRI MULYA LESTARI",
    "ERNI MULYATI",
    "YOGI ARIFIN",
    "WAHYUDI NYOTO",
    "JURAIS",
    "KHAIRUDDIN",
    "KIKI IRANA DEWI",
    "ROKI SELWANDI",
    "PANCA KURNIAWAN",
    "M. DENY ARIS EFENDY",
    "IGUSTIN",
    "RIMADANI"
  ],
  "Kota Dumai": [
    "IDRIS SARDI",
    "AL VANDY REACTOR MUHAMMAD",
    "ROMAS",
    "GIRI SINDORO FITRIANSYAH",
    "LARADEA MARIFNI",
    "AMELIA JENNY PAKPAHAN",
    "FRENGKI SAMUEL",
    "WILDA ASYRUFI",
    "SYARIFAH ATIYYAH",
    "AHMAD TAMIMI",
    "MHD. IKHLAS ADI PRATAMA",
    "ALFIAN",
    "TEGAR FIRMANDANI",
    "ARI SUPRIADI",
    "DWI MERDEKAWATI",
    "INTAN KUMALA SARI",
    "ISRA NURVA",
    "LATIFAH",
    "MUHARROMI",
    "NURLENA HASIBUAN",
    "SAIFUL AZHAR",
    "SRI MARLITA PRATIWI",
    "WINDA SARI AYU",
    "AHMAD KHADAFI",
    "MASTUR ARDIANSYAH",
    "VERA NOVRIANTY",
    "AFRIYANI FARISMA",
    "GUSMAN RIADI",
    "SUYADI",
    "PUJI NUGRAHAINI",
    "ERWIN PRATAMA",
    "SISWANTO",
    "SUHARDIANTO"
  ],
  "Kabupaten Bengkalis": [
    "M.SARBINI",
    "MUHAMMAD HASANUL ASY'ARY",
    "KHAIRUL AMRI",
    "KARNAWAN",
    "SUPRIYADI",
    "RIKI KURNIA PUTRA",
    "DINDA DANELA",
    "RAHMI AYU FIRANTI",
    "JUMIYANTI SYAFITRI",
    "NOVELLA AYU ASTUTI",
    "M. ZIDNI MUBAROK",
    "DIAN JURITA",
    "ZULFAN HERI",
    "RANI AGUSTINA",
    "WAHYUNA HIKMAH",
    "JONI ISKANDAR",
    "ROZALI",
    "HERDA SUWANTI",
    "MARZULI",
    "ABDUL RAHMAN",
    "ZULFIKAR",
    "DEWI PURWANTI",
    "MASYANDI",
    "HIKMAH RAMDHLAN NISSHA",
    "JAMALUDIN",
    "FEBRI YANTI",
    "SUKRI ALHADI",
    "AGUS ROMADI",
    "NUR YANTO"
  ],
  "Kabupaten Indragiri Hilir": [
    "NURILLAH",
    "BARITO GRINCA PAHALA SILALAHI",
    "AHMADI YANTO",
    "RIDWAN",
    "MUHAMMAD FAJRI",
    "GUSTI KESUMADINATA",
    "TRI GALUH SUWITO",
    "AMBOK ARISMAN",
    "ARIE A. SUPRIADI",
    "ERMAYANTI",
    "FITRA EDIA RAHMAN JANDRU",
    "IIN INDARTI. M",
    "M. AZMI",
    "MUHAMMAD FAJRIANSYAH",
    "MUHAMMAD FATHUL HELMI",
    "S. LEONAL PRAYUDHA",
    "SYAMSUL HADI",
    "NOPENDRA, SH",
    "Teddy Taufik Marianto",
    "Rizky Ananda P"
  ],
  "Kabupaten Indragiri Hulu": [
    "RAMDANI SYAMI",
    "SURYADI",
    "ROLI ULTRA HARAHAP",
    "NOVIA KURNIASIH",
    "DEASY MAWAR INDAH SIRAIT",
    "INDAH FEBRIANI",
    "ARDI AMSYAR",
    "BUDI HARSONO",
    "DEPRIANTO SAPUTRA",
    "EL HADI",
    "ELTA MAILANI",
    "FIRMAN HADI",
    "MELVI ERLICA",
    "MIRA ASTUTI",
    "NOVRIANDI",
    "RIKA YOLANDA",
    "SULAIMAN",
    "HERLINDA",
    "JONI AFRIZON",
    "YULFA ANDRIYENI",
    "SYARIFAH SITI AISYAH",
    "SYAFRINA HERLIYANTI",
    "YASSIN",
    "ABD. SAMAT"
  ],
  "Kabupaten Kampar": [
    "KHAIDIR",
    "YULITA ZEIN",
    "SRI MARDI TURNI ASTUTI",
    "FADIL KURNIAWAN",
    "NAUFAL HUSIN JUNIOR",
    "NUR IZZATI",
    "ANDIKA ILLAHI",
    "IRSADUNAS",
    "SEPTA CHAERULSYAH",
    "ELZA UMAMI FITRI",
    "BELLA APRILIANI",
    "DEDI IRAWAN",
    "DESVANDRI WIDYA UTAMA HALIM",
    "ELLA SYAFNA DEWI",
    "MARTUNUS",
    "NURLAILY",
    "RAHMA DONA",
    "RAHMIATI",
    "WAN ELFYA DELIMA",
    "WINDA GUSPITA SARI",
    "ZULFADLI",
    "PARMA IRNA NINGSI",
    "VERNANDO",
    "ARIEF",
    "REZKIA ARZA",
    "RAHMAT HIDAYAT",
    "RIDAN MUHAFIZ",
    "SYAIFUL"
  ],
  "Kabupaten Kepulauan Meranti": [
    "ERI GUNAWAN",
    "EFENDI",
    "ANA YULIANTI",
    "USNUL MUTOWAF",
    "SANDO EFRENDO",
    "MUHAFIZUL DHUHA",
    "ABD RAHIM",
    "M ZAUWIR ABDULLAH",
    "FIRDAUS",
    "LEDYA APRELITA",
    "IRMANSYAH",
    "DEDE KURNIAWAN",
    "A.RAFIK",
    "DONNY ZULIANDRA",
    "WAHYUNI",
    "NURDIANA",
    "MARIATUL ISTIANI",
    "M.IDRIS",
    "ZULFIKAR",
    "HENDRA SANDRA",
    "NURUL ELYA NAZRIL",
    "AHMAD FAWAHID",
    "NISHA NOVITA",
    "RIZKY ALKUDRI",
    "MULYADI",
    "AYUNITA SRI UTAMI",
    "AMALIA NURUL FITROH",
    "NURUL HUDA",
    "IINA MULLAH AKMAL"
  ],
  "Kabupaten Kuantan Singingi": [
    "ISWANDI",
    "RESSY PUSPITA SARI",
    "GITA HARDI WIRA SUKMA",
    "MIKO ANDRIAN",
    "OKY FEBRIANTO",
    "ZULFRIKUSNAIN",
    "ZHARFAN HAFIZH",
    "RIZKI SAPUTRA",
    "DIKY ANDRIAN SAPUTRA",
    "EKA IRMA MARDIYANTI",
    "EKO SASKA INDRA",
    "FATWA ELMANTU MULIA",
    "LIZAWATI",
    "ROZI ARDINATA",
    "NASPRIKO ANTONI",
    "NIKMATULLAH WAHIDA",
    "IQBAL INDRA PURNA",
    "DARULHUDA",
    "RAHMADI HIDAYAT",
    "SITI AISYAH",
    "RENDY PRATAMA SILABAN",
    "RIKO ANDERSON",
    "TAUFIK HELMAS DIRGANTARA",
    "YURNIATI",
    "SYAPRIBEN",
    "FAJRI TRESA PUTRA",
    "MARDIANA",
    "GILANG SISWANDI",
    "HEPRIYALDO SAYPATULLAH",
    "RAHMAD SURYADINI",
    "SANDIKA IKHSAN PRATAMA"
  ],
  "Kabupaten Pelalawan": [
    "ELVINA ARMISTA",
    "IKRIMA ROSYIDAH SOFIYA UTAMY",
    "DEDE SYAMPUTRA",
    "MUTIARA FRITCILLIANA PANJAITAN",
    "T HERI SYAFRIZAL",
    "CYNTHIA DESMARA",
    "SRI MELATI",
    "ADINDA NOVIANTI POHAN",
    "ZURRY RACHMADINA",
    "SILFANIA NIGELLIA",
    "RONI ROMODHON",
    "YUSROADI",
    "SHAKI ARDIANSYAH",
    "JAMALIA",
    "MUHAMMAD THABRI",
    "ASMAWATI",
    "MIFTA KHAIRIAH",
    "INDRIARTA HIDAYATUNISSA",
    "ERSINTA YARAH",
    "GISSELA PUTRI",
    "SITI ZUBAIDAH",
    "TENGKU JIVKY EDRIYAN",
    "SILVIA LESTARI",
    "ISNUL AL FAJRI",
    "SYAMSUL BAHRI",
    "GILANG AHMAD FAKHRI"
  ],
  "Kabupaten Rokan Hilir": [
    "HABIBULLAH",
    "SULAIMAN FAKHRUR RAZI",
    "PEGI PERDIANTI",
    "M RIFKI FAHREZA",
    "ADAM HARIANDA",
    "SAKINA SUMBARI",
    "BUDI BUTAR BUTAR",
    "ADE SELVIA",
    "ERMADI",
    "INDRA SHARMA",
    "KHOIRUL AMRI",
    "MUHAMMAD KHUMAIDI",
    "MARDANI",
    "MASNOER",
    "MUHAMMAD ALBAR",
    "MUHAMMAD ZAKI",
    "SITI MULYANI",
    "TETI NADYA",
    "AHMAD",
    "HAFLIANTO",
    "MARLAN",
    "PAIZUL AZMI",
    "MUHAMMAD REZA",
    "WISNU DIAJENG PANGESTU",
    "CHAIRUL AZHAR",
    "NANI DEA HARYANTI"
  ],
  "Kabupaten Rokan Hulu": [
    "ADITYA AL JAMIL",
    "LIZA APRIANA",
    "MAWARDI",
    "YONA PRAMUDI ASTUTI",
    "JULIANI",
    "SHAFA RIDHA HANIFAH",
    "NASRULLAH UMAR HARAHAP",
    "YANNITA KHOIR",
    "SYAHDI FIRMAN",
    "ZULFAURI",
    "SUKRI DARMA",
    "BAIDAH",
    "SUMARDI.A.R",
    "ALMAI JONDRI",
    "ANDI GOVALA",
    "DANEL",
    "FAIZUL IKA",
    "DETRIANDI",
    "NAHRUL YAUMI",
    "RISA ANDAYANI",
    "RIVAL NOPIRI",
    "SAMIAH HASIBUAN",
    "SYAIFUL AMRI",
    "TENGKU ALI AKBAR",
    "YULIANA HASIBUAN",
    "RESMINA LUBIS",
    "RAHMAWATI SIREGAR",
    "RAYMOND RIZAL",
    "TENGKU ABDUL MANAP",
    "AFIS RIFYAL",
    "YAYANK PERDIAN",
    "UKHROY",
    "BUNGA KURNIA"
  ],
  "Bawaslu Provinsi Riau": [
    "GUSHENDRI",
    "ASMIN SAFARI LUBIS",
    "TARMIZI",
    "RIZKI KURNIAWAN",
    "DONA DONORA",
    "HABIBULLAH",
    "ERWINDU BUDI DARMA",
    "SRI REZEKI KHARIANTI",
    "RAHMANESA",
    "ANGGA PRATAMA",
    "ARI AGUNG PRAYITNO",
    "SULAIMAN FAKHRUR RAZI",
    "VITRA AULIYA",
    "LAODE MUHAMMAD AULIA",
    "MARCO ALFINDO MILLA JUNIOR",
    "AZIZUL HAKIM",
    "ERMALIZHA PUTERI",
    "ARYAN RIADI",
    "ISNITA AULIA SAFITRI",
    "ROZA FITRI YANI",
    "T. AYUDEA RAHMADHANI",
    "RIKI PRAYOGI",
    "FITRI RAHMADANI",
    "RACHMATUL AZMI",
    "ZUHRI",
    "ARI SETIAWAN",
    "DARUSSALIM",
    "EKA PUTRI HERMAYANI TANUWIJAYA",
    "IRHAM",
    "WILSON SAPUTRA",
    "RIRIN SULPIANI",
    "M. HAMIDI MAIZA",
    "NOVI SULASTRI",
    "NUR ASIAH",
    "NURHUDA SYAH",
    "PUTRI WULAN SARI",
    "RIDUWAN SAPUTRA",
    "VERI HIDAYAT",
    "ZULKARNAIN NASUTION",
    "HERSYA NOGRAHA PRAMASWARI",
    "NASRUN RITONGA",
    "JEFRI",
    "HENDRIANTO HERMAWAN",
    "FERI SUSANDRA",
    "ALFIN RESKI",
    "ANDRI ALI SYAPUTRA",
    "YANIS PRIMA",
    "SONI DARMUJIANTO",
    "DANDI KURNIAWAN",
    "NAWA IHSAN",
    "M. FAHRIL AFDIL",
    "RAHMAT NURIYADI",
    "YUSRIZAL",
    "MUHAMMAD SYOUFI",
    "EKO MAFERDIAN",
    "RAHMAT HIDAYAT",
    "MOH. ALI IKHSAN",
    "CHANDRA CHANDRIO SIWOYO",
    "DWI NOVINDRIANTI AZWAR"
  ],
  "Kota Pekanbaru": [
    "ADITYA AL JAMIL",
    "DINNY ARCHIANA",
    "SISKA NADYA RIFANTY",
    "NAZILAH RAHMAH",
    "INDRY AMANDA",
    "MUHAMMAD HANIF ARRAZI",
    "KHUZAIMAH",
    "FADHLI HARDANI",
    "FEBRIKO",
    "FERDIAN",
    "CEPPY PRANA SHAKTI",
    "IRMA FHUDLA",
    "LIA ADRIANTI",
    "MARDHATILLAH MINUR",
    "MUHAMMAD DIRHAM",
    "MUHAMMAD YASLAN",
    "REZA M. IKHSAN",
    "YERI PURNAMA SARI",
    "MASROH",
    "YUSROH",
    "WINDA",
    "FERDINAN ROTUA PURBA",
    "KHENDRO"
  ]
};

// server.ts
var PORT = 3e3;
var DATA_FILE = import_path.default.join(process.cwd(), "data_store.json");
var DEFAULT_SERVER_DATA = {
  syncConfig: INITIAL_SYNC_CONFIG,
  attendanceRecords: INITIAL_ATTENDANCE.map((item) => ({
    ...item,
    statusVerifikasi: "Disetujui",
    syncedToGoogleSheet: true
  })),
  activities: INITIAL_ACTIVITIES,
  appSettings: {
    appTitle: "Absensi Online Kegiatan Daring",
    appSubTitle: "BAWASLU RIAU",
    appIconUrl: "",
    adminLoginBgUrl: "",
    loginTitle: "Panel Administrator BAWASLU Riau",
    loginSubTitle: "Masukkan kata sandi admin untuk mengakses Dashboard, Laporan Absensi, dan Pengaturan System."
  },
  pesertaData: DATA_PESERTA_BY_KABKOTA,
  syncLogs: [
    {
      id: "LOG-001",
      timestamp: (/* @__PURE__ */ new Date()).toISOString(),
      tipe: "TEST",
      pesan: "Server database terhubung dan siap melakukan sinkronisasi otomatis.",
      status: "Berhasil"
    }
  ]
};
function readServerData() {
  try {
    if (import_fs.default.existsSync(DATA_FILE)) {
      const raw = import_fs.default.readFileSync(DATA_FILE, "utf-8");
      const parsed = JSON.parse(raw);
      return {
        ...DEFAULT_SERVER_DATA,
        ...parsed,
        syncConfig: { ...DEFAULT_SERVER_DATA.syncConfig, ...parsed.syncConfig || {} },
        appSettings: { ...DEFAULT_SERVER_DATA.appSettings, ...parsed.appSettings || {} },
        pesertaData: { ...DEFAULT_SERVER_DATA.pesertaData, ...parsed.pesertaData || {} }
      };
    }
  } catch (e) {
    console.error("Error reading server data file:", e);
  }
  saveServerData(DEFAULT_SERVER_DATA);
  return DEFAULT_SERVER_DATA;
}
function saveServerData(data) {
  try {
    import_fs.default.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2), "utf-8");
  } catch (e) {
    console.error("Error writing server data file:", e);
  }
}
function normalizeAppsScriptUrl(rawUrl) {
  let url = rawUrl.trim();
  if (url.endsWith("/edit")) {
    url = url.replace(/\/edit$/, "/exec");
  } else if (!url.endsWith("/exec") && url.includes("/macros/s/")) {
    const parts = url.split("?");
    if (!parts[0].endsWith("/exec")) {
      parts[0] = parts[0].replace(/\/$/, "") + "/exec";
      url = parts.join("?");
    }
  }
  return url;
}
async function safeJsonFetch(url, options) {
  const res = await fetch(url, options);
  const text = await res.text();
  const trimmed = text.trim();
  if (trimmed.startsWith("<") || trimmed.toLowerCase().includes("<!doctype html")) {
    throw new Error('URL Google Apps Script mengembalikan halaman HTML. Pastikan Web App diset "Who has access: Anyone" (Siapa Saja) dan URL berakhiran "/exec".');
  }
  try {
    return JSON.parse(trimmed);
  } catch (e) {
    throw new Error(`Respon bukan JSON valid: ${trimmed.slice(0, 100)}...`);
  }
}
async function pushRecordToAppsScript(record, syncConfig) {
  if (!syncConfig.appsScriptUrl || !syncConfig.appsScriptUrl.trim()) {
    return { success: false, message: "Apps Script URL tidak dikonfigurasi" };
  }
  try {
    const scriptUrl = normalizeAppsScriptUrl(syncConfig.appsScriptUrl);
    const payload = {
      action: "upsert",
      sheetName: syncConfig.sheetName || "Presensi_Bawaslu_Riau",
      driveFolderId: syncConfig.driveFolderId || "",
      data: {
        id: record.id,
        waktuPresensi: record.waktuPresensi,
        namaKegiatan: record.namaKegiatan,
        kabKota: record.kabKota,
        nama: record.nama,
        jabatan: record.jabatan,
        noHp: record.noHp,
        statusKehadiran: record.statusKehadiran,
        statusVerifikasi: record.statusVerifikasi,
        fotoBuktiUrl: record.fotoBuktiUrl,
        catatan: record.catatan || ""
      }
    };
    const json = await safeJsonFetch(scriptUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      redirect: "follow"
    });
    if (json && json.status === "success") {
      return {
        success: true,
        photoUrl: json.photoUrl || record.fotoBuktiUrl,
        message: "Berhasil dikirim ke Google Sheets & Drive"
      };
    } else {
      return {
        success: false,
        message: json && json.message || "Gagal mengirim ke Google Apps Script"
      };
    }
  } catch (err) {
    return { success: false, message: err?.message || String(err) };
  }
}
async function fetchRecordsFromAppsScript(syncConfig) {
  if (!syncConfig.appsScriptUrl || !syncConfig.appsScriptUrl.trim()) {
    return { success: false, message: "URL Apps Script belum diisi", data: [] };
  }
  try {
    const scriptUrl = normalizeAppsScriptUrl(syncConfig.appsScriptUrl);
    const url = new URL(scriptUrl);
    if (syncConfig.sheetName) {
      url.searchParams.set("sheetName", syncConfig.sheetName);
    }
    const json = await safeJsonFetch(url.toString(), { redirect: "follow" });
    if (json && json.status === "success" && Array.isArray(json.data)) {
      return { success: true, data: json.data, message: "Berhasil mengambil data dari Google Sheets" };
    } else {
      return { success: false, message: json?.message || "Format respon tidak valid", data: [] };
    }
  } catch (err) {
    return { success: false, message: err?.message || String(err), data: [] };
  }
}
async function startServer() {
  const app = (0, import_express.default)();
  app.use(import_express.default.json({ limit: "20mb" }));
  app.get("/api/full-state", (req, res) => {
    const data = readServerData();
    res.json({ status: "ok", data });
  });
  app.get("/api/sync-config", (req, res) => {
    const data = readServerData();
    res.json({ status: "ok", data: data.syncConfig });
  });
  app.post("/api/sync-config", async (req, res) => {
    const data = readServerData();
    data.syncConfig = { ...data.syncConfig, ...req.body };
    saveServerData(data);
    if (data.syncConfig.appsScriptUrl && data.syncConfig.appsScriptUrl.trim()) {
      const fetchRes = await fetchRecordsFromAppsScript(data.syncConfig);
      if (fetchRes.success && fetchRes.data) {
        const recordMap = /* @__PURE__ */ new Map();
        data.attendanceRecords.forEach((r) => recordMap.set(r.id, r));
        fetchRes.data.forEach(
          (r) => recordMap.set(r.id, { ...recordMap.get(r.id), ...r, syncedToGoogleSheet: true })
        );
        data.attendanceRecords = Array.from(recordMap.values());
        data.syncConfig.lastSyncedAt = (/* @__PURE__ */ new Date()).toISOString();
        data.syncConfig.statusKoneksi = "Terhubung";
        saveServerData(data);
      }
    }
    res.json({ status: "ok", data: data.syncConfig, fullData: data.attendanceRecords });
  });
  app.get("/api/attendance", (req, res) => {
    const data = readServerData();
    res.json({ status: "ok", data: data.attendanceRecords });
  });
  app.post("/api/attendance", async (req, res) => {
    const record = req.body;
    const data = readServerData();
    const idx = data.attendanceRecords.findIndex((r) => r.id === record.id);
    let updatedRecord = { ...record };
    if (data.syncConfig.appsScriptUrl && data.syncConfig.appsScriptUrl.trim()) {
      const pushRes = await pushRecordToAppsScript(updatedRecord, data.syncConfig);
      if (pushRes.success) {
        updatedRecord.syncedToGoogleSheet = true;
        if (pushRes.photoUrl) {
          updatedRecord.fotoBuktiUrl = pushRes.photoUrl;
        }
      }
    }
    if (idx >= 0) {
      data.attendanceRecords[idx] = updatedRecord;
    } else {
      data.attendanceRecords.unshift(updatedRecord);
    }
    saveServerData(data);
    res.json({ status: "ok", data: updatedRecord, fullData: data.attendanceRecords });
  });
  app.delete("/api/attendance/:id", async (req, res) => {
    const id = req.params.id;
    const data = readServerData();
    const recordToDelete = data.attendanceRecords.find((r) => r.id === id);
    data.attendanceRecords = data.attendanceRecords.filter((r) => r.id !== id);
    saveServerData(data);
    if (data.syncConfig.appsScriptUrl && recordToDelete) {
      try {
        fetch(data.syncConfig.appsScriptUrl.trim(), {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            action: "delete",
            sheetName: data.syncConfig.sheetName || "Presensi_Bawaslu_Riau",
            id
          })
        }).catch((e) => console.error("Error notifying delete to apps script:", e));
      } catch (e) {
        console.error("Delete notify error:", e);
      }
    }
    res.json({ status: "ok", id });
  });
  app.post("/api/fetch-google-sheets", async (req, res) => {
    const data = readServerData();
    const result = await fetchRecordsFromAppsScript(data.syncConfig);
    if (result.success && result.data) {
      const recordMap = /* @__PURE__ */ new Map();
      data.attendanceRecords.forEach((r) => recordMap.set(r.id, r));
      result.data.forEach((r) => recordMap.set(r.id, { ...recordMap.get(r.id), ...r, syncedToGoogleSheet: true }));
      data.attendanceRecords = Array.from(recordMap.values());
      data.syncConfig.lastSyncedAt = (/* @__PURE__ */ new Date()).toISOString();
      data.syncConfig.statusKoneksi = "Terhubung";
      saveServerData(data);
      res.json({
        status: "ok",
        data: data.attendanceRecords,
        message: `Berhasil menyinkronkan ${result.data.length} record dari Google Sheets.`
      });
    } else {
      res.json({ status: "error", message: result.message, data: data.attendanceRecords });
    }
  });
  app.get("/api/activities", (req, res) => {
    const data = readServerData();
    res.json({ status: "ok", data: data.activities });
  });
  app.post("/api/activities", (req, res) => {
    const data = readServerData();
    data.activities = req.body;
    saveServerData(data);
    res.json({ status: "ok", data: data.activities });
  });
  app.get("/api/app-settings", (req, res) => {
    const data = readServerData();
    res.json({ status: "ok", data: data.appSettings });
  });
  app.post("/api/app-settings", (req, res) => {
    const data = readServerData();
    data.appSettings = req.body;
    saveServerData(data);
    res.json({ status: "ok", data: data.appSettings });
  });
  app.get("/api/peserta-data", (req, res) => {
    const data = readServerData();
    res.json({ status: "ok", data: data.pesertaData });
  });
  app.post("/api/peserta-data", (req, res) => {
    const data = readServerData();
    data.pesertaData = req.body;
    saveServerData(data);
    res.json({ status: "ok", data: data.pesertaData });
  });
  setInterval(async () => {
    try {
      const data = readServerData();
      if (!data.syncConfig.autoSync || !data.syncConfig.appsScriptUrl || !data.syncConfig.appsScriptUrl.trim()) {
        return;
      }
      const fetchRes = await fetchRecordsFromAppsScript(data.syncConfig);
      if (fetchRes.success && fetchRes.data) {
        const recordMap = /* @__PURE__ */ new Map();
        data.attendanceRecords.forEach((r) => recordMap.set(r.id, r));
        fetchRes.data.forEach(
          (r) => recordMap.set(r.id, { ...recordMap.get(r.id), ...r, syncedToGoogleSheet: true })
        );
        data.attendanceRecords = Array.from(recordMap.values());
      }
      for (let i = 0; i < data.attendanceRecords.length; i++) {
        const rec = data.attendanceRecords[i];
        if (!rec.syncedToGoogleSheet) {
          const pushRes = await pushRecordToAppsScript(rec, data.syncConfig);
          if (pushRes.success) {
            data.attendanceRecords[i].syncedToGoogleSheet = true;
            if (pushRes.photoUrl) {
              data.attendanceRecords[i].fotoBuktiUrl = pushRes.photoUrl;
            }
          }
        }
      }
      data.syncConfig.lastSyncedAt = (/* @__PURE__ */ new Date()).toISOString();
      data.syncConfig.statusKoneksi = "Terhubung";
      saveServerData(data);
    } catch (e) {
    }
  }, 15e3);
  if (process.env.NODE_ENV !== "production") {
    const vite = await (0, import_vite.createServer)({
      server: { middlewareMode: true },
      appType: "spa"
    });
    app.use(vite.middlewares);
  } else {
    const distPath = import_path.default.join(process.cwd(), "dist");
    app.use(import_express.default.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(import_path.default.join(distPath, "index.html"));
    });
  }
  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server Absensi BAWASLU running on http://0.0.0.0:${PORT}`);
    setTimeout(async () => {
      try {
        const data = readServerData();
        if (data.syncConfig.appsScriptUrl && data.syncConfig.appsScriptUrl.trim()) {
          const fetchRes = await fetchRecordsFromAppsScript(data.syncConfig);
          if (fetchRes.success && fetchRes.data) {
            const recordMap = /* @__PURE__ */ new Map();
            data.attendanceRecords.forEach((r) => recordMap.set(r.id, r));
            fetchRes.data.forEach(
              (r) => recordMap.set(r.id, { ...recordMap.get(r.id), ...r, syncedToGoogleSheet: true })
            );
            data.attendanceRecords = Array.from(recordMap.values());
            data.syncConfig.lastSyncedAt = (/* @__PURE__ */ new Date()).toISOString();
            data.syncConfig.statusKoneksi = "Terhubung";
            saveServerData(data);
          }
        }
      } catch (e) {
        console.error("Boot sync error:", e);
      }
    }, 1e3);
  });
}
startServer();
//# sourceMappingURL=server.cjs.map
