import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      "first text": "I’m Almila. I’m a full-stack developer. I can craft solid and scalable frontend products. Let’s meet! ",
      "LIGHT MODE": "LIGHT MODE",
      "DARK MODE": "DARK MODE",
      "hi": "Hi! 👋",
      "skills": "Skills",
      "profile": "Profile",
      "information": "Basic İnformation",
      "about": "About me",
      "place": "Place of Residence",
      "date": "Date of Birth",
      "education": "Educational Status",
      "role": "Preferred Role",
      "projects": "Projects",
      "button": "other projects",
      "nasa name": "NASA Astronomy Photo Of The Day",
      "nasa description": "In this project, NASA developed an application to display the photo of the day. Using the NASA API, the 'Astronomy Photo Of The Day' was called.",
      "diary name": "Gratitude Diary",
      "diary description": "A Gratitude Diary is a kind of diary where peoples often write what they are thankful for so that they can feel gratitude. In this diary, previously added notes can be listed, notes can be deleted and new notes can be added. ",
      "pizza name":"Technological Foods",
      "pizza description":"In this project; a Homepage, Order Form and Order Received page were created for the 'Technological Foods' brand, which is a website to be used to bring food to software developers who are hungry at the computer.",
      "movie name": "Redux React Module Project: Movies",
      "movie description": "This project was worked on a web application with a small movie database.You can browse through the movies in the movie list and add the movie you choose to your list.",
      "View on Github": "View on Github",
      "go app": "Go to App ->",
      "lets": "Let’s work together on your next product.",
      "personal blog": "Personal Blog"

    }
  },
  tr: {
    translation: {
      "first text": "Ben Almila. Ben bir full-stack geliştiricisiyim. Sağlam ve ölçeklenebilir önyüz ürünleri üretebilirim. Tanışalım!",
      "LIGHT MODE": "GÜNDÜZ MODU",
      "DARK MODE": "GECE MODU",
      "hi": "Merhaba! 👋",
      "skills": "Yetenekler",
      "profile": "Profil",
      "information": "Temel Bilgiler",
      "about": "Hakkımda",
      "place": "İkamet Şehri",
      "date": "Doğum Tarihi",
      "education": "Eğitim Durumu",
      "role": "Tercih Ettiği Rol",
      "projects": "Projeler",
      "button": "diğer projeler",
      "nasa name": "NASA Astronomi Günün Fotoğrafı",
      "nasa description": "Bu projede, NASA günün fotoğrafını göstermek için bir uygulama geliştirildi. NASA API  kullanılarak 'Astronomy Photo Of The Day' (Günün Astronomi Fotosu) çağrıldı.",
      "diary name": "Minnet Günlüğü",
      "diary description": "Minnet Günlüğü şükran duygusunu hissetmesi için bireylerin sık sık teşekkür ettiği şeyleri yazdığı bir tür günlüktür. Bu günlük içerisinde daha önce eklenmiş notlar listelenebilir, notlar silinebilir ve yeni notlar eklenebilir.",
      "pizza name":"Teknolojik Yemekler",
      "pizza description":"Bu projede bilgisayar başında karnı acıkan yazılımcılara yiyecek getirmek için tasarlanmış bir web sitesi Teknolojik Yemekler' markasına, Anasayfa, Sipariş Formu ve Sipariş Alındı sayfası oluşturuldu.",
      "movie name": "Redux React Modül Projesi: Filmler",
      "movie description": "Bu projede, küçük bir film veritabanı içeren bir web uygulamasında çalışıldı. Film listesindeki filmler arasında gezebilir, istediğiniz filmi listenize ekleyebilirsiniz.",
      "View on Github": "Github'ta Görüntüle",
      "go app": "Uygulamaya Git ->",
      "lets": "Hadi sonraki projende birlikte çalışalım.",
      "personal blog": "Kişisel Blog"



    }
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;