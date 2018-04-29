import { 
    Get, 
    Controller,
    Param }                     from '@nestjs/common';

import { UsersService }         from './users.service';

@Controller('api/users')
export class UsersController {

  constructor(
    private readonly _usersService: UsersService
  ) { }

  @Get(':user/info')
  async getUserAllInfo( @Param('user') user: string): Promise<any> {

    return this._usersService.getUserInfo( user);
  }

  @Get(':user/info/email')
  async getUserEmail( @Param('user') user: string): Promise<string> {

    return this._usersService.getUserEmail( user);
  }

  @Get(':user/repos')
  async getUserRepos( @Param('user') user: string): Promise<any> {

    return this._usersService.getUserRepos( user);
  }

  @Get(':user/repos/:repo')
  async getUserRepo( @Param('user') user: string, @Param('repo') repo: string): Promise<any> {

    return this._usersService.getUserRepo( user, repo);
  }

  @Get(':user/repos/:repo/lang')
  async getUserRepoLang( @Param('user') user: string, @Param('repo') repo: string): Promise<any> {

    return this._usersService.getUserRepoLang( user, repo);
  }

  @Get(':user/langs')
  async getUserLang( @Param('user') user: string): Promise<any> {

    return this._usersService.getUserLangs( user);
  }

  @Get(':user/langs/stats')
  async getUserLangStats( @Param('user') user: string): Promise<any> {

    return this._usersService.getUserLangsStats( user);
  }

  @Get(':user/langs/stats/bytes')
  async getUserLangsBytesStats( @Param('user') user: string): Promise<any> {

    return this._usersService.getUserLangsBytesStats( user);
  }
}
