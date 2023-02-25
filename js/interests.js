fetch('http://127.0.0.1:8000/personal_info/interests/1/')
    .then(response => response.json())
    .then(data => {
        console.log(data)
        // document.getElementById("FIO_footer").innerHTML = data.last_name + ' ' + data.first_name;
        // document.getElementById("FIO").innerHTML = data.last_name + ' ' + data.first_name;
        // document.getElementById("site_description").innerHTML = data.department_name;

        for (let i = 0; i < data.length; i++) {
            const $el_p = document.createElement('p');
            const $el_p2 = document.createElement('p');
            const $el_a = document.createElement('a');
            const $el_img = document.createElement('img');

            $el_img.setAttribute('src', data[i]["link_to_picture"]);
            $el_img.setAttribute('width', 300);
            $el_img.setAttribute('height', 200);

            $el_a.setAttribute('href', data[i]["link_to_picture"]);
            $el_p2.innerHTML = data[i]["name"];

            $el_a.appendChild($el_img);
            $el_a.appendChild($el_p2);
            $el_p.appendChild($el_a);

            document.getElementById("content").appendChild($el_p);
        }
    })

fetch('http://127.0.0.1:8000/personal_info/main_info/1/')
    .then(response => response.json())
    .then(data => {
        document.getElementById("FIO").innerHTML = data.last_name + ' ' + data.first_name;
        document.getElementById("FIO_footer").innerHTML = data.last_name + ' ' + data.first_name;
        document.getElementById("site_description").innerHTML = data.department_name;
    })

// let json_interests = '{"first_name":"Михаил", "last_name":"Семёнов", "middle_name":"",  "department_name":"IT — ИНФОРМАЦИОННЫЕ ТЕХНОЛОГИИ", "interests":[["Информационные технологии", "img/interest1.jpg"], ["Аппаратное обеспечение", "img/interest2.jpg"], ["Программное обеспечение", "img/interest3.jpg"]]}';
//
// parseAndLoad(json_interests);
//
// function parseAndLoad(json) {
//   let data = JSON.parse(json);
//   document.getElementById("FIO").innerHTML = data.last_name + ' ' + data.first_name;
//   document.getElementById("site_description").innerHTML = data.department_name;
//
//   for (let i = 0; i < data.interests.length; i++) {
//     const $el_p = document.createElement('p');
//     const $el_p2 = document.createElement('p');
//     const $el_a = document.createElement('a');
//     const $el_img = document.createElement('img');
//
//     $el_img.setAttribute('src', data.interests[i][1]);
//     $el_img.setAttribute('width', 300);
//     $el_img.setAttribute('height', 200);
//
//     $el_a.setAttribute('href', data.interests[i][1]);
//     $el_p2.innerHTML = data.interests[i][0];
//
//     $el_a.appendChild($el_img);
//     $el_a.appendChild($el_p2);
//     $el_p.appendChild($el_a);
//
//     document.getElementById("content").appendChild($el_p);
//
//   }
//
// }
