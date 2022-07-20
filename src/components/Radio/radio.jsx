export const getRadioMessage = (messageType) => {
    const Radiodata = [`"box,box,box"`, `"full pace now"`, `"DRS available"`, `"You got this!"`, `"Couple more laps on the softs"`];
    let randomQuote = Radiodata[Math.floor(Math.random()*Radiodata.length)];

    const positiveData = [`"Good pass Lewis !"`, `"Well done Max !"`, `"Nice one Russell !"`, `"Yes Boys, let\'s go !"`];
    let randomPositive = positiveData[Math.floor(Math.random()*positiveData.length)];
    
    const negativeData = [`"I think I\'m crying !"`, `"Theres somthings loose between my legs"`, `"NOOOOOOOOO !!!"`, `"Ouch !"`, `"My car is full of **** !"`];
    let randomNegative = negativeData[Math.floor(Math.random()*negativeData.length)];

    const finishData = [`"You looks like a champion"`, `"Good race !"`, `"You deserved it !!!"`];
    let randomFinish = finishData[Math.floor(Math.random()*finishData.length)];

    let radioMessage = ``;
    if (messageType !== undefined && messageType !== null) {
        if (messageType === `positive`) {
            radioMessage = randomPositive;
        } else if (messageType === `negative`) {
            radioMessage = randomNegative;
        } else if (messageType === `finish`) {
            radioMessage = randomFinish;
        }
    } else {
        radioMessage = randomQuote;
    }
    return radioMessage;
};