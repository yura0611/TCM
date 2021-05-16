const url = 'https://jsonplaceholder.typicode.com/posts';
const posts = document.getElementsByClassName('posts')[0];
const get_Posts = async (url) => {
    const data = fetch(url).then(response => {
        if (!response.ok) {
            throw Error("ERROR");
        }
        return response.json();
    })
        .then(data => {
        const html = data.map(user => {
            return ` <div>
                <p> Id: ${user.id} </p>
                <p> Title: ${user.title} </p
                <p> Body:   ${user.body} </p> 
                </div> `;
        })
            .join("");
        document.querySelector('#posts').insertAdjacentHTML('afterbegin', html);
    })
        .catch(error => {
        console.log(error);
    });
};
get_Posts(url);
// let arr = [{
//     "color": "purple",
//     "type": "minivan",
//     "registration": new Date('2012-02-03'),
//     "capacity": '2'
//   },
//   {
//     "color": "red",
//     "type": "van",
//     "registration": new Date('2011-02-03'),
//     "capacity": '2'
//   }
// ]
// let obj =   {
//         "color": "blue",
//         "type": "van",
//         "registration": new Date('2011-02-03'),
//         "capacity": 2
//       }
function firstElement(arr, key, newKeyValue) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (i == key) {
            result.push(newKeyValue);
        }
        else {
            result.push(arr[i]);
        }
    }
    return result;
}
// console.log(firstElement(arr,1,obj));
