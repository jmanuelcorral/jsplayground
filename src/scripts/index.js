import '../styles/index.scss';
import * as draggable from './draggable.js';
// Make the DIV element draggable:
draggable.bind(
    document.getElementById("mydiv"), 
    "draggable");

draggable.bind(
    document.getElementById("otherdiv"), 
    "draggable_red");

