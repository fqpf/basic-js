const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(type = 'dir'){
    this.mode = type;
    this.alphabet = 'abcdefghijklmnopqrstuvwxyz';
    this.letterRegExp = /[a-z]/i;
    this.letterRegExpGlobal = /[a-z]/ig;
  }

  _getKeys(message, key) {
    const count = (message.match(this.letterRegExpGlobal) || []).length;

    let cypherKeys = [];
    for (let i = 0; i < count; i++){
      const keyPos = i < key.length ? i : i % key.length;
      cypherKeys.push(this.alphabet.indexOf(key[keyPos].toLowerCase()));
    }
    return cypherKeys;
  }

  encrypt(message, key) {
    if (message === undefined || key  === undefined){
      throw 'THROW';
    }
    const cypherKeys = this._getKeys(message, key);

    let cypheredMessage = '';
    for (let i = 0, keyIndex = 0; i < message.length; i++){
      if (this.letterRegExp.test(message[i])){
        let newIndex;
        newIndex = (this.alphabet.indexOf(message[i].toLowerCase()) + cypherKeys[keyIndex]) % 26;
        keyIndex++;
        cypheredMessage += this.alphabet[newIndex];
      } else {
        cypheredMessage += message[i];
      }

    }
    if (this.mode === 'dir') {
      return cypheredMessage.toUpperCase();
    }
    return cypheredMessage.toUpperCase().split('').reverse().join('');
  }

  decrypt(message, key) {
    if (message === undefined || key  === undefined){
      throw 'THROW';
    }
    const cypherKeys = this._getKeys(message, key);

    let originMessage = '';
    for (let i = 0, keyIndex = 0; i < message.length; i++){
      if (this.letterRegExp.test(message[i])){
        let newIndex;
        if (cypherKeys[keyIndex] <= this.alphabet.indexOf(message[i].toLowerCase())){
          newIndex = (Math.abs(this.alphabet.indexOf(message[i].toLowerCase()) - cypherKeys[keyIndex]));
        } else {
          newIndex = 26 + this.alphabet.indexOf(message[i].toLowerCase()) - cypherKeys[keyIndex];
        }
        keyIndex++;
        originMessage += this.alphabet[newIndex];
      } else {
        originMessage += message[i];
      }

    }
    if (this.mode === 'dir') {
      return originMessage.toUpperCase();
    }
    return originMessage.toUpperCase().split('').reverse().join('');
  }
}

module.exports = VigenereCipheringMachine;
