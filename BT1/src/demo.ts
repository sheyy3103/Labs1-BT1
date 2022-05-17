var person: { name: string, age: number, email: string, phone: string, gender: string, hobbies: string }[] = [
    {
        name: 'Ngo Tien Dat',
        age: 18,
        email: 'kelvinhuynhalves1102@gmail.com',
        phone: '0382624769' ,
        gender: 'male',
        hobbies:'play soccer, sleep, netflix and chill, ...'
    },
];
var _html = '';
for (let key in person) {
    _html += `
            <table border="1" cellspacing="0" cellpadding="10">
                <tbody>
                    <tr>
                        <td>Name</td>
                        <td>${person[key].name}</td>
                    </tr>
                    <tbody>
                    <tr>
                        <td>Age</td>
                        <td>${person[key].age}</td>
                    </tr>
                    <tr>
                        <td>Email</td>
                        <td>${person[key].email}</td>
                    </tr>
                    <tr>
                        <td>Phone number</td>
                        <td>${person[key].phone}</td>
                    </tr>
                    <tr>
                        <td>Gender</td>
                        <td>${person[key].gender}</td>
                    </tr>
                    <tr>
                        <td>Hobbies</td>
                        <td>${person[key].hobbies}</td>
                    </tr>
                </tbody>
            </table>
         `
}

var roots = document.getElementById('root');
roots.innerHTML = _html; 