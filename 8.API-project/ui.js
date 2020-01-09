class UI {
    constructor(){
        this.profile = document.getElementById('profile');
        this.repos = document.getElementById('repos');
    }
    showProfiles (user){
        this.profile.innerHTML = `
        <div class="card card-body mb-3">
            <div class="row">
                <div class="col-md-3">
                    <img class="img-fluid mb-2" src=${user.avatar_url}>
                    <a href ="${user.html_url}" class="btn btn-primary btn-block mb-2">View Profile</a>
                </div>
                <div class="col-md-9">
                    <span class="badge badge-primary">Publick Repose: ${user.public_repos}"</span>
                    <span class="badge badge-secondary">Publick Gists: ${user.public_gists}"</span>
                    <span class="badge badge-success">Followers: ${user.followers}"</span>
                    <span class="badge badge-info">Following: ${user.following}"</span>
                    <br><br>

                    <ul class="list-group">
                        <li class="list-group-item"> Company: 
                            ${
                                (() => {
                                    if(user.company == null) {
                                        return `user don't have a company`;

                                    } else {
                                        return user.company;
                                    }
                                })()
                            }
                            </li>
                        <li class="list-group-item"> Website/Blog: ${user.blog}</li>
                        <li class="list-group-item"> Location: ${user.location}</li>
                        <li class="list-group-item"> member Since: ${user.create_at}</li>
                    </ul>
                </div>
            </div>
        </div>
        <h3 class="page-heading mb-3">Latest Repos</h3>
        `;
    }


    showRepos(repos){
        let output ='';
        repos.forEach(repo => {
            output += `
            <div class="card card-body mb-2">
            <div class="row">
                <div class="col-md-6">
                    <a href ="${repo.html_url}" class="" target="_blank">${repo.name}</a>
                </div>
                <div class="col-md-6">
                    <span class="badge badge-primary">Publick Repose: ${repo.stargazers_count}"</span>
                    <span class="badge badge-secondary">Publick Gists: ${repo.watchers_count}"</span>
                    <span class="badge badge-success">Followers: ${repo.forms_count}"</span>
                </div>
            </div>
        </div>
            
            `
        });
        //outpur repos
        this.repos.innerHTML = output;

    }
    showAlert(text,classes){

        //remove alert 
        this.removeAlert();
        //create div
        const div = document.createElement('div');
        //add classname
        div.className = classes;

        //add text
        div.appendChild(document.createTextNode(text));
        //get parent
        const container = document.querySelector('.searchContainer');

        //get search box
        const search = document.querySelector('.search');
        //insert alert
        container.insertBefore(div,search);

        //remove alert after timeout
        setTimeout(() => {
            this.removeAlert();
        }, 3000);

    }

    removeAlert(){
        const alert = document.querySelector('.alert');
        if(alert) {
            alert.remove();
        }
    }
    clearProfile(){
        this.profile.innerHTML = ''
    }
    clearRepos (){
        this.repos.innerHTML = ''
    }
}