# driverbot-abbedvvar

### Hemsidan
Hemsidan jag byggt går ut på att en användare som ska använda min robot kan gå in på vilken webläsare och kunna styra roboten via internet. På hemsidan finns två sliders där den ena styr hastighet framåt och bakåt och den andra för att svänga. Hastighetsslidern är anpassad så att den accelererar snabbare men att den sedan är mer kännslig i exakt hastighet ju snabbare det går. Sedan finns även en bild på en haj som styr en låt på roboten som är titellåten till filmen Hajen. Genom att klicka på hajen startar låten och trycker man igen så stoppas den. Om man trycker på titeln till hemsidan nollställs alla sliders och bilen stannar. Även finns en infoknapp som om man trycker på visar information om hemsidan och om man använder Mozilla Firefox för mobilen så kan man styra via lutningen på telefonen. Väl i firefox kan man stänga av och på gyrostyrning via en av/på knapp. Alla värden som tas ut ifrån hemsidan skickas till min MQTT-broker jag har satt upp på [maqiatto.com](https://www.maqiatto.com/)

### Roboten
#### Styrning
Roboten hämtar alla värden från samma broker och utför jobbet via en tt-motor för hastighet samt ett servo för svängning. Styrannorningen är byggd via en NodeMCU. Noden tar även emot signalerna för att sätta av och på musiken och skickar den vidare till musikspelaren.
#### Musikspelare
Musikspelaren tar emot signaler från styrkontrollern och spelar då musiken i en högalare ombyggd från en gammalt par hörlurar som är modifierade för att passa till att koppla in i en mikrokontroller. Mikrokontrollern som används för denna uppgift är en Arduino UNO. Anledningen att inte NodeMCU fungerar är då den inte kan hantera så många värden som krävs för att kunna spela upp musik.

#### MQTT-broker
Jag använder mig av en MQTT-broker som är hostad via [MaQiaTTo´s servrar](https://www.maqiatto.com/configure). Genom att endast följa simpla instruktioner på deras sida är det lätt att sätta upp en egen broker med egna specifika topics. Det en MQTT-broker gör är att den tar emot värden från hemsidan i det här fallet och om någon enhet är uppkopplad och prenumererar på en topic så hämtas informationen till enheten. MaQiaTTo har ingen loggning av värdena så de kommer inte att sparas och varje gång ett medelande skickas så skickas det en gång bara. För att kolla vilka värden skom är skickade kan man själv logga dem via deras egen [MQTT-client](http://maqiatto.com/webclient/).

### Flowchart till systembeskrivningen
![hej!](https://abbindgym-my.sharepoint.com/:i:/g/personal/edvin_vare_abbindustrigymnasium_se/ESZbjMG5CU9Bnzg3OZRi4DUBUhgvzpQpkYfzEHx2SG3BMQ?e=ba7HpM)
