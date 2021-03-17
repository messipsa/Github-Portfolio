import React , {Component} from 'react';
import Link from "../components/Link/Link";
import "./Profile.css";

class Profile extends Component{

    constructor ()
    {
        super();
        this.state={
            loading:true,
            data : {},
        }
    }

    async componentDidMount()
    {
        const profile = await 
        fetch('https://api.github.com/users/messipsa');
        const ProfileJson = await profile.json();

        if (ProfileJson)
        {
            this.setState(
                {
                    data : ProfileJson,
                    loading:false,
                }
            )
        }
    }

    render()
    {
        const {data , loading} = this.state;
        if(loading)
        {
            return(
                <div>Loading.....</div>
            );
        }
        return (
            <div className="Profile-container">

                <img className="Profile_avatar" src={data.avatar_url} alt="avatar" />
                  <ul>
                      <li>
                      <strong>avatar_url </strong> : {data.avatar_url}
                      </li>
                      <li>
                      <strong> html_url </strong> : {data.html_url}
                      </li>
                      <li>
                      <strong>repos_url </strong> : {data.repos_url}
                      </li>
                      <li>
                      <strong>name </strong>: {data.name}
                      </li>
                      <li>
                         <strong>company </strong>  : {data.company}
                      </li>
                      <li>
                          <strong>location </strong> : {data.location}
                      </li>
                      <li>
                          <strong> email </strong>: {data.email}
                      </li>
                      <li>
                         < strong>bio </strong> : {data.bio}
                      </li>
                  </ul>
            </div>
        );
    }
}

export default Profile;
