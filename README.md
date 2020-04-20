# driverbot-abbedvvar

### Loggbok Projektet

#### Sedan innan
Sedan innan vi ordentligt började med projektet på lektioner hade jag redan byggt klart min robot samt programerat ESP:n så att den går att styra från en internet broker.
Jag har även gjort klart grunderna i python projektet så att jag har levererat allt som behövs för att klara uppgiften.
Jag kommer att fortsätta utveckla pythonprogramet ytterligare under lektionerna när jag känner för.

#### 23/3
Idag behövde jag åka till sjukhuset för att magnetröntga min hand då jag hade gjort illa den när vi var i romme med skol if. 
Jag har tittat på alla filmer som ligger bifogade i teamet.

#### 24/3 
Idag har jag försökt hela dagen att kunna publicera meddelanden från min hemsida till mina topics i mqtt, det har inte funkat bra utan jag får bara errormedelanden så kommer behöva hjälp med att fixa en bra publish metod som faktiskt fungerar. 
Har lagt in en ny funktion i val simulatorn som räknar ut antalet personer som inte röstade och antalet som får rösta kan man själv avgöra genom en input.

#### 27/3
Idag har jag fixat iordning så att jag kan via mqtt styra min robot via min egen hesida. Även börjat lägga in lite css-element så att min sida blir lite snyggare .

#### 31/4
Idag har jag byggt om hela min robot så att den nu är klar och så bra utifrån hur jag ville få den. Jag har även gjort slidern för speed bättre genom att känsligheten ökar desdo längre ut man drar den så att de värden då motorn snurrar nu är lättare att vara exakt på. Min hemsida ipplagd i en S3 bucket så att den finns tillgänglig och öppna i telefon och andra enheter. Det jag såg då var att jag behöver anpassa hemsidan efter just telefonen, så det har jag också gjort idag. Det gör jag genom att göra de olika objekten på hemsidan mer dynamiska.

#### Under lovet
Under lovet Började jag med mitt lilla musikprjekt genom att skapa olika musikstycken i arduiono så att jag slutgiltligen kan sätta en högtalarsummer på min robot och styra musik från min hemsidda via mqtt. Jag har då en så länge skapat tre melodier vilket är: Jaws, Snuten i Hollywood och till sist super mario. Tanken med denna lilla sidoprojekt är att det ska tillhöra mina specialfunktioner. Jag har även fixat iordning en högtalare genom att ta en gammal hörlur och lödit ihop kablar så att den går att koppla in i min NodeMCU.

#### 20/4
Idag har jag börjat att integrera ett litet musikprojekt som jag byggt till en arduino uno till NodeMCU:n och det har gått sådär. Grejen är att Noden och Arduino Uno kompillerar koderna olika vilket gör att det blir en krock som gör att den bara spelar upp en enstaka ton istället för hela melodin som är meningen. Då har jag börjat titta på ur man kan göra om det så att det kan fungera bättre så att hela melodin spelas.