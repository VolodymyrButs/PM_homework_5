const HEXcolor = /(#([0-9a-f]{3}){1,2})/g;
const generalPhone = /([+]{0,1}[(]{0,1}[0-9]{3}[)]{0,1}[-\s/0-9]{7,22})/g;
const phoneFromFile = /(\+?\s?\(?(380)?\)?[-\s]?((067)|(068)|(096)|(097)|(098)|(050)|(066)|(095)|(099)|(063)|(073)|(093))[-\s]?[0-9]{3}[-\s]?[0-9]{2}[-\s]?[0-9]{2})/g;

//I prefer this format
const myPhoneFormat = /(\+?\s?(38)?[-\s]?\(?((067)|(068)|(096)|(097)|(098)|(050)|(066)|(095)|(099)|(063)|(073)|(093))\)?[-\s]?[0-9]{3}[-\s]?[0-9]{2}[-\s]?[0-9]{2})/g;
//+38(067)1234567

const findScriptTags = /<script.*?>(.*?\n)*?.*?<\/script>/g;
const findH1Tags = /<\/?h1.*?>/gi;

const body = document.body.outerHTML;
const head = document.head.outerHTML;

const changeH1toH2 = () => {
  document.body.outerHTML = body.replace(/(<\/?h)1/gi, "$12");
};

const findHex = () => {
  console.log(body.match(HEXcolor).concat(head.match(HEXcolor)));
};

const findPhones = () => {
  console.log(body.match(phoneFromFile));
};
