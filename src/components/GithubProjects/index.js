import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

function FetchProjects() {
  let done = false;
  const http = new XMLHttpRequest();
  let simplifiedRepos = [];
  const repoUrl = 'https://api.github.com/users/hatrickek/repos';
  http.open("GET", repoUrl);
  http.send();
  http.onreadystatechange = (e) => {
    if (http.readyState == 4 && !done) {
      done = true;
      if (http.responseText != null && http.responseText != '') {
        let data = JSON.parse(http.responseText);
        data.forEach(repo => {
          simplifiedRepos.push({
            name: repo.name,
            description: repo.description,
            url: repo.html_url
          })
          
        });
        return simplifiedRepos.forEach((name, description, url)=> {
          <p></p> 
        });
      }
    }
  }
}

export default function GithubProjects() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {/* <FetchProjects /> */}
        </div>
      </div>
    </section>
  );
} 
