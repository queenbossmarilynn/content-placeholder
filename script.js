// Get everything you want to add the animation too: 
const header = document.getElementById('header');
const title = document.getElementById('title');
const excerpt = document.getElementById('excerpt');
const profile_img = document.getElementById('profile_img');
const name = document.getElementById('name');
const date = document.getElementById('date');

// function getData is not being called yet, so we're creating a setTimeout function to display the placeholder for a few seconds 
// The data you want to get and time (2500 = 2.5 seconds )
setTimeout(getData, 2500);

// Get the animated class 
const animated_bgs = document.querySelectorAll('.animated-bg');
const animated_bg_texts = document.querySelectorAll('.animated-bg-text');

// define the data we want to insert 
function getData() {
    header.innerHTML = '<img src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" alt=""/> ';
    title.innerHTML ='Lorem ipsum dolor sit amet';
    excerpt.innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, consectetur?';
    profile_img.innerHTML = '<img src="https://randomuser.me/api/portraits/women/45.jpg" alt=""/>';
    name.innerHTML = 'Jane Doe';
    date.innerHTML = 'Oct. 28, 2022';

    // Remove animated_bgs and animated_bg_texts 
    animated_bgs.forEach(bg => bg.classList.remove('animated-bg'));
    animated_bg_texts.forEach(bg => bg.classList.remove('animated-bg-text'));
}