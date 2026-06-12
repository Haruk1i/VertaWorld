import Image from "next/image";

const contacts = {
  phone: "55125527",
  email: "vertaworld.office@gmail.com",
  facebook: "https://www.facebook.com/vertaworld",
  domain: "vertaworld.space"
};

const packages = [
  {
    name: "Starter",
    price: "150k+",
    subtitle: "Хямдралгүй эхлэх үнэ",
    fit: "Жижиг кофе шоп, салон, үйлчилгээний газар, танилцуулгын вебсайт.",
    goodFor: "Жижиг бизнес • Танилцуулга",
    features: [
      "1–3 үндсэн хуудас",
      "Утас, байршил, Facebook холбоос",
      "Үйлчилгээ, зураг, үнэний мэдээлэл",
      "Гар утсанд цэгцтэй харагдах дизайн"
    ]
  },
  {
    name: "Business",
    price: "300k+",
    subtitle: "Хямдралгүй эхлэх үнэ",
    fit: "Ресторан, сургалтын төв, үл хөдлөх, барилгын болон үйлчилгээний компани.",
    goodFor: "Компани • Захиалга авах",
    featured: true,
    features: [
      "5+ хуудастай илүү бүрэн бүтэц",
      "Захиалга / хүсэлт авах form",
      "Google-д бэлэн SEO бүтэц",
      "Professional Gmail тохиргооны зөвлөгөө: info@tanai-company.mn"
    ]
  },
  {
    name: "Premium Shop",
    price: "800k+",
    subtitle: "Хямдралгүй эхлэх үнэ",
    fit: "Албан ёсны брэнд дэлгүүр, online shop, барааны каталог, захиалгын систем.",
    goodFor: "Online shop • Brand store",
    features: [
      "Барааны каталог, ангилал, хайлт",
      "Үнэ, зураг, үлдэгдэл удирдах хэсэг",
      "Сагс, checkout, захиалгын мэдээлэл",
      "Professional Gmail тохиргооны зөвлөгөө: order@tanai-store.mn"
    ]
  }
];

const included = [
  "Эхний жилийн засвар үйлчилгээ",
  "Жижиг сайжруулалт, зөвлөгөө",
  "SEO boost суурь тохиргоо",
  "Хурд, хамгаалалтын үндсэн тохиргоо",
  "Mobile responsive дизайн",
  "Domain / hosting тохиргооны тусламж"
];

const services = [
  ["Вебсайт", "Танилцуулга, үйлчилгээ, үнэ, байршил, холбоо барих хэсэгтэй."],
  ["Online shop", "Бараа, зураг, үнэ, үлдэгдэл, захиалга хүлээн авах бүтэцтэй."],
  ["Захиалгын систем", "Хэрэглэгч захиалга өгнө, бизнес тал төлөвөө хянах боломжтой."],
  ["Admin хэсэг", "Текст, зураг, бараа, үнэ зэрэг мэдээллээ өөрчлөх боломжтой."],
  ["SEO boost", "Google дээр илүү ойлгомжтой харагдах суурь тохиргоо."],
  ["Support", "Эхний жил жижиг засвар, заавар, сайжруулалтын дэмжлэгтэй."]
];

const process = [
  ["01", "Сонсож ойлгоно", "Танай бизнес, зорилго, хэрэгтэй функц, төсөв, жишээ сайтыг тодруулна."],
  ["02", "Demo concept", "Эхний туршилтын вебсайтыг бэлдэж, харагдах байдал болон бүтэц танилцуулна."],
  ["03", "Санал нийлнэ", "Танд таалагдах хүртэл текст, өнгө, бүтэц, mobile харагдацыг сайжруулна."],
  ["04", "Нээлт хийнэ", "Та 100% сэтгэл ханамжтай болсон үед төлбөрөө авч, сайтыг ажиллуулна."]
];

