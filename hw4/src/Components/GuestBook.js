import React, {useEffect, useState} from 'react';
import config from '../config'
import '../Css/GuestBook.css';
const firebase = require('firebase')

function GuestBook(){

    const [data, setData] = useState([])
    const [shouldRender, setShouldRender] = useState(true)

    useEffect(()=>{
        //It is necessary to check if firebase has already been initialized otherwise it will throw an exception if it tries to initialize again
        //You can put this code in your componentDidMount function, or in an Effect to make sure it is ran when the app loads.
        //Use the second argument to useEffect() to control how often it is ran  
        if (!firebase.apps.length) {
            firebase.initializeApp(config)
        } 

        let ref = firebase.database().ref('data')

        //retrieve its data
        ref.on('value', snapshot => {
            //this is your call back function
            //state will be a JSON object after this
            //set your apps state to contain this data however you like
            const state = snapshot.val()
            //since i use react 16, i set my state like this
            //i have previously declared a state variable like this: const [data, setData] = useState([]) so that I can make the below call
            setData(state)
        })
    }, [shouldRender]);

    function submitForm(){
        alert("Submit successfully!")
        var name = document.getElementById("name").value
        var description = document.getElementById("description").value
        var message = document.getElementById("message").value
        var visibility = document.getElementById("visibility").value
        var email = document.getElementById("email").value
        var time = new Date().toLocaleString()
        console.log(time)
        var jsonBody = {
            name: name,
            description: description,
            message: message,
            visibility: visibility,
            email: email,
            time: time
        };
        firebase.database().ref('data').push().set(jsonBody)
    };

    function getComments(){
        var comments = []
        for(let key in data){
            var name = data[key]["name"]
            var description = data[key]["description"]
            var message = data[key]["message"]
            var visibility = data[key]["visibility"]
            var time = data[key]["time"]
            if(visibility=="Y"){
                comments.push([time,name,description,message])
            }
        }  
        var commentsdiv = document.querySelector('.comments')
        console.log(commentsdiv)
        comments.forEach(element => {
            var node = document.createElement("div");
            element.map((info) => {
                var textnode = document.createElement("p")
                var text = document.createTextNode(info)
                textnode.appendChild(text)
                node.appendChild(textnode)
            })
            console.log(node)
            commentsdiv.appendChild(node)
        })
    };

    return (
        <div class="guestbookcontainer">
            <div class="form">
                <h2>Say hi to everyone!</h2>
                <form id="form" onSubmit={(e)=>{submitForm(); e.preventDefault();}}>
                    <label for="name">Hello, what's your name?</label><br/>
                    <input type="text" id="name" name="name" required></input><br/><br/>
                    <label for="description">(Optional) A short description about you.</label><br/>
                    <input type="text" id="description" name="description" ></input><br/><br/>
                    <label for="message">What do you like to say?</label><br/>
                    <input type="text" id="message" name="message" required></input><br/><br/>
                    <label for="visibility">Would you like to send it publicly? Y/N.</label><br/>
                    <input type="text" id="visibility" name="visibility" required></input><br/><br/>
                    <label for="email">(Optional) Please leave your email if you would like to.</label><br/>
                    <input type="text" id="email" name="email"></input><br/><br/>
                    <input type="submit"></input>
                </form>
            </div>
            <div class="comments">
                <h2>Comments</h2>
                {getComments()}
            </div>
        </div>
    )
}

export default GuestBook;