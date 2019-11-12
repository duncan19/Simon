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
    console.log(userJournal);
  })


});