const businessTypes = [
  "Кафе, ресторан",
  "Гоо сайхны салон",
  "Дэлгүүр, boutique",
  "Сургалтын төв",
  "Фитнес, клуб",
  "Үл хөдлөх",
  "Барилгын компани",
  "Брэнд дэлгүүр",
  "Авто үйлчилгээ",
  "Эмнэлэг, клиник",
  "Зочид буудал",
  "Бусад бизнес"
];

export default function Home() {
  return (
    <main id="top">
      <header className="siteHeader" aria-label="Main header">
        <a className="brand" href="#top" aria-label="VertaWorld home">
          <Image src="/assets/vertaworld-logo.png" alt="VertaWorld logo" width={52} height={52} priority />
          <span>
            <strong>VERTA<span>WORLD</span></strong>
            <small>We build websites that grow businesses</small>
          </span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#offer">Урамшуулал</a>
          <a href="#pricing">Үнэ</a>
          <a href="#about">Бидний тухай</a>
          <a href="#contact" className="navButton">Захиалга</a>
        </nav>
      </header>

      <section className="hero">
        <div className="heroText reveal">
          <p className="eyebrow">Website Development Studio</p>
          <h1>Таны бизнесийн анхны мэргэжлийн вебсайт</h1>
          <p className="lead">
            VertaWorld нь бизнесүүдэд зориулж цэвэрхэн, хурдан, гар утсанд тухтай вебсайт,
            online shop, захиалгын систем бүтээнэ.
          </p>
          <div className="heroActions">
            <a className="primaryButton" href="#contact">Үнэгүй demo авах</a>
            <a className="ghostButton" href={`tel:${contacts.phone}`}>Утасдах</a>
          </div>
          <div className="quickTrust" aria-label="Key benefits">
            <span>50% launch offer</span>
            <span>Demo concept</span>
            <span>Mobile friendly</span>
          </div>
        </div>

        <div className="heroMedia reveal delay" aria-hidden="true">
          <Image
            src="/assets/vertaworld-banner.png"
            alt="VertaWorld website development preview"
            width={1100}
            height={1100}
            priority
          />
        </div>
      </section>

      <section className="offerCard reveal" id="offer">
        <div>
          <p className="eyebrow">Launch offer</p>
          <h2>Эхний 5 байгууллагад 50% хямдрал</h2>
          <p>
            Доорх <b>150k+, 300k+, 800k+</b> үнэ нь хямдралгүй эхлэх үнэ. Вебсайтын ажиллагаа,
            хуудасны тоо, захиалгын процесс, design detail болон нэмэлт боломжуудаас хамаарч
            бид таньд эцсийн үнэлгээ хэлнэ. Тэр үнэлгээнээс эхний 5 байгууллагад <b>50% хямдруулна.</b>
          </p>
        </div>
        <div className="offerBadge" aria-label="50 percent discount">
          <strong>50%</strong>
          <span>эхний 5 байгууллага</span>
        </div>
      </section>

      <section className="section compactSection" aria-label="Included in every plan">
        <div className="sectionHead tight">
          <p className="eyebrow">Included</p>
          <h2>Бүх багцад багтана</h2>
        </div>
        <div className="includedGrid">
          {included.map((item) => (
            <span key={item}>✓ {item}</span>
          ))}
        </div>
      </section>

      <section className="section" aria-label="Services">
        <div className="sectionHead">
          <p className="eyebrow">Services</p>
          <h2>Бизнесээ онлайнд илүү итгэлтэй харагдуулах шийдлүүд</h2>
          <p>Хэрэглэгч ойлгоход амар, захиалга өгөхөд төвөггүй, бизнес талд удирдахад цэгцтэй байхаар төлөвлөнө.</p>
        </div>
        <div className="serviceScroller">
          {services.map(([title, text], index) => (
            <article className="serviceCard" key={title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="pricing">
        <div className="sectionHead">
          <p className="eyebrow">Pricing</p>
          <h2>Ойлгомжтой эхлэх үнэ</h2>
          <p>
            Эдгээр нь тогтмол эцсийн үнэ биш. Бид таны хэрэгцээг сонсоод бодит үнэлгээ гаргана.
            Launch offer-д багтвал тэр үнэлгээнээс 50% хямдарна.
          </p>
        </div>
        <div className="pricingGrid">
          {packages.map((item) => (
            <article className={`priceCard ${item.featured ? "featured" : ""}`} key={item.name}>
              {item.featured ? <span className="cardBadge">Санал болгох</span> : null}
              <p className="fitLabel">{item.goodFor}</p>
              <h3>{item.name}</h3>
              <div className="price">
                <strong>{item.price}</strong>
                <span>{item.subtitle}</span>
              </div>
              <p className="fitText">{item.fit}</p>
              <ul>
                {item.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
              <p className="cardNote">Эцсийн үнэ нь detail, process, нэмэлт ажиллагаанаас хамаарна.</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section split" id="about">
        <div className="aboutText">
          <p className="eyebrow">About us</p>
          <h2>Бидний тухай</h2>
          <p>
            VertaWorld нь шинээр үйл ажиллагаагаа эхлүүлж буй software studio. Бид жижиг болон том
            бизнесүүдэд зориулж website, online shop, захиалгын систем, бүтээгдэхүүний каталог зэрэг
            digital шийдлүүдийг хөгжүүлдэг.
          </p>
          <p>
            Манай баг энэ төрлийн ажлын <b>5+ жилийн туршлагатай</b> мэргэжлийн хамт олноос бүрдсэн.
            Бид гоё харагдах дизайнаас гадна хурдан ажиллах, гар утсанд тухтай, хэрэглэгчдэд ойлгомжтой
            вебсайт хийхийг чухалчилдаг.
          </p>
        </div>
        <div className="businessBox">
          <h3>Энэ багцад тохирох бизнесүүд</h3>
          <div className="chips">
            {businessTypes.map((type) => (
              <span key={type}>{type}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="section processSection" aria-label="Work process">
        <div className="sectionHead">
          <p className="eyebrow">Process</p>
          <h2>Эрсдэл багатай ажиллах процесс</h2>
          <p>Бид туршилтын вебсайт хийж үзүүлээд, захиалагчтай санал нийлж, 100% сэтгэл ханамжтай болсон үед бүтэн төлбөрөө авна.</p>
        </div>
        <div className="processGrid">
          {process.map(([num, title, text]) => (
            <article key={num}>
              <span>{num}</span>
              <strong>{title}</strong>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="contactSection" id="contact">
        <div>
          <p className="eyebrow">Order now</p>
          <h2>Үнэгүй demo concept авах</h2>
          <p>
            Бизнесийнхээ нэр, үйл ажиллагаа, хэрэгтэй боломж, жишээ сайт байвал илгээгээрэй.
            Бид танд ойлгомжтой зөвлөгөө өгөөд боломжит үнийн санал гаргана.
          </p>
        </div>
        <div className="contactCards">
          <a href={`tel:${contacts.phone}`}><span>Утас</span><strong>{contacts.phone}</strong></a>
          <a href={`mailto:${contacts.email}`}><span>Email</span><strong>{contacts.email}</strong></a>
          <a href={contacts.facebook} target="_blank" rel="noopener noreferrer"><span>Facebook</span><strong>VertaWorld page</strong></a>
          <a href={`https://${contacts.domain}`} target="_blank" rel="noopener noreferrer"><span>Website</span><strong>{contacts.domain}</strong></a>
        </div>
      </section>

      <footer>
        <div className="footerBrand">
          <Image src="/assets/vertaworld-logo.png" alt="VertaWorld logo" width={36} height={36} />
          <strong>VERTAWORLD</strong>
        </div>
        <span>© 2026 • We build websites that grow businesses</span>
      </footer>

      <div className="mobileCta" aria-label="Mobile quick contact">
        <a href={`tel:${contacts.phone}`}>Утасдах</a>
        <a href={contacts.facebook} target="_blank" rel="noopener noreferrer">Facebook</a>
      </div>
    </main>
  );
}
