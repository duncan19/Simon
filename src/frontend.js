import { Entry } from './backend.js';
import './styles.css';

$(document).ready(function(){
  $("#userForm").submit(function(e){
    e.preventDefault();
    var userEntry = $("#userEntry").val();
    var userJournal = new Entry(userEntry)
    userJournal.splitWords();
    userJournal.numberOfWords();
    userJournal.numberOfVowels();
    userJournal.numberOfConsonants();
    userJournal.teaser8();
    $("#teaser").text(userJournal.teaser);
    $("#entry").text(userJournal.body);
    $("#words").text(userJournal.wordsNumber);
    $("#vowels").text(userJournal.vowelsNumber);
    $("#consonants").text(userJournal.consonantsNumber);
    $(".results").show();

  })


});
