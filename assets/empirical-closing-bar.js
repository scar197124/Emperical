(function(){
  'use strict';

  var FOOTER_HTML =
    '<div class="empirical-closing-bar__identity">' +
      '<span class="empirical-closing-bar__mark" aria-hidden="true"></span>' +
      '<span class="empirical-closing-bar__label">Four Ways Good News Moves</span>' +
    '</div>' +
    '<div class="empirical-closing-bar__movement" aria-label="Seen, Shared, Supported, Multiplied">' +
      '<span>Seen</span><i aria-hidden="true"></i>' +
      '<span>Shared</span><i aria-hidden="true"></i>' +
      '<span>Supported</span><i aria-hidden="true"></i>' +
      '<span>Multiplied</span>' +
    '</div>' +
    '<div class="empirical-closing-bar__closing">' +
      '<span class="empirical-closing-bar__quote">Progress becomes visible when we look closely.</span>' +
      '<a class="empirical-closing-bar__about" href="about.html">About</a>' +
    '</div>';

  function mountEmpiricalClosingBar(){
    if(!document.body) return;

    var existing = document.querySelectorAll(
      'footer.empirical-closing-bar, footer.site-footer, footer.empirical-micro-footer'
    );
    for(var i = 0; i < existing.length; i++){
      if(existing[i] && existing[i].parentNode){
        existing[i].parentNode.removeChild(existing[i]);
      }
    }

    var footer = document.createElement('footer');
    footer.className = 'empirical-closing-bar';
    footer.setAttribute('aria-label', 'Empirical editorial closing');
    footer.innerHTML = FOOTER_HTML;

    /* Keep the fixed footer as a direct child of body. This prevents page
       shells with overflow/transform rules from clipping it on inner pages. */
    document.body.appendChild(footer);
  }

  if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', mountEmpiricalClosingBar);
  } else {
    mountEmpiricalClosingBar();
  }

  window.addEventListener('pageshow', mountEmpiricalClosingBar);
})();
