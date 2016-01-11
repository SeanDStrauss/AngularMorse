'use strict';

/**
 * @ngdoc function
 * @name morseCodeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the morseCodeApp
 */
angular.module('morseCodeApp')
  .controller('MainCtrl', function () {
    var vm = this;

     vm.morse = {
        'a':'.-', 'b':'-...' , 'c':'-.-.' ,'d':'-..', 'e':'.',
        'f': '..-.', 'g':'--.', 'h': '....', 'i': '..', 'j': '.---',
        'k':'-.-', 'l':'.-..', 'm':'--', 'n':'-.', 'o':'---',
        'p': '.--.', 'q':'--.-', 'r': '.-.', 's':'...', 't':'-',
        'u':'..-', 'v':'...-', 'w':'.--', 'x':'-..-', 'y':'-.--',
        'z':'--..', '1':'.----', '2':'..---', '3':'...--',
        '4':'....-', '5':'.....', '6':'-....', '7':'--...',
        '8':'---..', '9':'----.', '0': '-----', '.':'.-.-.-',
        ',':'--..--', '?':'..--..', '/':'-..-.'
      };




    vm.morseEncoder = function (text) {
      text = text.toLowerCase();
      var translatedArray = [];
      for(var i = 0; i < text.length; i++) {
        for(var key in vm.morse) {
          if (key == text[i]) {
            var translated = vm.morse[key] + " | ";
            translatedArray.push(translated);
          }
        }
      }

      return translatedArray.join("");
    }


  });
