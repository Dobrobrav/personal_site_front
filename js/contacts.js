fetch('http://127.0.0.1:8000/personal_info/contact_details/1/')
    .then(response => response.json())
    .then(data => {
        document.getElementById("FIO").innerHTML = data.last_name + ' ' + data.first_name;
        document.getElementById("site_description").innerHTML = data.department_name;
        document.getElementById("country").innerHTML = data.country;
        document.getElementById("locality").innerHTML = data.locality;
        document.getElementById("street").innerHTML = "улица " + data.street_name + ", " + data.street_number;
        document.getElementById("postcode").innerHTML = data.postcode;
        document.getElementById("office_number").innerHTML = "Офис " + data.office_number;
        document.getElementById("link_to_office_photo").setAttribute('src', data.link_to_office_picture);
        document.getElementById("telephone_extension").innerHTML = "Внутренний телефон " + data.telephone_extension;
        document.getElementById("work_phone_number").innerHTML = "Рабочий: " + data.work_phone_number;
        document.getElementById("additional_phone_number").innerHTML = "Дополнительный : " + data.additional_phone_number;
        document.getElementById("link_to_photo").setAttribute('href', data.link_to_photo);
        document.getElementById("photo").setAttribute('src', data.link_to_photo);
        document.getElementById("telegram_name").innerHTML = "Telegram: " + data.telegram_name;
        document.getElementById("link_to_telegram").setAttribute('href', data.link_to_telegram);
        document.getElementById("link_to_telegram").innerHTML = data.link_to_telegram;
        document.getElementById("link_to_vk").setAttribute('href', data.link_to_vk);
        document.getElementById("link_to_vk").innerHTML = data.link_to_vk;
        document.getElementById("FIO_footer").innerHTML = data.last_name + ' ' + data.first_name;
    })

fetch('http://127.0.0.1:8000/personal_info/main_info/1/')
    .then(response => response.json())
    .then(data => {
        console.log(data) // check data in console
        document.getElementById("FIO").innerHTML = data.last_name + ' ' + data.first_name;
        document.getElementById("FIO_footer").innerHTML = data.last_name + ' ' + data.first_name;
        document.getElementById("site_description").innerHTML = data.department_name;
    })
