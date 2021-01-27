const toggleButton = document.getElementsByClassName('callout-button')[0];
const summary = document.getElementsByClassName('callout-summary')[0]
const expanded = document.getElementsByClassName('callout-expanded')[0]

const HIDE_CLASS = 'ps-inactive';
let isExpanded = !expanded.classList.contains( HIDE_CLASS );

toggleButton.addEventListener('click', e => {
  e.preventDefault();
  isExpanded = !isExpanded;

  if( isExpanded ){
    toggleButton.innerHTML = "See Less"
    summary.classList.add( HIDE_CLASS )
    expanded.classList.remove( HIDE_CLASS )
  } else {
    toggleButton.innerHTML = "See More"
    summary.classList.remove( HIDE_CLASS )
    expanded.classList.add( HIDE_CLASS )
  }
})