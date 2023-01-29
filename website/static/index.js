// no clue what this does lmao

window.addEventListener("DOMContentLoaded", function () {
    // get the form elements defined in your form HTML above
  
    var form = document.getElementById("my-form");
    // var button = document.getElementById("my-form-button");
    var status = document.getElementById("status");
  
    // Success and Error functions for after the form is submitted
  
    function success() {
      form.reset();
      //status.classList.add("success");
      status.innerHTML = "Thanks!";
    }
  
    function error() {
      //status.classList.add("error");
      status.innerHTML = "Oops! There was a problem.";
    }
  
    // handle the form submission event
  
    form.addEventListener("submit", function (ev) {
      ev.preventDefault();
      var data = new FormData(form);
      ajax(form.method, form.action, data, success, error);
    });
  });
  
  // helper function for sending an AJAX request
  
  function ajax(method, url, data, success, error) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = function () {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        success(xhr.response, xhr.responseType);
      } else {
        error(xhr.status, xhr.response, xhr.responseType);
      }
    };
    xhr.send(data);
  }
  
  
  // most important shit
  var tabs = document.querySelectorAll('.tab');
      for(var i = 0; i < tabs.length; i++) {
          tabs[i].addEventListener('click', function(e) {
              e.preventDefault();
              var tabId = this.href.split('#')[1];
              var tabPanes = document.querySelectorAll('.tab-pane');
              for(var i = 0; i < tabPanes.length; i++) {
                  tabPanes[i].classList.remove('active');
              }
              var tabPane = document.getElementById(tabId);
              tabPane.classList.add('active');
  
              var tabs = document.querySelectorAll('.tab');
              for(var i = 0; i < tabs.length; i++) {
                  tabs[i].classList.remove('active');
              }
              this.classList.add('active');
          });
      }