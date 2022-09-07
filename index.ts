import {GitHubApiService} from './GitHubApiService';
import { Repo } from './Repo';
import { User } from './User';
import * as _ from 'lodash';

let src = new GitHubApiService();

/*
src.getUserInfo('VinodG1088', (user : User) => {
    console.log(user);
} );

src.getRepos('koushikkothagal',(repos: Repo[]) =>{
    console.log(repos);
}) 
*/
 //git repo : VinodG1088
 let userName = process.argv[2];


src.getUserInfo(userName, (user : User) => {
    src.getRepos(userName,(repos: Repo[]) =>{

        let sortedRepos = _.sortBy(repos,[(repo: Repo) => repo.size]);
        let filterRepos = _.take(sortedRepos,5);
        user.repos = repos;
        console.log(user);
    })
} );

