
fetch('http://127.0.0.1:8000/personal_info/certificates/1/')
  .then(response => response.json())
  .then(data => {

    document.getElementById("FIO_footer").innerHTML = data.last_name + ' ' + data.first_name;
    document.getElementById("FIO").innerHTML = data[3].last_name + ' ' + data[3].first_name;
    document.getElementById("site_description").innerHTML = data[3].department_name;

    for (let i = 0; i < data.length; i++) {
      const $el_a = document.createElement('a');
      const $el_img = document.createElement('img');

      $el_img.setAttribute('src', data[i].link_to_picture);
      $el_img.setAttribute('width', 300);
      $el_img.setAttribute('height', 200);

      $el_a.setAttribute('href', data[i].link_to_picture);

      $el_a.appendChild($el_img);

      document.getElementById("certificates").appendChild($el_a);
    }

})

fetch('http://127.0.0.1:8000/personal_info/main_info/1/')
    .then(response => response.json())
    .then(data => {
        document.getElementById("FIO").innerHTML = data.last_name + ' ' + data.first_name;
        document.getElementById("FIO_footer").innerHTML = data.last_name + ' ' + data.first_name;
        document.getElementById("site_description").innerHTML = data.department_name;
    })

// const json_others = '[{"link_to_picture":"img/certificate1.jpg"}, {"link_to_picture":"img/certificate2.jpg"}, {"link_to_picture":"img/certificate3.jpg"}, {"first_name":"Михаил", "last_name":"Семёнов", "middle_name":"",  "department_name":"IT — ИНФОРМАЦИОННЫЕ ТЕХНОЛОГИИ"}]';
//
// parseAndLoad(json_others);
//
// function parseAndLoad(json) {
//   const data = JSON.parse(json);
//   // document.getElementById("FIO").innerHTML = data.last_name + ' ' + data.first_name;
//   // document.getElementById("site_description").innerHTML = data.department_name;
//
//   document.getElementById("FIO").innerHTML = data[3].last_name + ' ' + data[3].first_name;
//   document.getElementById("site_description").innerHTML = data[3].department_name;
//
//   for (let i = 0; i < data.length; i++) {
//     const $el_a = document.createElement('a');
//     const $el_img = document.createElement('img');
//
//     $el_img.setAttribute('src', data[i].link_to_picture);
//     $el_img.setAttribute('width', 300);
//     $el_img.setAttribute('height', 200);
//
//     $el_a.setAttribute('href', data[i].link_to_picture);
//
//     $el_a.appendChild($el_img);
//
//     document.getElementById("certificates").appendChild($el_a);
//   }
// }
