import { observable,action} from 'mobx'



export interface IUserInfoStore{
    userInfo:IUserInfo,
}
 interface IUserInfo{
    name:string,
    lastName:string,
    age:number,email:string,
    number:number,
}

export interface IUserInfoActions{
    setUserInfo:(userInfo:IUserInfo)=>void
}
export const defaultUserInfoState:IUserInfo={
    name:'<Name NOT SET>',
    lastName:'<Last name NOT SET>',
   email:'<Email NOT SET>',
   number:0,
    age:0
}

export class UserinfoStore implements IUserInfoStore,IUserInfoActions{
@observable userInfo:IUserInfo;

constructor(userData:IUserInfo){
    this.userInfo=userData
}

@action.bound
setUserInfo(userData:IUserInfo){
        this.userInfo=userData
    }

    @action.bound
clearUserInfo(userData:IUserInfo){
        this.userInfo=defaultUserInfoState
    }
}

export const userInfoStore=new UserinfoStore(defaultUserInfoState)
