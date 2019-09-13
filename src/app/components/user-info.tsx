import React from 'react';
import { Component ,CSSProperties} from "react";
import {observer} from 'mobx-react'

interface IUserInfoAppState{
    userInfoProperty?:string
}
@observer
 export class UserInfoApp extends Component<any,IUserInfoAppState>{
    render(){
        return <div style={styleSheet.bodyStyle} >
        {
           Object.entries(this.props.store.userInfo).map((obj:any)=>{
            return this.renderItem(obj[0],obj[1])})
            }
            {this.renderList()}
           <input onChange={this.addUserInfo} ></input>
           <button onClick={this.props.store.clearUserInfo}>Clear User info</button>
        </div>

    }
    renderList=()=>{
return <ul>
    {Object.keys(this.props.store.userInfo).map(userInfokey=>
      <div key={userInfokey}>  
          <input type='radio' name='userkeys' value={userInfokey} onChange={this.setUserInfoKey}/>{userInfokey}
          </div>
        )}
</ul>
    }

    setUserInfoKey=(event:any)=>{
        this.setState({userInfoProperty:event.target.value})
    }
    addUserInfo=(event:any)=>{
        if(this.state){
            this.props.store.setUserInfo({...this.props.store.userInfo,[this.state.userInfoProperty!]:event.target.value})
        }
    }

    renderItem(key:string,value:string|number){
        return <div style={styleSheet.divStyle} key={key} >
            <label  style={styleSheet.labelStyle}>{key}: {value}</label>
            </div>
     }
}
const bodyStyle:CSSProperties={
    flex:1,
    alignContent:'center',
    justifyContent:'center',
    width:'100vw',
    margin:'auto 10px 10px'
}
const labelStyle:CSSProperties={

}
const divStyle:CSSProperties={

}
const styleSheet:IStyleSheet={
bodyStyle,
labelStyle,
divStyle
}

export interface IStyleSheet{
    [key : string]:CSSProperties
}
