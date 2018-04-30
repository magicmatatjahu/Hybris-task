import { Injectable }     from '@angular/core';
import { HttpClient }     from '@angular/common/http';

import { Observable }     from 'rxjs';

@Injectable()
export class UserProfileService {

  private readonly _apiUrl = '/api'

  constructor(
    private readonly _http: HttpClient
  ) { }

  public getUserEmail( user: string): Promise<string> {

    return this._http.get<string>(`${this._apiUrl}/users/${user}/info/email`).toPromise()
  }

  public getUserInfo( user: string): Promise<any> {

    return this._http.get<any>(`${this._apiUrl}/users/${user}/info`).toPromise()
  }

  public getUserRepos( user: string): Promise<any[]> {
    
    return this._http.get<any[]>(`${this._apiUrl}/users/${user}/repos`).toPromise()
  }

  public getUserRepo( user: string, repo: string): Promise<any> {
    
    return this._http.get<any[]>(`${this._apiUrl}/users/${user}/repos/${repo}`).toPromise()
  }

  public getUserRepoLang( user: string, repo: string): Promise<any> {
    
    return this._http.get<any[]>(`${this._apiUrl}/users/${user}/repos/${repo}/lang`).toPromise()
  }

  public getUserLangs( user: string): Promise<any> {
    
    return this._http.get<any>(`${this._apiUrl}/users/${user}/langs`).toPromise()
  }

  public getUserLangsStats( user: string): Promise<any> {
    
    return this._http.get<any>(`${this._apiUrl}/users/${user}/langs/stats`).toPromise()
  }

  public getUserLangsBytes( user: string): Promise<any> {
    
    return this._http.get<any>(`${this._apiUrl}/users/${user}/langs/stats/bytes`).toPromise()
  }

}
