const github = new Github;
const ui = new UI;
//Fined input
const username = document.getElementById('search-user');

//Add eventlistener on button press

username.addEventListener('keyup', (e)=>{
   const val =  e.target.value;
   if(val !== ''){
    github.getUsers(val)
        .then(data=>{
            if(data.profile.message === 'Not Found'){
                //show alert
                ui.showAlert('User not found', 'alert alert-danger')
            } else{
                //show profile
                ui.showProfiles(data.profile);
                ui.showRepos(data.repos);
            }
        })
   } else{
       //clear ptofile
       ui.clearProfile();
       ui.clearRepos();
       
   }
})