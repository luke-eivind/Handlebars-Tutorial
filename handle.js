window.onload = function doHandle(){
  var myInfo = "<p>My name is {{name}} and I live at {{street}} in {{city}}, {{state}}</p>";

  var template = Handlebars.compile(myInfo);

  var data = template({name: 'Luke', street: '429 Chateau Grimaldi', city: 'Mandeville', state: 'LA'});

  document.getElementById("myData").innerHTML += data;

  console.log('hi');
}
