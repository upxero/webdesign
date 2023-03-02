const lang = {
    en: {
        navHome: "Home",
        navAbout: "About",
        navContact: "Contact",
        navPricing: "Pricing",
        title1: "Have a website made without start-up costs?",
        text1: "Always stay up-to-date: our website by month service keeps your online presence fresh and up to date.",
        title2: "Website Per Month",
        text2: "A complete online presence without the high costs. Don't worry about technical details, we design and manage your website for you every month.",
        buttonPricing: "View Prices",
        buttonAbout: "About Us",
        feature1: "Custom web design",
        featureText1: "A tailor-made website that fits your brand and objectives.",
        feature2: "Responsive website",
        featureText2: "A responsive design that looks and works on desktop, tablet and mobile.",
        feature3: "SEO Friendly",
        featureText3: "Search engine optimization (SEO) to ensure that your website performs well in search engines such as Google.",
        feature4: "Including maintenance",
        featureText4: "Regular updates to ensure your website stays up to date with the latest technologies and trends.",
        title3: "About Us",
        text3: "Professional websites without major investments",
        btnEn: "English",
        btnNl: "Nederlands"
    },
    nl: {
        navHome: "Home",
        navAbout: "Over",
        navContact: "Contact",
        navPricing: "Prijzen",
        title1: "Website laten maken zonder opstartkosten?!",
        text1: "Blijf altijd up-to-date: onze website per maand-service houdt jouw online aanwezigheid fris en actueel.",
        title2: "Website Per Maand",
        text2: "Een complete online aanwezigheid zonder de hoge kosten. Geen zorgen over technische details, wij ontwerpen en beheren jouw website elke maand voor jou.",
        buttonPricing: "Prijzen Bekijken",
        buttonAbout: "Over Ons",
        feature1: "Eigen huisstijl",
        featureText1: "Een op maat gemaakte website die past bij jouw merk en doelstellingen.",
        feature2: "Responsieve website",
        featureText2: "Een responsief ontwerp dat er goed uitziet en werkt op desktop, tablet en mobiel.",
        feature3: "SEO Vriendelijk",
        featureText3: "Zoekmachineoptimalisatie (SEO) om ervoor te zorgen dat jouw website goed presteert in zoekmachines zoals Google.",
        feature4: "Inclusief onderhoud",
        featureText4: "Regelmatige updates om ervoor te zorgen dat jouw website up-to-date blijft met de nieuwste technologieën en trends.",
        title3: "Over Ons",
        text3: "Professionele websites zonder grote investeringen",
        btnEn: "English",
        btnNl: "Nederlands"
    }
};

// Default language is English
let currentLang = "nl";

const navHomeElement = document.getElementById("nav-home");
const navAboutElement = document.getElementById("nav-about");
const navContactElement = document.getElementById("nav-contact");
const navPricingElement = document.getElementById("nav-pricing");
const title1Element = document.getElementById("title1");
const text1Element = document.getElementById("text1");
const title2Element = document.getElementById("title2");
const text2Element = document.getElementById("text2");
const buttonPricingElement = document.getElementById("button-pricing");
const buttonAboutElement = document.getElementById("button-about");
const feature1Element = document.getElementById("feature1");
const featureText1Element = document.getElementById("feature-text1");
const feature2Element = document.getElementById("feature2");
const featureText2Element = document.getElementById("feature-text2");
const feature3Element = document.getElementById("feature3");
const featureText3Element = document.getElementById("feature-text3");
const feature4Element = document.getElementById("feature4");
const featureText4Element = document.getElementById("feature-text4");
const title3Element = document.getElementById("title3");
const text3Element = document.getElementById("text3");
const btnEnElement = document.getElementById("btn-en");
const btnNlElement = document.getElementById("btn-nl");

function setLanguage(langCode) {
    currentLang = langCode;
    navHomeElement.innerText = lang[currentLang].navHome;
    navAboutElement.innerText = lang[currentLang].navAbout;
    navContactElement.innerText = lang[currentLang].navContact;
    navPricingElement.innerText = lang[currentLang].navPricing;
    title1Element.innerText = lang[currentLang].title1;
    text1Element.innerText = lang[currentLang].text1;
    title2Element.innerText = lang[currentLang].title2;
    text2Element.innerText = lang[currentLang].text2;
    buttonPricingElement.innerText = lang[currentLang].buttonPricing;
    buttonAboutElement.innerText = lang[currentLang].buttonAbout;
    feature1Element.innerText = lang[currentLang].feature1;
    featureText1Element.innerText = lang[currentLang].featureText1;
    feature2Element.innerText = lang[currentLang].feature2;
    featureText2Element.innerText = lang[currentLang].featureText2;
    feature3Element.innerText = lang[currentLang].feature3;
    featureText3Element.innerText = lang[currentLang].featureText3;
    feature4Element.innerText = lang[currentLang].feature4;
    featureText4Element.innerText = lang[currentLang].featureText4;
    title3Element.innerText = lang[currentLang].title3;
    text3Element.innerText = lang[currentLang].text3;
    btnEnElement.innerText = lang[currentLang].btnEn;
    btnNlElement.innerText = lang[currentLang].btnNl;
}

navHomeElement.addEventListener("click", (event) => {
    event.preventDefault();
    // Handle navigation to home page
});

navAboutElement.addEventListener("click", (event) => {
    event.preventDefault();
    // Handle navigation to about page
});

navContactElement.addEventListener("click", (event) => {
    event.preventDefault();
    // Handle navigation to contact page
});

navPricingElement.addEventListener("click", (event) => {
    event.preventDefault();
    // Handle navigation to pricing page
});

btnEnElement.addEventListener("click", () => {
    setLanguage("en");
});

btnNlElement.addEventListener("click", () => {
    setLanguage("nl");
});

// Set initial language
setLanguage(currentLang);
