$("#logout-btn").click(async function(){
  var form = document.createElement("form");

  form.setAttribute("method", "post");
  form.setAttribute("action", "/auth/logout");

  document.body.appendChild(form);

  form.submit();
  localStorage.clear();
  alert("log out!");
});
