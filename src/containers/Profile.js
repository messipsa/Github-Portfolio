import React , {Component} from 'react';

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
        return (
            <div>
                  
            </div>
        );
    }
}

export default Profile;
