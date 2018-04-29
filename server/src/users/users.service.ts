import { Component }        from '@nestjs/common';
import axios                from 'axios'

@Component()
export class UsersService {

  private readonly _githubApiUsersUrl: string = 'https://api.github.com/users';
  private readonly _githubApiReposUrl: string = 'https://api.github.com/repos';

  private readonly _config = {
    headers: {
        'Authorization': 'token 0658db9e035a78815dd36e39f7a6e0dbfa8c087d',
    }
  }

  constructor() {}

  async getUserInfo( user: string): Promise<any> {

    return await this._getUserInfo( user)
  }

  async getUserEmail( user: string): Promise<string> {

    const email: string = (await this._getUserInfo( user)).email
    return email ? email : 'private email :('
  }

  async getUserRepos( user: string): Promise<any> {

    return await this._getUserRepos( user)
  }

  async getUserRepo( user: string, repo: string): Promise<any> {

    return await this._getUserRepo( user, repo)
  }

  async getUserRepoLang( user: string, repo: string): Promise<any> {

    return (await this._getUserRepo( user, repo)).language
  }

  async getUserLangs( user: string): Promise<any> {

    return (await this._getUserRepos( user))
              .map(repo => repo.language)
              .filter((lang, pos, self) => self.indexOf( lang) == pos && lang !== null)
  }

  async getUserLangsStats( user: string): Promise<any> {

    const userlangs: string[] = (await this._getUserRepos( user)).map(repo => repo.language)
    let langsStats = {}

    for(let lang of userlangs) {

      if( lang === null)
        continue

      if( !langsStats.hasOwnProperty(lang))
        langsStats[lang] = 1
      else
        langsStats[lang]++
    }

    return langsStats
  }

  async getUserLangsBytesStats( user: string): Promise<any> {

    const userlangs: string[] = (await this._getUserRepos( user)).map(repo => repo.language)
    const userRepos: string[] = await this._getUserReposName( user)
    let langsBytes = {}

    for(const repo of userRepos) {

      const repoLangsStats = await this._getUserRepoLangs( user, repo)

      for(const lang in repoLangsStats) {

        if( userlangs.indexOf(lang) == -1)
          continue

        if( !langsBytes.hasOwnProperty(lang))
          langsBytes[lang] = repoLangsStats[lang]
        else
          langsBytes[lang] += repoLangsStats[lang]
      }
    }

    return langsBytes
  }



  private async _getUserInfo( user: string): Promise<any> {

    return (await axios.get(`${this._githubApiUsersUrl}/${user}`, this._config)).data
  }

  private async _getUserRepos( user: string): Promise<any> {

    return (await axios.get(`${this._githubApiUsersUrl}/${user}/repos`, this._config)).data
  }

  private async _getUserRepo( user: string, repo: string): Promise<any> {

    return (await axios.get(`${this._githubApiReposUrl}/${user}/${repo}`, this._config)).data
  }

  private async _getUserRepoLangs( user: string, repo: string): Promise<any> {

    return (await axios.get(`${this._githubApiReposUrl}/${user}/${repo}/languages`, this._config)).data
  }

  private async _getUserReposName( user: string): Promise<string[]> {

    return (await this._getUserRepos( user)).map(repo => repo.name)
  }

}