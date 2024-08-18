function getTimeOfDay() {
    const currentHour = new Date().getHours();
  
    if (currentHour >= 5 && currentHour < 12) {
      return 'morning';
    } else if (currentHour >= 12 && currentHour < 18) {
      return 'afternoon';
    } else {
      return 'evening/night';
    }
  }
  
  function showGreeting() {
    const timeOfDay = getTimeOfDay();
    const greeting = `Let's start our ${timeOfDay} with a new quote`;
    document.getElementById('greeting').textContent = greeting;
  }
  showGreeting();
  
  function Quote() {
    const timeOfDay = getTimeOfDay();
  
    const morningQuotes = [
      "\"Always believe something wonderful is about to happen\" :----UNKNOWN",
      "\"Our greatest glory is not in never falling,but in rising every time we fall \" :---CONFUCIUS",
      "\"Today you are you. That is truer than true. There is no ane alive who is youer than you!\":--DR.SEUSS",
      "\" What you can do today can improve all your tomorrows\" :--RAJPH MARSTON",
      "\"Don't be afraid to fail;it's proof you'll soon be successful\" :--BARBARA CORCORAN",
      "\"Write it on your heart that every day is the best day in the year.\" :-- Ralph Waldo Emerson",
      "\"I grew up every morning and it's going to be great day. You never know it's going to be over, so I refuse to have a bad day.\":-- Paul Henderson",
      "\"Today\"'s goals: Coffee and kindness. Maybe two coffees, and then kindness.\" :-- Nanea Hoffman",
      "\"An early-morning walk is a blessing for the whole day.\" :-- Henry David Thoreau",
      "\"Every morning, I wake up saying, ' I'm still alive, a miracle.' And so I keep on pushing. \":-— Jim Carrey",
    ];
    const afternoonQuotes =
      [
        "\"Life is magic. The beauty of life is the next second. I wish every second will be beautiful in your life this afternoon. Good afternoon.\" :---  Anonymous",
        "\"Good, better, best. Never let it rest. 'Til your good is better, and your better is best. Good afternoon.\" :---  Saint Jerome",
        "\"The afternoon knows what the morning never suspected.\"\" :--- - Jonathan Grimwood",
        "\"Afternoons are hard. Mornings are pure evil from the pits of hell, which is why I don't do them anymore.\" :---  Rachel Caine",
        "\"Spend the afternoon. You can't take it with you.\" :--- - Annie Dillard",
        "\"If you can spend a perfectly useless afternoon in a perfectly useless manner, you have learned how to live.\" :---Lin Yutang",
        "\"Happiness is a hot bath on a Sunday afternoon.\" :--- - A.D. Posey",
        "\"Good afternoon guys, just remember that no matter where you are right now focused and a positive mindset can lead you to where you want to be in life.\" :--- Allan Thicke",
        "\"Leave me a smile just warm enough to spend a million golden afternoons in.\" :--- Sanober Khan",
        "\"It is the end of a fine bronze-tinted afternoon with purple shadows and febrile scraps of the cloud.\" :---  Daniel Arsand",
      ];
  
    const eveningNightQuotes = [
      "\"The night is the hardest time to be alive and 4am knows all my secrets.\"",
      "\"This is night, Diddykins. That's what we call it when it goes all dark like this. \"",
      "\"Melancholy were the sounds on a winter's night.\"",
      "\"The longest way must have its close - the gloomiest night will wear on to a morning.\"",
      "\"What may not bless my waking eyes.\"",
      "\"I often think that the night is more alive and more richly colored than the day.\"",
      "\"There was never a night or a problem that could defeat sunrise or hope.\"",
      "\"Music is moonlight in the gloomy night of life.\"",
      "\"Night is the mother of thoughts.\"",
      "\"Sometimes in my tent, late at night, I think I can hear the stars scraping against the sky.\"",
      "\"The dawn of beauty always comes after night.\"",
  
    ];
  
  
    let quotes;
  
    if (timeOfDay === 'morning') {
      quotes = morningQuotes;
    }
    else if (timeOfDay === 'afternoon') {
      quotes = afternoonQuotes;
    }
    else {
      quotes = eveningNightQuotes;
    }
  
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quote = quotes[randomIndex];
    document.getElementById('quote').innerHTML = quote;
  }
  
  function getRandomColor() {
    const colors = [
      "#FFC0CB",
      "#FFD700",
      "#7FFFD4",
      "#FFA500",
      "#9370DB",
      "#008080",
      "#FF6347",
      "#32CD32",
      "#800080",
      "#FF4500"
  
    ];
    const randomIndex1 = Math.floor(Math.random() * colors.length);
    return colors[randomIndex1];
  }
  function updatecolor() {
    const randomColor = getRandomColor();
    box.style.backgroundColor = randomColor;
    quote.style.color = randomColor;
    button.style.backgroundColor = randomColor;
  
  }
  button.addEventListener('click', updatecolor);
  button.addEventListener('click', Quote);
  updatecolor();
  