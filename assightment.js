
var quote1 = {
    main:"“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”",
    auther:"― Bernard M. Baruch"
}
var quote2 = {
    main:"“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”",
    auther:"― Dr. Seuss"
}
var quote3 = {
    main:"“You only live once, but if you do it right, once is enough.”",
    auther:"― Mae West"
}

var dataQuote=[quote1,quote2,quote3]

function displaydata() {
    var randomIndex = Math.floor(Math.random() * dataQuote.length);
    var quote = dataQuote[randomIndex];
    var cartona = `
      <p>${quote.main}</p>
      <p>${quote.auther}</p>
    `;
    document.getElementById('quote').innerHTML = cartona;
  }

