# driverbot-abbedvvar

### Hemsidan
Hemsidan jag byggt går ut på att en användare som ska använda min robot kan gå in på vilken webläsare och kunna styra roboten via internet. På hemsidan finns två sliders där den ena styr hastighet framåt och bakåt och den andra för att svänga. Hastighetsslidern är anpassad så att den accelererar snabbare men att den sedan är mer kännslig i exakt hastighet ju snabbare det går. Sedan finns även en bild på en haj som styr en låt på roboten som är titellåten till filmen Hajen. Genom att klicka på hajen startar låten och trycker man igen så stoppas den. Om man trycker på titeln till hemsidan nollställs alla sliders och bilen stannar. Även finns en infoknapp som om man trycker på visar information om hemsidan och om man använder Mozilla Firefox för mobilen så kan man styra via lutningen på telefonen. Väl i firefox kan man stänga av och på gyrostyrning via en av/på knapp. Alla värden som tas ut ifrån hemsidan skickas till min MQTT-broker jag har satt upp på (maqiatto.com)[https://www.maqiatto.com/]

### Roboten
#### Styrning
Roboten hämtar alla värden från samma broker och utför jobbet via en tt-motor för hastighet samt ett servo för svängning. Styrannorningen är byggd via en NodeMCU. Noden tar även emot signalerna för att sätta av och på musiken och skickar den vidare till musikspelaren.
#### Musikspelare
Musikspelaren tar emot signaler från styrkontrollern och spelar då musiken i en högalare ombyggd från en gammalt par hörlurar som är modifierade för att passa till att koppla in i en mikrokontroller. Mikrokontrollern som används för denna uppgift är en Arduino UNO. Anledningen att inte NodeMCU fungerar är då den inte kan hantera så många värden som krävs för att kunna spela upp musik.

#### MQTT-broker
Jag använder mig av en MQTT-broker som är hostad via (MaQiaTTo´s servrar)[https://www.maqiatto.com/configure]. Genom att endast följa simpla instruktioner på deras sida är det lätt att sätta upp en egen broker med egna specifika topics. Det en MQTT-broker gör är att den tar emot värden från hemsidan i det här fallet och om någon enhet är uppkopplad och prenumererar på en topic så hämtas informationen till enheten. MaQiaTTo har ingen loggning av värdena så de kommer inte att sparas och varje gång ett medelande skickas så skickas det en gång bara. För att kolla vilka värden skom är skickade kan man själv logga dem via deras egen (MQTT-client)[http://maqiatto.com/webclient/].

### Flowchart till systembeskrivningen
(Klicka här)[https://abbindgym-my.sharepoint.com/:i:/g/personal/edvin_vare_abbindustrigymnasium_se/ESZbjMG5CU9Bnzg3OZRi4DUBUhgvzpQpkYfzEHx2SG3BMQ?e=ba7HpM]

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
Under lovet Började jag med mitt lilla musikprjekt genom att skapa olika musikstycken i arduiono så att jag slutgiltligen kan sätta en högtalarsummer på min robot och styra musik från min hemsidda via mqtt. Jag har då en så länge skapat tre melodier vilket är: Jaws, Snuten i Hollywood och till sist super mario. Tanken med detta lilla sidoprojekt är att det ska tillhöra mina specialfunktioner. Jag har även fixat iordning en högtalare genom att ta en gammal hörlur och lödit ihop kablar så att den går att koppla in i min NodeMCU.

#### 20/4
Idag har jag börjat att integrera ett litet musikprojekt som jag byggt till en arduino uno till NodeMCU:n och det har gått sådär. Grejen är att Noden och Arduino Uno kompillerar koderna olika vilket gör att det blir en krock som gör att den bara spelar upp en enstaka ton istället för hela melodin som är meningen. Då har jag börjat titta på ur man kan göra om det så att det kan fungera bättre så att hela melodin spelas.

#### 21/4
Idag har jag fortsatt att försöka integrera musikspelaren. Men idag har jag fokuserat på att omstukturera min kod då de loopar jag byggt står och väntar på att saker ska ske men de är för långsamma att räkna ut värden att den blockerar flödet i koden som gör att den behöver starta om varje gång. Det har än så länge gått sådär men jag tror jag har kommit på hur jag ska lösa problemet.
