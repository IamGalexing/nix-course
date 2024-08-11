# Product Card in Multi languages

Today in this assignment we're going to work with context. We will need to create a language switch for our site. This functionality allows users to easily change the language of the application, particularly on the page featuring product cards, which includes a header and a footer. By leveraging React Context, we create a mechanism to store and update the current language of the application across all components subscribed to this context.

Key features of the functionality:

- [ ] Product Card Page: Create a page that displays product cards, along with a header and a footer. The product cards can contain various information about the products, such as name, image, description, and price.
- [ ] Adding a Header and Footer: Include a header and a footer on the product card page. These can be static elements that contain a logo, navigation links, and other additional components.
- [ ] Language Context and Value Provisioning: Establish the LanguageProvider, which stores the current language of the application and the function to change the language. Apply the LanguageProvider at the top-level component,
- [ ] Language Selection: Introduce a language selection feature, such as a dropdown menu or a list of language options, within the header or footer. This allows users to choose their desired language for the application.
- [ ] Language Update and Localization: Upon selecting a different language, invoke the changeLanguage function from the context, which updates the language value. This triggers an automatic update of all components subscribed to the context, resulting in the display of translated texts and localized content based on the selected language.

By incorporating this functionality, users can seamlessly switch between different languages on the product card page.

## Extra Materials

For your work you can use a ready-made object or you can create a more convenient variant for you.

```javascript
products = [{
    en: {
        name: "Nike Metcon 2",
        price: "130 $",
        color: "red",
        img: "https://image.ibb.co/ncULza/1.jpg",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt aperiam dolores veritatis ad eligendi harum, voluptate assumenda voluptatum fugiat! Officiis ad hic expedita error dolores consectetur repudiandae aliquid modi deserunt."
    },
    ua: {
        name: "Nike Metcon 2",
        price: "2000 грн",
        color: "Червоний",
        img: "https://image.ibb.co/ncULza/1.jpg",
        description: "Замовник сам, замовник зможе домагатися адіпизації компанії. Я залишу відкритим біль істини, щоб вибрати їх, щоб забрати задоволення з насолод! Послуги цій доцільній помилці супроводжуватимуться відмовою від деяких способів."
    },
},
{
    en: {
        name: "Nike Metcon 2",
        price: "131 $",
        color: "red",
        img: "https://image.ibb.co/hrDPQF/2.jpg",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt aperiam dolores veritatis ad eligendi harum, voluptate assumenda voluptatum fugiat! Officiis ad hic expedita error dolores consectetur repudiandae aliquid modi deserunt."
    },
    ua: {
        name: "Nike Metcon 2",
        price: "2400 грн",
        color: "Червоний",
        img: "https://image.ibb.co/hrDPQF/2.jpg",
        description: "Замовник сам, замовник зможе домагатися адіпизації компанії. Я залишу відкритим біль істини, щоб вибрати їх, щоб забрати задоволення з насолод! Послуги цій доцільній помилці супроводжуватимуться відмовою від деяких способів."
    },
},
{
    en: {
        name: "Nike Metcon 2",
        price: "133 $",
        color: "red",
        img: "https://image.ibb.co/kwdDKa/3.jpg",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt aperiam dolores veritatis ad eligendi harum, voluptate assumenda voluptatum fugiat! Officiis ad hic expedita error dolores consectetur repudiandae aliquid modi deserunt."
    },
    ua: {
        name: "Nike Metcon 2",
        price: "2030 грн",
        color: "Червоний",
        img: "https://image.ibb.co/kwdDKa/3.jpg",
        description: "Замовник сам, замовник зможе домагатися адіпизації компанії. Я залишу відкритим біль істини, щоб вибрати їх, щоб забрати задоволення з насолод! Послуги цій доцільній помилці супроводжуватимуться відмовою від деяких способів."
    },
},
{
    en: {
        name: "Nike Metcon 2",
        price: "135 $",
        color: "red",
        img: "https://image.ibb.co/eWnUsv/4.jpg",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt aperiam dolores veritatis ad eligendi harum, voluptate assumenda voluptatum fugiat! Officiis ad hic expedita error dolores consectetur repudiandae aliquid modi deserunt."
    },
    ua: {
        name: "Nike Metcon 2",
        price: "2000 грн",
        color: "Червоний",
        img: "https://image.ibb.co/eWnUsv/4.jpg",
        description: "Замовник сам, замовник зможе домагатися адіпизації компанії. Я залишу відкритим біль істини, щоб вибрати їх, щоб забрати задоволення з насолод! Послуги цій доцільній помилці супроводжуватимуться відмовою від деяких способів."
    },
},
{
    en: {
        name: "Nike Metcon 2",
        price: "130 $",
        color: "red",
        img: "https://image.ibb.co/ncULza/1.jpg",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt aperiam dolores veritatis ad eligendi harum, voluptate assumenda voluptatum fugiat! Officiis ad hic expedita error dolores consectetur repudiandae aliquid modi deserunt."
    },
    ua: {
        name: "Nike Metcon 2",
        price: "2000 грн",
        color: "Червоний",
        img: "https://image.ibb.co/ncULza/1.jpg",
        description: "Замовник сам, замовник зможе домагатися адіпизації компанії. Я залишу відкритим біль істини, щоб вибрати їх, щоб забрати задоволення з насолод! Послуги цій доцільній помилці супроводжуватимуться відмовою від деяких способів."
    },
},
];
```

It is recommended to create several additional folders for convenient operation. For example `components` to store hotel components, `providers` to store your providers and contexts, `constants` to store necessary data for the application

## File Structure

```tree
├── src
├── components
│   ├── Header.jsx
│   ├── Footer.jsx
│   ├── ProductCard.jsx  
    ├── ProductCard.jsx
├── constants
    ├── languages.js
├── providers
    ├── LanguageProvider.jsx
|-- App.jsx
|-- index.jsx
```

### Useful links

- [useContext](https://react.dev/reference/react/useContext)
- [useState](https://react.dev/reference/react/useState)

/label level::elementary
/label react:component
