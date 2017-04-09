/*

  Description   : Profile reducer that manages user profile data
  					add,uppdate and delete user profile
*/

import data from './Data';


export default (state=data,payload)=>{

	switch(payload.type){

		case 'GET_PROF_DATA': return state;
				
				break;

		case 'ADD_CONTACT': return [...state,payload.profile];
				break;	

		case 'UPDATE_CONTACT':
						const id = payload.updateProfile.id
						const index = state.findIndex((profile) => {
						return profile.id===id;
						});
						
						var newobj=state.splice(index,1);
						state.splice(index, 0, payload.updateProfile);
						return state;

				break;

		case 'DELETE_CONTACT': 
			
						let delete_id=parseInt(payload.id,10);
						return state.filter(profile => profile.id !== delete_id);
				
				break;	
			
							
		default: return state;		
	}

};


