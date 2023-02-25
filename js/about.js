fetch('http://127.0.0.1:8000/personal_info/...')
  .then(response => response.json())
  .then(data => {
    document.getElementById("FIO").innerHTML = data.last_name + ' ' + data.first_name;
    document.getElementById("FIO_footer").innerHTML = data.last_name + ' ' + data.first_name;
    document.getElementById("site_description").innerHTML = data.department_name;
})
