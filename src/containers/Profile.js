import React , {Component} from 'react';
import Link from "../components/Link/Link";
import List from "../components/List/List";
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

        const items = [
           {
               id : 1,
            label : 'html_url ',
            value : 
                <Link url={data.html_url} title =" Github URL" />
           },
           {
               id : 2,
              label : 'repos_url',
              value : data.repos_url,
           },
           {
               id : 3,
            label : 'name',
            value : 'Messipsa Maxim',
         },
         {
             id : 4,
            label : 'company',
            value : data.company,
         },
         {
             id : 5,
            label : 'location',
            value : data.location,
         },
         {
            label : 'email',
            value : 'im_tamazouzt'+'@'+'esi.dz',
         },
         {
             id : 6,
            label : 'bio',
            value :'Messipsa a CS Student at Esi',
         },
        ]

       
        return (
            <div className="Profile-container">

                <img className="Profile_avatar" src={data.avatar_url} alt="avatar" />
                 <List items={items} />
            </div>
        );
    }
}

export default Profile;
