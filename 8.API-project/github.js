class Github {
    constructor (){
        this.client_id = '3ab3ae3b2a9b93ea6687';
        this.client_secret = 'f7da8d76bad272047db738322cd8863276524e4a';
        this.repos_count = 5;
        this.repos_sort = 'created: asc';

    }
    // Get Users from GitHub
    async getUsers(user){
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id${this.client_id}&client_secret${this.client_secret}`);
        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&client_id=${this.repos_sort}&client_id${this.client_id}&client_secret${this.client_secret}`)
        const profile = await profileResponse.json();
        const repos = await repoResponse.json();
        return{
            profile: profile,
            repos: repos
        }
    }
}