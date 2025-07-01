import React, { createContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';

type Language = 'en' | 'id' | 'jp';

export interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

// eslint-disable-next-line react-refresh/only-export-components
export const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface Translations {
  [key: string]: {
    en: string;
    id: string;
    jp: string;
  };
}

const translations: Translations = {
  // Navigation
'nav.home': {
    en: 'Home',
    id: 'Beranda',
    jp: 'ホーム',
  },
  'nav.about': {
    en: 'About',
    id: 'Tentang',
    jp: '自己紹介',
  },
  'nav.skills': {
    en: 'Skills',
    id: 'Keahlian',
    jp: 'スキル',
  },
  'nav.experience': {
    en: 'Experience',
    id: 'Pengalaman',
    jp: '経歴',
  },
  'nav.projects': {
    en: 'Projects',
    id: 'Proyek',
    jp: 'プロジェクト',
  },
  'nav.contact': {
    en: 'Contact',
    id: 'Kontak',
    jp: '連絡',
  },

  // Hero Section
  'hero.greeting': {
    en: "Hi there, I'm",
    id: 'Halo, saya',
    jp: 'はじめまして、私は',
  },
  'hero.name': {
    en: 'Denisetiya',
    id: 'Denisetiya',
    jp: 'Denisetiya',
  },
  'hero.title': {
    en: 'Full Stack Developer',
    id: 'Full Stack Developer',
    jp: 'フルスタック開発者',
  },
  'hero.subtitle': {
    en: 'I craft digital experiences that seamlessly blend innovation with functionality, turning complex ideas into elegant solutions',
    id: 'Saya menciptakan pengalaman digital yang memadukan inovasi dengan fungsionalitas, mengubah ide-ide kompleks menjadi solusi yang elegan',
    jp: 'イノベーションと機能性を融合したデジタル体験を創造し、複雑なアイデアをエレガントなソリューションに変えています',
  },
  'hero.cta': {
    en: "Let's Build Something Amazing",
    id: 'Mari Wujudkan Ide Hebat',
    jp: '素晴らしいものを一緒に創りましょう',
  },
  'hero.resume': {
    en: 'Download Resume',
    id: 'Unduh CV',
    jp: '履歴書をダウンロード',
  },

  // About Section
  'about.title': {
    en: 'About Me',
    id: 'Tentang Saya',
    jp: '私について',
  },
  'about.subtitle': {
    en: 'Discover my journey in tech and what drives my passion for development',
    id: 'Temukan perjalanan saya di dunia teknologi dan apa yang memotivasi passion saya dalam development',
    jp: 'テクノロジーの世界での私の歩みと、開発に対する情熱の源泉をご紹介します',
  },
  'about.description1': {
    en: "I'm a passionate Full Stack Developer who thrives on transforming complex challenges into elegant, scalable solutions. With deep expertise in modern web technologies and TypeScript, I bridge the gap between creative vision and technical execution.",
    id: 'Saya adalah Full Stack Developer yang passionate dalam mengubah tantangan kompleks menjadi solusi yang elegan dan scalable. Dengan keahlian mendalam di teknologi web modern dan TypeScript, saya menjembatani gap antara visi kreatif dan eksekusi teknis.',
    jp: '複雑な課題をエレガントでスケーラブルなソリューションに変える情熱的なフルスタック開発者です。モダンなWeb技術とTypeScriptの深い専門知識を持ち、創造的なビジョンと技術的な実行の架け橋となっています。',
  },
  'about.description2': {
    en: 'My expertise spans the entire development spectrum – from crafting intuitive user interfaces that users love, to architecting robust backend systems that perform at scale. I believe great software is born from the perfect marriage of user-centric design and solid engineering principles.',
    id: 'Keahlian saya mencakup seluruh spektrum development – mulai dari menciptakan user interface intuitif yang disukai pengguna, hingga merancang sistem backend yang robust dan scalable. Saya percaya software yang hebat lahir dari perpaduan sempurna antara desain yang user-centric dan prinsip engineering yang solid.',
    jp: '私の専門知識は開発のすべての領域に及びます。ユーザーに愛される直感的なインターフェースの作成から、スケールに対応する堅牢なバックエンドシステムの設計まで。優れたソフトウェアは、ユーザー中心のデザインと堅実なエンジニアリング原則の完璧な融合から生まれると信じています。',
  },
  'about.description3': {
    en: "What sets me apart is my relentless curiosity and commitment to excellence. I'm constantly exploring emerging technologies, refining my craft, and pushing the boundaries of what's possible. For me, web development isn't just a profession – it's a canvas for innovation.",
    id: 'Yang membedakan saya adalah rasa ingin tahu yang tak pernah surut dan komitmen terhadap excellence. Saya terus-menerus mengeksplorasi teknologi emerging, mengasah craft saya, dan mendorong batas-batas kemungkinan. Bagi saya, web development bukan hanya profesi – ini adalah kanvas untuk berinovasi.',
    jp: '私を際立たせているのは、絶え間ない好奇心と卓越性への取り組みです。新しい技術を常に探求し、スキルを磨き、可能性の境界を押し広げています。私にとってWeb開発は単なる職業ではなく、イノベーションのキャンバスなのです。',
  },

  // Skills Section
  'skills.title': {
    en: 'Skills & Technologies',
    id: 'Keahlian & Teknologi',
    jp: 'スキル & テクノロジー',
  },
  'skills.subtitle': {
    en: 'The powerful toolkit I leverage to transform ideas into reality and deliver exceptional digital experiences',
    id: 'Toolkit powerful yang saya gunakan untuk mengubah ide menjadi kenyataan dan menghadirkan pengalaman digital yang luar biasa',
    jp: 'アイデアを現実に変え、卓越したデジタル体験を提供するために活用する強力なツールキット',
  },
  'skills.tech_title': {
    en: 'Technologies I Master',
    id: 'Teknologi yang Saya Kuasai',
    jp: 'マスターしている技術',
  },
  'skills.languages': {
    en: 'Programming Languages',
    id: 'Bahasa Pemrograman',
    jp: 'プログラミング言語',
  },
  'skills.frameworks': {
    en: 'Frameworks & Libraries',
    id: 'Framework & Library',
    jp: 'フレームワーク & ライブラリ',
  },
  'skills.databases': {
    en: 'Database Systems',
    id: 'Sistem Database',
    jp: 'データベースシステム',
  },
  'skills.tools': {
    en: 'Development Tools',
    id: 'Tools Development',
    jp: '開発ツール',
  },

  // Projects Section
  'projects.title': {
    en: 'Featured Projects',
    id: 'Proyek Unggulan',
    jp: '注目のプロジェクト',
  },
  'projects.subtitle': {
    en: 'A curated collection of my latest work, showcasing technical excellence and innovative problem-solving approaches',
    id: 'Koleksi terpilih dari karya-karya terbaru saya, menampilkan keunggulan teknis dan pendekatan problem-solving yang inovatif',
    jp: '技術的な卓越性と革新的な問題解決アプローチを示す、私の最新作品の厳選コレクション',
  },
  'projects.view_live': {
    en: 'Live Demo',
    id: 'Demo Langsung',
    jp: 'ライブデモ',
  },
  'projects.view_code': {
    en: 'View Code',
    id: 'Lihat Code',
    jp: 'コードを見る',
  },

  // Project Titles
  'project.mebel.title': {
    en: 'MEBEL STORE - E-Commerce Platform',
    id: 'MEBEL STORE - Platform E-Commerce',
    jp: 'MEBEL STORE - Eコマースプラットフォーム',
  },
  'project.medisense.title': {
    en: 'Medisense API - Healthcare Intelligence',
    id: 'Medisense API - Healthcare Intelligence',
    jp: 'Medisense API - ヘルスケアインテリジェンス',
  },
  'project.restapi.title': {
    en: 'REST API Starter Kit',
    id: 'REST API Starter Kit',
    jp: 'REST APIスターターキット',
  },
  'project.restquick.title': {
    en: 'RestQuick CLI Tool',
    id: 'RestQuick CLI Tool',
    jp: 'RestQuick CLIツール',
  },
  'project.svelte.title': {
    en: 'Svelte In-Scroll Animation',
    id: 'Svelte In-Scroll Animation',
    jp: 'Svelte In-Scroll アニメーション',
  },
  'project.singlestore.title': {
    en: 'Single Store - E-Commerce Backend',
    id: 'Single Store - E-Commerce Backend',
    jp: 'Single Store - Eコマースバックエンド',
  },
  'project.qera.title': {
    en: 'Qera - High-Performance Framework',
    id: 'Qera - High-Performance Framework',
    jp: 'Qera - 高性能フレームワーク',
  },

  // Project Descriptions
  'project.mebel.desc': {
    en: 'A feature-rich e-commerce platform built with React and Express, delivering seamless shopping experiences with advanced cart management, secure authentication, and integrated payment processing.',
    id: 'Platform e-commerce yang kaya fitur, dibangun dengan React dan Express, menghadirkan pengalaman berbelanja yang seamless dengan manajemen cart yang advanced, autentikasi yang aman, dan pemrosesan pembayaran terintegrasi.',
    jp: 'ReactとExpressで構築された機能豊富なeコマースプラットフォーム。高度なカート管理、安全な認証、統合された決済処理でシームレスなショッピング体験を提供します。',
  },
  'project.medisense.desc': {
    en: 'An intelligent healthcare backend solution featuring AI-powered symptom analysis, smart medication recommendations, comprehensive disease lookup, and advanced drug interaction checking to revolutionize patient care.',
    id: 'Solusi backend healthcare yang intelligent dengan analisis gejala bertenaga AI, rekomendasi obat yang cerdas, pencarian penyakit yang komprehensif, dan pengecekan interaksi obat yang advanced untuk merevolusi perawatan pasien.',
    jp: 'AI搭載の症状分析、スマートな薬剤推奨、包括的な疾患検索、高度な薬物相互作用チェックを特徴とする、患者ケアを革新するインテリジェントなヘルスケアバックエンドソリューション。',
  },
  'project.restapi.desc': {
    en: 'A production-ready REST API boilerplate featuring JWT authentication, robust validation, comprehensive error handling, and auto-generated documentation – perfect for rapid development across multiple frameworks.',
    id: 'Boilerplate REST API yang siap produksi dengan autentikasi JWT, validasi yang robust, error handling yang komprehensif, dan dokumentasi yang auto-generated – sempurna untuk rapid development di berbagai framework.',
    jp: 'JWT認証、堅牢なバリデーション、包括的なエラーハンドリング、自動生成ドキュメントを備えたプロダクションレディなREST APIボイラープレート。複数のフレームワークでの迅速な開発に最適です。',
  },
  'project.restquick.desc': {
    en: 'A powerful CLI tool that generates production-ready REST APIs instantly. Built on my REST API Template with JWT authentication – simply run with npx or pnpx for lightning-fast project bootstrapping.',
    id: 'Tool CLI yang powerful untuk menghasilkan REST API siap produksi secara instan. Dibangun di atas REST API Template saya dengan autentikasi JWT – cukup jalankan dengan npx atau pnpx untuk project bootstrapping yang lightning-fast.',
    jp: 'プロダクションレディなREST APIを瞬時に生成する強力なCLIツール。JWT認証を備えた私のREST APIテンプレートをベースに構築。npxやpnpxで実行するだけで超高速プロジェクトブートストラップが可能です。',
  },
  'project.svelte.desc': {
    en: 'A lightweight, highly customizable NPM library for creating buttery-smooth scroll animations in Svelte applications. Designed for performance and ease of use with extensive configuration options.',
    id: 'Library NPM yang lightweight dan highly customizable untuk menciptakan animasi scroll yang buttery-smooth di aplikasi Svelte. Dirancang untuk performa dan kemudahan penggunaan dengan opsi konfigurasi yang ekstensif.',
    jp: 'Svelteアプリケーションでバターのようになめらかなスクロールアニメーションを作成するための軽量で高度にカスタマイズ可能なNPMライブラリ。豊富な設定オプションでパフォーマンスと使いやすさを重視して設計されています。',
  },
  'project.singlestore.desc': {
    en: 'A robust, enterprise-grade e-commerce backend powered by Express, TypeScript, MongoDB, and Prisma. Features comprehensive API documentation, advanced data validation with Zod, and scalable architecture patterns.',
    id: 'Backend e-commerce yang robust dan enterprise-grade yang diperkuat oleh Express, TypeScript, MongoDB, dan Prisma. Dilengkapi dokumentasi API yang komprehensif, validasi data advanced dengan Zod, dan pola arsitektur yang scalable.',
    jp: 'Express、TypeScript、MongoDB、Prismaで構築されたロバストなエンタープライズグレードのeコマースバックエンド。包括的なAPIドキュメント、Zodによる高度なデータバリデーション、スケーラブルなアーキテクチャパターンを特徴としています。',
  },
  'project.qera.desc': {
    en: 'A blazingly fast REST API framework built on uWebSockets.js with minimal dependencies. Engineered for maximum performance and developer productivity in high-throughput applications.',
    id: 'Framework REST API yang blazingly fast yang dibangun di atas uWebSockets.js dengan dependensi minimal. Direkayasa untuk performa maksimal dan produktivitas developer dalam aplikasi high-throughput.',
    jp: '最小限の依存関係でuWebSockets.jsに構築された超高速REST APIフレームワーク。高スループットアプリケーションでの最大パフォーマンスと開発者生産性のために設計されています。',
  },
  'projects.view_all': {
    en: 'Explore All Projects',
    id: 'Jelajahi Semua Proyek',
    jp: 'すべてのプロジェクトを探索',
  },

  // Experience Section
  'experience.title': {
    en: 'Professional Experience',
    id: 'Pengalaman Profesional',
    jp: 'プロフェッショナル経験',
  },
  'experience.subtitle': {
    en: 'My journey in the tech industry, building solutions and delivering value across various projects and organizations',
    id: 'Perjalanan saya di industri teknologi, membangun solusi dan memberikan nilai di berbagai proyek dan organisasi',
    jp: 'テクノロジー業界での私の歩み、様々なプロジェクトと組織でソリューションを構築し価値を提供',
  },
  'experience.current': {
    en: 'Current',
    id: 'Saat Ini',
    jp: '現在',
  },
  'experience.type.freelance': {
    en: 'Freelance',
    id: 'Freelance',
    jp: 'フリーランス',
  },
  'experience.type.fulltime': {
    en: 'Full-time',
    id: 'Full-time',
    jp: '正社員',
  },
  'experience.type.contract': {
    en: 'Contract',
    id: 'Kontrak',
    jp: '契約',
  },
  'experience.type.parttime': {
    en: 'Part-time',
    id: 'Part-time',
    jp: 'パートタイム',
  },
  'experience.type.internship': {
    en: 'Internship',
    id: 'Magang',
    jp: 'インターンシップ',
  },
  'experience.skills_used': {
    en: 'Skills & Technologies',
    id: 'Skill & Teknologi',
    jp: 'スキル & テクノロジー',
  },
  'experience.summary.title': {
    en: 'Professional Journey Summary',
    id: 'Ringkasan Perjalanan Profesional',
    jp: 'プロフェッショナル・ジャーニーサマリー',
  },
  'experience.summary.description': {
    en: 'Over 2+ years of progressive experience in full-stack development, from freelance projects to corporate backend development. Passionate about creating efficient, scalable solutions using modern technologies.',
    id: 'Lebih dari 2+ tahun pengalaman progresif dalam pengembangan full-stack, dari proyek freelance hingga pengembangan backend korporat. Bersemangat menciptakan solusi yang efisien dan scalable menggunakan teknologi modern.',
    jp: 'フリーランスプロジェクトから企業のバックエンド開発まで、フルスタック開発における2年以上の段階的な経験。モダンな技術を使用して効率的でスケーラブルなソリューションを作成することに情熱を注いでいます。',
  },
  'experience.stats.years': {
    en: 'Years Experience',
    id: 'Tahun Pengalaman',
    jp: '年の経験',
  },
  'experience.stats.positions': {
    en: 'Professional Roles',
    id: 'Peran Profesional',
    jp: 'プロフェッショナルな役割',
  },
  'experience.stats.technologies': {
    en: 'Technologies Used',
    id: 'Teknologi Digunakan',
    jp: '使用技術',
  },
  'experience.linkedin_button': {
    en: 'View LinkedIn Profile',
    id: 'Lihat Profil LinkedIn',
    jp: 'LinkedInプロフィールを見る',
  },
  'experience.cta_text': {
    en: 'Interested in working together? Let\'s discuss your next project.',
    id: 'Tertarik untuk bekerja sama? Mari diskusikan proyek selanjutnya Anda.',
    jp: '一緒に働くことに興味がありますか？次のプロジェクトについて話し合いましょう。',
  },
  'experience.cta_button': {
    en: 'Start a Conversation',
    id: 'Mulai Percakapan',
    jp: '会話を始める',
  },

  // Contact Section

  // Experience Entries
  'exp.hes.company': {
    en: 'PT HES Cipta Kreasi',
    id: 'PT HES Cipta Kreasi',
    jp: 'PT HES Cipta Kreasi',
  },
  'exp.hes.position': {
    en: 'Back End Developer',
    id: 'Back End Developer',
    jp: 'バックエンド開発者',
  },
  'exp.hes.location': {
    en: 'On-site',
    id: 'On-site',
    jp: 'オンサイト',
  },
  'exp.hes.period': {
    en: 'Mar 2025 - Present · 5 mos',
    id: 'Mar 2025 - Sekarang · 5 bulan',
    jp: '2025年3月 - 現在 · 5ヶ月',
  },
  'exp.hes.description': {
    en: 'Full-time Back End Developer role focused on building robust server-side applications and API development. Working with modern backend technologies to deliver scalable and efficient solutions.\n\n• Developing and maintaining backend services using TypeScript and Node.js\n• Working with MongoDB for database design and optimization\n• Building RESTful APIs and microservices architecture\n• Implementing server-side logic and database integration\n• Collaborating with frontend teams for seamless integration\n• Ensuring code quality through testing and code reviews',
    id: 'Peran Back End Developer full-time yang berfokus pada membangun aplikasi server-side yang robust dan pengembangan API. Bekerja dengan teknologi backend modern untuk memberikan solusi yang scalable dan efisien.\n\n• Mengembangkan dan memelihara layanan backend menggunakan TypeScript dan Node.js\n• Bekerja dengan MongoDB untuk desain dan optimisasi database\n• Membangun RESTful API dan arsitektur microservices\n• Mengimplementasikan logika server-side dan integrasi database\n• Berkolaborasi dengan tim frontend untuk integrasi yang seamless\n• Memastikan kualitas kode melalui testing dan code review',
    jp: '堅牢なサーバーサイドアプリケーションとAPI開発の構築に焦点を当てたフルタイムのバックエンド開発者の役割。スケーラブルで効率的なソリューションを提供するためにモダンなバックエンド技術を使用しています。\n\n• TypeScriptとNode.jsを使用したバックエンドサービスの開発と保守\n• データベース設計と最適化のためのMongoDBでの作業\n• RESTful APIとマイクロサービスアーキテクチャの構築\n• サーバーサイドロジックとデータベース統合の実装\n• シームレスな統合のためのフロントエンドチームとの協力\n• テストとコードレビューを通じたコード品質の確保',
  },
  'exp.uin.company': {
    en: 'UIN Raden Intan Lampung',
    id: 'UIN Raden Intan Lampung',
    jp: 'UINラデン・インタン・ランプン大学',
  },
  'exp.uin.position': {
    en: 'Full Stack Developer',
    id: 'Full Stack Developer',
    jp: 'フルスタック開発者',
  },
  'exp.uin.location': {
    en: 'Sukarame, Lampung, Indonesia · Hybrid',
    id: 'Sukarame, Lampung, Indonesia · Hybrid',
    jp: 'スカラメ、ランプン、インドネシア · ハイブリッド',
  },
  'exp.uin.period': {
    en: 'Jun 2024 - Mar 2025 · 10 mos',
    id: 'Jun 2024 - Mar 2025 · 10 bulan',
    jp: '2024年6月 - 2025年3月 · 10ヶ月',
  },
  'exp.uin.description': {
    en: 'Internship position as Full Stack Developer, gaining hands-on experience in both frontend and backend development. Worked on various web applications using modern frameworks and technologies.\n\n• Developed full-stack web applications using Django framework\n• Managed database operations with MySQL for data storage and retrieval\n• Created responsive user interfaces and interactive web components\n• Implemented RESTful APIs for frontend-backend communication\n• Collaborated in a team environment following agile development practices\n• Gained experience in version control and project management tools',
    id: 'Posisi magang sebagai Full Stack Developer, mendapatkan pengalaman langsung dalam pengembangan frontend dan backend. Bekerja pada berbagai aplikasi web menggunakan framework dan teknologi modern.\n\n• Mengembangkan aplikasi web full-stack menggunakan framework Django\n• Mengelola operasi database dengan MySQL untuk penyimpanan dan pengambilan data\n• Membuat antarmuka pengguna yang responsif dan komponen web interaktif\n• Mengimplementasikan RESTful API untuk komunikasi frontend-backend\n• Berkolaborasi dalam lingkungan tim mengikuti praktik pengembangan agile\n• Memperoleh pengalaman dalam version control dan tools manajemen proyek',
    jp: 'フルスタック開発者としてのインターンシップポジションで、フロントエンドとバックエンド開発の両方で実践的な経験を積みました。モダンなフレームワークと技術を使用して様々なWebアプリケーションに取り組みました。\n\n• Djangoフレームワークを使用したフルスタックWebアプリケーションの開発\n• データの保存と取得のためのMySQLでのデータベース操作の管理\n• レスポンシブなユーザーインターフェースとインタラクティブなWebコンポーネントの作成\n• フロントエンドとバックエンドの通信のためのRESTful APIの実装\n• アジャイル開発手法に従ったチーム環境での協力\n• バージョン管理とプロジェクト管理ツールの経験を獲得',
  },
  'exp.assistant.company': {
    en: 'UIN Raden Intan Lampung',
    id: 'UIN Raden Intan Lampung',
    jp: 'UINラデン・インタン・ランプン大学',
  },
  'exp.assistant.position': {
    en: 'Advance Programming Practicum Assistant',
    id: 'Asisten Praktikum Pemrograman Lanjut',
    jp: '高度プログラミング実習アシスタント',
  },
  'exp.assistant.location': {
    en: 'Kota Bandar Lampung, Lampung, Indonesia · On-site',
    id: 'Kota Bandar Lampung, Lampung, Indonesia · On-site',
    jp: 'バンダルランプン市、ランプン、インドネシア · オンサイト',
  },
  'exp.assistant.period': {
    en: 'Feb 2024 - Jun 2024 · 5 mos',
    id: 'Feb 2024 - Jun 2024 · 5 bulan',
    jp: '2024年2月 - 2024年6月 · 5ヶ月',
  },
  'exp.assistant.description': {
    en: 'Part-time role as a programming practicum assistant, helping students learn advanced programming concepts and providing guidance during practical sessions.\n\n• Assisted students in understanding Python programming language fundamentals and advanced concepts\n• Provided mentoring and guidance during programming laboratory sessions\n• Helped debug and troubleshoot student code and programming assignments\n• Managed time effectively to balance teaching responsibilities with personal studies\n• Developed communication and teaching skills through student interaction\n• Contributed to curriculum development and assessment of student progress',
    id: 'Peran part-time sebagai asisten praktikum pemrograman, membantu mahasiswa mempelajari konsep pemrograman lanjutan dan memberikan bimbingan selama sesi praktik.\n\n• Membantu mahasiswa memahami dasar-dasar bahasa pemrograman Python dan konsep lanjutan\n• Memberikan mentoring dan bimbingan selama sesi laboratorium pemrograman\n• Membantu debug dan troubleshoot kode mahasiswa dan tugas pemrograman\n• Mengelola waktu secara efektif untuk menyeimbangkan tanggung jawab mengajar dengan studi pribadi\n• Mengembangkan keterampilan komunikasi dan mengajar melalui interaksi dengan mahasiswa\n• Berkontribusi pada pengembangan kurikulum dan penilaian kemajuan mahasiswa',
    jp: 'プログラミング実習アシスタントとしてのパートタイムの役割で、学生が高度なプログラミング概念を学ぶのを支援し、実習セッション中にガイダンスを提供しました。\n\n• Pythonプログラミング言語の基礎と高度な概念を学生が理解するのを支援\n• プログラミング実習セッション中のメンタリングとガイダンスの提供\n• 学生のコードとプログラミング課題のデバッグとトラブルシューティングの支援\n• 個人の学習と教育責任のバランスを取るための効果的な時間管理\n• 学生との交流を通じたコミュニケーションと教育スキルの開発\n• カリキュラム開発と学生の進歩評価への貢献',
  },
  'exp.freelance.company': {
    en: 'Freelance',
    id: 'Freelance',
    jp: 'フリーランス',
  },
  'exp.freelance.position': {
    en: 'Web Developer',
    id: 'Web Developer',
    jp: 'Web開発者',
  },
  'exp.freelance.location': {
    en: 'Remote',
    id: 'Remote',
    jp: 'リモート',
  },
  'exp.freelance.period': {
    en: 'Jan 2023 - Mar 2025 · 2 yrs 3 mos',
    id: 'Jan 2023 - Mar 2025 · 2 tahun 3 bulan',
    jp: '2023年1月 - 2025年3月 · 2年3ヶ月',
  },
  'exp.freelance.description': {
    en: 'Freelance web development work spanning over 2 years, delivering diverse web solutions for various clients. Specialized in modern JavaScript frameworks and full-stack development.\n\n• Developed responsive web applications using React.js and modern frontend technologies\n• Built robust backend systems with Express.js and Node.js\n• Created RESTful APIs and integrated third-party services\n• Worked with various databases and implemented efficient data management\n• Collaborated with clients to understand requirements and deliver tailored solutions\n• Maintained and updated existing web applications with new features and improvements\n• Gained experience in project management and client communication',
    id: 'Pekerjaan pengembangan web freelance selama lebih dari 2 tahun, menghadirkan solusi web yang beragam untuk berbagai klien. Mengkhususkan diri dalam framework JavaScript modern dan pengembangan full-stack.\n\n• Mengembangkan aplikasi web responsif menggunakan React.js dan teknologi frontend modern\n• Membangun sistem backend yang robust dengan Express.js dan Node.js\n• Membuat RESTful API dan mengintegrasikan layanan pihak ketiga\n• Bekerja dengan berbagai database dan mengimplementasikan manajemen data yang efisien\n• Berkolaborasi dengan klien untuk memahami kebutuhan dan memberikan solusi yang disesuaikan\n• Memelihara dan memperbarui aplikasi web yang ada dengan fitur dan perbaikan baru\n• Memperoleh pengalaman dalam manajemen proyek dan komunikasi klien',
    jp: '2年以上にわたるフリーランスのWeb開発業務で、様々なクライアントのために多様なWebソリューションを提供しました。モダンなJavaScriptフレームワークとフルスタック開発を専門としています。\n\n• React.jsとモダンなフロントエンド技術を使用したレスポンシブWebアプリケーションの開発\n• Express.jsとNode.jsを使用した堅牢なバックエンドシステムの構築\n• RESTful APIの作成とサードパーティサービスの統合\n• 様々なデータベースでの作業と効率的なデータ管理の実装\n• 要件を理解し、カスタマイズされたソリューションを提供するためのクライアントとの協力\n• 新機能と改善を加えた既存のWebアプリケーションの保守と更新\n• プロジェクト管理とクライアントコミュニケーションの経験を獲得',
  },

  // Contact Section
  'contact.title': {
    en: "Let's Create Something Extraordinary",
    id: 'Mari Ciptakan Sesuatu yang Luar Biasa',
    jp: '特別なものを一緒に創造しましょう',
  },
  'contact.subtitle': {
    en: "Got an ambitious project or exciting opportunity? I'd love to explore how we can collaborate to bring your boldest ideas to life.",
    id: 'Punya proyek yang ambisius atau peluang yang menarik? Saya ingin mengeksplorasi bagaimana kita bisa berkolaborasi untuk mewujudkan ide-ide terbesar Anda.',
    jp: '野心的なプロジェクトや魅力的な機会をお持ちですか？あなたの最も大胆なアイデアを実現するために、どのようにコラボレーションできるか探求したいと思います。',
  },
  'contact.name': {
    en: 'Your Name',
    id: 'Nama Anda',
    jp: 'お名前',
  },
  'contact.email': {
    en: 'Email Address',
    id: 'Alamat Email',
    jp: 'メールアドレス',
  },
  'contact.subject': {
    en: 'Subject',
    id: 'Subjek',
    jp: '件名',
  },
  'contact.message': {
    en: 'Tell me about your project',
    id: 'Ceritakan tentang proyek Anda',
    jp: 'プロジェクトについて教えてください',
  },
  'contact.send': {
    en: 'Send Message',
    id: 'Kirim Pesan',
    jp: 'メッセージを送信',
  },
  'contact.info_title': {
    en: 'Ready to Connect?',
    id: 'Siap Terhubung?',
    jp: 'つながりませんか？',
  },
  'contact.info_subtitle': {
    en: "I'm always enthusiastic about discussing groundbreaking projects, innovative collaborations, and opportunities to push the boundaries of what's possible.",
    id: 'Saya selalu antusias mendiskusikan proyek-proyek groundbreaking, kolaborasi inovatif, dan peluang untuk mendorong batas-batas kemungkinan.',
    jp: '画期的なプロジェクト、革新的なコラボレーション、そして可能性の境界を押し広げる機会について話し合うことに常に熱意を持っています。',
  },

  // Footer
  'footer.rights': {
    en: 'All rights reserved.',
    id: 'Semua hak dilindungi.',
    jp: '無断転載禁止。',
  },
  'footer.made_with': {
    en: 'Crafted with',
    id: 'Dibuat dengan',
    jp: '制作：',
  },
  'footer.by': {
    en: 'by',
    id: 'oleh',
    jp: '',
  },

  // Theme Toggle
  'theme.light': {
    en: 'Light Theme',
    id: 'Tema Terang',
    jp: 'ライトテーマ',
  },
  'theme.dark': {
    en: 'Dark Theme',
    id: 'Tema Gelap',
    jp: 'ダークテーマ',
  },

  // Language Toggle
  'lang.english': {
    en: 'English',
    id: 'English',
    jp: 'English',
  },
  'lang.indonesian': {
    en: 'Indonesia',
    id: 'Indonesia',
    jp: 'Indonesia',
  },
  'lang.japanese': {
    en: '日本語',
    id: '日本語',
    jp: '日本語',
  },
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'id' || savedLanguage === 'jp')) {
      setLanguage(savedLanguage);
    } else {
      // Default to English or detect from browser
      const browserLang = navigator.language.startsWith('id') ? 'id' : 
                         navigator.language.startsWith('ja') ? 'jp' : 'en';
      setLanguage(browserLang);
    }
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
  };

  const t = (key: string): string => {
    const translation = translations[key];
    if (!translation) {
      console.warn(`Translation key "${key}" not found`);
      return key;
    }
    return translation[language] || translation.en || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
