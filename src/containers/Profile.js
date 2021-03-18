import React , {Component} from 'react';
import Link from "../components/Link/Link";
import List from "../components/List/List";
import styled from 'styled-components';

const ProfileWrapper = styled.div`
width : 50px;
margin : 10px auto;
`;

const Avatar = styled.img`
width : 150px;
`;



class Profile extends Component{

    constructor ()
    {
        super();
        this.state={
            loading:true,
            repositories : [],
            data : {},
            error : '',
        }
    }

    async componentDidMount()
    {
       try{
        const profile = await 
        fetch('https://api.github.com/users/messipsa');
        const ProfileJson = await profile.json();

        if (ProfileJson)
        {
          
            const repositories = await fetch(ProfileJson.repos_url);
            const repositoriesJson = await repositories.json();
            this.setState(
                {
                    data : ProfileJson,
                    repositories : repositoriesJson,
                    loading:false,
                }
            )
        }
    }
    catch(error)
    {
        this.setState({
            loading : false,
            error : error.message,
        });
    }
}

    render()
    {
        const {data , loading , repositories ,error} = this.state;
        if(loading || error)
        {
            return(
                <div>{loading? 'Loading.....' : error }</div>
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

        
        const projects = repositories.map(repository=>(
            {
                label : repository.name,
                value : 
                <Link url={repository.html_url} title='Github URL' />
            }
        ))

       
        return (
           <ProfileWrapper>

                <Avatar src={data.avatar_url } alt='avatar' />
                 <List title='Profile' items={items} />
                 <List title='Projects' items={projects} />
                 
           </ProfileWrapper>
        );
    }
}

export default Profile;
