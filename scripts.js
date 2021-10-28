/**
 * Skæri, blað, steinn.
 * Spilað gegnum console.
 */

/** Hámarks fjöldi best-of leikja, ætti að vera jákvæð heiltala stærri en 0 */
const MAX_BEST_OF = 10;

/** Global breyta sem heldur utan um heildar sigra */
let wins = 0;

/** Global breyta sem heldur utan um heildar töp */
let losses = 0;

/**Global breyta sem heldur utan um alla leiki spilaða */
let leikirSpiladir = 0;
/**
 * Athugar hvort gefin tala sé gild sem best-of gildi.
 * @param {number} bestOf Tala sem skal athuga
 * @return {boolean} true eða false
 */
function isValidBestOf(bestOf) {
  if (bestOf %2 === 1 && bestOf <= MAX_BEST_OF) return true;
  return false;
}
//console.assert(isValidBestOf(1) === true, '1 er valid best of');
//console.assert(isValidBestOf(2) === false, '2 er ekki er valid best of');
//console.assert(isValidBestOf(9) === true, '9 er valid best of');

function playAsText(play) {
  // TODO útfæra
  out = 'Óþekkt';
  switch (play) {
    case 1:
      console.log("Skæri");
      break;
  
    case 2:
      console.log("Blað");
      break;

    case 3: 
      console.log("Steinn");
      break;

    default:
      console.log("Óþekkt inntak");
      break;
  }
  console.log(out);
  return(out);
}
//console.assert(playAsText('1') === 'Skæri', '1 táknar skæri');
//console.assert(playAsText('3') === 'Steinn', '3 táknar steinn');
//console.assert(playAsText('2') === 'Blað', '2 táknar blað');
//console.assert(playAsText('foo') === 'Óþekkt', 'Annað er óþekkt');

/**
 * Athugar hvort spilari eða tölva vinnur.
 * @param {number} player Það sem spilari spilaði
 * @param {number} computer Það sem tölva spilaði
 * @returns -1 ef tölva vann, 0 ef jafntefli, 1 ef spilari vann
 */
function checkGame(player, computer) {
  let out = 0;


  if(player==="1" && computer === "2") return 1;
  if(player==="2" && computer === "3") return 1;
  if(player==="3" && computer === "1") return 1;
  if(player===computer)return 0;
  else return -1;

 }

// console.assert(checkGame('2', '3') === 1, 'Blað vinnur stein');
// console.assert(checkGame('1', '2') === 1, 'Skæri vinnur blað');
// console.assert(checkGame('3', '1') === 1, 'Steinn vinnur skæri');
// console.assert(checkGame('1', '1') === 0, 'Skæri og skæri eru jafntefli');
// console.assert(checkGame('1', '3') === -1, 'Skæri tapar fyrir stein');

/**
 * Spilar einn leik.
 * @return {boolean} -1 ef tölva vann, 0 ef jafntefli, 1 ef spilari vann
 */
function round() {
  const player = prompt('Veldu Skæri, blað eða stein');
  const computer = Math.floor(Math.random() * 3 + 1).toString();
      let leikur = (checkGame(player, computer));
      if (leikur === 1){
        alert('Þú vannst!');
        wins++;
      }
      if (leikur === -1){
        alert('Þú tapaðir!');
        losses++;
      }
      if (leikur === 0){
        alert('Jafnt!')
      }
      leikirSpiladir++;

      return leikur;



  // TODO útfæra
  // 1. Spyrja um hvað spilað, ef cancel, hætta
  // 2. Ef ógilt, tölva vinnur
  // 3. Velja gildi fyrir tölvu með `Math.floor(Math.random() * 3) + 1)` sem skilar heiltölu á [1, 3]
  // 4. Nota `checkGame()` til að finna hver vann
  // 5. Birta hver vann
  // 6. Skila hver vann
}
// Hér getum við ekki skrifað test þar sem fallið mun biðja notanda um inntak!

/**
 * Spilar leik og bætir útkomu (sigur eða tap) við í viðeigandi global breytu.
 */
function play() {
  const bestOf = prompt('Hversu marga leiki vilt þú spila?');
    if(bestOf===null){
      return false;
    }
    if (isValidBestOf(bestOf)===false){
      const vitlaust = alert('Sláðu inn oddatölu sem er minni en 10');
    return false;
    }
    while ((wins && losses)<(leikirSpiladir/2)){
      round();
    }
    for(let i = 0; i < bestOf; i++){
      const test = round();
    }
    

  // TODO útfæra
  // 1. Spyrja um fjölda leikja
  // 2. Staðfesta að fjöldi leikja sé gilt gildi
  // 3. Keyra fjölda leikja og spila umferð þar til sigurvegari er krýndur
  // 4. Birta hvort spilari eða tölva vann
}
// Hér getum við ekki skrifað test þar sem fallið mun biðja notanda um inntak!

/**
 * Birtir stöðu spilara.
 */

function games() {
  let formúlaW = (100*wins)/leikirSpiladir;
  let formúlaL = (100*losses)/leikirSpiladir
  alert (leikirSpiladir + ' Leikir spilaðir ' + formúlaW.toFixed(2) + '%' +' sigurhlutfall');
  alert (leikirSpiladir + ' Leikir spilaðir ' + formúlaL.toFixed(2) + '%' +' taphlutfall');
  
  // TODO útfæra
}
// Hér getum við ekki skrifað test þar sem fallið les úr global state
